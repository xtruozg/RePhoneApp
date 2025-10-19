import { useRouter } from "next/navigation";
type CartPageProps = {
    setOpenCart: (open: boolean) => void;
};
const CartPage = ({ setOpenCart }: CartPageProps) => {
    const router = useRouter();
    const handleDetailCart = () => {
        router.push('/user/detailCart');
        setOpenCart(false);
    };
    return (
        <div>
            <button
                onClick={() => setOpenCart(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
            >
                ✕
            </button>
            <h2 className="text-lg text-black">Giỏ hàng của bạn</h2>
            <p className="text-gray-500">Giỏ hàng hiện đang trống.</p>
            <div className="flex items-center justify-between w-full mt-4">
                <span className="text-lg font-medium text-gray-700">
                    Tổng: <span className="text-themeColor-500 font-semibold">3 sản phẩm</span>
                </span>

                <button onClick={handleDetailCart} className="px-4 py-2 bg-themeColor-500 bg-blue-500 text-white rounded-lg hover:bg-themeColor-600 transition-all">
                    Xem giỏ hàng
                </button>
            </div>
        </div>
    );
};
export default CartPage;
