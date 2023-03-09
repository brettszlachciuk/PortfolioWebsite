import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
export function SocialsComponent() {
  return (
    <div className="flex ml-24 gap-4">
      <a
        href="https://www.linkedin.com/in/brett-szlachciuk/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillLinkedin
          className="text-2xl"
          color="blue"
          opacity={0.7}
          size={40}
        ></AiFillLinkedin>
      </a>
      <a
        href="https://github.com/brettszlachciuk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GoMarkGithub
          className="text-2xl "
          color="black"
          opacity={0.7}
          size={40}
        ></GoMarkGithub>
      </a>
    </div>
  );
}
