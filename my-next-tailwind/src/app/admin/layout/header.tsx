export default function HeaderAdmin() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <p className="font-bold text-black text-[22px]">Quản lý cửa hàng iSHOP</p>
          <p className="text-gray-400 text-[16px] mt-1">Hệ thống quản lý bán hàng</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <svg
              className="text-themeColor-500 w-[30px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>

          <div>
            <svg
              className="text-themeColor-500 w-[30px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
