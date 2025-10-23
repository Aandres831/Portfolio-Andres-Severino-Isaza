// src/app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.left}>
            <h1 className={styles.title}>Hi — I'm Andres Severino </h1>
            <p className={styles.subtitle}>Full Stack Developer </p>
            <p className={styles.lead}>
              I build clean and simple interfaces using Next.js, TypeScript and CSS Modules.
              I focus on quality, accessibility and readable code.
            </p>

            <div className={styles.ctas}>
              <Link href="/projects" className={`${styles.btn} ${styles.primary}`}>View My Work</Link>
              <Link href="/about" className={`${styles.btn} ${styles.ghost}`}>About Me</Link>
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.photo}>
              <img src="https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}
