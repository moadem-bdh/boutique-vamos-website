

export default function AboutCards({ bgUrl , heading , subHeading }: { bgUrl: string ,heading:string ,subHeading:string }) {
  return (
    <div className="relative items-start bg-black w-full lg:flex-1 max-w-90 lg:max-w-none min-w-70 lg:min-w-0 h-112 lg:h-90 xl:h-103 p-5 lg:p-4 xl:p-5 flex flex-col justify-end  gap-2 overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
      ></div>
  
      <h4 className="relative z-10 text-[32px] lg:text-[24px] xl:text-[32px] text-white font-rale font-bold">{heading}</h4>
      <p className="z-10 font-rale text-white text-xl lg:text-base xl:text-xl">{subHeading}</p>
    </div>
  );
}
