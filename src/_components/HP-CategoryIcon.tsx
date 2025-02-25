"use client";
import { useState } from "react";

export default function HPCategoryIcon() {
  const [categoryValue, setCategoryValue] = useState<Array<string>>();
  const getData = async () => {
    const JSONdata = await fetch("");
    const res = await JSONdata.json();
    setCategoryValue(res);
  };
  return (
    <div>
      <div className="rounded-full h-[150px] w-[150px] bg-red-500">
        <div>{categoryValue}</div>
      </div>
    </div>
  );
}
