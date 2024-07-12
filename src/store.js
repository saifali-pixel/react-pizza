import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/user/userSlice";
import CartReducer from "./features/cart/CartSlice";

const store = configureStore({
  reducer: { user: UserReducer, cart: CartReducer },
});

export default store;
