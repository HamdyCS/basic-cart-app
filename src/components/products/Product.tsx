import ProductDto from "../../Dtos/productDto";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart, cartType } from "../../redux/slices/cartSlice";

interface ProductProps {
  product: ProductDto;
  ClassName?: string;
}

export default function Product({ product, ClassName }: ProductProps) {
  const dispatch = useAppDispatch();

  function handleOnAddToCartClick(product: ProductDto) {
    const cart: cartType = { product: product, quantity: 1 };
    dispatch(addToCart(cart));
  }

  return (
    <div
      className={`Product bg-slate-400 border-black p-5 w-[300px] max-w-[400px] shadow-slate-400 rounded-md ${ClassName}`}
    >
      <h3
        className={`title text-center mb-5 font-bold truncate `}
        title={product.title}
      >
        {product.title}
      </h3>
      <img
        className="img text-center mb-5 w-full h-36 object-contain"
        src={product.images[0]}
        alt={product.title}
        loading="lazy"
      ></img>
      <div className="description truncate mb-5" title={product.description}>
        {product.description}
      </div>
      <div className="text-center">
        <button
          className="btn add-to-cart-btn px-4 py-2 bg-slate-600 rounded-md"
          onClick={handleOnAddToCartClick.bind(null, product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
