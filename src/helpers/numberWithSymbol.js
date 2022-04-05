export const numberWithSymbol = (number, symbol) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, symbol);
};
