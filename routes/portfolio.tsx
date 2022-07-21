/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Layout from '../components/Layout.tsx';


export const handler: Handlers = {
    async GET(_, ctx) {
        const projectsRes = await fetch('https://sqdgdvtvzzzbljrpopab.supabase.co/rest/v1/projects?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZGdkdnR2enp6YmxqcnBvcGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg0MjI0NzEsImV4cCI6MTk3Mzk5ODQ3MX0.arELUveKGHw8s2By2riKEiHpd5p0kmhv8aeB1V56isU');
        if (projectsRes.status === 404) {
            return ctx.render(null)
        }
        const projects = await projectsRes.json();
        return await ctx.render(projects);
    },
  };

export default function Portfolio({ data }: PageProps) {
  const sortedProjects = [...data].sort((a, b) => a.weight - b.weight);
  return (
    <Layout>
        <Head>
            <title>Portfolio | Brendon Folsom</title>
            <meta name="description" content='The portfolio of Brendon Folsom - the not-famous Front End Developer. Curious about my previous projects? Learn about them here.' />
            <meta property="og:title" content='Portfolio | Brendon Folsom' />
            <meta property="og:description" content='The portfolio of Brendon Folsom - the not-famous Front End Developer. Curious about my previous projects? Learn about them here.' />
            <meta property="og:type" content="website" />
            <meta property="og:url" content='https://www.brendonfolsom.com/portfolio' />
        </Head>
        <img class={tw`w-full md:w-3/4 lg:w-2/3 max-w-5xl pt-20 mx-auto`} src="https://res.cloudinary.com/animated-eagle/image/upload/v1612230077/brendonfolsom.com/portfolio.jpg" />
        <div class={tw`flex flex-wrap max-w-7xl items-start text-center mx-auto`}>
            {sortedProjects.map(project => {
                const projectLink = project.linkToSite;
                const snipImg = 'https://res.cloudinary.com/animated-eagle/image/upload/w_auto,dpr_auto,c_fill,g_auto,f_auto' + project.snipImg;
                return (
                    <>
                    <div class={tw`flex flex-wrap w-11/12 md:w-5/12 bg-white mb-24 mx-auto`} key={project.id}>
                        <a target="_blank" href={projectLink}>
                            <img class={tw`border border-b-0 border-black website-portfolio-img`} src={snipImg} width="100%" />
                        </a>
                        <div class={tw`flex flex-wrap w-full bg-coolgray items-center mx-auto border border-black shadow-md`}>
                            <div class={tw`w-5/6 py-3 font-ibm-serif text-left mx-auto client-needs-content`}>
                                <h6 class={tw`text-xs`}>Built with:</h6>
                                {project.technologies}
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
        <div class={tw`flex flex-wrap items-start w-11/12 lg:w-7/12 max-w-4xl mt-2 mb-12 mx-auto font-ibm-serif pb-12 text-center md:text-left`}>
            <div class={tw`w-5/6 leading-relaxed mx-auto`}>
                Want to learn more about me? Ask to see some Git repos or other professional resources by contacting me directly.  <a href="mailto:brefol@pm.me" class={tw`font-bold text-black text-right no-underline`}>
                    <p class={tw`font-ibm-serif text-xs`}>brefol@pm.me</p>
                </a>
            </div>
        </div>
    </Layout>
  );
}