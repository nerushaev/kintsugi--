import { Item, Title, Image, TextWrapper, Text } from './BusketList.styled';

export default function BusketItem({ data }) {
  console.log(data);
  return data.map(({ name, description, _id, image, price, quantity }) => {
    return (
      <Item key={_id}>
        <TextWrapper>
        <Image src={image} alt="" />
        </TextWrapper>
        <TextWrapper>
        <Title>{name}</Title>
        </TextWrapper>
        <TextWrapper>
        <Text>{price}грн.</Text>
        </TextWrapper>
        <TextWrapper>
        <Text>{description}</Text>
        </TextWrapper>
        <TextWrapper>
        <Text>{quantity}</Text>
        </TextWrapper>
      </Item>
    )
  })
}
