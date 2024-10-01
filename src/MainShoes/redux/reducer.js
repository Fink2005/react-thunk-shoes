const initialState = {};

export let reducerShoes = (state = initialState, { type, payload }) => {
  switch (type) {
    case type:
      return { ...state, ...payload };

    default:
      return state;
  }
};
