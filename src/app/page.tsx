import ProductPanelSmall from "@/_components/ProductPanelSmall";
import ProfileInputs from "./settings/_components/ProfileInputs";
import { NavBar } from "@/custom-components/NavBar";
import { Footer } from "./_components";
export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Footer/>
    </div>
  );
}
