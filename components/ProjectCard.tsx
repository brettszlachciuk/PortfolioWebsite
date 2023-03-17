import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { GoMarkGithub } from "react-icons/go";

export function ProjectCard(props: {
  projectTitle: string;
  technologies: string;
  imgSrc: string;
  gitHubSrc: string;
}) {
  return (
    <Card
      shadow={false}
      className="bg-gradient-to-br  from-pink-500 to-purple-500/50 relative grid h-[30rem] w-3/5 items-end justify-center overflow-hidden text-center hover:-translate-y-0.5"
    >
      <CardHeader floated={false} className="h-80">
        <Image src={props.imgSrc} height="500" width="800" alt="pic" />
      </CardHeader>
      <CardBody className="relative">
        <Typography
          variant="h2"
          color="black"
          className="mb-6 font-medium leading-[1.5]"
        >
          {props.projectTitle}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-800">
          {props.technologies}
          <a href={props.gitHubSrc} target="_blank" rel="noreferrer noopener">
            <GoMarkGithub color="black" opacity={0.7} size={20}></GoMarkGithub>
          </a>
        </Typography>
      </CardBody>
      <a href={props.gitHubSrc} target="_blank" rel="noreferrer noopener">
        <GoMarkGithub color="black" opacity={0.7} size={20}></GoMarkGithub>
      </a>
    </Card>
  );
}
