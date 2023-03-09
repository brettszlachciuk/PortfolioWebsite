import { ProjectCard } from "../components/ProjectCard";
export default function Projects() {
  return (
    <div>
      <ul className="flex justify-center space-x-16">
        <li>
          <ProjectCard
            projectTitle="Politician Database Application"
            technologies="Java, SQL"
            imgSrc="politician"
          ></ProjectCard>
        </li>
        <li>
          <ProjectCard
            projectTitle="Strava Extension"
            technologies="JavaScript, React, Express, REST"
            imgSrc="strava"
          ></ProjectCard>
        </li>
        <li>
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
