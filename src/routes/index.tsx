import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <ul>
        <li>
          <Link href="/example-1">Example 1</Link>
        </li>
        <li>
          <Link href="/example-2">Example 2</Link>
        </li>
        <li>
          <Link href="/example-3">Example 3</Link>
        </li>
        <li>
          <Link href="/example-4">Example 4</Link>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
