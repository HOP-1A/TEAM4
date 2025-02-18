<<<<<<< HEAD
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
type ProfileInputValuesProp = {
  name: string;
  surname: string;
  mail: string;
  phoneNumber: string;
};
export default function ProfileInputs({
  name,
  surname,
  mail,
  phoneNumber,
}: ProfileInputValuesProp) {
  const [nameValue, setNameValue] = useState(name);
  const [surnameValue, setSurnameValue] = useState(surname);
  const [mailValue, setMailValue] = useState(mail);
  const [phoneNumberValue, setPhoneNumberValue] = useState(phoneNumber);
  const SaveUserInfoChange = () => {
    console.log(
      nameValue +
        "||" +
        surnameValue +
        "||" +
        mailValue +
        "||" +
        phoneNumberValue
    );
  };
  const HandleNameValue = (e: { target: { value: string } }) => {
    setNameValue(e.target.value);
  };
  const HandleSurnameValue = (e: { target: { value: string } }) => {
    setSurnameValue(e.target.value);
  };
  const HandleMailValue = (e: { target: { value: string } }) => {
    setMailValue(e.target.value);
  };
  const HandlePhoneNumberValue = (e: { target: { value: string } }) => {
    setPhoneNumberValue(e.target.value);
  };
  return (
    <div>
      <div className="w-[500px] flex flex-wrap gap-5">
        <div>
          <p className="text-red-600 text-sm">* Нэр</p>
          <Input
            className="w-[200px]"
            value={nameValue}
            onChange={HandleNameValue}
          />
        </div>
        <div>
          <p className="text-red-600 text-sm">* Эцэг/Эх-ийн нэр</p>
          <Input
            className="w-[200px]"
            value={surnameValue}
            onChange={HandleSurnameValue}
          />
        </div>
        <div>
          <p className="text-red-600 text-sm">* Mail</p>
          <Input
            className="w-[200px]"
            value={mailValue}
            onChange={HandleMailValue}
          />
        </div>

        <div>
          <p className="text-red-600 text-sm">* Phone Number</p>
          <Input
            className="w-[200px]"
            value={phoneNumberValue}
            onChange={HandlePhoneNumberValue}
          />
        </div>
      </div>
      <Button
        className="bg-black text-white w-[100px]"
        onClick={SaveUserInfoChange}
      >
        Save
      </Button>
    </div>
  );
}
=======
import { Input } from "@/components/ui/input";
const ProfileInputs = () => {
  return (
    <div className="w-[500px] flex flex-wrap gap-5">
      <div>
        <p className="text-red-600 text-sm">* Нэр</p>
        <Input className="w-[200px]" />
      </div>
      <div>
        <p className="text-red-600 text-sm">* Эцэг/Эх-ийн нэр</p>
        <Input className="w-[200px]" />
      </div>
      <div>
        <p className="text-red-600 text-sm">* Mail</p>
        <Input className="w-[200px]" />
      </div>

      <div>
        <p className="text-red-600 text-sm">* Phone Number</p>
        <Input className="w-[200px]" />
      </div>
    </div>
  );
};
export default ProfileInputs;
>>>>>>> 752b607 (ProfileInputs)
