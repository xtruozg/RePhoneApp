import logo from "../../../../public/images/logo2.png";
export default function Footer() {
    return (
        <div className="w-full bg-[#1D1D1F] py-8 text-white">
            <div className="w-[70%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col text-center gap-4">
                    <img src={logo.src} alt="Logo" width={150} height={150} className="mb-4" />
                    <p className="text-sm text-gray-300 leading-7 text-justify max-w-[320px]">
                        Năm 2020, <span className="text-white font-semibold">ShopDunk</span> trở thành đại lý ủy quyền của
                        <span className="text-white font-semibold"> Apple</span>. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn
                        và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.
                    </p>
                    <div className="p-4 bg-white rounded-[10px] text-black text-sm">
                        <p className="font-bold mb-1">Tổng đài hỗ trợ:</p>
                        <p>Mua hàng: 1900.6626 (08:00 - 22:00)</p>
                        <p>Bảo hành: 1900.8036 (08:30 - 20:00)</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition duration-300 cursor-pointer">
                            <svg
                                className="text-themeColor-500 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </div>

                        <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition duration-300 cursor-pointer">
                            <svg
                                className="text-themeColor-500 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                            </svg>
                        </div>

                        <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition duration-300 cursor-pointer">
                            <svg
                                className="text-themeColor-500 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                        <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-white hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition duration-300 cursor-pointer">
                            <svg
                                className="text-themeColor-500 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-center gap-4">
                    <h3 className="font-semibold text-lg mb-2">Thông tin</h3>
                    <p>Newsfeed</p>
                    <p>Giới thiệu</p>
                    <p>Check IMEI</p>
                    <p>Bảo hành sửa chữa</p>
                    <p>Tuyển dụng</p>
                    <p>Tra cứu hoá đơn</p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <h3 className="font-semibold text-lg mb-2">Chính sách</h3>
                    <p>Thu cũ đổi mới</p>
                    <p>Giao hàng</p>
                    <p>Đổi trả hàng</p>
                    <p>Chính sách bảo mật</p>
                    <p>Thanh toán</p>
                    <p>Giải quyết khiếu nại</p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <h3 className="font-semibold text-lg mb-2">Địa chỉ & Liên hệ</h3>
                    <p>Tài khoản của tôi</p>
                    <p>Đơn đặt hàng</p>
                    <p>Tìm Google Store trên map</p>
                    <p>Hệ thống cửa hàng</p>
                    <p>Bán hàng doanh nghiệp</p>
                    <p>Mua hàng : 1900.6626</p>
                </div>
            </div>
            <div className="w-[70%] m-auto text-sm text-gray-400 mt-8 flex flex-col gap-2 border-t border-gray-600 pt-4">
                <p>© 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016.</p>
                <p>Địa chỉ: Số 1, Đường 1, Khu Đô Thị Mới, TP. Hà Nội</p>
                <p>Hotline: 1900.6626</p>
            </div>
        </div>
    );
}
