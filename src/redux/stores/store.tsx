import { combineReducers, createStore } from "redux";
import displayCartReducer from "../reducer/DisplayCart.reducer.tsx";
import cartItemReduceer from "../reducer/CartItem.reducer.tsx";

const allReducer = combineReducers({
  displayCartReducer,
  cartItemReduceer,
});
const store = createStore(allReducer);

export { store };
