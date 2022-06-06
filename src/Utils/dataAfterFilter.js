export const dataAfterFilter = (products, currState) => {
  let returnProducts = [...products];
  returnProducts = returnProducts.filter(
    (ele) => Number(ele.price) <= Number(currState.price)
  );
  if (currState.sortBy !== "NONE") {
    if (currState.sortBy === "HIGH_TO_LOW") {
      returnProducts.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    if (currState.sortBy === "LOW_TO_HIGH") {
      returnProducts.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    }
  }
  if (currState.brand.length > 0) {
    returnProducts = returnProducts.filter((ele) =>
      currState.brand.includes(ele.brand.toLowerCase())
    );
  }
  if (currState.gender.length > 0) {
    returnProducts = returnProducts.filter((ele) =>
      currState.gender.includes(ele.gender.toLowerCase())
    );
  }
  if (currState.size.length > 0) {
    returnProducts = returnProducts.filter((ele) =>
      currState.size.includes(ele.size.toLowerCase())
    );
  }
  return returnProducts;
};
