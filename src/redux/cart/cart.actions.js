import { cartActionTypes } from "./cart.types";

export const toggleCart = (hidden) => ({
  type: cartActionTypes.TOGGLE_CART,
});
