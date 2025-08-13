import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <nav className="navbar bg-slate-800 mb-5 ">
      <div className="container mx-auto text-white p-2 py-5 flex flex-nowrap justify-between">
        <Link className="logo" to={"/"}>
          e-commerce
        </Link>
        <ul className="links list-none flex flex-nowrap gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">cart-{cart.length}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
