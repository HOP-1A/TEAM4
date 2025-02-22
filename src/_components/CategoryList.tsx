export default function CategoryList() {
  const mockCategories = [
    {
      id: 1,
      name: "Эмэгтэй",
      total: 6656,
    },
    {
      id: 2,
      name: "Гоо сайхан",
      total: 3317,
    },
    {
      id: 3,
      name: "Гоёл чимэглэл",
      total: 900,
    },
    {
      id: 4,
      name: "Хүүхэд",
      total: 1000,
    },
    {
      id: 5,
      name: "Эрэгтэй",
      total: 3890,
    },
    {
      id: 6,
      name: "Утас",
      total: 1918,
    },
    {
      id: 7,
      name: "Технологи",
      total: 303,
    },
    {
      id: 8,
      name: "Тавилга",
      total: 550,
    },
    {
      id: 9,
      name: "Цахилгаан бараа",
      total: 875,
    },
    {
      id: 10,
      name: "Аялал",
      total: 268,
    },
  ];
  return (
    <div className="m-5 ">
      <div className="flex gap-4 items-center text-[26px] mb-5 font-[600] ">
        <div className=" ">Бараа, бүтээгдэхүүн</div>
        <div className="text-[rgb(136,138,153)]">27406</div>
      </div>
      <div className="border-t-[1px] border-inherit border-solid w-[300px] mb-4"></div>
      <div className="w-[300px] flex flex-col gap-2 text-[14px]">
        {mockCategories.map((category) => {
          return (
            <div
              key={category.id}
              className="flex justify-between hover:text-[#ff3467] hover:font-[600]"
            >
              <div className="flex gap-3">
                <img
                  className="w-[6px]"
                  src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTg3LjggMjY0LjUtMTQ2LjggMTQ4Yy00LjcgNC43LTEyLjMgNC43LTE3IDBsLTE5LjgtMTkuOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDExOC41LTExOS43LTExOC41LTExOS43Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsMTkuOC0xOS44YzQuNy00LjcgMTIuMy00LjcgMTcgMGwxNDYuOCAxNDhjNC43IDQuNyA0LjcgMTIuMyAwIDE3eiIvPjwvc3ZnPg=="
                />

                <div>{category.name}</div>
              </div>
              <div className="text-[rgb(187,190,205)]">{category.total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
