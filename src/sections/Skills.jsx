import { motion } from "motion/react";
import {
    FiArrowUpRight,
    FiCheck,
    FiCode,
    FiDatabase,
    FiLayers,
    FiServer,
} from "react-icons/fi";

const skillGroups = [
    {
        number: "01",
        title: "Frontend",
        icon: FiCode,
        description:
            "Building responsive, accessible and polished interfaces with modern frontend technologies.",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "React Router",
        ],
    },

    {
        number: "02",
        title: "Backend",
        icon: FiServer,
        description:
            "Developing REST APIs, authentication systems and scalable server-side applications.",
        skills: [
            "Node.js",
            "Express.js",
            "REST API",
            "JWT",
            "Firebase",
            "Mongoose",
            "MVC Architecture",
        ],
    },

    {
        number: "03",
        title: "Database",
        icon: FiDatabase,
        description:
            "Working with both NoSQL and relational databases for flexible and structured applications.",
        skills: [
            "MongoDB",
            "MongoDB Atlas",
            "PostgreSQL",
            "MySQL",
            "Mongoose",
        ],
    },

    {
        number: "04",
        title: "Tools & Workflow",
        icon: FiLayers,
        description:
            "Using modern development tools and deployment platforms to build and ship projects efficiently.",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Vercel",
            "Netlify",
            "Postman",
            "npm",
        ],
    },
];

const additionalSkills = [
    "Responsive Design",
    "Component Architecture",
    "API Integration",
    "Authentication",
    "Payment Integration",
    "Cloudinary",
    "Deployment",
    "Git Workflow",
];

const Skills = () => {
    return (
        <section
            id="skills"
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
                        mb-16
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
                                Skills & Stack
                            </span>
                        </div>

                        <h2
                            className="
                                max-w-4xl
                                text-[clamp(3.2rem,7vw,7rem)]
                                font-semibold
                                leading-[0.85]
                                tracking-[-0.08em]
                            "
                        >
                            Tools I use
                            <br />
                            to{" "}
                            <span className="text-accent">
                                build.
                            </span>
                        </h2>
                    </div>

                    <p
                        className="
                            max-w-md
                            text-sm
                            leading-7
                            text-muted
                            lg:pb-2
                            md:text-base
                        "
                    >
                        A full-stack toolkit focused on creating
                        modern interfaces, reliable APIs and
                        production-ready web applications.
                    </p>
                </motion.div>

                {/* =====================================
                    SKILL GRID
                ====================================== */}

                <div className="grid gap-4 md:grid-cols-2">

                    {skillGroups.map(
                        (group, index) => {
                            const Icon = group.icon;

                            return (
                                <motion.article
                                    key={group.title}
                                    initial={{
                                        opacity: 0,
                                        y: 35,
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
                                        duration: 0.6,
                                        delay:
                                            index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[2rem]
                                        border
                                        border-border
                                        bg-surface/70
                                        p-6
                                        backdrop-blur-xl
                                        transition-shadow
                                        duration-500
                                        hover:shadow-2xl
                                        hover:shadow-violet-500/10
                                        md:p-8
                                    "
                                >
                                    {/* Decorative glow */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-20
                                            -top-20
                                            h-40
                                            w-40
                                            rounded-full
                                            bg-accent/5
                                            blur-3xl
                                            transition-all
                                            duration-500
                                            group-hover:bg-accent/10
                                        "
                                    />

                                    {/* Top */}

                                    <div
                                        className="
                                            relative
                                            flex
                                            items-start
                                            justify-between
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                bg-accent/10
                                                text-accent
                                                transition-all
                                                duration-300
                                                group-hover:bg-accent
                                                group-hover:text-white
                                            "
                                        >
                                            <Icon
                                                size={20}
                                            />
                                        </div>

                                        <span
                                            className="
                                                text-[10px]
                                                font-semibold
                                                tracking-[0.2em]
                                                text-muted
                                            "
                                        >
                                            {group.number}
                                        </span>
                                    </div>

                                    {/* Content */}

                                    <div className="relative mt-7">
                                        <h3
                                            className="
                                                text-2xl
                                                font-semibold
                                                tracking-[-0.05em]
                                            "
                                        >
                                            {group.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                max-w-md
                                                text-sm
                                                leading-6
                                                text-muted
                                            "
                                        >
                                            {
                                                group.description
                                            }
                                        </p>
                                    </div>

                                    {/* Skills */}

                                    <div
                                        className="
                                            relative
                                            mt-7
                                            flex
                                            flex-wrap
                                            gap-2
                                        "
                                    >
                                        {group.skills.map(
                                            (skill) => (
                                                <span
                                                    key={
                                                        skill
                                                    }
                                                    className="
                                                        inline-flex
                                                        items-center
                                                        gap-1.5
                                                        rounded-full
                                                        border
                                                        border-border
                                                        bg-background/50
                                                        px-3
                                                        py-1.5
                                                        text-[10px]
                                                        font-medium
                                                        text-muted
                                                        transition-all
                                                        duration-300
                                                        hover:border-accent/30
                                                        hover:bg-accent/10
                                                        hover:text-accent
                                                    "
                                                >
                                                    <FiCheck
                                                        size={
                                                            11
                                                        }
                                                    />

                                                    {skill}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    {/* Bottom line */}

                                    <div
                                        className="
                                            relative
                                            mt-8
                                            h-px
                                            w-full
                                            overflow-hidden
                                            bg-border
                                        "
                                    >
                                        <motion.div
                                            initial={{
                                                x: "-100%",
                                            }}
                                            whileInView={{
                                                x: "0%",
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay:
                                                    0.2 +
                                                    index *
                                                    0.1,
                                            }}
                                            className="
                                                h-full
                                                w-1/3
                                                bg-accent
                                            "
                                        />
                                    </div>
                                </motion.article>
                            );
                        }
                    )}
                </div>

                {/* =====================================
                    ADDITIONAL CAPABILITIES
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
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        mt-6
                        rounded-[2rem]
                        border
                        border-border
                        bg-surface/50
                        p-6
                        backdrop-blur-xl
                        md:p-8
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-center
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
                                Also experienced with
                            </p>

                            <h3
                                className="
                                    mt-2
                                    text-xl
                                    font-semibold
                                    tracking-[-0.04em]
                                "
                            >
                                Beyond the core stack.
                            </h3>
                        </div>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-2
                            "
                        >
                            {additionalSkills.map(
                                (skill) => (
                                    <span
                                        key={skill}
                                        className="
                                            rounded-full
                                            border
                                            border-border
                                            px-3
                                            py-2
                                            text-[10px]
                                            font-medium
                                            text-muted
                                        "
                                    >
                                        {skill}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* =====================================
                    CTA
                ====================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="
                        mt-12
                        flex
                        justify-center
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
                            border-foreground/30
                            pb-2
                            text-sm
                            font-semibold
                            transition-colors
                            hover:border-accent
                            hover:text-accent
                        "
                    >
                        Have a project in mind?

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

export default Skills;