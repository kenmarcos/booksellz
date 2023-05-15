import Link from "next/link";

import * as M from "@mui/material";

import * as S from "./styles";

interface BookCardProps {
  isbn13: string;
  image: string;
  title: string;
  price: string;
}

const BookCard = ({ isbn13, image, title, price }: BookCardProps) => {
  const titleSlug = title.replace(/,/g, "").replace(/ /g, "-");

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

          <M.CardContent>
            <M.Typography gutterBottom variant="body1" noWrap>
              {title}
            </M.Typography>

            <M.Typography variant="h4" color="text.primary">
              {price}
            </M.Typography>
          </M.CardContent>
        </Link>
      </M.CardActionArea>

      <S.CardActions>
        <M.Button fullWidth variant="contained">
          Buy Now
        </M.Button>

        <M.Button fullWidth variant="outlined">
          Add To Cart
        </M.Button>
      </S.CardActions>
    </M.Card>
  );
};

export default BookCard;
