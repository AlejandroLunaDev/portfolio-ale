import { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsRef.current.classList.add(styles.animate);
        } else {
          skillsRef.current.classList.remove(styles.animate);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section ref={skillsRef} className={styles.skills}>
      <header>
        <h1>Habilidades</h1>
        <p>Lenguajes que hablo, herramientas de desarrollo y diseño que disfruto especialmente</p>
      </header>
      <div className={styles.divider}></div>
      <main>
        <div className={styles.frontend}>
          <h1>Frontend</h1>
          <ul className={styles.frontendListIcon}>
            <li>
              <figure>
                <img src="svgs/logos_javascript.svg" alt="javascript" />
              </figure>
              <span>Javascript</span>
            </li>
            <li>
              <figure>
                <img src="svgs/devicon_typescript.svg" alt="typescript" />
              </figure>
              <span>Typescript</span>
            </li>
            <li>
              <figure>
                <img src="svgs/logos_react.svg" alt="react" />
              </figure>
              <span>React</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="svgs/vscode-icons_file-type-html.svg" alt="html" />
              </figure>
              <span>HTML</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="svgs/vscode-icons_file-type-css.svg" alt="css" />
              </figure>
              <span>CSS</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="svgs/devicon_tailwindcss.svg" alt="tailwind" />
              </figure>
              <span>Tailwind</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="svgs/devicon_sass.svg" alt="sass" />
              </figure>
              <span>Sass</span>
            </li>
          </ul>
          <ul className={styles.frontendList}>
            <li>
              <h4>Lenguajes</h4>
              <p>Javascript, Typescript</p>
            </li>
            <li>
              <h4>Frameworks</h4>
              <p>React</p>
            </li>
            <li>
              <h4>Tools & Libraries</h4>
              <p>Tailwind, Sass, Figma</p>
            </li>
            <li>
              <h4>Core</h4>
              <p>HTML, CSS</p>
            </li>
          </ul>
        </div>
        <div className={styles.backend}>
          <h1>Backend</h1>
          <ul className={styles.backendListIcon}>
            <li>
              <figure>
                <img src="svgs/vscode-icons_file-type-node.svg" alt="Node" />
              </figure>
              <span>Node.js</span>
            </li>
            <li>
              <figure>
                <img src="svgs/devicon_express.svg" alt="express" />
              </figure>
              <span>Express</span>
            </li>
            <li>
              <figure>
                <img src="svgs/vscode-icons_file-type-mongo.svg" alt="mongo" />
              </figure>
              <span>MongoDB</span>
            </li>
          </ul>
          <ul className={styles.backendList}>
            <li>
              <h4>Lenguajes</h4>
              <p>Node.js (Javascript, Typescript)</p>
            </li>
            <li>
              <h4>Frameworks</h4>
              <p>Express</p>
            </li>
            <li>
              <h4>Base de Datos</h4>
              <p>MongoDB</p>
            </li>
            <li>
              <h4>API</h4>
              <p>REST</p>
            </li>
          </ul>
        </div>
      </main>
      <div className={styles.divider1}></div>
    </section>
  );
}
