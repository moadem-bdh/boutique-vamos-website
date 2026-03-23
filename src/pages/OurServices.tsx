import Image from "next/image";

export default function OurServices() {
  return (
    <section className="bg-white py-20 h-206 w-full px-20 ">
      <div className="h-full w-full grid grid-cols-6 grid-rows-2 gap-6">
        <div className="col-span-4 row-span-1 bg-black rounded-4xl p-7 flex gap-5">
          <div className="relative h-full w-[55%] overflow-hidden rounded-3xl">
            <Image
              src="/assets/milanShirt.jpg"
              alt="Milan shirt"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between text-white leading-tight">
            <p className="font-rale text-[29px]">
              Shop official club and national team jerseys. Custom printing with
              your name & number available.
            </p>
            <a
              href="https://www.instagram.com/boutique.vamos"
              target="_blank"
              rel="noreferrer"
              className="w-max rounded-full border border-white px-5 py-2 font-rale text-[16px] flex items-center gap-2"
            >
              Visit Instagram and Order
              <Image
                src="/assets/arrowButton.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="rotate-90"
              />
            </a>
          </div>
        </div>

        <div className="col-span-2 row-span-1 bg-white  flex flex-col ">
          <h2 className="-mt-4 font-rale text-[64px] font-extrabold text-black">
            Our Service
          </h2>
          <p className="font-rale text-[20px] leading-tight text-black mb-4">
            Our store is the right place for every sports fan. We offer real
            jerseys, sports shoes, and tracksuits from trusted teams and brands.
            All our products are chosen for quality, comfort, and style, perfect
            for training, playing, or daily wear. We make shopping easy with
            safe payments, fast worldwide delivery.with
            safe payments, fast worldwide delivery.
          </p>
        </div>

        <div className="col-span-2 row-span-1 bg-black rounded-4xl p-7 text-white flex flex-col justify-between">
          <p className="font-rale text-[29px] leading-tight">
            Shop official club and national team jerseys. Custom printing with
            your name & number available.
          </p>
          <div className="flex items-end justify-between">
            <p className="font-rale text-[16px] font-semibold text-[#B1ABAB]">
              Shop official club and national team jerseys.
            </p>
            <Image
              src="/assets/logo.svg"
              alt="Vamos logo"
              width={42}
              height={42}
              className="h-16 w-auto"
            />
          </div>
        </div>

        <div className="col-span-4 row-span-1 bg-black rounded-4xl p-7 flex gap-5">
          <div className="relative h-full w-[55%] overflow-hidden rounded-3xl">
            <Image
              src="/assets/tnSneaker.jpg"
              alt="Sneaker"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col items-end justify-between text-white">
            <p className="font-rale text-[29px] leading-tight">
              Shop official club and national team jerseys. Custom printing with
              your name & number available.
            </p>
            <div className="h-14 w-14 rounded-full border-2 border-white flex items-center justify-center">
              <Image
                src="/assets/arrowButton.svg"
                alt="arrow"
                width={24}
                height={24}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
