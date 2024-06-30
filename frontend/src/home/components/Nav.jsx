import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './Nav.module.scss';

export default function Nav() {
  const typewriterVariant = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom.delay,
        type: "spring",
        stiffness: 120,
        duration: 1,
      },
    }),
  };

  return (
    <nav className={style.nav}>
      <NavLink to='/about'>
        <motion.span
          custom={{ delay: 1 }}
          initial="hidden"
          animate="visible"
          variants={typewriterVariant}
        >
          hola
        </motion.span>
      </NavLink>
      <NavLink to='/about'>
        <motion.span
          custom={{ delay: 2 }}
          initial="hidden"
          animate="visible"
          variants={typewriterVariant}
        >
          soy
        </motion.span>
      </NavLink>
      <NavLink to='/about'>
        <motion.span
          custom={{ delay: 3 }}
          initial="hidden"
          animate="visible"
          variants={typewriterVariant}
        >
          ale
        </motion.span>
      </NavLink>
    </nav>
  );
}
