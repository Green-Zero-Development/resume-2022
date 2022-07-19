/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Header() {
  const [mobileMenuActive, mobileMenuToggle] = useState<boolean>(false);
  const trigMobileMenu = () => {
    mobileMenuToggle(current => !current)
  }
  const headerSection = tw`bg-black pt-3 pb-2 z-50 header-container`;
  const headerBox = tw`flex justify-between mx-auto px-2 md:px-6 xl:px-16`;
  const logoBox = tw`col-span-2 md:col-span-1 flex flex-wrap mx-auto md:ml-0 pt-1 select-none header-box`;
  const logo = tw`text-2xl xs:text-3xl sm:text-4xl md:text-4xl z-50`;
  const logoLink = "/";
  const h1 = tw`font-ibm-serif text-xl font-bold text-white`;
  const mobileh1 = tw`font-ibm-serif text-xl font-bold text-black`;
  const h1border = tw`p-1 w-10 bg-white`;
  const mobileh1border = tw`p-1 w-10 bg-black`;
  const navSection = tw`hidden md:flex flex-wrap items-center`;
  const mobileNavSection = tw`flex flex-wrap`;
  const ul = tw`flex font-ibm-serif font-bold lowercase text-white desktop-menu`;
  const mobileul = tw`absolute top-24 left-0 w-full font-ibm-serif font-bold lowercase text-3xl px-6 z-50`;
  const navLink = tw`text-white pr-12 desktop-menu-item`;
  const mobileNavLink = tw`py-4 underline desktop-menu-item`;
  const socialIcons = tw`hidden md:flex items-center`;
  const mobileSocialIcons = tw`absolute top-80 left-0 flex items-center pt-12`;
  const gitHubLink = tw`w-6 mx-6`;
  const linkedInLink = tw`w-6`;
  const gitHubLinkActive = tw`w-12 mx-6`;
  const linkedInLinkActive = tw`w-12`;
  const mobileMenuClass = tw`hidden absolute top-0 left-0 w-full h-full bg-white`;
  const mobileMenuClassActive = tw`fixed top-0 left-0 w-full h-screen bg-white`;
  const mobileMenuTrig = tw`md:hidden fixed bottom-0 left-0 w-full pb-16`;
  const mobileMenuTrigActive = tw`hidden absolute bottom-0 left-0 w-full pb-16`;
  const mobileMenuIcon = tw`w-10 mx-auto`;
  const mobileMenuClose = tw`hidden absolute bottom-0 left-0 w-full pb-16 z-50`;
  const mobileMenuCloseActive = tw`absolute bottom-0 left-0 w-full pb-16`;
  const btn = tw`bg-white px-2 py-1`;
  const activeBtn = tw`bg-red-500 px-2 py-1`;
  return (
    <section id="header" class={headerSection}>
        <div class={headerBox}>
            <div class={logoBox}>
                <div class={logo}>
                    <a id="logo-text" class={tw`flex text-white text-left`} href={logoLink}>
                        <h1 class={mobileMenuActive ? mobileh1 : h1}>
                        <div class={mobileMenuActive ? mobileh1border : h1border}></div>
                        brendon folsom</h1>
                    </a>
                </div>
            </div>
            <nav id="navigation-wrapper" class={mobileMenuActive ? mobileNavSection : navSection}>
                <ul class={mobileMenuActive ? mobileul : ul}>
                    <li>
                        <a href="/" class={mobileMenuActive ? mobileNavLink : navLink}>what I can do</a>
                    </li>
                    <li>
                        <a href="/" class={mobileMenuActive ? mobileNavLink : navLink}>resume</a>
                    </li>
                    <li>
                        <a href="/" class={mobileMenuActive ? mobileNavLink : navLink}>portfolio</a>
                    </li>
                </ul>
                <div class={mobileMenuActive ? mobileSocialIcons : socialIcons} style="z-index: 50">
                    <a target="_blank" href="https://github.com/Green-Zero-Development">
                        <svg class={mobileMenuActive ? gitHubLinkActive : gitHubLink} fill={mobileMenuActive ? '#000000' : '#ffffff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
                    </a>
                    
                    <a target="_blank" href="https://www.linkedin.com/in/brendon-folsom-6253a6b6/">
                        <svg class={mobileMenuActive ? linkedInLinkActive : linkedInLink} fill={mobileMenuActive ? '#000000' : '#ffffff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                </div>
            </nav>
            <div class={mobileMenuActive ? mobileMenuTrigActive : mobileMenuTrig} onClick={trigMobileMenu}>
                <svg class={mobileMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z"/></svg>
            </div>
            <div class={mobileMenuActive ? mobileMenuClassActive : mobileMenuClass}>
                
                <div class={mobileMenuActive ? mobileMenuCloseActive : mobileMenuClose} onClick={trigMobileMenu}>
                    <svg class={mobileMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM330.3 344.5c8.562 10.11 7.297 25.27-2.828 33.83C323 382.1 317.5 384 312 384c-6.812 0-13.59-2.891-18.34-8.5L224 293.2L154.3 375.5C149.6 381.1 142.8 384 135.1 384C130.5 384 125 382.1 120.5 378.3c-10.12-8.562-11.39-23.72-2.828-33.83L192.6 256L117.7 167.5C109.1 157.4 110.4 142.2 120.5 133.7C130.6 125.1 145.8 126.4 154.3 136.5L224 218.8l69.67-82.34c8.547-10.12 23.72-11.41 33.83-2.828c10.12 8.562 11.39 23.72 2.828 33.83L255.4 256L330.3 344.5z"/></svg>
                </div>
            </div>
        </div>
    </section>
  );
}