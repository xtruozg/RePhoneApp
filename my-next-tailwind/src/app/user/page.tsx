"use client";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import { getProduct, getProductNames } from "../services/api";
import DetailProductPage from "./detailProduct/[id]/page";

export default function HomePage() {
  const [productNames, setProductNames] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  useEffect(() => {
    const fetchNames = async () => {
      try {
        const res = await getProductNames();
        if (res && Array.isArray(res.data)) {
          setProductNames(res.data);
        }
      } catch (err) {
        console.error("Lỗi khi tải tên sản phẩm:", err);
      }
    };
    fetchNames();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProduct({ deleted: false, name: selectedName || null });
        if (res && Array.isArray(res.data)) {
          setProducts(res.data);
        }
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      }
    };
    fetchProducts();
  }, [selectedName]);

  const handleSelectProduct = (item: any) => {
    setSelectedProduct(item);
  };
  return (
    <div className="w-[70%] m-auto flex flex-col gap-8">
      {selectedProduct ? (
        <DetailProductPage product={selectedProduct} detailProduct={selectedProduct.chiTietSanPhams?.[0]} />
      ) : (
        <>
          <Banner />
          <div className="flex gap-4 flex-wrap">
            <div
              onClick={() => setSelectedName("")}
              className={`px-4 py-2 bg-white shadow-sm rounded-xl border text-sm font-medium cursor-pointer transition-all duration-200
      ${selectedName === ""
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 text-gray-800 hover:bg-gray-100"
                }`}
            >
              Tất cả
            </div>
            {productNames.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedName(item)}
                className={`px-4 py-2 bg-white shadow-sm rounded-xl border text-sm font-medium cursor-pointer transition-all duration-200
        ${selectedName === item
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 text-gray-800 hover:bg-gray-100"
                  }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((item) => {
              const detail = item.chiTietSanPhams?.[0];
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectProduct(item)}
                  className="cursor-pointer"
                >
                  <ProductItem
                    id={item.id}
                    name={item.tenSanPham}
                    price={detail?.giaBan || 0}
                    oldPrice={detail?.giaBan ? detail.giaBan * 1.1 : undefined}
                    discount={10}
                    isNew={!item.deleted}
                    image={detail?.anhUrls?.[0] || ""}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
