"use client";

import React, { JSX } from "react";

// TypeScript Interfaces
interface Customer {
  id: number;
  name: string;
  company?: string;
  email: string;
  phone: string;
  status: "VIP" | "Active" | "Inactive";
  favoriteProduct: string;
  totalOrders: number;
  totalRevenue: string;
  lastPurchase: string;
  avatar: string;
}

interface StatCard {
  label: string;
  value: number | string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
  icon: string;
}

// Dummy Data
const customersData: Customer[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    phone: "0912345678",
    status: "VIP",
    favoriteProduct: "iPhone 15 Pro Max",
    totalOrders: 8,
    totalRevenue: "245,000,000 đ",
    lastPurchase: "15 thg 10, 2025",
    avatar: "N",
  },
  {
    id: 2,
    name: "Trần Thị B",
    company: "Công ty TNHH ABC",
    email: "tranthib@email.com",
    phone: "0987654321",
    status: "Active",
    favoriteProduct: "iPhone 15",
    totalOrders: 3,
    totalRevenue: "59,000,000 đ",
    lastPurchase: "20 thg 9, 2025",
    avatar: "T",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@email.com",
    phone: "0909123456",
    status: "VIP",
    favoriteProduct: "iPhone 14 Pro Max",
    totalOrders: 12,
    totalRevenue: "380,000,000 đ",
    lastPurchase: "22 thg 10, 2025",
    avatar: "L",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@email.com",
    phone: "0938765432",
    status: "Active",
    favoriteProduct: "iPhone 15 Plus",
    totalOrders: 2,
    totalRevenue: "45,000,000 đ",
    lastPurchase: "12 thg 8, 2025",
    avatar: "P",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    company: "Tech Solutions JSC",
    email: "hoangvane@email.com",
    phone: "0918888888",
    status: "VIP",
    favoriteProduct: "iPhone 15 Pro",
    totalOrders: 15,
    totalRevenue: "425,000,000 đ",
    lastPurchase: "25 thg 10, 2025",
    avatar: "H",
  },
  {
    id: 6,
    name: "Vũ Thị F",
    email: "vuthif@email.com",
    phone: "0977777777",
    status: "Inactive",
    favoriteProduct: "iPhone 13",
    totalOrders: 1,
    totalRevenue: "18,000,000 đ",
    lastPurchase: "14 thg 2, 2024",
    avatar: "V",
  },
];

const statsData: StatCard[] = [
  {
    label: "Tổng khách hàng",
    value: 6,
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    icon: "users",
  },
  {
    label: "Đang hoạt động",
    value: 2,
    bgColor: "bg-green-50",
    iconBg: "bg-green-500",
    iconColor: "text-white",
    icon: "trending-up",
  },
  {
    label: "Khách VIP",
    value: 3,
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-500",
    iconColor: "text-white",
    icon: "crown",
  },
  {
    label: "Tổng doanh thu",
    value: "1,172,000,000 đ",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-500",
    iconColor: "text-white",
    icon: "chart",
  },
];

// Avatar colors mapping
const avatarColors: Record<string, string> = {
  N: "bg-blue-500",
  T: "bg-green-500",
  L: "bg-purple-500",
  P: "bg-pink-500",
  H: "bg-indigo-500",
  V: "bg-orange-500",
};

// Icon Components
const getIcon = (iconName: string): JSX.Element => {
  const icons: Record<string, JSX.Element> = {
    users: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    "trending-up": (
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    crown: (
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
          d="M5 3l7 7 7-7M5 21h14a2 2 0 002-2v-8l-7 5-7-5v8a2 2 0 002 2z"
        />
      </svg>
    ),
    chart: (
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    "user-group": (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
    building: (
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    mail: (
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    phone: (
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
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
    trash: (
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
  return icons[iconName] || icons.users;
};

// Avatar Component
const Avatar = ({ letter, name }: { letter: string; name: string }) => {
  const bgColor = avatarColors[letter] || "bg-gray-500";
  return (
    <div
      className={`${bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold`}
    >
      {letter}
    </div>
  );
};

// Status Badge Component
const StatusBadge = ({ status }: { status: "VIP" | "Active" | "Inactive" }) => {
  const statusStyles: Record<string, string> = {
    VIP: "bg-yellow-100 text-yellow-700",
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`${statusStyles[status]} px-3 py-1 rounded-full text-xs font-medium`}
    >
      {status}
    </span>
  );
};

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
              {getIcon("user-group")}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Quản lý khách hàng
              </h1>
              <p className="text-sm text-gray-500">
                Danh sách và thông tin khách hàng
              </p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition shadow-sm">
            {getIcon("plus")}
            <span className="font-medium">Thêm khách hàng</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-lg shadow-sm p-6`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.iconBg} p-3 rounded-lg ${stat.iconColor}`}>
                  {getIcon(stat.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {getIcon("search")}
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm tên, email, điện thoại hoặc công ty..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select className="appearance-none pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white">
                <option>Tất cả trạng thái</option>
                <option>VIP</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {getIcon("filter")}
              </div>
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select className="appearance-none pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white">
                <option>Tất cả loại</option>
                <option>Cá nhân</option>
                <option>Doanh nghiệp</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {getIcon("filter")}
              </div>
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Khách hàng
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Liên hệ
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sản phẩm yêu thích
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Đơn hàng
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doanh thu
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mua gần nhất
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customersData.map((customer) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    {/* Customer Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar letter={customer.avatar} name={customer.name} />
                        <div>
                          <p className="font-medium text-gray-900">
                            {customer.name}
                          </p>
                          {customer.company && (
                            <div className="flex items-center gap-1 mt-1">
                              {getIcon("building")}
                              <p className="text-sm text-gray-500">
                                {customer.company}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {getIcon("mail")}
                          <span className="text-sm text-gray-600">
                            {customer.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getIcon("phone")}
                          <span className="text-sm text-gray-600">
                            {customer.phone}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <StatusBadge status={customer.status} />
                      </div>
                    </td>

                    {/* Favorite Product */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">
                        {customer.favoriteProduct}
                      </span>
                    </td>

                    {/* Total Orders */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-medium text-gray-900">
                        {customer.totalOrders}
                      </span>
                    </td>

                    {/* Total Revenue */}
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-medium text-gray-900">
                        {customer.totalRevenue}
                      </span>
                    </td>

                    {/* Last Purchase */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">
                        {customer.lastPurchase}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        {getIcon("edit")}
                        {getIcon("trash")}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-center text-sm text-gray-600">
            Hiển thị {customersData.length} / {customersData.length} khách hàng
          </p>
        </div>
      </div>
    </div>
  );
}
