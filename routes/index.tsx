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
      <img class={tw`w-full md:!w-3/4 lg:!w-2/3 max-w-5xl pt-6 mx-auto`} src="https://res.cloudinary.com/animated-eagle/image/upload/v1612230077/brendonfolsom.com/what-I-can-do.jpg" />
      <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-3xl bg-coolgray border border-black mx-auto font-ibm-serif mt-6 py-12 shadow-md`}>
        <div class={tw`flex flex-wrap items-start w-full md:!w-1/3 md:border-r border-coolblack text-center md:text-right pr-3`}>
          <span class={tw`w-full`}>development project</span>
          <a href="https://www.parosfilms.com/" class={tw`w-full`} target="_blank">
            <span class={tw`text-sm underline`}>Paros Films</span>
          </a>
          <div class={tw`flex font-thin text-xs text-center md:text-right pt-3 md:pl-4 mx-auto md:mx-0 md:ml-auto`}>
            11ty | AlpineJS | wordpress | tailwindCSS
          </div>
        </div>
        <div class={tw`w-5/6 md:w-2/3 leading-relaxed pt-5 md:pt-0 md:pl-3 md:pr-12 text-center md:text-left mx-auto md:mx-0`}>
          This site includes an interactive onboarding process and client dashboard that I built while working closely with the owners of Paros Films. The site is pre-built from JSON data, so we had to make creative use of LocalStorage and URL queries to maintain state and serve the client relevant information.
        </div>
      </div>
      <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-3xl bg-coolgray border border-black mx-auto font-ibm-serif mt-6 py-12 shadow-md`}>
        <div class={tw`flex flex-wrap items-start w-full md:!w-1/3 md:border-r border-coolblack text-center md:text-right pr-3`}>
          <span class={tw`w-full`}>development project</span>
          <a href="https://www.mixwithintegrity.com/" class={tw`w-full`} target="_blank">
            <span class={tw`text-sm underline`}>Integrity Compounding Pharmacy</span>
          </a>
          <div class={tw`flex font-thin text-xs text-center md:text-right pt-3 md:pl-4 mx-auto md:mx-0 md:ml-auto`}>
            11ty | AlpineJS | wordpress | tailwindCSS
          </div>
        </div>
        <div class={tw`w-5/6 md:w-2/3 leading-relaxed pt-5 md:pt-0 md:pl-3 md:pr-12 text-center md:text-left mx-auto md:mx-0`}>
          I delivered this project against a very restrictive deadline. With a little under a week to build the entire site from scratch, I threw everything I had at it. Via a combination of my own boilerplate components, knowledge of the JAMstack (and the midnight oil), I was able to meet the deadline and launch the site in time for a company conference!
        </div>
      </div>
      <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-3xl bg-coolgray border border-black mx-auto font-ibm-serif mt-6 py-12 shadow-md`}>
        <div class={tw`flex flex-wrap items-start w-full md:!w-1/3 md:border-r border-coolblack text-center md:text-right pr-3`}>
          <span class={tw`w-full`}>development project</span>
          <a href="https://www.abidecares.com/" class={tw`w-full`} target="_blank">
            <span class={tw`text-sm underline`}>Abide Cares</span>
          </a>
          <div class={tw`flex font-thin text-xs text-center md:text-right pt-3 md:pl-4 mx-auto md:mx-0 md:ml-auto`}>
            11ty | AlpineJS | wordpress | tailwindCSS
          </div>
        </div>
        <div class={tw`w-5/6 md:w-2/3 leading-relaxed pt-5 md:pt-0 md:pl-3 md:pr-12 text-center md:text-left mx-auto md:mx-0`}>
          This project required integration with a zip code API. It was really fun to build! If a user inputted a zip, the function would feed that zip to the api and return the care homes closest to their location. I built many of the interactive components on this site via AlpineJS. It worked out so well, I'll probably ditch my older vanilla JS components for Alpine based ones.
        </div>
      </div>
      <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-3xl bg-coolgray border border-black mx-auto font-ibm-serif mt-6 py-12 shadow-md`}>
        <div class={tw`flex flex-wrap items-start w-full md:!w-1/3 md:border-r border-coolblack text-center md:text-right pr-3`}>
          <span class={tw`w-full`}>development project</span>
          <a href="https://sequence-events.com/" class={tw`w-full`} target="_blank">
            <span class={tw`text-sm underline`}>sequence-events.com</span>
          </a>
          <div class={tw`flex font-thin text-xs text-center md:text-right pt-3 md:pl-4 mx-auto md:mx-0 md:ml-auto`}>
            11ty | wordpress | hubspot | tailwindCSS
          </div>
        </div>
        <div class={tw`w-5/6 md:w-2/3 leading-relaxed pt-5 md:pt-0 md:pl-3 md:pr-12 text-center md:text-left mx-auto md:mx-0`}>
        I managed this project from design file to production. The backend is Wordpress and the client can make edits to the site autonomously. When edits are commited via the Wordpress, a build hook is triggered over on Netlify and the 11ty frontend is built on demand. The client's blog was on Hubspot before project start and remains there now. I call the Hubspot API when building 11ty to fetch blog names, descriptions and featured images for use on the website.<br /> <br /> <u>Problems I had on this project:</u> <br /> We weren't aware of the client's Hubspot blog until weeks into the project's development. I had to learn to use the Hubspot API very quickly to meet milestones and delivery commitments.
        </div>
      </div>
      <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-3xl bg-coolgray border border-black mx-auto font-ibm-serif mt-6 py-12 shadow-md`}>
        <div class={tw`flex flex-wrap items-start w-full md:!w-1/3 md:border-r border-coolblack text-center md:text-right pr-3`}>
          <span class={tw`w-full`}>development project</span>
          <a href="https://www.bullochacademy.com/" class={tw`w-full`} target="_blank">
            <span class={tw`text-sm underline`}>bullochacademy.com</span>
          </a>
          <div class={tw`flex font-thin text-xs text-center md:text-right pt-3 md:pl-4 mx-auto md:mx-0 md:ml-auto`}>
            11ty | wordpress | tailwindCSS
          </div>
        </div>
        <div class={tw`w-5/6 md:w-2/3 leading-relaxed pt-5 md:pt-0 md:pl-3 md:pr-12 text-center md:text-left mx-auto md:mx-0`}>
          This client required a ton of pages to house hundreds of lines of content and important links. I created dozens of unique components to ensure the academy's content is displayed properly and as user-friendly as possible. <br /> <br /> <u>Problems I had on this project:</u> <br /> Using the JAMstack to create such a content-heavy site had its challenges. To minimize possible downtime, I duel deployed the site on Netlify and Vercel. I also built a robust Wordpress-based backend that will allow the school to update pages, staff, sports and all kinds of other essential information without my help.
        </div>
      </div>
      <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-3xl bg-coolgray border border-black mx-auto font-ibm-serif mt-6 py-12 shadow-md`}>
        <div class={tw`flex flex-wrap items-start w-full md:!w-1/3 md:border-r border-coolblack text-center md:text-right pr-3`}>
          <span class={tw`w-full`}>web hosting</span>
          <a href="https://www.greenzero.us/" class={tw`w-full`} target="_blank">
            <span class={tw`text-sm underline`}>around 40 websites</span>
          </a>
          <div class={tw`flex font-thin text-xs text-center md:text-right pt-3 md:pl-4 mx-auto md:mx-0 md:ml-auto`}>
            linode | inmotion | cpanel | WHM
          </div>
        </div>
        <div class={tw`w-5/6 md:w-2/3 leading-relaxed pt-5 md:pt-0 md:pl-3 md:pr-12 text-center md:text-left mx-auto md:mx-0`}>
          In late 2020, I purchased the hosting clientele of another company. The 40-something sites are all on Wordpress, and most were hosted on a dedicated InMotion server running WHM/Cpanel. I've worked to move about 20 of them to a Linode instance and still host some using InMotion's services. Since the purchase, I've gained experience using WHM/Cpanel as well as a number of Wordpress-focused server management tools. <br /> <br /> <u>Note:</u> <br /> The billing and management of these hosting clients are managed via my LLC (Green Zero Development). You'll find its site linked in this box. Please be gentle. The design is old, bad and neglected.
        </div>
      </div>
    </>
  );
}