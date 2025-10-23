"use client";

import React from "react";

const serviceRepairItems = [
  {
    id: 1,
    title: "Sửa chữa iPhone",
    icon: "\u{1F4F1}",
    link: "#",
  },

  {
    id: 2,
    title: "Sửa chữa AirPods",
    icon: "\u{1F3A7}",
    link: "#",
  },
];

const commonIssues = [
  {
    id: 1,
    title: "Camera không hoạt động",
    icon: "\u{1F4F7}",
    bgColor: "#5ac8fa",
  },
  {
    id: 2,
    title: "Pin không sạc được",
    icon: "\u{1F50B}",
    bgColor: "#ffcc00",
  },
  {
    id: 3,
    title: "Vấn đề phần mềm",
    icon: "\u{2699}\u{FE0F}",
    bgColor: "#bf5af2",
  },
  {
    id: 4,
    title: "Thiết bị không thể khởi động",
    icon: "\u{1F504}",
    bgColor: "#34c759",
  },
  {
    id: 5,
    title: "Thiết bị bị rơi vào nước",
    icon: "\u{1F4A7}",
    bgColor: "#ff9500",
  },
  {
    id: 6,
    title: "Thiết bị gặp vấn đề khác",
    icon: "\u{1F4AC}",
    bgColor: "#8e8e93",
  },
];

const benefits = [
  {
    id: 1,
    icon: "\u{1F4CB}",
    title: "Chính hãng",
    description:
      "Trung tâm bảo hành ủy quyền chính hãng, có kiểm tra và xác thực lịch trình sửa chữa rõ ràng. Vui lòng đặt lịch hẹn để IShop Care hỗ trợ bạn nhanh nhất.",
  },
  {
    id: 2,
    icon: "\u{1F468}\u{200D}\u{1F527}",
    title: "Chứng chỉ Apple",
    description:
      "100% cơ sở thực hiện dịch vụ được cấp chứng chỉ cao nhất từ Apple, đảm bảo tiêu chuẩn chất lượng toàn cầu.",
  },
  {
    id: 3,
    icon: "\u{2713}",
    title: "Cam kết bảo mật",
    description:
      "Dữ liệu người dùng được quản lý nghiêm ngặt nội bộ. IShop Care cam kết bảo mật tuyệt đối thông tin của bạn.",
  },
  {
    id: 4,
    icon: "\u{1F381}",
    title: "Tặng thời gian bảo hành sau sửa chữa",
    description:
      "Linh kiện thay thế được bảo hành 90 ngày kể từ khi thiết bị được hoàn tất sửa chữa.",
  },
];

export default function ServicesPage() {
  const handleBookingClick = () => {
    console.log("Đặt lịch sửa chữa");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #f5f5f7 0%, #ffffff 100%)",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* HEADER */}
        <header className="mt-[60px] mb-12">
          <h1
            className="text-center font-bold mb-3"
            style={{
              fontSize: "40px",
              color: "#1d1d1f",
              lineHeight: "1.1",
            }}
          >
            Danh Sách Dịch Vụ
          </h1>
          <p
            className="text-center mx-auto max-w-2xl"
            style={{
              fontSize: "17px",
              color: "#6e6e73",
              lineHeight: "1.5",
            }}
          >
            Chúng tôi mang đến dịch vụ tận tâm và tiêu chuẩn chính hãng Apple
          </p>
        </header>

        {/* SECTION: SỬA CHỮA THIẾT BỊ */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {serviceRepairItems.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-2xl p-8 cursor-pointer group transition-all duration-300"
                style={{
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-[120px] h-[120px] rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)",
                  }}
                >
                  <span className="text-6xl">{service.icon}</span>
                </div>

                <h3
                  className="text-center mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#1d1d1f",
                  }}
                >
                  {service.title}
                </h3>

                <a
                  href={service.link}
                  className="block text-center group-hover:underline transition-all"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#06c",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Đi tới ${service.title}`);
                  }}
                >
                  Xem thêm
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION: VẤN ĐỀ THƯỜNG GẶP */}
        <section className="mt-20 mb-20">
          <h2
            className="text-center mb-10"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#1d1d1f",
            }}
          >
            Những vấn đề mà thiết bị của bạn thường gặp phải
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {commonIssues.map((issue) => (
              <article
                key={issue.id}
                className="bg-white rounded-[20px] p-7 text-center cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: issue.bgColor,
                  }}
                >
                  <span className="text-3xl" style={{ filter: "brightness(0) invert(1)" }}>
                    {issue.icon}
                  </span>
                </div>

                <p
                  className="line-clamp-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1d1d1f",
                    lineHeight: "1.3",
                  }}
                >
                  {issue.title}
                </p>
              </article>
            ))}
          </div>

          <button
            onClick={handleBookingClick}
            className="mx-auto block transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: "#06c",
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: "24px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0, 102, 204, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0077ed";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 102, 204, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#06c";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 102, 204, 0.2)";
            }}
          >
            ĐẶT LỊCH SỬA CHỮA NGAY
          </button>
        </section>

        {/* SECTION: LỢI ÍCH */}
        <section className="mt-20 mb-20">
          <h2
            className="text-center mb-12"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#1d1d1f",
            }}
          >
            Tại sao nên chọn IShop Care?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <article
                key={benefit.id}
                className="bg-white rounded-[20px] p-10 text-center cursor-pointer transition-all ease-in-out"
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                  transitionDuration: "400ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.12)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">{benefit.icon}</span>
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1d1d1f",
                  }}
                >
                  {benefit.title}
                </h3>

                <p
                  className="text-center"
                  style={{
                    fontSize: "14px",
                    color: "#6e6e73",
                    lineHeight: "1.6",
                  }}
                >
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
