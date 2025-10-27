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
        desc: "Here you can improve your salary or employe the best talent.",
        tech: "HTML, TypeScript, CSS, Mongoose",
        repo: "https://github.com/Aandres831/Portfolio-Andres-Severino-Isaza",
        demo: "https://jobfindersdemo.netlify.app/",
        image: "/JobFinder.png"
    },
    {
        slug: "Library-Next",
        title: "Library-Next",
        desc: "Accessible library form with validation samples.",
        tech: "React, TypeScript, NextJS, Mongoose",
        repo: "https://github.com/Aandres831/library-nextjs.git",
        demo: "https://github.com/Aandres831/library-nextjs.git",
        image: "/libraryNext.jpg"
    },
    {
        slug: "SPA Example",
        title: "SPA Example",
        desc: "Utilities for cleaning and normalizing datasets.",
        tech: "JavaScript, HTML, CSS",
        repo: "https://github.com/Aandres831/SPA.git",
        demo: "https://github.com/Aandres831/SPA.git",
        image: "/SPA.png"
    }
]
