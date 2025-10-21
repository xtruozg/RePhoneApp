"use client";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import { getProduct, getProductNames, getProductDetail } from "../services/api";
import DetailProductPage from "./detailProduct/[id]/page";
import { useSearch } from "../contexts/SearchContext";

export default function HomePage() {
  const { searchTerm, setSearchTerm } = useSearch();
  const [productNames, setProductNames] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedName(categoryName);
    if (searchTerm) {
      setSearchTerm("");
    }
  };
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

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      if (selectedName !== "") {
        setSelectedName("");
      }

      const filtered = products.filter((product) =>
        product.tenSanPham?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleSelectProduct = async (item: any) => {
    try {
      setLoadingDetail(true);
     
      const res = await getProductDetail(item.id);

      if (res && res.data) {
        setSelectedProduct(res.data);
      } else {
        alert("Không thể lấy thông tin chi tiết sản phẩm");
      }
    } catch (err) {
      alert("Không thể tải thông tin sản phẩm. Vui lòng thử lại!");
    } finally {
      setLoadingDetail(false);
    }
  };
  return (
    <div className="w-[70%] m-auto flex flex-col gap-8">
      {loadingDetail ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải thông tin sản phẩm...</p>
          </div>
        </div>
      ) : selectedProduct ? (
        <div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại danh sách
          </button>
          <DetailProductPage product={selectedProduct} detailProduct={selectedProduct.chiTietSanPhams?.[0]} />
        </div>
      ) : (
        <>
          <Banner />
          {searchTerm && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 flex items-center justify-between">
              <p className="text-blue-700">
                Kết quả tìm kiếm cho: <span className="font-semibold">"{searchTerm}"</span>
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Xóa tìm kiếm
              </button>
            </div>
          )}
          <div className="flex gap-4 flex-wrap">
            <div
              onClick={() => handleCategoryClick("")}
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
                onClick={() => handleCategoryClick(item)}
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

          <div className="flex gap-6 flex-wrap">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => {
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
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  {searchTerm ? `Không tìm thấy sản phẩm nào với từ khóa "${searchTerm}"` : "Không có sản phẩm nào"}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
