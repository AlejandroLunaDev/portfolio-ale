import styles from "./Links.module.scss";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Links() {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // el efecto de stagger
  const staggerList = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: -50,
    },
  };

  useEffect(() => {
    controls.start(open ? "visible" : "hidden");
  }, [open, controls]);

  return (
    <div className={styles.App}>
      <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
        Click Me!
      </motion.button>
      <motion.ul
        initial="hidden"
        animate={controls}
        variants={{
          visible: { width: 150, height: 200, opacity: 1 },
          hidden: { width: 0, height: 0, opacity: 0 },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      >
        {items.map((item, index) => (
          <motion.li key={index} variants={staggerList}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
