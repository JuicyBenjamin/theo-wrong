import { component$, useSignal } from "@builder.io/qwik";

export type CatButtonProps = {
  catName: string;
}

export default component$<CatButtonProps>(({catName}) => {
  const isRevealed = useSignal(false)

  if (isRevealed.value) {
    return (
      <>
        <h2>{catName}</h2>
      </>
    )
  }
  return (
    <>
      <button onClick$={() => isRevealed.value = true}>🐱</button>
    </>
  );
})