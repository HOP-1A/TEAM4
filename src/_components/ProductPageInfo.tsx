"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export const ProductPageInfo = () => {
  const [hasDelivery, setHasDelivery] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(false);
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const Product = {
    imageUrls: [
      "https://cdnp.cody.mn/spree/images/2802095/large/IMG_3576.jpeg?1736532832",
      "https://cdnp.cody.mn/spree/images/2856018/large/12.jpg?1739978215",
      "https://cdnp.cody.mn/spree/images/2856019/large/25.jpg?1739978216",
    ],
    condition: "Шинэ",
    hasDelivery: true,
    description:
      "Гүйдэг хаалгатай шкаф зарна Өнгө: Цагаан Угсрахад бэлэн иж бүрдэлээрээ таньд очих болно. Хүргэлт үнэгүй Орон нутгийн унаанд тавьж өгнө. Доторхи бүтэц нь зургаар орсон тул зургаа гүйлгэж үзээрэй ",
  };

  const handleSubmitImage = (imageUrl: string, index: number) => {
    setSelectedImage(index);
    setImage(imageUrl);
  };

  return (
    <div className="w-2/4 pl-16 flex flex-col gap-8 items-center">
      {image ? (
        <img src={image} className="w-[650px] h-[900px]" />
      ) : (
        <img src={Product.imageUrls[0]} className="w-[650px] h-[900px]" />
      )}
      <div className="w-[650px] flex gap-6">
        {Product.imageUrls.map((imageUrl, index) => {
          return (
            <div key={index}>
              <img
                src={imageUrl}
                className={`w-[100px] h-[80px] rounded-sm hover:border-2 cursor-pointer ${
                  selectedImage === index
                    ? "border-2 border-red-500"
                    : "border-none"
                }`}
                onClick={() => {
                  handleSubmitImage(imageUrl, index);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-8 w-[650px]">
        <h1 className="font-bold text-xl">Барааны онцлог</h1>
        <div className="w-[650px] flex gap-28">
          <div className="w-2/5 flex justify-between border-b-2 pb-2">
            <p className="text-md font-medium">Төлөв</p>
            {isNew ? <p>Шинэ</p> : <p>Хуучин</p>}
          </div>
          <div className="w-2/5 flex justify-between border-b-2 pb-2">
            <p>Хүргэлтийн нөхцөл</p>
            {hasDelivery ? <p>Хүргэлттэй</p> : <p>Хүргэлтгүй</p>}
          </div>
        </div>
      </div>
      <Card className="w-[650px]">
        <CardContent>
          <div className="pt-6 text-wrap font-sans font-medium text-neutral-600  ">
            {Product.description}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
