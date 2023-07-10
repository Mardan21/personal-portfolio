import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import WorkExperience from '../../components/WorkExperience'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import ContactMe from '../../components/ContactMe'
import Head from 'next/head'
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import { GetStaticProps, GetServerSideProps, NextPage } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../../typings'
import { groq } from "next-sanity"
import { sanityClient } from '../../sanity'
import sanityCli from '../../sanity.cli'
import { ArrowUturnUpIcon } from '@heroicons/react/24/solid'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[#211717]/[0.9] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F58B54]/80">
      <Head>
        <title>Mardan&lsquo;s Portfolio</title>
      </Head> 

      <Header socials={socials}/>
      
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <div className="h-10 w-10 bg-[#211717]/90 rounded-full flex items-center justify-center  cursor-pointer">
              <ArrowUturnUpIcon className="h-7 w-7 hover:grayscale-100 text-[#DFDDC7]  animate-pulse"/>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfoQuery = groq`*[_type == 'pageInfo'][0]`;
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);

  const experienceQuery = groq`*[_type == "experience"]{..., technologies[]->}`;
  const experiences: Experience[] = await sanityClient.fetch(experienceQuery);

  const skillsQuery = groq`*[_type == "skill"]`;
  const skills: Skill[] = await sanityClient.fetch(skillsQuery);

  const projectsQuery = groq`*[_type == "project"]{..., technologies[]->}`;
  const projects: Project[] = await sanityClient.fetch(projectsQuery);

  const socialsQuery = groq`*[_type == "social"]`;
  const socials: Social[] = await sanityClient.fetch(socialsQuery);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  }; 
};