import { ProjectCard } from "../components/ProjectCard";
export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100">
      <ul className="flex flex-col items-center w-full space-y-16">
        <li className="mr-auto ml-auto">
          <ProjectCard
            projectTitle="Politician Database Application"
            technologies="Java, SQL"
            imgSrc="politician"
          ></ProjectCard>
        </li>
        <li className="mr-auto ml-auto">
          <ProjectCard
            projectTitle="Strava Extension"
            technologies="JavaScript, React, Express, REST"
            imgSrc="strava"
          ></ProjectCard>
        </li>
        <li className="mr-auto ml-auto">
          <ProjectCard
            projectTitle="Machine Learning Stock Price Prediction"
            technologies="Python, PyTorch, PyChart, APIs"
            imgSrc="ml"
          ></ProjectCard>
        </li>
      </ul>
    </div>
  );
}
