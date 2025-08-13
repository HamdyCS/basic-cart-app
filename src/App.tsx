import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App text-xl">
      <Navbar />
      <div className=" container p-2 mx-auto ">
        <Routes>
          <Route index element={<h1 className="text-center">Home</h1>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
