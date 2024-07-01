import Navbar from "../../layout/navbar/Navbar";
import Presentation from "../components/presentation/PresentationProject";
import ProjectOne from "../components/projectOne/ProjectOne";
import ProjectTwo from "../components/projectTwo/ProjectTwo";

export default function Projects() {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <section>
        <Presentation />
      </section>
      <section>
        <ProjectOne />
      </section>
      <section>
        <ProjectTwo />
      </section>
    </section>
  )
}
