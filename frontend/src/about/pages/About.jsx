import MeInfo from "../components/meInfo/MeInfo";
import Presentation from "../components/presentation/Presentation";
import Skills from "../components/skills/Skills";
import Links from "../components/links/Links";
import Navbar from "../../layout/navbar/Navbar";
import styles from './About.module.scss';
import History from "../components/history/History";


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
          <History />
        </section>
        <section>
            <Links />
        </section>
        <video autoPlay muted loop className={styles.video} preload='auto'>
        <source src='../../../public/video/fondoTest.mp4' type='video/mp4' />
      </video>
    </main>
    </>
  )
}
