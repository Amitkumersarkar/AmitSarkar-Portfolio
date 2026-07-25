import { motion } from "motion/react";
import {
    FiArrowUpRight,
    FiBriefcase,
    FiCode,
    FiGithub,
} from "react-icons/fi";

const experiences = [
    {
        period: "2024 — Present",
        type: "Independent",
        title: "Full-Stack Web Development",
        company: "Personal Projects & Development",
        description:
            "Building full-stack web applications with React, Node.js, Express and MongoDB while continuously improving frontend architecture, backend development and deployment workflows.",
        skills: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "REST APIs",
        ],
    },
    {
        period: "2025 — Present",
        type: "Development",
        title: "MERN Stack Projects",
        company: "Project-based Experience",
        description:
            "Developed complete web applications including e-commerce platforms, SaaS interfaces and modern landing pages with responsive layouts and production deployments.",
        skills: [
            "JavaScript",
            "Tailwind CSS",
            "Firebase",
            "Vercel",
            "Netlify",
        ],
    },
    {
        period: "2025 — Present",
        type: "Continuous Learning",
        title: "Modern Web Technologies",
        company: "Self-directed Learning",
        description:
            "Expanding into TypeScript, Next.js, PostgreSQL, Mongoose, payment integration and modern development practices to build more scalable applications.",
        skills: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Mongoose",
            "SSLCommerz",
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="
                relative
                overflow-hidden
                px-5
                py-24
                md:px-10
                md:py-32
            "
        >
            <div className="mx-auto max-w-7xl">

                {/* =====================================
                    HEADER
                ====================================== */}

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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        grid
                        gap-8
                        lg:grid-cols-[1fr_0.45fr]
                        lg:items-end
                    "
                >
                    <div>
                        <div
                            className="
                                mb-6
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    h-px
                                    w-8
                                    bg-accent
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.2em]
                                    text-muted
                                "
                            >
                                Experience
                            </span>
                        </div>

                        <h2
                            className="
                                text-[clamp(3.2rem,7vw,7rem)]
                                font-semibold
                                leading-[0.85]
                                tracking-[-0.08em]
                            "
                        >
                            My journey
                            <br />
                            <span className="text-accent">
                                so far.
                            </span>
                        </h2>
                    </div>

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
                        A timeline of my development journey,
                        practical projects and the technologies
                        I&apos;ve been working with.
                    </p>
                </motion.div>

                {/* =====================================
                    TIMELINE
                ====================================== */}

                <div className="relative mt-16">

                    {/* Vertical line */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-[7px]
                            top-0
                            w-px
                            bg-border
                            md:left-[120px]
                        "
                    />

                    <div className="space-y-12">

                        {experiences.map(
                            (experience, index) => (
                                <motion.article
                                    key={experience.title}
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
                                        delay:
                                            index * 0.1,
                                    }}
                                    className="
                                        relative
                                        grid
                                        gap-6
                                        md:grid-cols-[120px_1fr]
                                        md:gap-10
                                    "
                                >
                                    {/* Date */}

                                    <div
                                        className="
                                            hidden
                                            pt-2
                                            md:block
                                        "
                                    >
                                        <span
                                            className="
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                leading-5
                                                tracking-[0.15em]
                                                text-muted
                                            "
                                        >
                                            {
                                                experience.period
                                            }
                                        </span>
                                    </div>

                                    {/* Timeline dot */}

                                    <div
                                        className="
                                            absolute
                                            left-0
                                            top-2
                                            z-10
                                            flex
                                            h-4
                                            w-4
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-background
                                            bg-accent
                                            shadow-lg
                                            shadow-accent/30
                                            md:left-[113px]
                                        "
                                    >
                                        <span
                                            className="
                                                h-1.5
                                                w-1.5
                                                rounded-full
                                                bg-white
                                            "
                                        />
                                    </div>

                                    {/* Content */}

                                    <div
                                        className="
                                            ml-8
                                            rounded-[2rem]
                                            border
                                            border-border
                                            bg-surface/60
                                            p-6
                                            backdrop-blur-xl
                                            transition-all
                                            duration-500
                                            hover:-translate-y-1
                                            hover:border-accent/20
                                            hover:shadow-xl
                                            hover:shadow-accent/5
                                            md:ml-0
                                            md:p-8
                                        "
                                    >
                                        {/* Mobile date */}

                                        <div
                                            className="
                                                mb-5
                                                flex
                                                items-center
                                                justify-between
                                                md:hidden
                                            "
                                        >
                                            <span
                                                className="
                                                    text-[10px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-muted
                                                "
                                            >
                                                {
                                                    experience.period
                                                }
                                            </span>

                                            <span
                                                className="
                                                    rounded-full
                                                    bg-accent/10
                                                    px-3
                                                    py-1.5
                                                    text-[9px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-wider
                                                    text-accent
                                                "
                                            >
                                                {
                                                    experience.type
                                                }
                                            </span>
                                        </div>

                                        {/* Top row */}

                                        <div
                                            className="
                                                flex
                                                flex-col
                                                gap-4
                                                sm:flex-row
                                                sm:items-start
                                                sm:justify-between
                                            "
                                        >
                                            <div>
                                                <div
                                                    className="
                                                        mb-3
                                                        hidden
                                                        items-center
                                                        gap-2
                                                        md:flex
                                                    "
                                                >
                                                    <FiBriefcase
                                                        size={13}
                                                        className="text-accent"
                                                    />

                                                    <span
                                                        className="
                                                            text-[9px]
                                                            font-semibold
                                                            uppercase
                                                            tracking-[0.2em]
                                                            text-accent
                                                        "
                                                    >
                                                        {
                                                            experience.type
                                                        }
                                                    </span>
                                                </div>

                                                <h3
                                                    className="
                                                        text-2xl
                                                        font-semibold
                                                        tracking-[-0.05em]
                                                        md:text-3xl
                                                    "
                                                >
                                                    {
                                                        experience.title
                                                    }
                                                </h3>

                                                <p
                                                    className="
                                                        mt-2
                                                        text-xs
                                                        font-medium
                                                        text-muted
                                                    "
                                                >
                                                    {
                                                        experience.company
                                                    }
                                                </p>
                                            </div>

                                            <div
                                                className="
                                                    hidden
                                                    h-10
                                                    w-10
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-border
                                                    text-muted
                                                    transition-all
                                                    duration-300
                                                    hover:border-accent
                                                    hover:bg-accent
                                                    hover:text-white
                                                    sm:flex
                                                "
                                            >
                                                <FiCode
                                                    size={16}
                                                />
                                            </div>
                                        </div>

                                        {/* Description */}

                                        <p
                                            className="
                                                mt-6
                                                max-w-3xl
                                                text-sm
                                                leading-7
                                                text-muted
                                            "
                                        >
                                            {
                                                experience.description
                                            }
                                        </p>

                                        {/* Skills */}

                                        <div
                                            className="
                                                mt-6
                                                flex
                                                flex-wrap
                                                gap-2
                                            "
                                        >
                                            {experience.skills.map(
                                                (skill) => (
                                                    <span
                                                        key={
                                                            skill
                                                        }
                                                        className="
                                                            rounded-full
                                                            border
                                                            border-border
                                                            bg-background/50
                                                            px-3
                                                            py-1.5
                                                            text-[10px]
                                                            font-medium
                                                            text-muted
                                                        "
                                                    >
                                                        {
                                                            skill
                                                        }
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            )
                        )}
                    </div>
                </div>

                {/* =====================================
                    PROJECT LINK
                ====================================== */}

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
                    "
                >
                    <motion.a
                        href="https://github.com/Amitkumersarkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            x: 5,
                        }}
                        className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            border-b
                            border-foreground/30
                            pb-2
                            text-sm
                            font-semibold
                            transition-colors
                            hover:border-accent
                            hover:text-accent
                        "
                    >
                        <FiGithub size={16} />

                        Explore my GitHub

                        <FiArrowUpRight
                            size={15}
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

export default Experience;