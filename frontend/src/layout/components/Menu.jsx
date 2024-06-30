import styles from './Menu.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Turn as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const items = [
    { name: 'Proyectos', route: '/proyect' },
    { name: 'Sobre', route: '/about' },
    { name: 'Contacto', route: '/contact' },
    { name: 'Inicio', route: '/' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: 'afterChildren'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: 'beforeChildren'
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      scale: 0,
      y: 20,
      rotate: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.5
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 // Retraso de 0.5 segundos
      }
    }
  };

  const connectVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: items.length * 0.1 + 0.5 // Retraso después de todos los ítems y la imagen
      }
    }
  };

  return (
    <div className={styles.App}>
      <motion.button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        initial={false} 
      >
        <motion.div
          className={styles.menuButtonBackground}
          initial={false}
          animate={
            open
              ? { backgroundColor: '#8A2BE2' }
              : { backgroundColor: 'transparent' }
          }
          transition={{ duration: 0.5 }}
        />
        <Hamburger size={34} color='#fff ' sx={{ zIndex: 999 }} />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            variants={menuVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className={styles.menuItem}
              >
                <NavLink to={item.route} style={{ textDecoration: 'none', color: 'white' }}>
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
            {/* Línea violeta animada */}
            <motion.div
              className={styles.menuLine}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <NavLink to='/'style={{ display: 'flex', justifyContent: 'right', paddingRight: '10px' }}>
              <motion.img
                src='../../../../public/vite.svg'
                alt=''
                style={{ width: 100, height: 100 }}
                variants={imageVariants}
              />
            </NavLink>
            {/* Sección de Conectate */}
            <motion.div
              className={styles.connect}
              variants={connectVariants}
            >
              <p>Conectate</p>
              <div className={styles.icons}>
                <a href='https://github.com/AlejandroLunaDev' target='_blank' rel='noopener noreferrer'>
                  <FaGithub size={30} />
                </a>
                <a href='https://www.linkedin.com/in/alejandro-luna-dev' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin size={30} />
                </a>
                <a href='https://www.instagram.com/alejandro.luna87/' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram size={30} />
                </a>
              </div>
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
