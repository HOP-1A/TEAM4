import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export const ShowNewProducts = () => {
  const Products = [
    {
      name: "Хувцасний шүүгээ",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2863444/product/IMG_1867.jpeg",
        "https://cdnp.cody.mn/spree/images/2856018/large/12.jpg?1739978215",
        "https://cdnp.cody.mn/spree/images/2856019/large/25.jpg?1739978216",
      ],
      createdAt: "2025-2-22",
      price: 200000,
    },
    {
      name: "Jeans",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2860456/product/IMG_7269.jpeg",
      ],
      createdAt: "2025-2-19",
      price: 104300,
    },
    {
      name: "Хувцасний шүүгээ",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2863444/product/IMG_1867.jpeg",
        "https://cdnp.cody.mn/spree/images/2856018/large/12.jpg?1739978215",
        "https://cdnp.cody.mn/spree/images/2856019/large/25.jpg?1739978216",
      ],
      createdAt: "2025-2-22",
      price: 200000,
    },
    {
      name: "Jeans",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2860456/product/IMG_7269.jpeg",
      ],
      createdAt: "2025-2-19",
      price: 104300,
    },
    {
      name: "Хувцасний шүүгээ",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2863444/product/IMG_1867.jpeg",
        "https://cdnp.cody.mn/spree/images/2856018/large/12.jpg?1739978215",
        "https://cdnp.cody.mn/spree/images/2856019/large/25.jpg?1739978216",
      ],
      createdAt: "2025-2-22",
      price: 200000,
    },
    {
      name: "Jeans",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2860456/product/IMG_7269.jpeg",
      ],
      createdAt: "2025-2-19",
      price: 104300,
    },
    {
      name: "Хувцасний шүүгээ",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2863444/product/IMG_1867.jpeg",
        "https://cdnp.cody.mn/spree/images/2856018/large/12.jpg?1739978215",
        "https://cdnp.cody.mn/spree/images/2856019/large/25.jpg?1739978216",
      ],
      createdAt: "2025-2-22",
      price: 200000,
    },
    {
      name: "Jeans",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2860456/product/IMG_7269.jpeg",
      ],
      createdAt: "2025-2-19",
      price: 104300,
    },
    {
      name: "Хувцасний шүүгээ",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2863444/product/IMG_1867.jpeg",
        "https://cdnp.cody.mn/spree/images/2856018/large/12.jpg?1739978215",
        "https://cdnp.cody.mn/spree/images/2856019/large/25.jpg?1739978216",
      ],
      createdAt: "2025-2-22",
      price: 200000,
    },
    {
      name: "Jeans",
      imageUrls: [
        "https://cdnp.cody.mn/spree/images/2860456/product/IMG_7269.jpeg",
      ],
      createdAt: "2025-2-19",
      price: 104300,
    },
  ];
  const getRelativeTime = (createdAt: string | number | Date): string => {
    const date = new Date(createdAt);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(diffInMs / (1000 * 60));
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (seconds < 60) {
      return `${seconds} секундын өмнө`;
    } else if (minutes < 60) {
      return `${minutes} минутын өмнө`;
    } else if (hours < 24) {
      return `${hours} цагийн өмнө`;
    } else {
      return `${days} хоногийн өмнө`;
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-bold">Шинээр нэмэгдсэн бараа</div>
      <div className="flex gap-4 flex-wrap">
        {Products.map((product) => {
          return (
            <Card>
              <img src={product.imageUrls[0]} className="w-[250px] h-[250px]" />
              <div>
                <div className="flex justify-between items-center pr-4 pt-2">
                  <div className="text-neutral-400 font-bold pl-4">
                    {getRelativeTime(product.createdAt)}
                  </div>
                  <Heart />
                </div>
                <div className="text-lg font-medium font-sans pb-8 pl-4">
                  {product.name}
                </div>
                <div className="font-semibold text-xl pb-3 pl-4">
                  {product.price}MNT
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
