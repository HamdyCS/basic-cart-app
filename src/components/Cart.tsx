import ProductDto from "../Dtos/productDto";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeFromCartById } from "../redux/slices/cartSlice";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const handleOnRemoveClick = (product: ProductDto) => {
    dispatch(removeFromCartById(product.id));
  };

  if (cart.length === 0) return <div>Cart is empty</div>;

  const tableRows = cart.map((item) => (
    <tr key={item.product.id} className="border-b border-dashed ">
      <td className=" p-3 pl-0">
        <div className="flex items-center product-img">
          <div className="relative inline-block shrink-0 rounded-2xl me-3">
            <img
              src={item.product.images[0]}
              className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
              alt={item.product.title}
            />
          </div>
          <div className="product-titel flex flex-col justify-start">
            <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
              {item.product.title}
            </div>
          </div>
        </div>
      </td>
      <td className="p-3 pr-0 text-end">
        <span className="quantity font-semibold text-light-inverse text-md/normal">
          {item.quantity}
        </span>
      </td>
      <td className="p-3 pr-0 text-end">
        <span className="product-price text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
          ${item.product.price.toFixed(2)}
        </span>
      </td>
      <td className="p-3 pr-0 text-end">
        <button
          className="btn remove-product-btn px-2 py-2 bg-slate-600 rounded-md text-white text-sm"
          onClick={() => handleOnRemoveClick(item.product)}
        >
          Remove
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="flex flex-wrap -mx-3 mb-5">
      <div className="w-full max-w-full px-3 mb-6  mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            <div className="flex-auto block py-8 pt-6 px-9">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead className="align-bottom">
                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 text-start min-w-[175px] product-titel">
                        Title
                      </th>
                      <th className="pb-3 text-end min-w-[100px] product-quantity">
                        Quantity
                      </th>
                      <th className="pb-3 text-end min-w-[100px] product-price">
                        Price
                      </th>
                      <th className="pb-3 text-end min-w-[100px] product-actions">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>{tableRows}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}>
                        <div className="product-price text-end align-baseline  px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg ">
                          ${totalPrice.toFixed(2)}
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
