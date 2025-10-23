// src/app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.left}>
            <h1 className={styles.title}>Hi — I'm Andres Severino 👋</h1>
            <p className={styles.subtitle}>QA Engineer & Frontend Developer in progress</p>
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
            <div className={styles.photo}>Photo</div>
        </div>
      </div>
    </section>
  );
}
