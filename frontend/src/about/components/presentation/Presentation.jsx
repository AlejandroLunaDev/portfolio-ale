import { motion } from 'framer-motion';
import styles from './Presentation.module.scss';
import { MdArrowDownward } from "react-icons/md";
import { BsMouse } from "react-icons/bs";

export default function Presentation() {
  return (
    <article className={styles.hero}>
      <h1>Desarrollador Web Creativo</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Diseñar y construir productos web simples, intuitivos y escalables es mi
        mivocación.
      </motion.p>
      <div className={styles.arrow}>
      <BsMouse style={{marginRight: '10px', height: '30px', width: '30px'}}/>
      <small>Desplázate hacia abajo</small>
      <MdArrowDownward />
      </div>
    </article>
  );
}
