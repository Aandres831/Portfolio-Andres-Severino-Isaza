// src/components/AboutMe.tsx
import styles from './AboutMe.module.css';

export default function AboutMe(){
  return (
    <div className={styles.card}>
      <p>
        I'm a QA engineer from Medellín learning frontend development with a focus on TypeScript, React and Next.js.
        I bring a quality-first mindset to UI development and enjoy building small, maintainable components.
      </p>

      <h4 className={styles.small}>Currently learning</h4>
      <ul className={styles.list}>
        <li>React fundamentals & reusable components</li>
        <li>Next.js App Router</li>
        <li>CSS Modules & simple animations</li>
        <li>Accessibility basics</li>
      </ul>
    </div>
  );
}

