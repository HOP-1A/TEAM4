import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlignJustify,
  Facebook,
  Heart,
  Instagram,
  Phone,
  Search,
  ShoppingBasket,
  Twitter,
  User,
} from "lucide-react";

export const NavBar = () => {
  return (
    <div className="w-screen flex flex-col items-center gap-12">
      <div className="bg-red-500 w-screen h-[50px] flex justify-around items-center text-white">
        <div className="font-bold text-lg">Хүссэнээ зар, Хайснаа ол</div>
        <div className="flex gap-8">
          <div className="flex gap-2 border-r-2 pr-8">
            <Phone />
            <div>99999999</div>
          </div>
          <div className="flex gap-4">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center">
        <div
          className="flex w-2/4"
          style={{
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <img
            src="https://zary.mn/27a395c08037dc4652ee51434e509bb1.png"
            width={95}
            height={45}
          />
          <div
            className="flex h-10 rounded-md"
            style={{ border: "2px solid red" }}
          >
            <Select>
              <SelectTrigger
                className="w-[130px]"
                style={{
                  boxShadow: "none",
                  backgroundColor: "rgb(239, 243, 246)",
                }}
              >
                <SelectValue placeholder="Бүх ангилал" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Example1</SelectItem>
                <SelectItem value="dark">Example2</SelectItem>
                <SelectItem value="system">Example3</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Барааны нэр, зарын дугаар, түлхүүр үг,  утасны дугаараар хайлт хийх боломжтой."
              style={{
                width: "350px",
                backgroundColor: "white",
                border: "none",
                boxShadow: "none",
              }}
              className="text-xl font-sans font-bold "
            />
            <button
              style={{
                height: "36px",
                width: "60px",
                justifyContent: "center",
                alignItems: "center",
              }}
              className=" bg-red-600 flex"
            >
              <Search />
            </button>
          </div>
          <div className="flex items-center" style={{ gap: 12 }}>
            <div className="bg-neutral-100 rounded-3xl w-12 h-12 flex justify-center items-center">
              <Heart fill="red" className="text-red-500" />
            </div>
            <div className="bg-neutral-100 rounded-3xl w-12 h-12 flex justify-center items-center">
              <ShoppingBasket fill="red" className="text-red-500" />
            </div>
            <div className="bg-neutral-100 rounded-3xl w-12 h-12 flex justify-center items-center">
              <User fill="red" className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center border-t-2 border-b-2 border-neutral-200 pt-6 pb-6">
        <div className="flex justify-around w-3/4">
          <div className="flex gap-8">
            <div className="flex gap-2">
              <AlignJustify className="text-sm" />
              <div className="font-bold">Ангилал</div>
            </div>
            <div className="text-neutral-600">Бараа бүтээгдэхүүнүүд</div>
            <div className="text-neutral-600">Хэрэглэгчийн тусламж</div>
          </div>
          <div className="text-neutral-600">Шинэ бараа</div>
        </div>
      </div>
    </div>
  );
};
