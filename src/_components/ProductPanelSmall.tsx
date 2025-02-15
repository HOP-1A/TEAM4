"use client";
type ProductPanelSmallProps = {
  price: number;
  date: string;
  description: string;
  imgUrl: string;
};
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ProductPanelSmall({
  price,
  date,
  description,
  imgUrl,
}: ProductPanelSmallProps) {
  const [isHearted, setIsHearted] = useState<boolean>(false);
  return (
    <Card className="duration-200 ease-in hover:shadow-md hover:shadow-neutral-300 w-fill overflow-hidden">
      <div className="size-fill box-content">
        <img src={imgUrl} className="w-fit h-fit object-contain" />
      </div>
      <CardContent className="p-2 h-[40%]">
        <div className="flex justify-between">
          <div className="text-neutral-500 text-[12px]">{date}</div>{" "}
          <button onClick={() => setIsHearted(!isHearted)}>
            {isHearted ? (
              <Heart
                className="w-5 h-5 border-neutral-600 text-red-500"
                fill="red"
              />
            ) : (
              <Heart className="w-5 h-5 border-neutral-600" />
            )}
          </button>
        </div>
        <div className="flex-col">
          <div className="text-neutral-600 font-semibold text-[14px] h-[46px] overflow-hidden text-ellipsis break-words line-clamp-2">
            {description}
          </div>
          <div className="text-[16px] font-black">{price} ₮</div>
        </div>
      </CardContent>
    </Card>
  );
}
