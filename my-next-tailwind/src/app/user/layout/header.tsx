"use client";
import Search from "@/app/components/Search";
import Logo from "../../../../public/images/logo.png";
import Tooltip from "@/app/components/Tooltip";
import Link from "next/link";
import { useState, useEffect } from "react";
import CartPage from "../cart/page";
import { getUserInfo, isLoggedIn, logout } from "@/app/utils/auth";
import { useSearch } from "@/app/contexts/SearchContext";

export default function Header() {
    const { searchTerm, setSearchTerm } = useSearch();
    const [openCart, setOpenCart] = useState(false);
    const [userInfo, setUserInfo] = useState<{ fullName: string; username: string; email?: string } | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkUserInfo = () => {
            if (isLoggedIn()) {
                const info = getUserInfo();
                console.log("Header - User info from storage:", info);
                setUserInfo(info);
            } else {
                console.log("Header - No user logged in");
                setUserInfo(null);
            }
        };

        checkUserInfo();
        const handleUserLogin = () => {
            console.log("Header - User logged in event received");
            checkUserInfo();
        };

        window.addEventListener('userLoggedIn', handleUserLogin);

        return () => {
            window.removeEventListener('userLoggedIn', handleUserLogin);
        };
    }, []);

    const handleOpenCart = () => {
        setOpenCart(!openCart);
    };
    const handleLogout = () => {
        logout();
    };
    const getInitials = (fullName: string) => {
        if (!fullName) return "U";
        const words = fullName.trim().split(" ");
        if (words.length === 1) {
            return fullName.charAt(0).toUpperCase();
        }
        return words[words.length - 1].charAt(0).toUpperCase();
    };

    const handleSearch = (value: string) => {
        setSearchTerm(value);
    };

    return (
        <div className="w-full bg-[#515154] h-full flex items-center justify-center">
            <div className="w-[70%] m-auto flex flex-col gap-4 justify-center items-center">
                <div className="w-full m-auto flex items-center justify-between gap-6 py-2">
                    <img src={Logo.src} alt="Logo" width={250} height={250} />
                    <div className="w-[750px]">
                        <Search placeholder="Bạn tìm gì ..." className="w-full" onSearch={handleSearch} externalValue={searchTerm} />
                    </div>
                    <div onClick={handleOpenCart} className="flex justify-between items-center gap-2 text-white cursor-pointer">
                        <svg className="text-themeColor-500 w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-themeColor-500">Giỏ hàng</span>
                    </div>
                    <div className="relative group text-white cursor-pointer">
                        {mounted && userInfo ? (
                            <>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-themeColor-500 flex items-center justify-center text-black font-bold text-lg bg-amber-50">
                                        {getInitials(userInfo.fullName)}
                                    </div>
                                    <span>{userInfo.fullName}</span>
                                </div>
                                <div
                                    className="text-black absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-150 z-50"
                                >
                                    <Link href="/user/account" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600">
                                        Thông tin tài khoản
                                    </Link>
                                    <Link href="/user/orders" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600">
                                        Đơn hàng của tôi
                                    </Link>
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-red-600">
                                        Đăng xuất
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-2 cursor-pointer text-white">
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
                                    className="text-black absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-150 z-50"
                                >
                                    <Link href="/user/register" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600">
                                        Tạo tài khoản ngay
                                    </Link>
                                    <Link href="/user/login" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600">
                                        Đăng nhập
                                    </Link>
                                </div>
                            </>
                        )}
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
                  <Link href="/user/endow" className="hover:text-yellow-300 transition">
                        Ưu đãi
                    </Link>
                    
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