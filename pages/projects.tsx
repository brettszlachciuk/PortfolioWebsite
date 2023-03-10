import { ProjectCard } from "../components/ProjectCard";
export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100">
      <ul className="flex flex-col justify-items-center space-y-16">
        <li className="w-full mx-72">
          <ProjectCard
            projectTitle="Politician Database Application"
            technologies="Java, SQL"
            imgSrc="politician"
          ></ProjectCard>
        </li>
        <li className="w-full mx-72">
          <ProjectCard
            projectTitle="Strava Extension"
            technologies="JavaScript, React, Express, REST"
            imgSrc="strava"
          ></ProjectCard>
        </li>
        <li className="w-full mx-72">
          <ProjectCard
            projectTitle="Machine Learning Stock Price Prediction"
            technologies="Python, Pandas, Transformers, Data Visualization, APIs"
            imgSrc="ml"
          ></ProjectCard>
        </li>
      </ul>
    </div>
  );
}
