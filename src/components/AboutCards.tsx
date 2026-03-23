"use client";

export default function AboutCards({ bgUrl , heading , subHeading }: { bgUrl: string ,heading:string ,subHeading:string }) {
  return (
    <div className="relative items-start bg-black flex-1 max-w-84  shrink min-w-70 h-103 p-5 flex flex-col justify-end  gap-2 overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
      ></div>
  
      <h4 className="relative z-10 text-[32px] text-white font-rale font-bold">{heading}</h4>
      <p className=" z-10 font-rale text-white text-xl">{subHeading}</p>
    </div>
  );
}
