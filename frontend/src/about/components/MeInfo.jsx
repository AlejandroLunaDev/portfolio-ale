import styles from './MeInfo.module.scss'
export default function MeInfo() {
  return(
   <section className={styles.info}>
    <div className={styles.design}>
      <span>diseño</span>
      <p>
      🚀 Como desarrollador frontend, me apasiona fusionar creatividad y funcionalidad. Mi misión es diseñar interfaces intuitivas y visualmente atractivas, utilizando herramientas de vanguardia para garantizar una experiencia de usuario excepcional y productos digitales de alta calidad.
      </p>
    </div>
    <div className={styles.dev}>
     
      <p>
      💫 Estoy convencido de que la mejor forma de dominar una habilidad es a través de la práctica constante. Crear no solo es mi trabajo, sino también mi método de aprendizaje. Cada proyecto es una oportunidad para innovar, aprender y perfeccionar mis habilidades, asegurando siempre resultados sobresalientes.
      </p>
      <span>desarrollo</span>
    </div>
  </section>

  )
}
