import { actionTypes } from "../type/action.type";

const initState: any = { isShow: false };
const displayCartReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_POPUP:
      return { ...state, isShow: !state.isShow };
    default:
      return state;
  }
};
export default displayCartReducer;
