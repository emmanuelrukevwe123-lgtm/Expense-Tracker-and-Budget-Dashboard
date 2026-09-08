export const makeId = () => {
  return crypto.randomUUID();
};

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (amount) => {
  return currencyFormat.format(amount);
};
