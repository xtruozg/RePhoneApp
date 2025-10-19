"use client";
import { useState } from "react";
import registerImg from "../../../../public/images/register.jpeg";
import InputField from "@/app/components/InputField";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register data:", formData);
    };
    return (
        <div className="flex justify-center items-center h-[80vh] bg-gray-50 w-[70%] mx-auto gap-12">
            <div className="flex-1 flex justify-center">
                <img
                    src={registerImg.src}
                    alt="Register illustration"
                    className="w-full object-contain"
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex-1 bg-white gap-6 flex flex-col"
            >
                <h2 className="text-black text-3xl mb-6">
                    Tạo tài khoản
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
                        label="Email:"
                        name="email"
                        type="email"
                        placeholder="Nhập email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <InputField
                        label="Số điện thoại:"
                        name="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
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

                    <InputField
                        label="Xác nhận mật khẩu:"
                        name="confirmPassword"
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-themeColor-500 text-white font-medium py-2 rounded-lg hover:bg-themeColor-600 transition-all bg-blue-500"
                >
                    Đăng ký
                </button>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Đã có tài khoản?{" "}
                    <a href="/user/login" className="text-themeColor-500 hover:underline text-blue-300">
                        Đăng nhập ngay
                    </a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
