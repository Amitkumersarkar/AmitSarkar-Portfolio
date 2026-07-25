import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

import { useState } from "react";

import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiExpress,
    SiPostgresql,
} from "react-icons/si";

import {
    FiArrowUpRight,
    FiCreditCard,
    FiDatabase,
} from "react-icons/fi";

/* =====================================================
   TECHNOLOGY DATA
===================================================== */

const techData = {
    React: {
        icon: SiReact,
        label: "React",
        category: "FRONTEND",
        description:
            "Building interactive and scalable interfaces with component-driven architecture.",
    },

    "Next.js": {
        icon: SiNextdotjs,
        label: "Next.js",
        category: "FRAMEWORK",
        description:
            "Building production-ready React applications with modern routing and rendering.",
    },

    JavaScript: {
        icon: SiJavascript,
        label: "JavaScript",
        category: "LANGUAGE",
        description:
            "Creating dynamic web experiences with modern JavaScript and clean application logic.",
    },

    TypeScript: {
        icon: SiTypescript,
        label: "TypeScript",
        category: "LANGUAGE",
        description:
            "Writing scalable and maintainable applications with strong static typing.",
    },

    "Tailwind CSS": {
        icon: SiTailwindcss,
        label: "Tailwind CSS",
        category: "STYLING",
        description:
            "Creating responsive interfaces with a modern utility-first design system.",
    },

    "Node.js": {
        icon: SiNodedotjs,
        label: "Node.js",
        category: "BACKEND",
        description:
            "Building fast and scalable server-side applications and APIs.",
    },

    Express: {
        icon: SiExpress,
        label: "Express",
        category: "BACKEND",
        description:
            "Developing clean REST APIs and backend services with Express.js.",
    },

    MongoDB: {
        icon: SiMongodb,
        label: "MongoDB",
        category: "DATABASE",
        description:
            "Designing flexible NoSQL data models for full-stack applications.",
    },

    Mongoose: {
        icon: SiMongodb,
        label: "Mongoose",
        category: "ODM",
        description:
            "Working with MongoDB schemas, models, validation and relationships.",
    },

    PostgreSQL: {
        icon: SiPostgresql,
        label: "PostgreSQL",
        category: "DATABASE",
        description:
            "Working with relational databases and structured SQL data.",
    },

    SSLCommerz: {
        icon: FiCreditCard,
        label: "SSLCommerz",
        category: "PAYMENT",
        description:
            "Integrating secure online payment experiences for full-stack applications.",
    },
};

/* =====================================================
   FLOATING TECHNOLOGIES
===================================================== */

const floatingTech = [
    {
        name: "React",
        className:
            "left-[1%] top-[12%] sm:left-[3%] sm:top-[14%] lg:left-[2%]",
        depth: 1.2,
    },

    {
        name: "Next.js",
        className:
            "right-[1%] top-[8%] sm:right-[3%] sm:top-[9%] lg:right-[3%]",
        depth: 0.8,
    },

    {
        name: "TypeScript",
        className:
            "right-[0%] bottom-[15%] sm:right-[2%] sm:bottom-[19%] lg:right-[-1%]",
        depth: 1.4,
    },

    {
        name: "Node.js",
        className:
            "left-[1%] bottom-[15%] sm:left-[3%] sm:bottom-[17%] lg:left-[3%]",
        depth: 0.7,
    },

    {
        name: "MongoDB",
        className:
            "left-[20%] top-[1%] sm:left-[27%] lg:left-[28%]",
        depth: 1,
    },

    {
        name: "PostgreSQL",
        className:
            "right-[18%] bottom-[1%] sm:right-[25%] lg:right-[27%]",
        depth: 1.3,
    },
];

/* =====================================================
   INTERACTIVE TECH
===================================================== */

const InteractiveTech = () => {
    const [activeTech, setActiveTech] = useState("React");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
    });

    const rotateX = useTransform(
        smoothY,
        [-0.5, 0.5],
        [7, -7]
    );

    const rotateY = useTransform(
        smoothX,
        [-0.5, 0.5],
        [-7, 7]
    );

    const handleMouseMove = (event) => {
        if (window.innerWidth < 768) return;

        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const active = techData[activeTech];
    const ActiveIcon = active.icon;

    const techNames = Object.keys(techData);
    const activeIndex = techNames.indexOf(activeTech);

    return (
        <div
            onMouseMove={handleMouseMove}
            className="
                relative
                h-[390px]
                w-full
                sm:h-[440px]
                md:h-[500px]
                lg:h-[530px]
                [perspective:1200px]
            "
        >
            {/* =================================================
                AMBIENT GLOW
            ================================================= */}

            <motion.div
                animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.18, 0.35, 0.18],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-52
                    w-52
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-violet-500/15
                    blur-[90px]
                    dark:bg-violet-400/20
                "
            />

            {/* Secondary glow */}

            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    y: [10, -10, 10],
                    opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-72
                    w-72
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-400/10
                    blur-[120px]
                "
            />

            {/* =================================================
                3D SCENE
            ================================================= */}

            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="
                    absolute
                    inset-0
                    [transform-style:preserve-3d]
                "
            >
                {/* =================================================
                    CENTER CARD
                ================================================= */}

                <motion.div
                    layout
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        z-20
                        w-[245px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-[1.8rem]
                        border
                        border-border/80
                        bg-surface/85
                        p-5
                        shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                        backdrop-blur-2xl
                        sm:w-[280px]
                        sm:p-7
                        md:w-[310px]
                        md:p-8
                        dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                    "
                    style={{
                        transform:
                            "translate(-50%, -50%) translateZ(70px)",
                    }}
                >
                    {/* Card header */}

                    <div className="flex items-center justify-between">
                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-muted
                            "
                        >
                            {active.category}
                        </span>

                        <motion.div
                            animate={{
                                rotate: [0, 10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <FiArrowUpRight
                                size={17}
                                className="text-muted"
                            />
                        </motion.div>
                    </div>

                    {/* Dynamic icon */}

                    <motion.div
                        key={activeTech}
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                            rotate: -15,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                        className="
                            relative
                            mt-8
                            flex
                            h-[68px]
                            w-[68px]
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-violet-500
                            via-indigo-500
                            to-cyan-400
                            text-white
                            shadow-lg
                            shadow-violet-500/20
                            sm:h-[72px]
                            sm:w-[72px]
                            md:h-20
                            md:w-20
                        "
                    >
                        <div
                            className="
                                absolute
                                inset-0
                                rounded-2xl
                                bg-violet-500/20
                                blur-xl
                            "
                        />

                        <ActiveIcon
                            size={34}
                            className="relative z-10"
                        />
                    </motion.div>

                    {/* Dynamic title */}

                    <motion.h3
                        key={`${activeTech}-title`}
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="
                            mt-6
                            text-2xl
                            font-semibold
                            tracking-[-0.05em]
                        "
                    >
                        {active.label}
                    </motion.h3>

                    {/* Dynamic description */}

                    <motion.p
                        key={`${activeTech}-description`}
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.05,
                        }}
                        className="
                            mt-2
                            text-xs
                            leading-6
                            text-muted
                            md:text-sm
                        "
                    >
                        {active.description}
                    </motion.p>

                    {/* Bottom indicator */}

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            {techNames.map(
                                (tech, index) => (
                                    <motion.span
                                        key={tech}
                                        animate={{
                                            width:
                                                index ===
                                                    activeIndex
                                                    ? 22
                                                    : 5,
                                            opacity:
                                                index ===
                                                    activeIndex
                                                    ? 1
                                                    : 0.4,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="
                                            h-1
                                            rounded-full
                                            bg-violet-500
                                        "
                                    />
                                )
                            )}
                        </div>

                        <span
                            className="
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-widest
                                text-muted
                            "
                        >
                            {String(
                                activeIndex + 1
                            ).padStart(2, "0")}{" "}
                            /{" "}
                            {String(
                                techNames.length
                            ).padStart(2, "0")}
                        </span>
                    </div>
                </motion.div>

                {/* =================================================
                    FLOATING TECHNOLOGIES
                ================================================= */}

                {floatingTech.map(
                    ({
                        name,
                        className,
                        depth,
                    }) => {
                        const Icon =
                            techData[name].icon;

                        const isActive =
                            activeTech === name;

                        return (
                            <motion.button
                                key={name}
                                type="button"
                                onMouseEnter={() =>
                                    setActiveTech(name)
                                }
                                onClick={() =>
                                    setActiveTech(name)
                                }
                                onFocus={() =>
                                    setActiveTech(name)
                                }
                                whileHover={{
                                    scale: 1.1,
                                    y: -6,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                animate={{
                                    y: [0, -7, 0],
                                }}
                                transition={{
                                    y: {
                                        duration:
                                            3 + depth,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                                className={`
                                    ${className}

                                    absolute
                                    z-30

                                    flex
                                    items-center
                                    gap-2

                                    rounded-full
                                    border

                                    px-2.5
                                    py-1.5

                                    text-[9px]
                                    font-semibold

                                    backdrop-blur-xl

                                    transition-all
                                    duration-300

                                    sm:px-4
                                    sm:py-2.5
                                    sm:text-xs

                                    ${isActive
                                        ? `
                                                border-violet-400/50
                                                bg-violet-500/10
                                                text-violet-500
                                                shadow-lg
                                                shadow-violet-500/10
                                                dark:text-violet-300
                                            `
                                        : `
                                                border-border/80
                                                bg-surface/60
                                                text-muted
                                                hover:border-violet-400/30
                                                hover:text-foreground
                                            `
                                    }
                                `}
                                style={{
                                    transform: `translateZ(${depth * 35
                                        }px)`,
                                }}
                            >
                                <Icon size={13} />

                                {name}
                            </motion.button>
                        );
                    }
                )}

                {/* =================================================
                    FULL STACK INDICATOR
                ================================================= */}

                <motion.div
                    animate={{
                        opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        bottom-[12%]
                        left-1/2
                        z-10
                        hidden
                        -translate-x-1/2
                        items-center
                        gap-2
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-muted
                        md:flex
                    "
                >
                    <FiDatabase size={12} />

                    Full-stack ecosystem
                </motion.div>
            </motion.div>
        </div>
    );
};

export default InteractiveTech;