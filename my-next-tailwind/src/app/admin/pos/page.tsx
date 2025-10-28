"use client";

import React, { JSX, useState } from "react";

// TypeScript Interfaces
interface Product {
  id: number;
  name: string;
  storage: string;
  color: string;
  price: number;
  priceFormatted: string;
  stock: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Dummy Data
const productsData: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    storage: "256GB",
    color: "Titan Tự Nhiên",
    price: 29990000,
    priceFormatted: "29,990,000 đ",
    stock: 8,
    image: "bg-gradient-to-br from-purple-500 to-blue-500",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    storage: "128GB",
    color: "Titan Xanh",
    price: 25990000,
    priceFormatted: "25,990,000 đ",
    stock: 12,
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "iPhone 15 Plus",
    storage: "256GB",
    color: "Đen",
    price: 22990000,
    priceFormatted: "22,990,000 đ",
    stock: 15,
    image: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
  {
    id: 4,
    name: "iPhone 15",
    storage: "128GB",
    color: "Hồng",
    price: 19990000,
    priceFormatted: "19,990,000 đ",
    stock: 20,
    image: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
  {
    id: 5,
    name: "iPhone 14 Pro Max",
    storage: "512GB",
    color: "Tím",
    price: 27990000,
    priceFormatted: "27,990,000 đ",
    stock: 6,
    image: "bg-gradient-to-br from-purple-600 to-indigo-600",
  },
  {
    id: 6,
    name: "iPhone 14",
    storage: "256GB",
    color: "Xanh",
    price: 17990000,
    priceFormatted: "17,990,000 đ",
    stock: 10,
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
];

// Icon Components
const getIcon = (iconName: string): JSX.Element => {
  const icons: Record<string, JSX.Element> = {
    "shopping-cart": (
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    "shopping-cart-white": (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    "shopping-cart-small": (
      <svg
        className="w-5 h-5 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    "shopping-cart-large": (
      <svg
        className="w-24 h-24 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
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
    barcode: (
      <svg
        className="w-5 h-5 text-gray-700"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4h.01M7 4h.01M11 4h.01M15 4h.01M19 4h.01M21 4h.01M3 20h.01M7 20h.01M11 20h.01M15 20h.01M19 20h.01M21 20h.01"
        />
      </svg>
    ),
    user: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    smartphone: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  };
  return icons[iconName] || icons["shopping-cart"];
};

export default function POSPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerPhone, setCustomerPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);

    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.storage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.color.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-3 rounded-xl">
              {getIcon("shopping-cart-white")}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Bán tại quầy</h1>
              <p className="text-sm text-gray-500">Hệ thống Point of Sale</p>
            </div>
          </div>
          <button className="border border-gray-300 bg-white hover:bg-gray-50 rounded-lg px-4 py-2 flex items-center gap-2 transition">
            {getIcon("barcode")}
            <span className="font-medium text-gray-700">Quét IMEI</span>
          </button>
        </div>

        {/* Main Layout - 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Products List */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon("search")}
                </div>
                <input
                  type="text"
                  placeholder="Tìm sản phẩm theo tên, model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 cursor-pointer"
                >
                  <div className="flex gap-4">
                    {/* Product Image/Icon */}
                    <div
                      className={`w-16 h-16 rounded-lg ${product.image} flex items-center justify-center flex-shrink-0`}
                    >
                      {getIcon("smartphone")}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.storage} - {product.color}
                      </p>
                      <p className="text-lg font-bold text-gray-900 mt-2">
                        {product.priceFormatted}
                      </p>
                      <div className="mt-2">
                        <span
                          className={`${
                            product.stock < 10
                              ? "bg-red-900"
                              : "bg-gray-900"
                          } text-white rounded-full px-3 py-1 text-xs font-medium inline-block`}
                        >
                          Tồn kho: {product.stock}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cart Panel */}
          <div className="w-full lg:w-96 lg:order-last order-first mb-6 lg:mb-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {/* Cart Header */}
              <div className="flex items-center gap-2 mb-4">
                {getIcon("shopping-cart-small")}
                <h2 className="font-semibold text-gray-900">Giỏ hàng</h2>
              </div>

              {/* Customer Phone Input */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {getIcon("user")}
                  </div>
                  <input
                    type="text"
                    placeholder="Số điện thoại khách hàng"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Cart Items or Empty State */}
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                  {getIcon("shopping-cart-large")}
                  <p className="text-gray-400 mt-4">Chưa có sản phẩm</p>
                </div>
              ) : (
                <div>
                  {/* Cart Items List */}
                  <div className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div
                          className={`w-12 h-12 rounded ${item.product.image} flex items-center justify-center flex-shrink-0`}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.product.storage} - {item.product.color}
                          </p>
                          <p className="text-sm font-semibold text-gray-900 mt-1">
                            {item.product.priceFormatted}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            x{item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Summary */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tạm tính:</span>
                      <span className="font-medium text-gray-900">
                        {cart
                          .reduce(
                            (total, item) =>
                              total + item.product.price * item.quantity,
                            0
                          )
                          .toLocaleString("vi-VN")} đ
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Tổng cộng:</span>
                      <span className="text-blue-600">
                        {cart
                          .reduce(
                            (total, item) =>
                              total + item.product.price * item.quantity,
                            0
                          )
                          .toLocaleString("vi-VN")} đ
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
                    Thanh toán
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
