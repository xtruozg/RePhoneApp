"use client";
import { useState } from "react";

type DetailProductPageProps = {
  product: any;
  detailProduct: any;
};
const SpecItem = ({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) => {
  if (!value) return null;

  return (
    <div className="flex justify-between border-b border-gray-200 py-3">
      <p className="text-gray-600 font-medium">{label}</p>
      <p className="text-gray-900 text-right flex-1 ml-4">{value}</p>
    </div>
  );
};
const DetailProductPage = ({
  product,
  detailProduct,
}: DetailProductPageProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageUrls = detailProduct?.anhUrls || [];
  const currentImage = imageUrls[selectedImageIndex] || imageUrls[0] || "";
  const COLOR_MAP: Record<string, string> = {
    Đen: "#000000",
    Xanh: "#007AFF",
    Trắng: "#FFFFFF",
    Tím: "#B57EDC",
    Đỏ: "#FF3B30",
    Hồng: "#FFB6C1",
  };

  return (
    <div className="w-[80%] mx-auto py-8 text-black flex flex-col gap-10">
      <div className="flex gap-12">
        <div className="flex-1 flex flex-col items-center">
          <div className="border rounded-2xl p-4 bg-gray-50 w-full flex justify-center">
            <div className="w-[350px] h-[350px] flex items-center justify-center rounded-xl overflow-hidden bg-white relative">
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={product?.tenSanPham || "Sản phẩm"}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 flex-col gap-2">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">Không có ảnh</p>
                  <p className="text-xs mt-2 max-w-[300px] break-words">
                    Debug: imageUrls = {JSON.stringify(imageUrls)}
                  </p>
                </div>
              )}
            </div>
          </div>
          {imageUrls.length > 1 && (
            <div className="flex gap-3 mt-4 flex-wrap justify-center">
              {imageUrls.slice(0, 4).map((url: string, index: number) => (
                <div
                  key={index}
                  onClick={() => {
                    console.log("Selecting image index:", index, "URL:", url);
                    setSelectedImageIndex(index);
                  }}
                  className={`w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer transition ${
                    selectedImageIndex === index
                      ? "ring-2 ring-blue-500"
                      : "hover:ring-2 hover:ring-blue-300"
                  }`}
                >
                  <img
                    src={url}
                    alt={`Ảnh ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold">{product?.tenSanPham}</h1>
            {product?.ma && (
              <p className="text-gray-500 text-sm mt-1">Mã SP: {product.ma}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-blue-600">
                {detailProduct?.giaBan?.toLocaleString("vi-VN")}₫
              </span>
              {detailProduct?.giaBan && (
                <span className="text-gray-400 line-through text-lg">
                  {(detailProduct.giaBan * 1.1).toLocaleString("vi-VN")}₫
                </span>
              )}
            </div>
            {detailProduct?.giaBan && (
              <div className="inline-flex items-center bg-red-50 text-red-600 px-3 py-1 rounded-lg text-sm font-medium w-fit">
                Tiết kiệm {(detailProduct.giaBan * 0.1).toLocaleString("vi-VN")}
                ₫ (10%)
              </div>
            )}
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
                      borderColor:
                        colorName === "Trắng" ? "#ddd" : "transparent",
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
              <li>
                Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C
              </li>
              <li>
                Miễn phí 1 đổi 1 trong 30 ngày đầu tiên (nếu có lỗi do NSX)
              </li>
              <li>Bảo hành chính hãng 1 năm </li>
              <li>Giao hàng nhanh toàn quốc</li>
              <li>Tax Refund For Foreigners</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Thông số kĩ thuật
        </h2>
        <div className="flex flex-col">
          {(product?.tenManHinh || product?.chuanManHinh) && (
            <SpecItem
              label="Công nghệ màn hình"
              value={`${product?.tenManHinh || ""} ${
                product?.chuanManHinh || ""
              }`.trim()}
            />
          )}
          <SpecItem label="Độ phân giải" value={product?.doPhanGiai} />
          <SpecItem label="Kích thước màn hình" value={product?.kichThuoc} />
          <SpecItem
            label="Độ sáng tối đa"
            value={product?.doSangToiDa ? `${product.doSangToiDa} nits` : null}
          />
          <SpecItem label="Tần số quét" value={product?.tanSoQuet} />
          <SpecItem label="Kiểu màn hình" value={product?.kieuManHinh} />

          <SpecItem label="Camera sau" value={product?.cumSauCamera} />
          <SpecItem label="Camera trước" value={product?.cumTruocCamera} />

          <SpecItem
            label="Chipset"
            value={
              product?.tenCpu
                ? `${product.tenCpu}${
                    product?.soNhan ? ` (${product.soNhan} nhân)` : ""
                  }`
                : null
            }
          />
          <SpecItem label="GPU" value={product?.tenGpu} />

          <SpecItem label="RAM" value={detailProduct?.dungLuongRam} />
          <SpecItem
            label="Bộ nhớ trong"
            value={detailProduct?.dungLuongBoNhoTrong}
          />
          <SpecItem label="Bộ nhớ ngoài" value={product?.tenBoNhoNgoai} />

          {(product?.dungLuongPin || product?.tenPin) && (
            <SpecItem
              label="Pin"
              value={`${product?.dungLuongPin || ""} ${
                product?.tenPin || ""
              }`.trim()}
            />
          )}
          <SpecItem label="Công suất sạc" value={product?.congSac} />

          <SpecItem
            label="SIM"
            value={
              product?.soLuongSimHoTro
                ? `${product.soLuongSimHoTro} SIM ${
                    product?.cacLoaiSimHoTro || ""
                  }`
                : product?.cacLoaiSimHoTro
            }
          />
          <SpecItem label="Mạng di động" value={product?.tenMang} />

          <SpecItem label="Chất liệu khung" value={product?.chatLieuKhung} />
          <SpecItem
            label="Chất liệu mặt lưng"
            value={product?.chatLieuMatLung}
          />

          <SpecItem label="Cổng sạc" value={product?.congSac} />
          <SpecItem label="Công nghệ hỗ trợ" value={product?.congNgheHoTro} />
          <SpecItem label="Nhà sản xuất" value={product?.tenNhaSanXuat} />
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
