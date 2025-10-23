// src/app/projects/page.tsx
import styles from './projects.module.css';

export default function ProjectsPage(){
  const projects = [
    { title: 'SnackApp UI', desc: 'Demo UI for a food app; focus on layout & components.', tech: 'Next.js, TypeScript, CSS Modules' },
    { title: 'Form Playground', desc: 'Accessible contact form with validation samples.', tech: 'React, TypeScript' },
    { title: 'Data Normalizer', desc: 'Utilities for cleaning and normalizing datasets.', tech: 'TypeScript' },
  ];

  return (
    <section>
      <h2 className={styles.heading}>Projects</h2>
      <p className={styles.lead}>Small projects showcasing concepts and steady progress.</p>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.title} className={styles.card}>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <p className={styles.tech}>{p.tech}</p>
            <div className={styles.actions}>
              <a className={styles.link} href="#">Repo</a>
              <a className={styles.link} href="#">Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

