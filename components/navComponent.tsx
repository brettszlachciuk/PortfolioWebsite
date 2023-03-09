import MenuComponent from "@/components/MenuComponent";
import { SocialsComponent } from "../components/SocialsComponent";

export default function NavComponent() {
  return (
    <nav className="py-10 flex justify-between items-center bg-gray-200">
      <MenuComponent />
      <SocialsComponent />
      <ul className="flex items-center">
        <li>
          <a
            className=" bg-gradient-to-r from-pink-500 to-purple-200 px-4 text-gray-900 py-2 rounded-md ml-8 mr-4"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
