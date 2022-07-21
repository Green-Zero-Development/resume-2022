/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import {tw} from "@twind";
import Header from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function layouts({children}:any) {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  )
}