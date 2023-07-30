// need to have a number formatter for the money amounts
// us dollars and currency passed in
// no decimal poiints if the amount is an integer

export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "usd",
  style: "currency",
  minimumFractionDigits: 0,
})
