/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import Layout from '../components/Layout.tsx';

export default function Resume() {
  return (
    <Layout>
        <img class={tw`w-full md:w-3/4 lg:w-2/3 max-w-5xl pt-20 pb-6 mx-auto`} src="https://res.cloudinary.com/animated-eagle/image/upload/v1612230084/brendonfolsom.com/resume.jpg" />
        <div class={tw`flex flex-wrap max-w-7xl mx-auto`}>
            <div class={tw`flex flex-wrap w-5/6 mx-auto`}>
                <div class={tw`w-full bg-coolgray border border-black font-ibm-serif text-xl lg:text-2xl p-4 mx-auto italic leading-tight`}>
                    Professional Experience
                </div>
                <div class={tw`sm:flex flex-wrap w-11/12 pb-24 mx-auto`}>
                    <div class={tw`sm:w-1/2 font-ibm-serif text-base lg:text-2xl pt-8 mx-auto`}>
                        <p>Front End Developer</p>
                        <p>Mariposa Interactive</p>
                        <p>FEB 2015 - JAN 2017</p>
                    </div>
                    <div class={tw`sm:w-1/2 font-ibm-serif text-base lg:text-2xl pt-8 mx-auto`}>
                        <p>Full Stack Developer</p>
                        <p>Green Zero Development</p>
                        <p>FEB 2017 - Current</p>
                    </div>
                </div>
                <div class={tw`w-full bg-coolgray border border-black font-ibm-serif text-xl lg:text-2xl p-4 mx-auto italic leading-tight`}>
                Education
                </div>
                <div class={tw`w-11/12 font-ibm-serif text-base lg:text-xl pt-8 pb-24 mx-auto`}>
                    <p class={tw`text-lg font-bold italic pb-4`}>Georgia Southern University | B.A. English</p>
                    <p>Graduated December 2014</p>
                </div>
                <div class={tw`w-full bg-coolgray border border-black font-ibm-serif text-xl lg:text-2xl p-4 mx-auto italic leading-tight`}>
                    Contact
                </div>
                <div class={tw`sm:flex flex-wrap w-11/12 pb-24 mx-auto`}>
                    <div class={tw`sm:w-1/2 font-ibm-serif text-base lg:text-2xl pt-8 mx-auto`}>
                        <p>1425 Kennedy Pond Rd.</p>
                        <p>Statesboro, GA 30458</p>
                        <p>+1 912 712 6692</p>
                        <p>brefol@pm.me</p>
                    </div>
                    <div class={tw`sm:w-1/2 font-ibm-serif text-base lg:text-2xl pt-8 mx-auto`}>
                        <img src="https://res.cloudinary.com/animated-eagle/image/upload/v1610670280/brendonfolsom.com/brendon-at-play.jpg" />
                    </div>
                </div>
            </div>
        </div>
        <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-4xl mt-2 mb-12 mx-auto font-ibm-serif pt-24 pb-12 text-center`}>
            <div class={tw`w-5/6 leading-relaxed mx-auto`}>
                Looking for projects? Visit my <a href="/portfolio/" class={tw`underline`}>portfolio page.</a>
            </div>
        </div>
    </Layout>
  );
}