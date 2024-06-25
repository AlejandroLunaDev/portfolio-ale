import styles from './Skills.module.scss'

export default function Skills() {
  return (
    <section className={styles.skills}>
      <header>
        <h1>Habilidades</h1>
        <p>Lenguajes que hablo, herramientas de desarrollo y diseño que disfruto especialmente</p>
      </header>
      <main>
  
        <div className={styles.frontend}>
          <h1>Frontend</h1>
          <ul className={styles.frontendListIcon}>
            <li>
              <figure>
                <img src="../../../../public/svgs/logos_javascript.svg" alt="javascript" />
              </figure>
              <span>Javascript</span>
            </li>
            <li>
              <figure>
                <img src="../../../../public/svgs/devicon_typescript.svg" alt="typescript" />
              </figure>
              <span>Typescrip</span>
            </li>            <li>
              <figure>
                <img src="../../../../public/svgs/logos_react.svg" alt="react" />
              </figure>
              <span>React</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="../../../../public/svgs/vscode-icons_file-type-html.svg" alt="html" />
              </figure>
              <span>html</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="../../../../public/svgs/vscode-icons_file-type-css.svg" alt="css" />
              </figure>
              <span>css</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="../../../../public/svgs/devicon_tailwindcss.svg" alt="tailwind" />
              </figure>
              <span>tailwind</span>
            </li>
            <li>
              <figure className={styles.large}>
                <img src="../../../../public/svgs/devicon_sass.svg" alt="sass" />
              </figure>
              <span>sass</span>
            </li>
          </ul>
          <ul className={styles.frontendList}>
            <li>
              <h4>Lenguajes</h4>
              <p>Javascript, Typescript</p>
            </li>
            <li>
              <h4>frameworks</h4>
              <p>React</p>
            </li>
            <li>
              <h4>tools & librerias</h4>
              <p>Tailwind, Sass,figma</p>
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
                <img src="../../../../public/svgs/vscode-icons_file-type-node.svg" alt="Node" />
              </figure>
              <span>Node.JS</span>
            </li>
            <li>
              <figure>
                <img src="../../../../public/svgs/devicon_express.svg" alt="express" />
              </figure>
              <span>Express</span>
            </li>            
            <li>
              <figure>
                <img src="../../../../public/svgs/vscode-icons_file-type-mongo.svg" alt="mongo" />
              </figure>
              <span>Mongo</span>
            </li>
          </ul>
          <ul className={styles.backendList}>
            <li>
              <h4>Lenguajes</h4>
              <p>Node.js(Javascript)</p>
            </li>
            <li>
              <h4>frameworks</h4>
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
    </section>
  )
}
