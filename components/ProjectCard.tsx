import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export function ProjectCard(props: {
  projectTitle: string;
  technologies: string;
  imgSrc?: string;
}) {
  let imgUrl: string = "";

  if (props.imgSrc === "politician") {
    imgUrl = "url('/public/vercel.svg')";
  }

  return (
    <Card
      shadow={false}
      className="relative grid h-[30rem] w-3/5 items-end justify-center overflow-hidden text-center hover:"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center`}
      >
        <Image src="../public/vercel.svg" height="500" width="500" alt="pic" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="black"
          className="mb-6 font-medium leading-[1.5]"
        >
          {props.projectTitle}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-800">
          {props.technologies}
        </Typography>
      </CardBody>
    </Card>
  );
}
