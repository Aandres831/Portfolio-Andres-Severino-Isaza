// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "../data"
import styles from "../projects.module.css"

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params // 👈 se espera la promesa correctamente

    const project = projects.find((p) => p.slug === slug)
    if (!project) return notFound()

    return (
        <section className={styles.wrap}>
        <h2 className={styles.heading}>{project.title}</h2>
        <img src={project.image} alt={project.title} className={styles.detailImage} />
        <p className={styles.lead}>{project.desc}</p>

        <div className={styles.detailBox}>
            <p>
            <strong>Technologies:</strong> {project.tech}
            </p>
            <div className={styles.actions}>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub Repo
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Live Demo
            </a>
            </div>
        </div>
        </section>
    )
}

