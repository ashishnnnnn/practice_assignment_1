export const filterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE":
      const currPrice = action.payload;
      return { ...state, price: Number(currPrice) };
    case "SORTBY":
      return { ...state, sortBy: action.payload };
    case "BRAND":
      const brand = action.payload;
      if (state.brand.includes(brand)) {
        return { ...state, brand: state.brand.filter((ele) => ele !== brand) };
      } else {
        return { ...state, brand: [...state.brand, brand] };
      }
    case "SIZE":
      const size = action.payload;
      if (state.size.includes(size)) {
        return { ...state, size: state.size.filter((ele) => ele !== size) };
      } else {
        return { ...state, size: [...state.size, size] };
      }

    case "GENDER":
      const gender = action.payload;
      if (state.gender.includes(gender)) {
        return {
          ...state,
          gender: state.gender.filter((ele) => ele !== gender),
        };
      } else {
        return { ...state, gender: [...state.gender, gender] };
      }

    case "CLEAR_FILTER":
      return {
        price: 1000,
        sortBy: "NONE",
        brand: [],
        gender: [],
        size: [],
      };
    default:
      return state;
  }
};
