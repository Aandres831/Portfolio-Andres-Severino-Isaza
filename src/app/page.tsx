"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <section>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.left}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className={styles.title}>Hi — I'm Andres Severino</h1>
          <p className={styles.subtitle}>Full Stack Developer</p>
          <p className={styles.lead}>
            I build clean and simple interfaces using Next.js, TypeScript and CSS Modules.
            I focus on quality, accessibility and readable code.
          </p>

          <div className={styles.ctas}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects" className={`${styles.btn} ${styles.primary}`}>
                View My Work
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className={`${styles.btn} ${styles.ghost}`}>
                About Me
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className={styles.photo}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <img
              src="/myImage2.png"
              alt="Andrés Severino"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

