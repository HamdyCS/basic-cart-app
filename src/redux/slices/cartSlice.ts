import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductDto from "../../Dtos/productDto";
import { stat } from "fs";

export type cartType = {
  product: ProductDto;
  quantity: number;
};

interface CartState {
  cart: cartType[];
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

function calcTotalPrice(cart: cartType[]) {
  return cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<cartType>) => {
      const existProduct = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existProduct) {
        existProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }

      state.totalPrice = calcTotalPrice(state.cart);
    },

    /**
     *
     * @param {number} action.payload is product id
     *
     */
    removeFromCartById(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );

      state.totalPrice = calcTotalPrice(state.cart);
    },
  },
});

export const { addToCart, removeFromCartById } = cartSlice.actions;
export default cartSlice.reducer;

//plain objects
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { stat } from "fs";

// // const serializeProduct = (product: ProductDto) => {
// //   return {
// //     id: product.id,
// //     title: product.title,
// //     description: product.description,
// //     category: product.category,
// //     price: product.price,
// //     images: product.images,
// //   };
// // };

// export type cartType = {
//   product: {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     images: string[];
//   };
//   quantity: number;
// };

// interface CartState {
//   cart: cartType[];
// }

// const initialState: CartState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<cartType>) => {
//       state.cart = state.cart.filter(
//         (item) => item.product.id !== action.payload.product.id
//       );

//       state.cart.push(action.payload);
//     },

//     /**
//      *
//      * @param {number} action.payload is product id
//      *
//      */
//     removeFromCartById(state, action: PayloadAction<number>) {
//       state.cart = state.cart.filter(
//         (item) => item.product.id !== action.payload
//       );
//     },
//   },
// });

// export const { addToCart, removeFromCartById } = cartSlice.actions;
// export default cartSlice.reducer;
