export default function ProductsDetails({data}) {
  const { name, image, description, price } = data;
  return (
    <div>
      <img src={image}></img>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
};
