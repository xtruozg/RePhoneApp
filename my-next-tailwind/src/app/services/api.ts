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
