import styles from './Links.module.scss';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

export default function Links() {
  return (
    <div className={styles.Links}>
      <div className={styles.proyectos}>
        <header>
          <h1>Construir & Crear</h1>
          <p>
            Diseñar y construir productos web simples, intuitivos y escalables
          </p>
        </header>
        <a href='/project' className={styles.animatedLink}>
          <span className={styles.defaultText}>Ver mis proyectos</span>
          <span className={styles.hoverContent}>
            Ir a proyectos <MdOutlineKeyboardDoubleArrowRight />
          </span>
        </a>
      </div>
      <div className={styles.curriculum}>
        <h1>Curriculum Vitae</h1>
        <p>
          Conoce más sobre mi experiencia profesional y mis habilidades 
        
        </p>
        <a href='/path/to/cv.pdf' download className={styles.animatedLink}>
          <span className={styles.defaultText}>Decargar Curriculum Vitae</span>
          <span className={styles.hoverContent}>
            Descargar CV<MdOutlineKeyboardDoubleArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}
