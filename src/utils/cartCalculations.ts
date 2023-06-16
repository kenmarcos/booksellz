const discounts = new Map([
  [2, -0.05],
  [3, -0.1],
  [4, -0.2],
  [5, -0.25],
]);

const MIN_ITEMS_QUANTITY = 2;
const MAX_ITEMS_QUANTITY = 5;

export const calculateDiscount = (distinctItems: number, subtotal: number) => {
  if (distinctItems < MIN_ITEMS_QUANTITY) {
    return 0;
  }

  if (distinctItems > MAX_ITEMS_QUANTITY) {
    return discounts.get(MAX_ITEMS_QUANTITY)! * subtotal;
  }

  return discounts.get(distinctItems)! * subtotal;
};

export const calculateTotalCost = (subtotal: number, discount: number) => {
  const totalCost = subtotal + discount;

  return totalCost;
};
