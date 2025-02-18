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
