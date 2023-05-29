import Link from "next/link";

import * as M from "@mui/material";

import * as S from "./styles";
import useBookCard from "./useBookCard";

export interface BookCardProps {
  isbn13: string;
  image: string;
  title: string;
  price: string;
}

const BookCard = ({ isbn13, image, title, price }: BookCardProps) => {
  const { titleSlug, handleAddToCart, handleBuy } = useBookCard({
    image,
    title,
    price,
    isbn13,
  });

  return (
    <M.Card>
      <M.CardActionArea component="div">
        <Link href={`/books/${titleSlug}/${isbn13}`}>
          <M.CardMedia
            component="img"
            height="180"
            image={image}
            title={title}
            loading="lazy"
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
