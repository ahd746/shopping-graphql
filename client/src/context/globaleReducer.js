export const globalReducer = (state, action) => {
  switch (action.type) {

    case ('ADD_PRODUCT'):
      return {
        ...state,
        products: [action.payload, ...state.products]
      }

    default:
      return state;
  }
}