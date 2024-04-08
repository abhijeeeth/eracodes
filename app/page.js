import Hero from "./Hero/page";
import AllProjects from "./All_Projects/page";
import LanguageList from "./Languages/page";
import GtStart from "./Get_Started/page";

export default function Home() {
  return (
   <div className="px-40 m-0">
   <Hero></Hero>
   <LanguageList></LanguageList>
   <AllProjects></AllProjects>
   <GtStart></GtStart>
   </div>
  );
}
