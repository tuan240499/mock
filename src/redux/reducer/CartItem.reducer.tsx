import { actionTypes } from "../type/action.type";
const initState: any = [];
interface actionProps {
  payload?: any;
  type: string;
}
const cartItemReduceer = (state = initState, action: actionProps) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const indexDuplicateItem = state.findIndex((item: any) => {
        return (
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
        );
      });
      if (indexDuplicateItem !== -1) {
        const newState = [...state];
        newState[indexDuplicateItem].qty += 1;
        return newState;
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    }
    case actionTypes.INCREASE_QTY_ITEM: {
      const updateState = state.map((item: any) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
        ) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      return updateState;
    }
    case actionTypes.DECREASE_QTY_ITEM: {
      const updateState = state.map((item: any) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color &&
          item.qty > 0
        ) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      });
      return updateState.filter((item: any) => item.qty > 0);
    }
    case actionTypes.REMOVE_ITEM_CART: {
      const newState = state.filter((item: any) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
        )
          return false;

        return true;
      });
      return newState;
    }
    case actionTypes.CLEAR_CART: {
      return initState;
    }
    default:
      return state;
  }
};

export default cartItemReduceer;
