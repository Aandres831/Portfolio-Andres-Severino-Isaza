// src/app/layout.tsx
import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Andres Severino - Portfolio',
  description: 'Portfolio built with Next.js, TypeScript and CSS Modules',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <div className={styles.logo}>Andres Severino Isaza</div>
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            {/* <img src="https://cdn-icons-png.flaticon.com/128/1377/1377973.png" width="40px" height="45px" alt="" /> */}
          </nav>
        </header>

        <main className={styles.main + ' container'}>{children}</main>

        <footer className={styles.footer}>
          <div>© {new Date().getFullYear()} Andres Severino Isaza</div>
          <div className={styles.socials}>
            <a href="https://github.com/Aandres831" target='_blank' aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/andres-severino-isaza-bb0ab0225/" target='_blank' aria-label="LinkedIn">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

