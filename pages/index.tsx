import Head from "next/head";
import { ProjectCard } from "../components/ProjectCard";
import Link from "next/link";
import NavComponent from "../components/navComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brett Szlachciuk Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-gradient-to-b from-gray-200 to-gray-100">
        <section className="min-h-screen">
          <NavComponent />
          <div className="flex flex-col text-center text-blue-gray-900 mb-8 w-1/3 ml-auto mr-auto">
            <div className="text-5xl font-extrabold min-w-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 min-w-">
                Brett Szlachciuk
              </span>
            </div>
            <h3 className="text-2xl py-2">Software Engineer </h3>
            <p className="text-md py-5 leading-8 min-w-full ">
              I am a new grad from Northeastern University looking for software
              engineering roles. I have SDET work experience and am skilled in
              Java, TypeScript, and React.
            </p>
          </div>

          <h1 className="flex justify-center text-3xl text-gray-9s00 mb-8">
            Projects
          </h1>
          <ul className="flex justify-center space-x-16">
            <li>
              <Link href="/projects/politiciandb">
                <ProjectCard
                  projectTitle="Politician Database Application"
                  technologies="Java, SQL"
                  imgSrc="politician"
                ></ProjectCard>
              </Link>
            </li>
            <li>
              <Link href="/projects/stravaextension">
                <ProjectCard
                  projectTitle="Strava Extension"
                  technologies="JavaScript, React, Express, REST"
                  imgSrc="strava"
                ></ProjectCard>
              </Link>
            </li>
            <li>
              <Link href="/projects/stockprediction">
                <ProjectCard
                  projectTitle="Machine Learning Stock Price Prediction"
                  technologies="Python, PyTorch, PyChart, APIs"
                  imgSrc="ml"
                ></ProjectCard>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
