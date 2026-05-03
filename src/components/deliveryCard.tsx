"use client";
import Image from "next/image";
import { deliveryData, wilayas, type Lang } from "@/data";
import { useState } from "react";

type Wilaya = (typeof wilayas)[number];

export default function DeliveryCard({
  language,
  wilaya,
}: {
  language: Lang;
  wilaya: Wilaya;
}) {
  const labels = deliveryData.cardLabels;
  const [showPopup, setShowPopup] = useState(false);

  const handleLocation = () => {
    if (!wilaya.maps) return;
    if (Array.isArray(wilaya.maps)) {
      setShowPopup(true);
    } else {
      window.open(wilaya.maps, "_blank", "noopener,noreferrer");
    }
  };

  const formattedId = String(wilaya.id).padStart(2, "0");

  const locationLabel = Array.isArray(wilaya.maps)
    ? wilaya.maps.map((m) => m.label.en).join(" / ")
    : labels.getLocation[language];

  return (
    <article className="rounded-[15px] bg-black flex flex-col h-full p-1 gap-2.5 pb-2.5">

      {/* White inner card — grows to fill height */}
      <div className="rounded-[11px] flex flex-col flex-1 bg-white px-4.5 py-5">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h3 className="font-rale text-[28px] leading-tight font-bold text-black">
            {formattedId}- {wilaya.name.en}
          </h3>
          <Image
            src="/assets/deliveryTruck.svg"
            alt="Delivery truck"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
          />
        </div>

        <div className="mb-5 h-0.5 rounded-full w-full bg-black" />

        <div className="mb-5 flex flex-row justify-between w-full gap-4">
          <div>
            <p className="font-rale font-medium text-[14px] leading-tight text-[#5D5D5D]">
              {labels.homeDelivery[language]}
            </p>
            <p className="font-rale text-[22px] leading-none text-black">
              {wilaya.price.home} DA
            </p>
          </div>

          <div className="text-right">
            <p className="font-rale font-medium text-[14px] leading-tight text-[#5D5D5D]">
              {labels.stopDesk[language]}
            </p>
            <p className="font-rale text-[22px] leading-none text-black">
              {wilaya.price.stopDesk > 0 ? `${wilaya.price.stopDesk} DA` : "—"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <Image
            src="/assets/Clock.svg"
            alt="Delivery time"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="font-rale text-[20px] font-semibold leading-none text-black">
            {labels.deliveryTime[language]}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-2 text-white">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/location.svg"
            alt="Location"
            width={18}
            height={18}
            className="h-5 w-5 shrink-0"
          />
          <p className="font-rale font-medium text-[15px] leading-tight">
            {locationLabel}
          </p>
        </div>

        <button
          type="button"
          className={`flex p-1 items-center justify-center rounded-[10px] bg-white shrink-0 ${
            !wilaya.maps ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          aria-label="Open location"
          onClick={handleLocation}
          disabled={!wilaya.maps}
        >
          <Image
            src="/assets/deliveryArrow.svg"
            alt="Open"
            width={24}
            height={28}
            className="h-7 w-6"
          />
        </button>
      </div>

      {/* Popup for dual-location wilayas */}
      {showPopup && Array.isArray(wilaya.maps) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl px-6 py-7 flex flex-col gap-4 min-w-67.5 max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-rale text-[20px] font-bold text-black text-center">
              {language === "fr" ? "Choisir un emplacement" : "Choose a location"}
            </h4>

            {wilaya.maps.map((loc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  window.open(loc.url, "_blank", "noopener,noreferrer");
                  setShowPopup(false);
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl text-white border-2 group bg-black hover:border-black hover:bg-white hover:text-black font-rale text-[17px] font-semibold transition-all duration-200 cursor-pointer"
              >
                <Image src="/assets/location.svg" alt="" width={18} height={18} className="h-5 w-5 transition-all duration-200 group-hover:invert  " />
                {loc.label.en}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="font-rale text-[14px] font-semibold text-[#505050] hover:text-black transition-colors cursor-pointer"
            >
              {language === "fr" ? "Annuler" : "Cancel"}
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
