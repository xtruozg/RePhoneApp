"use client";

import InputField from "@/app/components/InputField";
import { useState } from "react";
import login from "../../../../public/images/login.jpeg"
import { loginUser } from "@/app/services/api";
import { useRouter } from "next/navigation";
import { saveUserInfo } from "@/app/utils/auth";
const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await loginUser(formData);
            if (res.data?.user || res.user || res.data) {
                const user = res.data?.user || res.user || res.data;
                console.log("User info:", user);

                const userInfo = {
                    fullName: user.fullName || user.full_name || user.ho_ten || user.hoTen || user.username || "User",
                    username: user.username || user.email || formData.username,
                    email: user.email || user.Email || ""
                };

                saveUserInfo(userInfo);
                window.dispatchEvent(new Event('userLoggedIn'));
            } else {
                console.log("No user info in response, using username");
                saveUserInfo({
                    fullName: formData.username,
                    username: formData.username,
                    email: ""
                });
                window.dispatchEvent(new Event('userLoggedIn'));
            }

            router.push("/");
        } catch (err) {
            console.error("Đăng nhập thất bại:", err);
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    };
    return (
        <div className="flex justify-center min-h-[80vh] items-center w-[70%] mx-auto gap-6">
            <div className="flex-1 flex justify-center">
                <img
                    src={login.src}
                    alt="Login illustration"
                    className="w-full object-contain"
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex-1 bg-white gap-6 flex flex-col"
            >
                <h2 className="text-black text-3xl mb-6">
                    Đăng nhập
                </h2>
                <div className="space-y-4">
                    <InputField
                        label="Tên đăng nhập:"
                        name="username"
                        placeholder="Nhập tên đăng nhập"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="Mật khẩu:"
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                    <label className="flex items-center gap-2 text-gray-600">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded focus:ring-themeColor-500"
                        />
                        <span>Nhớ mật khẩu</span>
                    </label>
                    <a
                        href="/user/forgot-password"
                        className="text-themeColor-500 hover:underline font-medium text-blue-300"
                    >
                        Quên mật khẩu?
                    </a>
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full bg-themeColor-500 text-white font-medium py-2 rounded-lg hover:bg-themeColor-600 transition-all bg-blue-500"
                >
                    Đăng nhập
                </button>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Chưa có tài khoản?{" "}
                    <a
                        href="/user/register"
                        className="text-themeColor-500 hover:underline text-blue-300"
                    >
                        Tạo tài khoản ngay
                    </a>
                </p>
            </form>
        </div>

    );
};

export default LoginPage;
