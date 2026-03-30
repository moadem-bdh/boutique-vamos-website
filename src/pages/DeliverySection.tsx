import Image from "next/image";
import DeliveryCard from "@/components/deliveryCard";

export default function DeliverySection() {
  return (
    <section className="w-full bg-white px-4 lg:px-20 lg:pt-10 pt-14  pb-20">
      <div className=" flex w-full flex-col items-center gap-18">
        <div className="flex flex-col items-center  gap-8">
          <h2 className="  font-rale text-5xl text-center lg:text-[64px] font-bold  text-black">
            Delivery
          </h2>

          <p className=" text-center  font-rale text-[16px] lg:text-[20px] -mt-4 leading-tight text-black">
            We are proud to offer fast and reliable delivery to all 58 wilayas
            across the country. No matter where you live, you can shop with
            confidence knowing your order will reach you quickly and safely.
          </p>

          <div className=" h-1 w-75/100 rounded-full bg-black" />
        </div>

        <div className="grid w-full gap-3 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
        </div>

        <button
          type="button"
          className="group flex items-center cursor-pointer gap-3 font-rale text-[30px] font-semibold text-black"
        >
          See All
          <span className="flex h-10 w-10  items-center justify-center rounded-full border-2 border-black">
            <Image
              src="/assets/arrowButton.svg"
              alt="See all"
              width={24}
              height={24}
              className="h-6 w-6 rotate-45 invert transition-transform duration-200 ease-out group-hover:rotate-90"
            />
          </span>
        </button>
      </div>
    </section>
  );
}
