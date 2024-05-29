import { component$ } from "@builder.io/qwik";
import CatButton from "./cat-button";



export default component$(() => {
  const allCatNames = ['Fluffy', 'Whiskers', 'Socks', 'Mittens']

  const randomCatName = allCatNames[Math.floor(Math.random() * allCatNames.length)]
  return (
    <>
      <h1>Example 1</h1>
      <CatButton catName={randomCatName} />
      <CatButton catName={randomCatName} />
      <CatButton catName={randomCatName} />
      <CatButton catName={randomCatName} />
    </>
  );
})