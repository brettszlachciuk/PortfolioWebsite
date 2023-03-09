import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function MenuComponent() {
  return (
    <Menu
      animate={{
        mount: { x: 0, y: 0 },
        unmount: { x: 0, y: 25 },
      }}
    >
      <MenuHandler>
        <FiMenu size={40} className="ml-4" />
      </MenuHandler>
      <MenuList className="mt-20 ml-10 bg-gray-300/80">
        <Link href="/">
          <MenuItem className="text-gray-900">Home</MenuItem>
        </Link>
        <Link href="/projects">
          <MenuItem className="text-gray-900">Projects</MenuItem>
        </Link>
        <Link href="/workexperience">
          <MenuItem className="text-gray-900">Work Experience</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
