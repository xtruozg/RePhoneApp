"use client";
import { useState } from "react";
import registerImg from "../../../../public/images/register.jpeg";
import InputField from "@/app/components/InputField";
import { registerUser } from "@/app/services/api";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
        so_dien_thoai: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("Register data:", formData);
            const response = await registerUser(formData);
            console.log("Kết quả API:", response);
            if (response.success) {
                alert("Đăng ký thành công!");
                router.push("/user/login");
            } else {
                alert("Đăng ký thất bại: " + (response.message || "Lỗi không xác định"));
            }
        } catch (error) {
            console.error("Lỗi khi đăng ký:", error);
            alert("Đã xảy ra lỗi khi kết nối tới máy chủ!");
        }
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
                        label="Họ và tên:"
                        name="fullName"
                        placeholder="Nhập họ và tên"
                        value={formData.fullName}
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
                        name="so_dien_thoai"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.so_dien_thoai}
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
