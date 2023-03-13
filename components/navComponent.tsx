import MenuComponent from "@/components/MenuComponent";
import { SocialsComponent } from "../components/SocialsComponent";
import ResumeModal from "../components/resumeModal";

export default function NavComponent() {
  return (
    <nav className="py-10 flex justify-between items-center bg-gray-200 md:px-20 lg:px-40">
      <MenuComponent />
      <SocialsComponent />
      <ResumeModal />
    </nav>
  );
}
