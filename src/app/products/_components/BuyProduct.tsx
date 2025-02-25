"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Phone } from "lucide-react";

const App = () => {
  return <Phone />;
};

import { Heart } from "lucide-react";

const heart = () => {
  return <Heart />;
};

import { Truck } from "lucide-react";

const trucks = () => {
  return <Truck />;
};

export default function BuyProduct() {
  return (
    <div className="h-screen w-[900px] flex-col justify-center items-center ml-[25px]">
      <header className="flex gap-[220px] h-[50px] w-[220x] mt-[30px]">
        <div className="text-rose-500 h-[30px] w-[80px] bg-pink-100 flex justify-center items-center rounded-md">
          Шинэ
        </div>
        <div className="flex gap-1">
          <div>Зарын дугаар:</div>
          <div className="font-bold">1615369</div>
        </div>
      </header>
      <div className="flex-col mb-[30px]">
        <div className="text-3xl mb-[15px]">Cicaplast baume b5+</div>
        <div className="text-4xl">79,000₮</div>
        <div className="text-zinc-500">Боломжит үлдэгдэл: 10</div>
      </div>
      <div className="flex-col mb-[25px]">
        <div>Тоо ширхэг</div>
        <Carousel className="h-[50px] w-[50px] flex justify-center items-center ml-[50px]">
          <CarouselContent className="text-lg">
            <CarouselItem>1</CarouselItem>
            <CarouselItem>2</CarouselItem>
            <CarouselItem>3</CarouselItem>
            <CarouselItem>4</CarouselItem>
            <CarouselItem>5</CarouselItem>
            <CarouselItem>6</CarouselItem>
            <CarouselItem>7</CarouselItem>
            <CarouselItem>8</CarouselItem>
            <CarouselItem>9</CarouselItem>
            <CarouselItem>10</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-sm text-zinc-500">
          Худалдан авах тоо хэмжээгээ оруулна уу.
        </div>
      </div>
      <div>
        <div className="flex gap-[10px]">
          <button className="h-[50px] w-[250px] bg-indigo-500 border-solid text-white text-lg font-bold flex justify-center items-center rounded-lg">
            Сагслах
          </button>
          <button className="h-[50px] w-[250px] bg-rose-500 border-solid text-white text-lg font-semibold flex justify-center items-center rounded-lg">
            Худалдан авах
          </button>
        </div>
        <button className=" flex justify-center items-center gap-[13px] mt-[10px] h-[50px] w-[250px] bg-slate-200 border-solid text-gray-600 text-lg rounded-lg">
          <div>
            <Phone fill="green" className="text-green-500" />
          </div>
          <div>
            <div className="text-xs flex justify-center items-center">
              Утасны дугаар харах
            </div>
            <div className="font-semibold flex justify-center items-center">
              +976 7720XXXX
            </div>
          </div>
        </button>
      </div>
      <div className="text-xl font-semibold flex-col mt-[33px]">
        Борлуулагч
        <div className="h-[140px] w-[520px] border rounded-lg flex justify-start items-center gap-[280px] pl-[15px] mt-[15px]">
          <div className="flex-col gap-[10px]">
            <div className="text-lg">La Hot Se Mongolia</div>
            <div className="text-sm text-neutral-400">2024.9 сараас хойш</div>
          </div>
          <button className="h-[40px] w-[40px] bg-gray-300 flex justify-center items-center rounded-3xl">
            <Heart fill="gray" className="text-neutral-500" />
          </button>
        </div>
      </div>
      <div className="flex-col mt-[25px] text-xl">
        <div className="font-semibold">Хүргэлттэй</div>
        <div className="h-[70px] w-[520px] rounded-lg bg-gray-100 flex justify-start items-center gap-[10px] pl-[20px] mt-[10px] ">
          <div className="h-[40px] w-[40px] bg-white flex justify-center items-center rounded-3xl">
            <Truck />
          </div>
          <div className="text-gray-700">Хүргэлттэй</div>
        </div>
      </div>
    </div>
  );
}
