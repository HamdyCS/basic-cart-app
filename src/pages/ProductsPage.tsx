import { useQuery } from "@tanstack/react-query";
import ProductsList from "../components/products/ProductsList";
import ProductDto from "../Dtos/productDto";
import { getProductsAsync } from "../services/productService";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function ProductsPage() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<ProductDto[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getProductsAsync();
      return products;
    },
  });

  if (isLoading) return <Loading></Loading>;
  if (error) return <Error errorMessage={error.message}></Error>;
  if (!products) return null;

  return <ProductsList products={products} />;
}
