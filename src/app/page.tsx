import { NavBar } from "@/custom-components/NavBar";
import { Footer } from "./_components";
import { ShowNewProducts } from "./_components/ShowNewProducts";
import CategoryList from "@/_components/CategoryList";

export default function Home() {
  return (
    <div className="relative">
      <ShowNewProducts />
    </div>
  );
}
