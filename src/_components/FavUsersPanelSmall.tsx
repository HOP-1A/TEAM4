"use client";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";
export type userType = {
  imgUrl: string;
  lastName: string;
  firstName: string;
  createdAt: string;
};
export const FavUsersPanelSmall = ({
  imgUrl,
  lastName,
  firstName,
  createdAt,
}: userType) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleSubmitFollow = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  return (
    <Card className="w-[400px] h-[100px] flex p-2 gap-6">
      <div className="flex gap-6 w-4/5">
        <img src={imgUrl} className="w-2/6 border-2" />
        <div>
          <div className="flex gap-2 font-sans font-bold">
            <p>{lastName}</p>
            <p>{firstName}</p>
          </div>
          <div className="font-sans font-medium text-neutral-500 text-sm">
            {createdAt} -аас хойш
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="border bg-neutral-200 rounded-3xl p-4 w-9 h-9 flex justify-center items-center">
          {isClicked ? (
            <button
              onClick={() => {
                handleSubmitFollow();
              }}
            >
              <Heart fill="red" className="text-red-500" />
            </button>
          ) : (
            <button
              onClick={() => {
                handleSubmitFollow();
              }}
            >
              <Heart />
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};
