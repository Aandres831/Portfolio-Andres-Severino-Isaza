"use client"
import { useState } from "react"
import styles from "./projects.module.css"
import { projects } from "./data"
import Modal from "@/components/Modal"

export default function ProjectsPage() {
  const [selected, setSelected] = useState<null | typeof projects[0]>(null)

  return (
    <section className={styles.wrap}>
      <h2 className={styles.heading}>Projects</h2>
      <p className={styles.lead}>
        Small projects showcasing concepts and steady progress.
      </p>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.slug} className={styles.card}>
            <img src={p.image} alt={p.title} className={styles.thumbnail} />
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <p className={styles.tech}>{p.tech}</p>
            <div className={styles.actions}>
              <button
                className={styles.link}
                onClick={() => setSelected(p)}
              >
                Details
              </button>
              <a
                className={styles.link}
                target="_blank"
                href={p.repo}
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                className={styles.link}
                target="_blank"
                href={p.demo}
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <h2 className={styles.heading}>{selected.title}</h2>
            <img
              src={selected.image}
              alt={selected.title}
              className={styles.detailImage}
            />
            <p className={styles.desc}>{selected.desc}</p>
            <p className={styles.tech}>{selected.tech}</p>
            <div className={styles.actions}>
              <a
                href={selected.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub Repo
              </a>
              <a
                href={selected.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live Demo
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}




