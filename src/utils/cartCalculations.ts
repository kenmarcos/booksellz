export const calculateDiscount = (distinctItems: number, subtotal: number) => {
  let discount = 0;

  if (distinctItems === 2) {
    discount = -0.05 * subtotal;
  } else if (distinctItems === 3) {
    discount = -0.1 * subtotal;
  } else if (distinctItems === 4) {
    discount = -0.2 * subtotal;
  } else if (distinctItems >= 5) {
    discount = -0.25 * subtotal;
  }

  return discount;
};

export const calculateTotalCost = (subtotal: number, discount: number) => {
  const totalCost = subtotal + discount;

  return totalCost;
};
