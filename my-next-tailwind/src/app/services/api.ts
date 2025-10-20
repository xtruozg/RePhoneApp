import { getAccessToken, logout, saveToken } from "../utils/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
export const getProductNames = async () => {
    try {
        const res = await fetch(`${BASE_URL}/ten-san-pham`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
        });

        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("Lỗi khi gọi API /ten-san-pham:", error);
        throw error;
    }
};
export const getProduct = async (params?: { deleted?: boolean; name?: string | null }) => {
    try {
        const query = new URLSearchParams();

        if (params) {
            if (params.deleted !== undefined) query.append("deleted", String(params.deleted));
            if (params.name) query.append("name", params.name);
        }
        const queryString = query.toString();
        const url = `${BASE_URL}/san-pham${queryString ? `?${queryString}` : ""}`;
        const res = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
        });

        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("Lỗi khi gọi API /san-pham:", error);
        throw error;
    }
};
export const getProductDetail = async (id: number) => {
    try {
        const res = await fetch(`${BASE_URL}/san-pham/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
        });

        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("Lỗi khi gọi API /san-pham/:id:", error);
        throw error;
    }
};
export const registerUser = async (userData: {
    username: string;
    fullName: string;
    email: string;
    so_dien_thoai: string;
    password: string;
}) => {
    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
            cache: "no-store",
        });
        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("Lỗi khi gọi API /auth/register:", error);
        throw error;
    }
};

export const loginUser = async (credentials: { username: string; password: string }) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (!res.ok) throw new Error("Sai tên đăng nhập hoặc mật khẩu");

    const data = await res.json();
    saveToken(data.accessToken, data.expiresIn);
    return data;
};
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const token = getAccessToken();
    const res = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        },
    });
    if (res.status === 401) logout();
    return res;
};