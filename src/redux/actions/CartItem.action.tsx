import { actionTypes } from "../type/action.type";
export function addItemToCart(payload: any) {
  return { type: actionTypes.ADD_ITEM_TO_CART, payload };
}
export function increaseQtyItem(payload: any) {
  return { type: actionTypes.INCREASE_QTY_ITEM, payload };
}
export function decreaseQtyItem(payload: any) {
  return { type: actionTypes.DECREASE_QTY_ITEM, payload };
}
export function removeItemCart(payload: any) {
  return { type: actionTypes.REMOVE_ITEM_CART, payload };
}
export function clearCart() {
  return { type: actionTypes.CLEAR_CART };
}
