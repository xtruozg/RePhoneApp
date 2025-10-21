"use client";

import { useState } from "react";
import Link from "next/link";
const heroNews = {
  id: 1,
  title: "TAY CHƠI ĐỦ PHÁCH.",
  product: "Apple Watch Ultra 3",
  logo: "🍎",
  image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&q=80",
  discount: "Giảm đến 200K | Trả góp 0%",
  time: "Từ hàng 1/8:00, 20.10.2025",
  description: "Chuẩn bị trải nghiệm sức mạnh và độ bền vượt trội với Apple Watch Ultra 3 - người bạn đồng hành hoàn hảo cho mọi cuộc phiêu lưu."
};

const sidebarNews = [
  {
    id: 2,
    title: "iPhone 17 Pro Max - Titanium mới, camera 48MP nâng cấp",
    image: "https://shopdunk.com/images/thumbs/0049647_iphone-17-pro-and-pro-max%20(3)_1600.jpeg"
  },
  {
    id: 3,
    title: "MacBook Pro M4 chính thức ra mắt với hiệu năng vượt trội",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80"
  },
  {
    id: 4,
    title: "AirPods Pro 3 với công nghệ chống ồn thế hệ mới",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80"
  }
];

const appleNews = [
  {
    id: 5,
    title: "Apple công bố iOS 19 với AI tích hợp sâu vào hệ thống",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    date: "25/10/2025"
  },
  {
    id: 6,
    title: "Vision Pro 2 sẽ có giá thấp hơn, dễ tiếp cận hơn",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    date: "24/10/2025"
  },
  {
    id: 7,
    title: "Apple Watch Series 10 phá kỷ lục doanh số quý 3",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    date: "23/10/2025"
  },
  {
    id: 8,
    title: "iPad Air M3 mỏng nhẹ hơn, màn hình OLED",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    date: "22/10/2025"
  },
  {
    id: 9,
    title: "Apple Music Classical có mặt tại Việt Nam",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    date: "21/10/2025"
  },
  {
    id: 10,
    title: "HomePod mini thế hệ mới với chip S9",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
    date: "20/10/2025"
  }
];

const reviewArticles = [
  {
    id: 11,
    title: "Đánh giá chi tiết iPhone 16 Pro: Camera 48MP có thực sự tốt hơn?",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
    date: "26/10/2025"
  },
  {
    id: 12,
    title: "MacBook Air M3 vs MacBook Pro M3: Nên chọn máy nào?",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    date: "25/10/2025"
  },
  {
    id: 13,
    title: "Trải nghiệm 1 tuần với Apple Watch Ultra 2: Đáng tiền hay không?",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80",
    date: "24/10/2025"
  },
  {
    id: 14,
    title: "AirPods Max 2024: Có gì mới và có nên mua?",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80",
    date: "23/10/2025"
  }
];

const tabs = [
  { name: "Tin tức Apple", icon: "📰" },
  { name: "Bài viết review", icon: "✍️" },
  { name: "Khám phá", icon: "🔍" },
  { name: "Thủ thuật", icon: "💡" },
  { name: "Khuyến mại", icon: "🎁" },
  { name: "Tin khác", icon: "📱" },
  { name: "Video", icon: "🎥" },
  { name: "Góc cảm ơn", icon: "💙" }
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("Tin tức Apple");

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <div className="w-[90%] max-w-[1200px] mx-auto py-8">
        <nav className="text-xs text-[#6e6e73] mb-6">
          <Link href="/" className="hover:underline">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1d1d1f]">Tin tức</span>
        </nav>

        <h1 className="text-[32px] font-semibold text-center mb-8 text-[#1d1d1f]">
          Tin tức
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={heroNews.image}
                alt={heroNews.title}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{heroNews.logo}</span>
                  <span className="text-sm font-medium">{heroNews.product}</span>
                </div>
                <h2 className="text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                  {heroNews.title}
                </h2>
                <p className="text-lg mb-2">{heroNews.discount}</p>
                <p className="text-sm mb-6 opacity-90">{heroNews.time}</p>
                <button className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  ĐẶT CỌC NGAY
                </button>
              </div>
            </div>
            <p className="text-sm text-[#1d1d1f] mt-4 leading-relaxed">
              {heroNews.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {sidebarNews.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#d2d2d7] rounded-lg p-3 flex gap-3 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                />
                <h3 className="text-sm font-semibold leading-tight line-clamp-3 text-[#1d1d1f]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-0 bg-white z-40 border-b border-[#d2d2d7] mb-8 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 whitespace-nowrap pb-2 border-b-2 transition-all duration-200 ${
                  activeTab === tab.name
                    ? "border-black text-black font-semibold"
                    : "border-transparent text-[#6e6e73] hover:text-black"
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                <span className="text-sm">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Tin tức Apple" && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#1d1d1f]">Tin tức Apple</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {appleNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-white border border-[#d2d2d7] rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-semibold leading-snug mb-3 line-clamp-2 text-[#1d1d1f]">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#86868b] text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{news.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="#" className="text-[#06c] hover:underline text-sm font-medium">
                Xem tất cả Tin tức Apple &gt;
              </Link>
            </div>
          </section>
        )}

        {activeTab === "Bài viết review" && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#1d1d1f]">Bài viết review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-[#d2d2d7] rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold leading-snug mb-3 line-clamp-2 text-[#1d1d1f]">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#86868b] text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="#" className="text-[#06c] hover:underline text-sm font-medium">
                Xem tất cả Bài viết review &gt;
              </Link>
            </div>
          </section>
        )}

        {!["Tin tức Apple", "Bài viết review"].includes(activeTab) && (
          <section className="mb-12">
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">{tabs.find(t => t.name === activeTab)?.icon}</span>
              <h2 className="text-2xl font-semibold mb-3 text-[#1d1d1f]">{activeTab}</h2>
              <p className="text-[#86868b]">Nội dung đang được cập nhật...</p>
            </div>
          </section>
        )}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
