export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[440px] h-[460px] rounded-[20px] shadow-[0_0px_16px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center">
          <h2 className="font-[500] text-center text-[1.5em] p-4">
            Бүртгүүлэх
          </h2>
          <div className="flex flex-col gap-1 mb-6">
            <div className="text-[rgb(136,138,153)]">Эмайл</div>
            <input
              placeholder=""
              className="w-[390px] border-[1px] p-[10px] border-zinc-300 rounded-[8px] focus:ring-2 focus:ring-[#ff3467]"
            />
          </div>
          <div className="mb-5">
            <div className="flex justify-center w-[390px] mb-4 text-[rgb(136,138,153)] text-[12px]">
              Доорх нөхцөлүүдийг зөвшөөрч, бүртгүүлэх товч дээр дарснаар биднээс
              баталгаажуулах код хүлээн авна.
            </div>
            <div className="flex justify-center w-[390px] gap-5">
              <input type="checkbox" />
              <div className="text-[14px] ">
                <a className="text-[#ff3467]">Үйлчилгээний нөхцөл</a> ба{" "}
                <a className="text-[#ff3467]">нууцлалын бодлого</a>-ыг зөвшөөрч
                байна
              </div>
            </div>
          </div>
          <button className="h-[48px] w-[390px] rounded-[8px] bg-[rgb(238,239,242)] text-[rgb(187,190,205)] mb-6">
            Баталгаажуулах код авах
          </button>
          <div className="flex mb-4 items-center gap-5">
            <div className="border-t-[1px] border-inherit border-solid w-[155px]"></div>
            <div>эсвэл</div>
            <div className="border-t-[1px] border-inherit border-solid w-[155px]"></div>
          </div>
          <button className="h-[48px] w-[390px] rounded-[8px] bg-[rgb(238,239,242)] text-[rgba(0,0,0,.85)] mb-4">
            Нэвтрэх
          </button>
        </div>
      </div>
    </div>
  );
}
