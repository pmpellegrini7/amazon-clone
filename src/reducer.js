export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // Original state was
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
