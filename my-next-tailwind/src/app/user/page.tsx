"use client";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import { getProduct, getProductDetail, getProductNames } from "../services/api";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [productNames, setProductNames] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");
  const [productDetail, setProductDetail] = useState<any>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchNames = async () => {
      try {
        const res = await getProductNames();
        if (res && Array.isArray(res.data)) {
          setProductNames(res.data);
        } else {
          console.error("Response không hợp lệ:", res);
        }
      } catch (err) {
        console.error("Lỗi khi tải tên sản phẩm:", err);
      }
    };

    fetchNames();
  }, []);
  useEffect(() => {
    if (!selectedProductId) return;
    const fetchProductDetails = async () => {
      try {
        const res = await getProductDetail(selectedProductId);
        if (res && res.data) {
          setProductDetail(res.data);
        } else {
          console.error("Response không hợp lệ:", res);
        }
      } catch (err) {
        console.error("Lỗi khi tải chi tiết sản phẩm:", err);
      }
    };
    fetchProductDetails();
  }, [selectedProductId]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProduct({
          deleted: false,
          name: selectedName || null,
        });
        if (res && Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Response không hợp lệ:", res);
        }
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      }
    };
    fetchProducts();
  }, [selectedName]);
  const handleSelectProduct = (id: number) => {
    setSelectedProductId(id);
    router.push(`/user/detailProduct/${id}`);

  };
  return (
    <div className="w-[70%] m-auto flex flex-col gap-8">
      <Banner />
      <div className="flex gap-4 flex-wrap">
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
              onClick={() => handleSelectProduct(item.id)}
              className="cursor-pointer"
            >
              <ProductItem
                id={item.id}
                name={`${item.tenSanPham} ${detail?.dungLuongBoNhoTrong || ""}`}
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
    </div>
  );
}
