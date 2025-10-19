import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "iPhone 17 Pro 256GB",
      price: 34799000,
      oldPrice: 34999000,
      discount: 0,
      isNew: true,
      image: "/images/iphone17pro.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 30990000,
      oldPrice: 32990000,
      discount: 6,
      isNew: false,
      image: "/images/s24ultra.png",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 30990000,
      oldPrice: 32990000,
      discount: 6,
      isNew: false,
      image: "/images/s24ultra.png",
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      price: 30990000,
      oldPrice: 32990000,
      discount: 6,
      isNew: false,
      image: "/images/s24ultra.png",
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      price: 30990000,
      oldPrice: 32990000,
      discount: 6,
      isNew: false,
      image: "/images/s24ultra.png",
    },
    {
      id: 6,
      name: "Samsung Galaxy S24 Ultra",
      price: 30990000,
      oldPrice: 32990000,
      discount: 6,
      isNew: false,
      image: "/images/s24ultra.png",
    },
    {
      id: 7,
      name: "Samsung Galaxy S24 Ultra",
      price: 30990000,
      oldPrice: 32990000,
      discount: 6,
      isNew: false,
      image: "/images/s24ultra.png",
    },
    {
      id: 8,
      name: "Samsung Galaxy S24 Ultra",
      price: 30990000,
      oldPrice: 32990000,
      discount: 6,
      isNew: false,
      image: "/images/s24ultra.png",
    },
  ];
  return (
    <div className="w-[70%] m-auto flex flex-col gap-8">
      <Banner />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
