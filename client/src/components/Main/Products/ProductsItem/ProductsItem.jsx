import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia, Typography, Container, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useBusket } from '../../../../context/busketState';

export const Item = styled.li`
  list-style: none;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Images = styled.img`
  margin-bottom: 10px;
`;

export const ItemText = styled.p`
  margin-bottom: 10px;
  font-size: ${props => props.itemName ? "20px" : "16px"}
`;

// export const Button = styled.button`
//   width: 200px;
//   height: 40px;
//   background-color: white;
//   border: 1px solid black;
//   border-radius: 5px;
//   font-size: 16px;
//   margin-left: 10px;

//   transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

//   &:hover, &:focus {
//     border: medium none rgb(255,182,193);
//     box-shadow: rgb(255,105,180) 0 0 2px 2px;
//     outline: 0;
//     background-color: rgb(255,105,180, 0.3);
//   }
// `;







export const ProductsItem = ({ data }) => {

  // const itemId = nanoid();
// , removeFromBusket, busket
  const { addToBusket } = useBusket();

  return data.map(({ name, description, id, image, amount, price }) => {
    return (
      <Card
        sx={{mb: 5}}
        key={nanoid()}
        variant="outlined">
        <CardActionArea>
          {/* <Link to={`/${id}`}> */}
          <CardMedia
            component="img"
            image={image}
            alt={name} />
          {/* <Images src={image} alt="" /> */}
          <Container
            sx={{ pt: 2, pb: 2 }}
            maxWidth="sm">
            <Typography
              sx={{mb: 1}}
              align="center"
              variant="h5">{name}</Typography>
            <Typography
              sx={{mb: 1}}
            >{description}</Typography>
          {/* <ItemText>{description}</ItemText> */}
            <Typography
              align="center"
            >{price} ₴</Typography>
          </Container>
      {/* <ItemText>{price} ₴</ItemText> */}
      {/* </Link> */}
        </CardActionArea>
        <Stack
          sx={{ pt: 1, pb: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button color="secondary" size="small" variant="outlined">Повний опис</Button>
              <Button id={id} onClick={addToBusket} size="large" variant="outlined" endIcon={<AddIcon/>}>Додати у кошик</Button>
            </Stack>
      {/* <Button variant="contained" size="big" color="success">Додати у кошик</Button> */}
      </Card>
  )
  })

};

// endIcon={<AddShoppingCartIcon />}