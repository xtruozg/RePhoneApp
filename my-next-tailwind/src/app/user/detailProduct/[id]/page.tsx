"use client";
import Image from "next/image";

type DetailProductPageProps = {
  product: any;
  detailProduct: any;
};

const DetailProductPage = ({ product, detailProduct }: DetailProductPageProps) => {
  const COLOR_MAP: Record<string, string> = {
    "Đen": "#000000",
    "Xanh": "#007AFF",
    "Trắng": "#FFFFFF",
    "Tím": "#B57EDC",
    "Đỏ": "#FF3B30",
    "Hồng": "#FFB6C1",
  };

  return (
    <div className="w-[80%] mx-auto py-8 text-black flex flex-col gap-10">
      <div className="flex gap-12">
        <div className="flex-1 flex flex-col items-center">
          <div className="border rounded-2xl p-4 bg-gray-50 w-full flex justify-center">
            <div className="w-[350px] h-[350px] bg-gray-200 flex items-center justify-center rounded-xl">
              Ảnh sản phẩm
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-xs">
              thumb 1
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-xs">
              thumb 2
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center text-xs">
              thumb 3
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold">{product?.tenSanPham}</h1>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-3xl font-bold text-blue-600">
              {detailProduct?.giaBan?.toLocaleString()}₫
            </span>
            <span className="text-gray-400 line-through text-2xl">{detailProduct?.giaBan ? (detailProduct.giaBan * 1.1).toLocaleString() : undefined}₫</span>
          </div>

          <div>
            <p className="font-medium mb-2">Dung lượng</p>
            <div className="flex gap-3">
              {product?.chiTietSanPhams?.map((item: any) => (
                <button
                  key={item.id}
                  className="px-4 py-2 border rounded-xl text-sm border-gray-300 hover:bg-blue-50 hover:border-blue-600 transition"
                >
                  {item.dungLuongBoNhoTrong}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium mb-2">Màu sắc</p>
            <div className="flex gap-3">
              {product?.chiTietSanPhams
                ?.map((item: any) => item.tenMauSac)
                .filter(
                  (value: string, index: number, self: string[]) =>
                    self.indexOf(value) === index
                )
                .map((colorName: string, index: number) => (
                  <div
                    key={index}
                    title={colorName}
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition"
                    style={{
                      backgroundColor: COLOR_MAP[colorName] || "#ccc",
                      borderColor: colorName === "Trắng" ? "#ddd" : "transparent",
                    }}
                  ></div>
                ))}
            </div>
          </div>
          <div className="border rounded-2xl p-4 bg-gray-50">
            <h3 className="font-semibold mb-3">🎁 Ưu đãi</h3>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Mở thẻ tín dụng HSBC hoàn tiền đến 2 triệu</li>
              <li>Giảm đến 4.000.000đ qua cổng thanh toán</li>
              <li>Trả góp 0% lãi suất, 0đ phí chuyển đổi</li>
              <li>Ốp chính hãng giảm 200.000đ</li>
              <li>Tai nghe mua kèm giảm đến 1.000.000đ</li>
              <li>Giảm 40% khi mua gói bảo hành</li>
              <li>Thu cũ lên đời tặng Voucher đến 4 triệu</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col justify-end gap-4">
            <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              Thêm vào giỏ hàng
            </button>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Mua ngay
            </button>
          </div>
          <div className="border rounded-2xl p-4 bg-gray-50">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</li>
              <li>Miễn phí 1 đổi 1 trong 30 ngày đầu tiên (nếu có lỗi do NSX)</li>
              <li>Bảo hành chính hãng 1 năm </li>
              <li>Giao hàng nhanh toàn quốc</li>
              <li>Tax Refund For Foreigners</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 text-center">Thông số kĩ thuật</h2>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex justify-between">
            <p>Công nghệ màn hình:</p>
          </div>
          <div className="flex justify-between">
            <p>Độ phân giải màn hình:</p>
          </div>
          <div className="flex justify-between">
            <p>Camera:</p>
          </div>
          <div className="flex justify-between">
            <p>Hệ điều hành & CPU:</p>
          </div>
          <div className="flex justify-between">
            <p>Tiện ích đặc biệt:</p>
          </div>
          <div className="flex justify-between">
            <p>Bộ nhớ trong:</p>
          </div>
          <div className="flex justify-between">
            <p>Sim & nghe gọi:</p>
          </div>
          <div className="flex justify-between">
            <p>Kích thước, khối lượng:</p>
          </div>
          <div className="flex justify-between">
            <p>Chất liệu khung viền:</p>
          </div>
          <div className="flex justify-between">
            <p>Kết nối:</p>
          </div>
          <div className="flex justify-between">
            <p>Tiện ích khác:</p>
          </div>
          <div className="flex justify-between">
            <p>Kích thước và Trọng lượng :</p>
          </div>
          <div className="flex justify-between">
            <p>Chống nước - Chống bụi:</p>
          </div>
          <div className="flex justify-between">
            <p>Pin:</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DetailProductPage;
