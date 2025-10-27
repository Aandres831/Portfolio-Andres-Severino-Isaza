// src/components/AboutMe.tsx
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.card}>
      <p>
        I am passionate about software development and technology. I really enjoy creating things that make life easier and help people in different ways. For me, learning never stops — every new project is a chance to improve my skills and discover something new. I like to explore new tools, solve problems, and understand how things work behind the code. My goal is to keep growing every day as a developer and become better with every experience
      </p>

      <h4 className={styles.small}>Currently learning</h4>
      <br />
      <ul className={styles.list}>
        <li>• React fundamentals & reusable components</li>
        <br />
        <li>• Next.js App Router</li>
        <br />
        <li>• CSS Modules & simple animations</li>
        <br />
        <li>• Accessibility basics</li>
      </ul>
    </div>
  );
}

