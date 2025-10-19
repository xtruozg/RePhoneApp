"use client";
import Search from "@/app/components/Search";
import Logo from "../../../../public/images/logo.png";
import Tooltip from "@/app/components/Tooltip";
import Link from "next/link";
import { useState } from "react";
import CartPage from "../cart/page";
export default function Header() {
    const [openCart, setOpenCart] = useState(false);
    const handleOpenCart = () => {
        setOpenCart(!openCart);
    };
    return (
        <div className="w-full bg-[#515154] h-full flex items-center justify-center">
            <div className="w-[70%] m-auto flex flex-col gap-4 justify-center items-center">
                <div className="w-full m-auto flex items-center justify-between gap-6 py-2">
                    <img src={Logo.src} alt="Logo" width={250} height={250} />
                    <div className="w-[750px]">
                        <Search placeholder="Bạn tìm gì ..." className="w-full" />
                    </div>
                    <div onClick={handleOpenCart} className="flex justify-between items-center gap-2">
                        <svg className="text-themeColor-500 w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-themeColor-500">Giỏ hàng</span>
                    </div>
                    <div className="relative group">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <svg
                                className="text-themeColor-500 w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <span className="text-themeColor-500 font-medium">Tài khoản</span>
                        </div>
                        <div
                            className="text-black absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-150 z-50"
                        >
                            <Link href="/user/register" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 cuirsor-pointer">
                                Tạo tài khoản ngay
                            </Link>
                            <Link href="/user/login" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 cuirsor-pointer">
                                Đăng nhập
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="w-full flex m-auto justify-center items-center gap-16 text-white font-semibold">
                    <Link href="/" className="hover:text-yellow-300 transition">
                        Trang chủ
                    </Link>
                    <Link href="/user/news" className="hover:text-yellow-300 transition">
                        Tin Tức
                    </Link>
                    <Link href="/user/services" className="hover:text-yellow-300 transition">
                        Dịch vụ
                    </Link>
                    <Tooltip
                        trigger={
                            <div className="cursor-pointer text-white font-semibold hover:text-yellow-300 transition">
                                Ưu đãi
                            </div>
                        }
                        position="bottom"
                    >
                        <div className="text-sm text-gray-800">
                            <span className="font-semibold text-blue-600 text-center">Miễn phí vận chuyển toàn quốc</span>
                        </div>
                    </Tooltip>
                    <Tooltip
                        trigger={
                            <div className="cursor-pointer text-white font-semibold hover:text-yellow-300 transition">
                                Giờ làm việc
                            </div>
                        }
                        position="bottom"
                    >
                        <div className="text-sm text-gray-800  w-full text-center">
                            <span className="font-semibold text-blue-600">Mở cửa: 8:00 - 22:00</span>
                        </div>
                    </Tooltip>
                    <Tooltip
                        trigger={
                            <div className="cursor-pointer text-white font-semibold hover:text-yellow-300 transition">
                                Hotline
                            </div>
                        }
                        position="bottom"
                    >
                        <div className="text-sm text-gray-800 w-full text-center">
                            📞 <span className="font-semibold text-blue-600">Hotline: 0123 456 789</span>
                        </div>
                    </Tooltip>
                </div>
            </div>
            {openCart && (
                <div className="absolute top-20 right-0 w-135 bg-white shadow-lg rounded-lg p-4">
                    <CartPage setOpenCart={setOpenCart} />
                </div>
            )}
        </div>

    );
}