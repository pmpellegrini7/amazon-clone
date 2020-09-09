export const initialState = {
  basket: [],
  user: null,
};

// SELECTOR
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // Original state was
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let auxBasket = [...state.basket];

      if (index >= 0) {
        auxBasket.splice(index, 1);
      } else {
        console.warn("Product wasn't removed...");
      }
      return { ...state, basket: auxBasket };

    case "CLEAN_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
