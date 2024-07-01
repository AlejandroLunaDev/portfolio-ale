import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './History.module.scss';

const History = () => {
  const historyRef = useRef([]);
  const titleRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

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

    // Observe the title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe history cards
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

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const cards = [
    {
      title: 'Curso de Backend',
      institution: 'Coderhouse',
      duration: '2024-Presente',
      description: 'El curso de Backend fue una experiencia en la que estoy aprendiendo sobre Node.js, Express, MongoDB y cómo crear aplicaciones del lado del servidor.',
      image: ''
    },
    {
      title: 'Participación en No-Country',
      institution: 'Simulación Laboral',
      duration: '2024',
      description: 'La participación en No-Country fue una simulación laboral que me permitió trabajar en proyectos reales, aplicando mis habilidades de desarrollo en un entorno colaborativo y profesional.',
      image: 'https://media.licdn.com/dms/image/D4D22AQEBwMJhp_nIuw/feedshare-shrink_800/0/1716846788510?e=1722470400&v=beta&t=NdPpe4UTALzIs947XqAHUONDbJWKdOCKD-I4sZ4zH3w'
    },

    {
      title: 'Carrera de Frontend React',
      institution: 'Coderhouse',
      duration: '2023-2024',
      description: 'El curso de React fue una experiencia en la que aprendi sobre el uso de React, los hooks, el estado de React, el manejo de eventos, el routing, el uso de Redux, entre otros.',
      image: 'https://media.licdn.com/dms/image/D4D22AQHuv4DTa0X8MQ/feedshare-shrink_800/0/1714573165545?e=1722470400&v=beta&t=Tb-P8-4_GFDf2IN3LKAI2BBK1zEoUfYYPxLZVoxqqmU'
    },


  ];

  return (
    <section ref={titleRef} className={styles.history}>
      <header className={styles.header}>
        <h1>Experiencia</h1>
      </header>
      <main>
        {cards.map((card, index) => (
          <motion.article
            key={index}
            ref={(el) => (historyRef.current[index] = el)}
            className={`${styles.course} ${index % 2 === 0 ? styles.fadeInLeft : styles.fadeInRight}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            onClick={card.image ? () => openModal(card) : undefined}
            style={{ cursor: card.image ? 'pointer' : 'default' }}
          >
            <header>
              <div>
                <h3>{card.title}</h3>
                <p>{card.institution}</p>
              </div>
              <span>{card.duration}</span>
            </header>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </main>

      <AnimatePresence>
        {modalVisible && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              className={styles.modalImage}
              src={modalContent.image}
              alt={`Diploma de ${modalContent.title}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default History;
