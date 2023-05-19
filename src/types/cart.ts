import { Book } from "./books";
export interface CartItem {
  book: Omit<Book, "subtitle" | "url">;
  quantity: number;
  totalPrice: number;
}

export interface Cart {
  cartItems: CartItem[];
  totalItems: number;
  distinctItems: number;
  discount: number;
  subtotal: number;
  totalCost: number;
}
