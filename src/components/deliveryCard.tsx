import Image from "next/image";

export default function DeliveryCard() {
  return (
    <article className=" rounded-[15px] bg-black flex flex-col  h-max p-1 gap-2.5 pb-2.5">

      <div className="rounded-[11px] flex flex-col bg-white px-4.5 py-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-rale text-[32px] leading-none font-bold text-black">
            01- Adrar
          </h3>
          <Image
            src="/assets/deliveryTruck.svg"
            alt="Delivery truck"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>

        <div className="mb-5 h-0.5 rounded-full w-full bg-black" />

        <div className="mb-5 flex flex-row justify-between w-full gap-4">
          <div>
            <p className="font-rale font-medium text-[14px] leading-tight text-[#5D5D5D]">
              Home Delivery
            </p>
            <p className="font-rale text-[22px] leading-none text-black">
              1200 DA
            </p>
          </div>

          <div className="text-right">
            <p className="font-rale font-medium text-[14px] leading-tight text-[#5D5D5D]">
              Stop Desk
            </p>
            <p className="font-rale text-[22px] leading-none text-black">
              900 DA
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/assets/Clock.svg"
            alt="Delivery time"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="font-rale text-[20px] font-semibold leading-none text-black">
            Delivered in 28 to 48 h
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-2  text-white">
        <div className="flex items-center gap-3">
         
            <Image
              src="/assets/location.svg"
              alt="Location"
              width={18}
              height={18}
              className="h-5 w-5"
            />
          <p className="font-rale font-medium text-[16px]] leading-none">
            Get location of the desk
          </p>
        </div>

        <button
          type="button"
          className="flex p-1 items-center justify-center rounded-[10px] bg-white"
          aria-label="Open location details"
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
    </article>
  );
}
