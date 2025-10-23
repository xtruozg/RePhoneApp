"use client";

export default function EndowPage() {
  const banks = [
    { id: 1, name: "VietinBank", color: "#ED1C24" },
    { id: 2, name: "ACB", color: "#00923F" },
    { id: 3, name: "Sacombank", color: "#0066B3" },
    { id: 4, name: "SHB", color: "#FF6600" },
    { id: 5, name: "VPBank", color: "#006838" },
  ];

  const installmentData = [
    {
      id: 1,
      bank: "VietinBank",
      card: "Visa, Mastercard",
      amount: "3.000.000đ",
      duration: "3 tháng",
      rate: "0%",
      period: "3 kỳ",
      condition: "Chỉ áp dụng cho thẻ tín dụng cá nhân, không áp dụng thẻ doanh nghiệp",
    },
    {
      id: 2,
      bank: "VietinBank",
      card: "Visa, Mastercard",
      amount: "5.000.000đ",
      duration: "6 tháng",
      rate: "0%",
      period: "6 kỳ",
      condition: "Khách hàng phải sở hữu thẻ tín dụng trực tiếp khi mua hàng",
    },
    {
      id: 3,
      bank: "ACB",
      card: "Visa, Mastercard, JCB",
      amount: "3.000.000đ",
      duration: "3 tháng",
      rate: "0%",
      period: "3 kỳ",
      condition: "Chỉ áp dụng cho thẻ tín dụng cá nhân, không áp dụng thẻ doanh nghiệp",
    },
    {
      id: 4,
      bank: "ACB",
      card: "Visa, Mastercard, JCB",
      amount: "10.000.000đ",
      duration: "9 tháng",
      rate: "0.5%",
      period: "9 kỳ",
      condition: "Ngân hàng tạm giữ hạn mức tương ứng khi thanh toán trả góp",
    },
    {
      id: 5,
      bank: "Sacombank",
      card: "Visa, Mastercard",
      amount: "5.000.000đ",
      duration: "6 tháng",
      rate: "0%",
      period: "6 kỳ",
      condition: "Không áp dụng đồng thời với các chương trình khuyến mãi khác",
    },
    {
      id: 6,
      bank: "Sacombank",
      card: "Visa, Mastercard",
      amount: "15.000.000đ",
      duration: "12 tháng",
      rate: "1.0%",
      period: "12 kỳ",
      condition: "Khách hàng cần liên hệ hotline ngân hàng để được hỗ trợ thanh toán",
    },
    {
      id: 7,
      bank: "SHB",
      card: "Visa, Mastercard",
      amount: "3.000.000đ",
      duration: "3 tháng",
      rate: "0%",
      period: "3 kỳ",
      condition: "Chỉ áp dụng thẻ tín dụng cá nhân, không áp dụng thẻ doanh nghiệp",
    },
    {
      id: 8,
      bank: "SHB",
      card: "Visa, Mastercard, JCB",
      amount: "10.000.000đ",
      duration: "9 tháng",
      rate: "0%",
      period: "9 kỳ",
      condition: "Chương trình có thể kết thúc sớm khi hết ngân sách",
    },
    {
      id: 9,
      bank: "VPBank",
      card: "Visa, Mastercard",
      amount: "5.000.000đ",
      duration: "6 tháng",
      rate: "0%",
      period: "6 kỳ",
      condition: "Khách hàng điền đầy đủ thông tin khi đặt hàng",
    },
    {
      id: 10,
      bank: "VPBank",
      card: "Visa, Mastercard, JCB",
      amount: "15.000.000đ",
      duration: "12 tháng",
      rate: "0.5%",
      period: "12 kỳ",
      condition: "Ngân hàng tạm giữ hạn mức tương ứng khi thanh toán trả góp",
    },
    {
      id: 11,
      bank: "Shinhan Bank",
      card: "Visa, Mastercard",
      amount: "3.000.000đ",
      duration: "3 tháng",
      rate: "0%",
      period: "3 kỳ",
      condition: "Chỉ áp dụng cho khách hàng trực tiếp sở hữu thẻ tín dụng",
    },
    {
      id: 12,
      bank: "Shinhan Bank",
      card: "Visa, Mastercard",
      amount: "10.000.000đ",
      duration: "9 tháng",
      rate: "0%",
      period: "9 kỳ",
      condition: "Không áp dụng đồng thời với các chương trình khuyến mãi khác",
    },
    {
      id: 13,
      bank: "VietinBank",
      card: "Visa, Mastercard, JCB",
      amount: "10.000.000đ",
      duration: "9 tháng",
      rate: "0%",
      period: "9 kỳ",
      condition: "Khách hàng phải sở hữu thẻ tín dụng trực tiếp khi mua hàng",
    },
    {
      id: 14,
      bank: "ACB",
      card: "Visa, Mastercard",
      amount: "15.000.000đ",
      duration: "12 tháng",
      rate: "0%",
      period: "12 kỳ",
      condition: "Chương trình có thể kết thúc sớm khi hết ngân sách",
    },
    {
      id: 15,
      bank: "Sacombank",
      card: "Visa, Mastercard, JCB",
      amount: "10.000.000đ",
      duration: "9 tháng",
      rate: "0.5%",
      period: "9 kỳ",
      condition: "Mọi thông tin liên quan đến thanh toán, khách hàng vui lòng liên hệ hotline ngân hàng",
    },
    {
      id: 16,
      bank: "SHB",
      card: "Visa, Mastercard",
      amount: "5.000.000đ",
      duration: "6 tháng",
      rate: "0%",
      period: "6 kỳ",
      condition: "Chỉ áp dụng thẻ tín dụng cá nhân",
    },
    {
      id: 17,
      bank: "VPBank",
      card: "Visa, Mastercard, JCB",
      amount: "10.000.000đ",
      duration: "9 tháng",
      rate: "0%",
      period: "9 kỳ",
      condition: "Ngân hàng tạm giữ hạn mức tương ứng khi thanh toán trả góp",
    },
    {
      id: 18,
      bank: "Shinhan Bank",
      card: "Visa, Mastercard, JCB",
      amount: "15.000.000đ",
      duration: "12 tháng",
      rate: "0.5%",
      period: "12 kỳ",
      condition: "Không áp dụng đồng thời với các chương trình khuyến mãi khác",
    },
  ];

  const benefits = [
    "Giá trả góp = Giá tiền mặt",
    "Lãi suất 0%",
    "Thủ tục đơn giản Chỉ cần CMND",
    "Duyệt hồ sơ Nhanh chóng",
  ];

  const products = [
    {
      id: 1,
      name: "iPad Pro 11 inch",
      monthlyPayment: "1.754.000đ/tháng",
      icon: "📱",
    },
    {
      id: 2,
      name: "iPad Pro 12.9 inch",
      monthlyPayment: "2.323.000đ/tháng",
      icon: "📱",
    },
    {
      id: 3,
      name: "MacBook Pro 14 inch",
      monthlyPayment: "4.412.000đ/tháng",
      icon: "💻",
    },
    {
      id: 4,
      name: "MacBook Pro 16 inch",
      monthlyPayment: "5.543.000đ/tháng",
      icon: "💻",
    },
    {
      id: 5,
      name: "AirPods 2",
      monthlyPayment: "279.000đ/tháng",
      icon: "🎧",
    },
    {
      id: 6,
      name: "AirPods Pro",
      monthlyPayment: "415.000đ/tháng",
      icon: "🎧",
    },
  ];

  const terms = [
    "Khách hàng điền đầy đủ thông tin khi đặt hàng tại ShopDunk",
    "Chỉ áp dụng khách hàng trực tiếp sở hữu thẻ tín dụng khi mua sản phẩm tại ShopDunk hoặc ShopDunk",
    "Mọi thông tin liên quan đến việc thanh toán, khách hàng vui lòng liên hệ hotline ngân hàng để được hỗ trợ",
    "Chỉ áp dụng thẻ tín dụng cá nhân",
    "Sản phẩm trả góp không áp dụng các chương trình khuyến mãi khác",
    "Với chương trình trả góp 0% thẻ tín dụng khi thanh toán, ngân hàng sẽ tạm giữ hạn mức tương ứng",
    "Chương trình có thể kết thúc sớm khi hết ngân sách mà không báo trước",
    "Mọi thắc mắc vui lòng liên hệ hotline: 1900.6626 hoặc trực tiếp các cửa hàng để được hỗ trợ",
  ];

  return (
    <div className="w-full bg-[#f5f5f7]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <section className="relative w-full h-[480px] bg-gradient-to-r from-[#4a90e2] to-[#5bc0de] overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.3"
          />
          <path
            d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,90.7C1120,96,1280,96,1360,96L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>

        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 h-full items-center relative z-10">
            <div className="md:col-span-3 relative h-full flex items-center justify-center">
              <div
                className="text-[80px] md:text-[120px] font-black"
                style={{
                  background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #d4af37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "4px 4px 8px rgba(0,0,0,0.2)",
                  filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.2))",
                }}
              >
                0%
              </div>

              {/* Product Images - Stacked */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* MacBook */}
                <div
                  className="absolute text-[120px] md:text-[200px] opacity-30"
                  style={{ transform: "rotate(-8deg) translateX(-80px) translateY(-20px)", zIndex: 1 }}
                >
                  💻
                </div>
                {/* iPad */}
                <div
                  className="absolute text-[80px] md:text-[140px] opacity-40"
                  style={{ transform: "rotate(5deg) translateX(40px) translateY(-30px)", zIndex: 2 }}
                >
                  📱
                </div>
                {/* iPhone */}
                <div
                  className="absolute text-[60px] md:text-[100px] opacity-50"
                  style={{ transform: "rotate(-3deg) translateX(100px) translateY(30px)", zIndex: 3 }}
                >
                  📱
                </div>
              </div>
            </div>

            {/* Right Column - CTA Box */}
            <div className="md:col-span-2 flex items-center justify-center md:justify-end">
              <div
                className="bg-white bg-opacity-95 rounded-[20px] p-6 md:p-8 shadow-2xl relative max-w-md w-full"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-6 bg-[#0071e3] text-white px-4 py-1 rounded-full text-xs font-semibold">
                  TRẢ GÓP 0%
                </div>

                {/* Content */}
                <div className="mt-4 text-center">
                  <h2 className="text-lg md:text-xl font-semibold text-[#1d1d1f] mb-2">
                    Áp dụng cho đơn hàng từ
                  </h2>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#e91e63] mb-4">
                    2 TRIỆU ĐỒNG
                  </div>
                  <p className="text-xs md:text-sm text-[#6e6e73] mb-6 leading-relaxed">
                    Thủ tục đơn giản | Hồ sơ tối đa 1 ký | Xét nhanh chóng
                  </p>
                  <button
                    className="bg-[#1d1d1f] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById("installment-table");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Xem ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-[#1d1d1f] text-white h-12 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-0 text-xs uppercase font-medium">
            <a
              href="#credit-card"
              className="hover:text-[#06c] transition-colors px-4 py-2"
            >
              BẢNG TRẢ GÓP DÀNH CHO THẺ TÍN DỤNG
            </a>
            <div className="w-px h-4 bg-white opacity-30"></div>
            <a
              href="#financial-company"
              className="hover:text-[#06c] transition-colors px-4 py-2"
            >
              BẢNG TRẢ GÓP CÔNG TY TÀI CHÍNH
            </a>
            <div className="w-px h-4 bg-white opacity-30"></div>
            <a
              href="#accounting"
              className="hover:text-[#06c] transition-colors px-4 py-2"
            >
              BẢNG KẾ TOÁN
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION - BANK PARTNERS */}
      <section className="container mx-auto px-4 py-12 md:py-16" id="credit-card">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1d1d1f] mb-8 md:mb-12">
          ÁP DỤNG CHO THẺ TÍN DỤNG
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {banks.map((bank) => (
            <div
              key={bank.id}
              className="bg-white border border-[#e5e5e5] rounded-xl p-4 md:p-6 h-24 md:h-28 flex flex-col items-center justify-center hover:shadow-lg hover:border-[#06c] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: bank.color }}
              >
                <span className="text-xl md:text-2xl">🏦</span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#1d1d1f] text-center">
                {bank.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12" id="installment-table">
        <div className="bg-white border border-[#d2d2d7] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-[#0071e3] text-white sticky top-12">
                <tr>
                  <th className="px-3 py-4 text-left text-xs font-semibold">STT</th>
                  <th className="px-3 py-4 text-left text-xs font-semibold">Ngân hàng</th>
                  <th className="px-3 py-4 text-left text-xs font-semibold">Thẻ áp dụng</th>
                  <th className="px-3 py-4 text-left text-xs font-semibold">Giá trị đơn hàng</th>
                  <th className="px-3 py-4 text-left text-xs font-semibold">Thời gian</th>
                  <th className="px-3 py-4 text-left text-xs font-semibold">Lãi suất</th>
                  <th className="px-3 py-4 text-left text-xs font-semibold">Kỳ hạn</th>
                  <th className="px-3 py-4 text-left text-xs font-semibold">Điều kiện</th>
                </tr>
              </thead>
              <tbody>
                {installmentData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"
                    } hover:bg-[#f5f5f7] transition-colors border-b border-[#e5e5e5]`}
                  >
                    <td className="px-3 py-3 text-xs text-[#1d1d1f]">{index + 1}</td>
                    <td className="px-3 py-3 text-xs text-[#1d1d1f] font-semibold">{item.bank}</td>
                    <td className="px-3 py-3 text-xs text-[#1d1d1f]">{item.card}</td>
                    <td className="px-3 py-3 text-xs text-[#1d1d1f]">{item.amount}</td>
                    <td className="px-3 py-3 text-xs text-[#1d1d1f]">{item.duration}</td>
                    <td className="px-3 py-3 text-xs text-[#1d1d1f] font-semibold">{item.rate}</td>
                    <td className="px-3 py-3 text-xs text-[#1d1d1f]">{item.period}</td>
                    <td className="px-3 py-3 text-xs text-[#d70015]">{item.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1d1d1f] mb-8 md:mb-12">
          ƯU ĐÃI KHI MUA TRẢ GÓP TẠI ISHOP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1d1d1f] text-white rounded-2xl p-6 md:p-8 text-center min-h-[140px] flex items-center justify-center hover:bg-[#2d2d2f] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <p className="text-base md:text-lg font-semibold leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#e5e5e5] rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:border-[#06c] transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#1d1d1f] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-[#6e6e73] mb-1">Trả góp chỉ từ</p>
              <p className="text-2xl md:text-3xl font-bold text-[#d70015] mb-6">
                {product.monthlyPayment}
              </p>
              <div className="w-48 h-48 md:w-60 md:h-60 mx-auto bg-[#f5f5f7] rounded-xl flex items-center justify-center mb-6">
                <span className="text-[100px] md:text-[120px]">{product.icon}</span>
              </div>

              <button className="w-full bg-[#0071e3] text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-[#0077ed] transition-colors duration-300">
                XEM CHI TIẾT
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20" id="financial-company">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1d1d1f] mb-8 md:mb-12">
          THỦ TỤC NHANH CHÓNG - HỖ TRỢ TỐI ĐA
        </h2>

        <div className="bg-white border border-[#e5e5e5] rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#1d1d1f] leading-relaxed pl-6">
            {terms.map((term, index) => (
              <li key={index} className="list-disc">
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="h-12"></div>
    </div>
  );
}
