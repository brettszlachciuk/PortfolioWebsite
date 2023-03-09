import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

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
      className="relative grid h-[30rem] max-w-[21rem]  items-end justify-center overflow-hidden text-center hover:animate-wiggle"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[${imgUrl}] bg-cover bg-center`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-pink-500/100 via-purple-100/80" />
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
