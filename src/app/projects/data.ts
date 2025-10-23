// src/app/projects/data.ts
export interface Project {
    slug: string,
    title: string,
    desc: string,
    tech: string,
    repo: string,
    demo: string,
    image: string
}

export const projects: Project[] = [
    {
        slug: "snackapp-ui",
        title: "JobFinder",
        desc: "Demo UI for a food app; focus on layout & components.",
        tech: "HTML, JavaScript, CSS, NodeJS",
        repo: "https://github.com/Aandres831/Portfolio-Andres-Severino-Isaza",
        demo: "https://jobfindersdemo.netlify.app/",
        image: ""
    },
    {
        slug: "form-playground",
        title: "Form Playground",
        desc: "Accessible contact form with validation samples.",
        tech: "React, TypeScript",
        repo: "https://github.com/Aandres831/Portfolio-Andres-Severino-Isaza",
        demo: "https://jobfindersdemo.netlify.app/",
        image: "/images/formplay.jpg"
    },
    {
        slug: "data-normalizer",
        title: "Data Normalizer",
        desc: "Utilities for cleaning and normalizing datasets.",
        tech: "TypeScript",
        repo: "https://github.com/Aandres831/Portfolio-Andres-Severino-Isaza",
        demo: "https://jobfindersdemo.netlify.app/",
        image: "/images/datanorm.jpg"
    }
]
