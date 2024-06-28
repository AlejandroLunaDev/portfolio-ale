import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './History.module.scss';

const History = () => {
  const historyRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          } else {
            entry.target.classList.remove(styles.animate);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
      }
    );

    // Observar el título
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observar las tarjetas de historia
    historyRef.current.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      historyRef.current.forEach((ref) => {
        if (ref && ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section ref={titleRef} className={styles.history}>
      <header  className={styles.header}>
        <h1>Experiencia</h1>
      </header>
      <main>
        {/* Primera tarjeta */}
        <motion.article
          ref={(el) => (historyRef.current[0] = el)}
          className={`${styles.course} ${styles.fadeInLeft}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <header>
            <div>
              <h3>Curso de React</h3>
              <p>Coderhouse</p>
            </div>
            <span>2023-2024</span>
          </header>
          <p>
            El curso de React fue una experiencia en la que aprendimos sobre el uso de React, los hooks, el estado de
            React, el manejo de eventos, el routing, el uso de Redux, entre otros.
          </p>
        </motion.article>

        {/* Segunda tarjeta */}
        <motion.article
          ref={(el) => (historyRef.current[1] = el)}
          className={`${styles.course} ${styles.fadeInRight}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <header>
            <div>
              <h3>Curso de Backend</h3>
              <p>Coderhouse</p>
            </div>
            <span>2024-Presente</span>
          </header>
          <p>
            El curso de Backend fue una experiencia en la que aprendimos sobre Node.js, Express, MongoDB y cómo crear
            aplicaciones del lado del servidor.
          </p>
        </motion.article>

        {/* Tercera tarjeta */}
        <motion.article
          ref={(el) => (historyRef.current[2] = el)}
          className={`${styles.course} ${styles.fadeInLeft}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <header>
            <div>
              <h3>Participación en No-Country</h3>
              <p>Simulación Laboral</p>
            </div>
            <span>2024</span>
          </header>
          <p>
            La participación en No-Country fue una simulación laboral que nos permitió trabajar en proyectos reales,
            aplicando nuestras habilidades de desarrollo en un entorno colaborativo y profesional.
          </p>
        </motion.article>
      </main>
    </section>
  );
};

export default History;
