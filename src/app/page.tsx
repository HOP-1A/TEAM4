<<<<<<< Updated upstream
import ProductPanelSmall from "@/_components/ProductPanelSmall";
import { NavBar } from "@/custom-components/NavBar";
=======
import { Footer } from "./_components";
>>>>>>> Stashed changes

export default function Home() {
  return (
<<<<<<< Updated upstream
    <div className="relative">
      <NavBar />
      <div className="w-[150px] h-[300px]">
        <ProductPanelSmall
          price={products.price}
          date={products.date}
          description={products.description}
          imgUrl={products.imgUrl}
        />
      </div>
=======
    <div className="w-[150px] h-[300px]">
      <Footer/>
>>>>>>> Stashed changes
    </div>
  );
}
