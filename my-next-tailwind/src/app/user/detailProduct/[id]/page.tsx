type DetailProductPageProps = {
  params: {
    id: string;
  };
};
const DetailProductPage = ({ params }: DetailProductPageProps) => {
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID sản phẩm: {params.id}</p>
    </div>
  );
};
export default DetailProductPage;