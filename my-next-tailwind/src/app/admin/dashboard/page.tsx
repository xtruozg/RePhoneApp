"use client";

import React, { JSX } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface StatCard {
  title: string;
  value: string;
  subtitle: string | JSX.Element;
  bgColor: string;
  iconColor: string;
  icon: JSX.Element;
}

interface RevenueData {
  month: string;
  value: number;
}

interface CategoryData {
  name: string;
  value: number;
  color: string;
}

interface TopProduct {
  name: string;
  value: number;
}

interface Activity {
  icon: JSX.Element;
  iconBg: string;
  title: string;
  time: string;
  description: string;
}

const statsData: StatCard[] = [
  {
    title: "Tổng doanh thu",
    value: "1,250,000,000 đ",
    subtitle: "Hôm nay: 85,000,000 đ",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Đơn hàng",
    value: "342",
    subtitle: "Hôm nay: +18 đơn",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    icon: (
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sản phẩm",
    value: "156",
    subtitle: (
      <span>
        <span className="text-red-600">12 sắp hết</span>
      </span>
    ),
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    icon: (
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Khách hàng",
    value: "892",
    subtitle: "+24 khách mới",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    icon: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const revenueData: RevenueData[] = [
  { month: "T1", value: 1050 },
  { month: "T2", value: 1150 },
  { month: "T3", value: 1000 },
  { month: "T4", value: 1200 },
  { month: "T5", value: 1100 },
  { month: "T6", value: 1150 },
];

const categoryData: CategoryData[] = [
  { name: "iPhone 15 Series", value: 39, color: "#3B82F6" },
  { name: "iPhone 14 Series", value: 26, color: "#8B5CF6" },
  { name: "iPhone 13 Series", value: 15, color: "#EF4444" },
  { name: "Phụ kiện", value: 20, color: "#10B981" },
];

const topProductsData: TopProduct[] = [
  { name: "iPhone 15 Pro Max", value: 45 },
  { name: "iPhone 15 Pro", value: 38 },
  { name: "iPhone 15", value: 52 },
  { name: "iPhone 14 Pro", value: 28 },
  { name: "iPhone 14", value: 42 },
  { name: "Phụ kiện", value: 68 },
];

const recentActivitiesData: Activity[] = [
  {
    icon: (
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
    iconBg: "bg-green-100 text-green-600",
    title: "Đơn hàng mới #DH-2024-0342",
    time: "5 phút trước",
    description: "iPhone 14 Pro Max 256GB - Nguyễn Văn A",
  },
  {
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    iconBg: "bg-blue-100 text-blue-600",
    title: "Khách hàng mới đăng ký",
    time: "15 phút trước",
    description: "Trần Thị B - 0912345678",
  },
  {
    icon: (
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
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    iconBg: "bg-orange-100 text-orange-600",
    title: "Cảnh báo tồn kho thấp",
    time: "1 giờ trước",
    description: "iPhone 14 Pro 256GB Tím - Còn 3 máy",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Thống Kê
        </h1>
        <p className="text-gray-600 mt-2">
          Tổng quan hoạt động kinh doanh iPhone Store
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-lg shadow-sm p-6`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.subtitle}</p>
              </div>
              <div className={`${stat.iconColor}`}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Doanh thu 6 tháng gần nhất
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(value) => `${value}M`}
                domain={[0, 1400]}
                ticks={[0, 350, 700, 1050, 1400]}
              />
              <Tooltip formatter={(value) => `${value} triệu đồng`} />
              <Legend />
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: "#3B82F6", r: 5 }}
                activeDot={{ r: 7 }}
                name="Doanh thu (triệu đồng)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Phân bố theo danh mục
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Sản phẩm bán chạy
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topProductsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
            <YAxis domain={[0, 80]} ticks={[0, 20, 40, 60, 80]} />
            <Tooltip />
            <Legend />
            <defs>
              <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="value"
              fill="url(#colorBar)"
              radius={[8, 8, 0, 0]}
              name="Số lượng bán"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activities Table */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Hoạt động gần đây
        </h3>
        <div className="space-y-4">
          {recentActivitiesData.map((activity, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className={`p-2 rounded-lg ${activity.iconBg}`}>
                {activity.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
