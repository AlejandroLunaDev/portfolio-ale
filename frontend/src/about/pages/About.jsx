import MeInfo from "../components/MeInfo";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Links from "../components/Links";
import Navbar from "../../layout/navbar/Navbar";


export default function About() {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main>
        <section>
            <Presentation />
        </section>
        <section>
           <MeInfo />
        </section>
        <section>
            <Skills />
        </section>
        <section>
            <Links />
        </section>
    </main>
    </>
  )
}
