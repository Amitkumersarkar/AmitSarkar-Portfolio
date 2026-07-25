import { motion } from "motion/react";
import {
    FiArrowUpRight,
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";

/* =========================================================
   PROJECT IMAGES
========================================================= */

import gMartImage from "../assets/gmart.png";
import agencyImage from "../assets/agencyAi.png";
import streamerImage from "../assets/streamerzz.png";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
    {
        number: "01",
        title: "G-Mart BD",
        category: "Full-stack E-commerce",
        description:
            "A complete MERN e-commerce platform with product browsing, authentication, cart management, orders, seller dashboard and online payment integration.",
        image: gMartImage,
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        live: "https://g-martbd.vercel.app/",
        github:
            "https://github.com/Amitkumersarkar/GMartBD-Ecommerce-Website",
        featured: true,
    },

    {
        number: "02",
        title: "The Agency.Ai",
        category: "AI Agency Landing Page",
        description:
            "A modern AI agency landing page focused on bold typography, smooth interactions, responsive layouts and a polished user experience.",
        image: agencyImage,
        technologies: [
            "React",
            "Tailwind CSS",
            "DaisyUI",
            "Framer Motion",
        ],
        live: "https://theagencyai.netlify.app/",
        github:
            "https://github.com/Amitkumersarkar/The-Agency.Ai",
    },

    {
        number: "03",
        title: "SAAS Streamerz",
        category: "SaaS Landing Page",
        description:
            "A modern SaaS landing page designed with responsive layouts, clean visual hierarchy and smooth animated interactions.",
        image: streamerImage,
        technologies: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Framer Motion",
        ],
        live: "https://thestreamerzz.vercel.app/",
        github:
            "https://github.com/Amitkumersarkar/SAAS-Streamerz-LandingPage",
    },
];

/* =========================================================
   MAIN
========================================================= */

const SelectedWork = () => {
    const featuredProject = projects[0];
    const otherProjects = projects.slice(1);

    return (
        <section
            id="work"
            className="
                relative
                overflow-hidden
                px-5
                py-24
                sm:px-6
                md:px-10
                md:py-32
                lg:py-40
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* =================================================
                    HEADER
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mb-14
                        flex
                        flex-col
                        gap-8
                        lg:mb-20
                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                    "
                >
                    <div>
                        {/* Section label */}

                        <div className="mb-6 flex items-center gap-3">
                            <span
                                className="
                                    h-px
                                    w-8
                                    bg-accent
                                "
                            />

                            <span
                                className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.22em]
                                    text-muted
                                    sm:text-xs
                                "
                            >
                                Selected Work
                            </span>
                        </div>

                        {/* Heading */}

                        <h2
                            className="
                                text-[clamp(3.2rem,8vw,7.5rem)]
                                font-semibold
                                leading-[0.84]
                                tracking-[-0.085em]
                            "
                        >
                            Things I&apos;ve
                            <br />

                            <span className="text-accent">
                                built.
                            </span>
                        </h2>
                    </div>

                    {/* Description */}

                    <p
                        className="
                            max-w-md
                            text-sm
                            leading-7
                            text-muted
                            md:text-base
                            lg:pb-2
                        "
                    >
                        A selection of projects where design,
                        development and problem-solving come
                        together to create useful digital
                        experiences.
                    </p>
                </motion.div>

                {/* =================================================
                    FEATURED PROJECT
                ================================================== */}

                <FeaturedProject project={featuredProject} />

                {/* =================================================
                    OTHER PROJECTS
                ================================================== */}

                <div
                    className="
                        mt-6
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                >
                    {otherProjects.map((project) => (
                        <ProjectCard
                            key={project.number}
                            project={project}
                        />
                    ))}
                </div>

                {/* =================================================
                    CTA
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        mt-14
                        flex
                        justify-center
                        md:mt-20
                    "
                >
                    <motion.a
                        href="#contact"
                        whileHover={{
                            x: 5,
                        }}
                        className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            border-b
                            border-foreground/25
                            pb-2
                            text-sm
                            font-semibold
                            transition-colors
                            duration-300
                            hover:border-accent
                            hover:text-accent
                        "
                    >
                        Have a project in mind?

                        <FiArrowUpRight
                            size={16}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                            "
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

/* =========================================================
   FEATURED PROJECT
========================================================= */

const FeaturedProject = ({ project }) => {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-border
                bg-surface/80
                shadow-sm
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-accent/30
                hover:shadow-2xl
                hover:shadow-violet-500/10
            "
        >
            {/* Cover */}

            <ProjectCover
                project={project}
                featured
            />

            {/* Content */}

            <div
                className="
                    p-6
                    md:p-8
                    lg:p-10
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        gap-8
                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                    "
                >
                    <div>
                        <p
                            className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-accent
                            "
                        >
                            Featured Project
                        </p>

                        <h3
                            className="
                                mt-2
                                text-3xl
                                font-semibold
                                tracking-[-0.06em]
                                sm:text-4xl
                            "
                        >
                            {project.title}
                        </h3>

                        <p
                            className="
                                mt-3
                                max-w-2xl
                                text-sm
                                leading-7
                                text-muted
                            "
                        >
                            {project.description}
                        </p>
                    </div>

                    <TechList
                        technologies={
                            project.technologies
                        }
                    />
                </div>

                <ProjectLinks
                    project={project}
                    large
                />
            </div>
        </motion.article>
    );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }) => {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
            }}
            whileHover={{
                y: -5,
            }}
            className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-border
                bg-surface/75
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-accent/30
                hover:shadow-xl
                hover:shadow-violet-500/10
            "
        >
            {/* Cover */}

            <ProjectCover project={project} />

            {/* Information */}

            <div className="p-6 md:p-7">

                <p
                    className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-accent
                    "
                >
                    {project.category}
                </p>

                <h3
                    className="
                        mt-2
                        text-2xl
                        font-semibold
                        tracking-[-0.05em]
                    "
                >
                    {project.title}
                </h3>

                <p
                    className="
                        mt-3
                        text-sm
                        leading-6
                        text-muted
                    "
                >
                    {project.description}
                </p>

                <TechList
                    technologies={
                        project.technologies
                    }
                />

                <ProjectLinks project={project} />
            </div>
        </motion.article>
    );
};

/* =========================================================
   PROJECT COVER
========================================================= */

const ProjectCover = ({
    project,
    featured = false,
}) => {
    return (
        <div
            className={`
                relative
                overflow-hidden
                bg-surface-soft

                ${featured
                    ? "h-[280px] sm:h-[380px] md:h-[500px]"
                    : "h-[240px] sm:h-[300px]"
                }
            `}
        >
            {/* Project Image */}

            <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                "
            />

            {/* Gradient overlay */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    opacity-60
                    transition-opacity
                    duration-500
                    group-hover:opacity-80
                "
            />

            {/* Project number */}

            <span
                className="
                    absolute
                    bottom-5
                    left-5
                    z-10
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                "
            >
                {project.number} /{" "}
                {featured ? "Featured" : "03"}
            </span>

            {/* Live demo button */}

            <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live website`}
                className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-accent
                    hover:bg-accent
                "
            >
                <FiArrowUpRight size={18} />
            </a>
        </div>
    );
};

/* =========================================================
   TECHNOLOGIES
========================================================= */

const TechList = ({ technologies }) => {
    return (
        <div
            className="
                mt-5
                flex
                max-w-md
                flex-wrap
                gap-2
            "
        >
            {technologies.map((tech) => (
                <span
                    key={tech}
                    className="
                        rounded-full
                        border
                        border-border
                        bg-background/30
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-muted
                        transition-colors
                        duration-300
                        hover:border-accent/30
                        hover:text-accent
                    "
                >
                    {tech}
                </span>
            ))}
        </div>
    );
};

/* =========================================================
   PROJECT LINKS
========================================================= */

const ProjectLinks = ({
    project,
    large = false,
}) => {
    return (
        <div
            className={`
                flex
                flex-wrap
                gap-3
                border-t
                border-border
                pt-5

                ${large ? "mt-8" : "mt-6"}
            `}
        >
            {/* Live */}

            <ProjectLink
                href={project.live}
                icon={
                    <FiExternalLink
                        size={14}
                    />
                }
            >
                Live Demo
            </ProjectLink>

            {/* GitHub */}

            <ProjectLink
                href={project.github}
                icon={
                    <FiGithub
                        size={14}
                    />
                }
                secondary
            >
                GitHub
            </ProjectLink>
        </div>
    );
};

/* =========================================================
   LINK BUTTON
========================================================= */

const ProjectLink = ({
    href,
    icon,
    children,
    secondary = false,
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                group/link
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-4
                py-2.5
                text-xs
                font-semibold
                transition-all
                duration-300

                ${secondary
                    ? `
                            border-border
                            bg-surface
                            text-muted
                            hover:border-accent/40
                            hover:bg-accent/10
                            hover:text-accent
                        `
                    : `
                            border-accent/30
                            bg-accent
                            text-white
                            shadow-lg
                            shadow-accent/20
                            hover:border-accent
                            hover:bg-accent/90
                            hover:shadow-accent/30
                        `
                }
            `}
        >
            {icon}

            {children}

            <FiArrowUpRight
                size={12}
                className="
                    transition-transform
                    duration-300
                    group-hover/link:-translate-y-0.5
                    group-hover/link:translate-x-0.5
                "
            />
        </a>
    );
};

export default SelectedWork;