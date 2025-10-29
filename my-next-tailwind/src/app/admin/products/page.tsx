"use client";

import { getProduct, getProductNames } from "@/app/services/api";
import React, { JSX, useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  color: string;
  model: string;
  storage: string;
  costPrice: string;
  sellPrice: string;
  stock: number;
  status: "active" | "out_of_stock";
}

interface ApiProduct {
  id: number;
  ma: string;
  tenSanPham: string;
  deleted: boolean;
  tenNhaSanXuat: string;
  chiTietSanPhams: ChiTietSanPham[];
}

interface ChiTietSanPham {
  id: number;
  soLuong: number | null;
  ma: string;
  giaBan: number;
  ghiChu: string;
  deleted: boolean;
  tenMauSac: string;
  dungLuongRam: string;
  dungLuongBoNhoTrong: string;
  imeis: string[];
  anhUrls: string[];
}

interface StatCard {
  label: string;
  value: number | string;
  bgColor: string;
  iconBg: string;
  icon: string;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const transformApiProducts = (apiProducts: ApiProduct[]): Product[] => {
  const products: Product[] = [];

  apiProducts.forEach((apiProduct) => {
    apiProduct.chiTietSanPhams.forEach((chiTiet) => {
      const stock = chiTiet.imeis?.length || 0;
      products.push({
        id: chiTiet.id,
        name: apiProduct.tenSanPham,
        color: chiTiet.tenMauSac,
        model: apiProduct.ma,
        storage: chiTiet.dungLuongBoNhoTrong,
        costPrice: "-",
        sellPrice: formatPrice(chiTiet.giaBan),
        stock: stock,
        status: stock > 0 ? "active" : "out_of_stock",
      });
    });
  });

  return products;
};
const getIcon = (iconName: string): JSX.Element => {
  const icons: Record<string, JSX.Element> = {
    box: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    check: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    x: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    dollar: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    package: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    plus: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
    search: (
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    filter: (
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
    ),
    phone: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient
            id="phoneGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          stroke="url(#phoneGradient)"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    edit: (
      <svg
        className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    delete: (
      <svg
        className="w-5 h-5 text-gray-400 hover:text-red-600 cursor-pointer transition"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    ),
  };
  return icons[iconName] || icons.box;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [productNames, setProductNames] = useState<string[]>([]);

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProduct({ deleted: false, name: null });
        if (res && Array.isArray(res.data)) {
          const transformedProducts = transformApiProducts(res.data);
          setProducts(transformedProducts);
          setFilteredProducts(transformedProducts);
        }
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Fetch product names for filter dropdown
  useEffect(() => {
    const fetchProductNames = async () => {
      try {
        const res = await getProductNames();
        if (res && Array.isArray(res.data)) {
          setProductNames(res.data);
        }
      } catch (err) {
        console.error("Lỗi khi tải danh sách tên sản phẩm:", err);
      }
    };
    fetchProductNames();
  }, []);

  // Handle search by text input
  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      // If no search term, apply filter by name only
      if (selectedName && selectedName !== "") {
        const filtered = products.filter(
          (product) => product.name === selectedName
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    } else {
      // If searching, clear name filter and search in all products
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, selectedName, products]);

  // Handle filter by product name from API
  const handleNameFilterChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.value;
    setSelectedName(name);
    setSearchTerm(""); // Clear search when filtering

    if (name === "") {
      // Show all products
      setLoading(true);
      try {
        const res = await getProduct({ deleted: false, name: null });
        if (res && Array.isArray(res.data)) {
          const transformedProducts = transformApiProducts(res.data);
          setProducts(transformedProducts);
          setFilteredProducts(transformedProducts);
        }
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    } else {
      // Filter by specific product name via API
      setLoading(true);
      try {
        const res = await getProduct({ deleted: false, name: name });
        if (res && Array.isArray(res.data)) {
          const transformedProducts = transformApiProducts(res.data);
          setProducts(transformedProducts);
          setFilteredProducts(transformedProducts);
        }
      } catch (err) {
        console.error("Lỗi khi lọc sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const totalProducts = filteredProducts.length;
  const activeProducts = filteredProducts.filter(
    (p) => p.status === "active"
  ).length;
  const outOfStockProducts = filteredProducts.filter(
    (p) => p.status === "out_of_stock"
  ).length;
  const totalValue = filteredProducts.reduce((sum, p) => {
    const price = parseFloat(p.sellPrice.replace(/[^\d]/g, ""));
    return sum + price * p.stock;
  }, 0);

  const statsData: StatCard[] = [
    {
      label: "Tổng sản phẩm",
      value: totalProducts,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      icon: "box",
    },
    {
      label: "Đang kinh doanh",
      value: activeProducts,
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
      icon: "check",
    },
    {
      label: "Hết hàng",
      value: outOfStockProducts,
      bgColor: "bg-red-50",
      iconBg: "bg-red-500",
      icon: "x",
    },
    {
      label: "Giá trị kho",
      value: formatPrice(totalValue),
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500",
      icon: "dollar",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
            {getIcon("package")}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Quản lý sản phẩm
            </h1>
            <p className="text-gray-600 mt-1">Quản lý kho iPhone và phụ kiện</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition shadow-sm">
          {getIcon("plus")}
          <span className="font-medium">Thêm sản phẩm</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-lg shadow-sm p-6`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.iconBg} p-3 rounded-lg text-white`}>
                {getIcon(stat.icon)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {getIcon("search")}
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm theo tên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedName}
              onChange={handleNameFilterChange}
              disabled={searchTerm !== ""}
              className="appearance-none pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Tất cả sản phẩm</option>
              {productNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {getIcon("filter")}
            </div>
          </div>

          {/* Status Filter - Disabled for now */}
          <div className="relative">
            <select
              disabled
              className="appearance-none pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-not-allowed bg-gray-100"
            >
              <option>Tất cả trạng thái</option>
              <option>Đang bán</option>
              <option>Hết hàng</option>
            </select>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {getIcon("filter")}
            </div>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs px-2 py-0.5 rounded-full text-gray-800 font-semibold">
              Soon
            </span>
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchTerm || selectedName) && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-600 font-medium">
              Đang lọc:
            </span>
            {searchTerm && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Tìm kiếm: &quot;{searchTerm}&quot;
                <button
                  onClick={() => setSearchTerm("")}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            )}
            {selectedName && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Sản phẩm: {selectedName}
                <button
                  onClick={() => {
                    const fakeEvent = {
                      target: { value: "" },
                    } as React.ChangeEvent<HTMLSelectElement>;
                    handleNameFilterChange(fakeEvent);
                  }}
                  className="hover:bg-purple-200 rounded-full p-0.5"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Sản phẩm
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Model
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Cấu hình
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                  Giá vốn
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                  Giá bán
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Tồn kho
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Trạng thái
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-600">
                        Đang tải sản phẩm...
                      </span>
                    </div>
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    Không có sản phẩm nào
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">{getIcon("phone")}</div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                        {product.model}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                        {product.storage}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right text-gray-800 font-medium">
                      {product.costPrice}
                    </td>

                    <td className="px-6 py-4 text-right text-gray-800 font-medium">
                      {product.sellPrice}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                          {product.stock}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {product.status === "active" ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            Đang bán
                          </span>
                        ) : (
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                            Hết hàng
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        {getIcon("edit")}
                        {getIcon("delete")}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <p className="text-center text-sm text-gray-600">
          Hiển thị {filteredProducts.length} sản phẩm
          {(searchTerm || selectedName) && (
            <span className="text-gray-400">
              {" "}
              (lọc từ {products.length} sản phẩm)
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
