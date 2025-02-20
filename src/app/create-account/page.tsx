export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="box-content rounded-[20px] shadow-[0_0px_16px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center p-6">
          <h2 className="font-[500] text-center text-[1.5em] pb-5">
            Бүртгэл үүсгэх
          </h2>
          <div className="flex flex-col gap-1 mb-5 ">
            <div className="text-[rgb(136,138,153)]">Эмайл</div>
            <input
              placeholder="******@gmail.com"
              className="w-[390px] border-[1px] p-[10px] border-zinc-300 rounded-[8px] bg-[#f5f5f5] focus:outline-[#ff3467]"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <div className="text-[rgb(136,138,153)]">Утасны дугаар</div>
            <input className="w-[390px] border-[1px] p-[10px] border-zinc-300 rounded-[8px] focus:outline-[#ff3467]" />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <div className="text-[rgb(136,138,153)]">Эцэг/Эх-ийн нэр</div>
            <input className="w-[390px] border-[1px] p-[10px] border-zinc-300 rounded-[8px] focus:outline-[#ff3467]" />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <div className="text-[rgb(136,138,153)]">Нэр</div>
            <input className="w-[390px] border-[1px] p-[10px] border-zinc-300 rounded-[8px] focus:outline-[#ff3467]" />
          </div>
          <div className="flex flex-col gap-1 mb-6">
            <div className="text-[rgb(136,138,153)]">Нууц үг</div>
            <input
              type="password"
              placeholder="****"
              className="w-[390px] border-[1px] p-[10px] border-zinc-300 rounded-[8px] focus:outline-[#ff3467]"
            />
          </div>
          <button className="h-[48px] w-[390px] rounded-[8px] bg-[rgb(238,239,242)] text-[rgb(187,190,205)] ">
            Бүртгэл үүсгэх
          </button>
        </div>
      </div>
    </div>
  );
}
