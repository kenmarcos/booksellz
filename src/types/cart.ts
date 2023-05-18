import { Book } from "./books";

export interface CartItem {
  book: Omit<Book, "subtitle" | "url">;
  quantity: number;
  totalPrice: number;
}
