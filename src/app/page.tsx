import ProductPanelSmall from "@/_components/ProductPanelSmall";
import { NavBar } from "@/custom-components/NavBar";

export default function Home() {
  const products = {
    price: 120000,
    date: "2008-12-04 15:16",
    description: "Product description is very long",
    imgUrl:
      " https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  };
  return (
    <div>
      <NavBar />
      <div className="w-[150px] h-[300px]">
        <ProductPanelSmall
          price={products.price}
          date={products.date}
          description={products.description}
          imgUrl={products.imgUrl}
        />
      </div>
    </div>
  );
}
