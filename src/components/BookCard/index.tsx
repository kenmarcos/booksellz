import Link from "next/link";
import { useRouter } from "next/router";

import * as M from "@mui/material";

import * as S from "./styles";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { CartItem } from "@/types/cart";

interface BookCardProps {
  isbn13: string;
  image: string;
  title: string;
  price: string;
}

const BookCard = ({ isbn13, image, title, price }: BookCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const titleSlug = title.replace(/,/g, "").replace(/ /g, "-");

  const item: CartItem = {
    book: {
      image,
      isbn13,
      price,
      title,
    },
    quantity: 1,
    totalPrice: Number(price.slice(1)),
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleBuy = () => {
    dispatch(addToCart(item));

    router.push("/cart");
  };

  return (
    <M.Card>
      <M.CardActionArea component="div">
        <Link href={`/books/${titleSlug}/${isbn13}`}>
          <M.CardMedia
            component="img"
            height="180"
            image={image}
            title={title}
          />
          <M.Divider />

          <S.CardContent>
            <M.Typography gutterBottom variant="body1">
              {title}
            </M.Typography>

            <M.Typography variant="h4" color="text.primary">
              {price}
            </M.Typography>
          </S.CardContent>
        </Link>
      </M.CardActionArea>

      <S.CardActions>
        <M.Button fullWidth variant="contained" onClick={handleBuy}>
          Buy Now
        </M.Button>

        <M.Button fullWidth variant="outlined" onClick={handleAddToCart}>
          Add To Cart
        </M.Button>
      </S.CardActions>
    </M.Card>
  );
};

export default BookCard;
