/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer class={tw`flex flex-wrap w-full pb-32 md:py-4`}>
        <div class={tw`flex flex-wrap flex-col-reverse md:flex-row lg:items-center md:w-full mx-auto px-5 xs:px-10 md:px-20 lg:px-12 xl:px-20`}>
            <div class={tw`md:w-1/3 mx-auto pb-12 lg:pb-0`}>
            <div id="logo" class={tw`text-2xl xs:text-3xl sm:text-4xl md:text-4xl z-50`}>
                <a id="logo-text" href="/" class={tw`flex text-left no-underline`}>
                <h6 class={tw`font-ibm-serif text-sm font-bold text-black`}><div class={tw`p-1 w-10 bg-black`}></div>brendon folsom</h6>
                </a>
            </div>
            <p class={tw`font-ibm-serif text-3xs text-black font-bold leading-relaxed tracking-wider opacity-50`}>Copyright 2015 - {currentDate} | Brendon Folsom</p>
            </div>
            <div class={tw`flex flex-wrap md:w-2/3 ml-auto pt-4 md:pt-0 pb-12 md:pb-0`}>
            <div class={tw`flex flex-wrap ml-auto`}>
                <a href="tel:1+9127126692" class={tw`font-bold text-black text-right no-underline`}>
                    <p class={tw`font-ibm-serif text-xs pr-6`}>912-712-6692</p>
                </a>
                <a href="mailto:brefol@pm.me" class={tw`font-bold text-black text-right no-underline`}>
                    <p class="font-ibm-serif text-xs">brefol@pm.me</p>
                </a>
            </div>
            </div>
        </div>
    </footer>
  );
}