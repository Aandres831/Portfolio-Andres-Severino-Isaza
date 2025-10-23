// src/app/about/page.tsx
import AboutMe from '@/components/AboutMe';
import styles from './about.module.css';

export default function AboutPage(){
  return (
    <section className={styles.wrap}>
      <h2 className={styles.heading}>About me</h2>
      <AboutMe />
    </section>
  );
}
