import ProductDto from "../../Dtos/productDto";
import Product from "./Product";

interface ProductProps {
  products: ProductDto[];
}

export default function ProductsList({ products }: ProductProps) {
  const Products = products.map((product, index) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <div className="Products-list flex align-center justify-center lg:justify-between gap-5 flex-wrap ">
      {Products}
    </div>
  );
}
