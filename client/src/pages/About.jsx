

const rootRef = document.querySelector("#root");

export default function About() {

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

  function changeBackgroundColor() {
  rootRef.style.color = getRandomHexColor();
};

  return (
    <>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, sunt aliquid, vitae voluptatem assumenda impedit quidem, earum amet illum aliquam! Nihil qui sint voluptate iure tempore quasi doloribus tempora expedita, fugiat libero, modi necessitatibus fugit nam ipsa porro? Incidunt dolor minus vitae ducimus obcaecati. Magni totam sint soluta dignissimos?</p>
      <button onClick={changeBackgroundColor}>Make</button>
      </>
  )
}