import { useEffect, useRef } from 'react';
import styles from './MeInfo.module.scss';

export default function MeInfo() {
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          infoRef.current.classList.add(styles.animate);
        } else {
          infoRef.current.classList.remove(styles.animate);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
      }
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  return (
    <section ref={infoRef} className={styles.info}>
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
  );
}
