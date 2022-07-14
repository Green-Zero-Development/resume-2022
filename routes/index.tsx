/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw } from "@twind";
import Header from "../islands/Header.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
      </div>
    </>
  );
}
