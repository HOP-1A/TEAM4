"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [value, setValue] = useState("");
  const [hiddenPass, setHiddenPass] = useState(true);
  const [passTypeValue, setPassTypeValue] = useState("password");
  const [passInputValue, setPassInputValue] = useState<string>("");
  const [passInvalid, setPassInvalid] = useState("");
  const [passErr, setPassErr] = useState(false);
  const [PhoneInputValue, setPhoneInputValue] = useState<string>("");
  const [phoneInvalid, setPhoneInvalid] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const HandlePassValue = (e: { target: { value: string } }) => {
    setPassInputValue(e.target.value);
  };

  const HandelPassErr = () => {
    if (passInputValue === "") {
      setPassErr(true);
      setPassInvalid("write something");
      if (passInputValue.length < 4) {
        setPassErr(true);
        setPassInvalid("too short");
      }
    } else {
      if (passInputValue.length < 4) {
        setPassErr(true);
        setPassInvalid("too short");
      } else {
        setPassErr(false);
      }
    }
  };
  useEffect(() => {
    HandelPassErr();
  }, [passInputValue]);
  const HandlePhoneValue = (e: { target: { value: string } }) => {
    setPhoneInputValue(e.target.value);
  };
  const ContainsNumber = (str: string) => {
    return /\d/.test(str);
  };

  const HandlePhoneErr = () => {
    if (PhoneInputValue === "") {
      setPhoneErr(true);
      setPhoneInvalid("write something");
    } else {
      if (PhoneInputValue.length < 8) {
        setPhoneErr(true);
        setPhoneInvalid("it must have 8 numbers");
      } else {
        if (ContainsNumber(PhoneInputValue) === true) {
          setPhoneErr(false);
        } else {
          setPhoneErr(true);
          setPhoneInvalid("your phone number is invalid");
        }
      }
    }
  };
  useEffect(() => {
    HandlePhoneErr();
  }, [PhoneInputValue]);
  const HandleHiddenValue = (
    value: boolean | ((prevState: boolean) => boolean)
  ) => {
    setHiddenPass(value);
    if (hiddenPass === true) {
      setPassTypeValue("none");
    } else {
      setPassTypeValue("password");
    }
    console.log(hiddenPass);
  };
  const ClickedOnSubmit = () => {
    if (phoneErr && passErr === false) {
      alert("Amjilttai nevterlee");
    } else {
      alert("please fill the blankets correctly");
    }
  };
  return (
    <div>
      <Card className="w-[400px] flex flex-col items-center">
        <CardHeader>
          <CardTitle>Нэвтрэх</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex items-center flex-col">
          <div>
            <p className="text-xs text-slate-600">Утасны дугаар</p>
            <Input
              className="rounded-xl w-[300px] text-sm border-gray-500"
              placeholder="801235**"
              value={PhoneInputValue}
              onChange={HandlePhoneValue}
            />
            {phoneErr ? (
              <div className="text-red-500">{phoneInvalid}</div>
            ) : null}
            <p></p>
          </div>
          <div>
            <p className="text-xs text-slate-600">Нууц үг</p>
            <div className="w-[300px] flex border-gray-500 border rounded-xl items-centers gap-2">
              <Input
                className=" w-[260px] text-sm  border-0 border-r-2 border-gray-500"
                placeholder="****"
                value={passInputValue}
                onChange={HandlePassValue}
                type={passTypeValue}
              />
              <div className="w-[30px] h-[30px] p-1 ">
                {hiddenPass ? (
                  <div
                    onClick={() => HandleHiddenValue(false)}
                    className="w-[30px]"
                  >
                    <EyeOff />
                  </div>
                ) : (
                  <div
                    onClick={() => HandleHiddenValue(true)}
                    className="w-[30px]"
                  >
                    <Eye />
                  </div>
                )}
              </div>
            </div>
            {passErr ? <div className="text-red-500">{passInvalid}</div> : null}
            <p></p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            className="text-white bg-red-500 w-[300px] h-[40px] rounded-sm"
            onClick={ClickedOnSubmit}
          >
            Нэвтрэх
          </Button>
          <div className="text-xs text-blue-400 ">Бүртгүүлэх</div>
        </CardFooter>
      </Card>
    </div>
  );
}
