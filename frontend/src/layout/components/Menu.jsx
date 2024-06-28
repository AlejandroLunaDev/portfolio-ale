import styles from "./Menu.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Turn as Hamburger } from 'hamburger-react';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const items = ["Home", "About", "Services", "Portfolio", "Contact"];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      scale: 0,
      y: 20,
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.App}>
      <motion.button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        initial={false} // Evita la animación inicial al montar el componente
      >
        <motion.div
          className={styles.menuButtonBackground}
          initial={false} // Evita la animación inicial al montar el componente
          animate={open ? { backgroundColor: "#8A2BE2" } : { backgroundColor: "transparent" }}
          transition={{ duration: 0.5 }}
        />
        <Hamburger size={34} color='#fff ' sx={{ zIndex: 999 }} />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className={styles.menuItem}
              >
                {item}
              </motion.li>
            ))}
            {/* Línea violeta animada */}
            <motion.div
              className={styles.menuLine}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
           <img src="../../../public/vite.svg" alt="" style={{width: 100, height: 100}} /> 
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
