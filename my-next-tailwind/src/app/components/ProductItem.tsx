"use client";

import Image from "next/image";

interface ProductItemProps {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    isNew?: boolean;
    image: string;
}

export default function ProductItem({
    id,
    name,
    price,
    oldPrice,
    discount = 0,
    isNew = false,
    image,
}: ProductItemProps) {
    return (
        <div className="w-[250px] h-[370px] relative bg-white shadow-sm rounded-xl p-2 pt-8 border hover:shadow-md transition-all duration-300">
            {discount > 0 && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    Giảm {discount}%
                </div>
            )}
            {isNew && (
                <div className="absolute top-2 right-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full border border-green-300">
                    Mới
                </div>
            )}
            <div className="w-full flex justify-center hover:cursor-pointer">
                <Image
                    src={image || "/default-image.png"}
                    alt={name}
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>
            <div className="mt-3">
                <h3 className="text-[16px] line-clamp-1 text-black font-bold">{name}</h3>
                <div className="mt-2">
                    <p className="text-blue-600 font-semibold text-base">
                        {price.toLocaleString("vi-VN")}đ
                    </p>
                    {oldPrice && (
                        <p className="text-gray-400 text-sm line-through">
                            {oldPrice.toLocaleString("vi-VN")}đ
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
