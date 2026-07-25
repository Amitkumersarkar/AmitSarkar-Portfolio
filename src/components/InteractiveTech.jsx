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
            "Integrating online payment experiences for full-stack applications.",
    },
};

/* =====================================================
   FLOATING TECHNOLOGIES
===================================================== */

const floatingTech = [
    {
        name: "React",
        className: "left-[2%] top-[14%]",
        depth: 1.2,
    },

    {
        name: "Next.js",
        className: "right-[3%] top-[8%]",
        depth: 0.8,
    },

    {
        name: "TypeScript",
        className: "right-[-1%] bottom-[20%]",
        depth: 1.4,
    },

    {
        name: "Node.js",
        className: "left-[3%] bottom-[17%]",
        depth: 0.7,
    },

    {
        name: "MongoDB",
        className: "left-[28%] top-[1%]",
        depth: 1,
    },

    {
        name: "PostgreSQL",
        className: "right-[27%] bottom-[1%]",
        depth: 1.3,
    },
];

/* =====================================================
   INTERACTIVE TECH
===================================================== */

const InteractiveTech = () => {
    const [activeTech, setActiveTech] = useState("React");

    /* Mouse position */

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    /* Smooth movement */

    const smoothX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20,
    });

    /* 3D rotation */

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

    /* Mouse handler */

    const handleMouseMove = (event) => {
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
            "
        >
            {/* =====================================
                AMBIENT GLOW
            ====================================== */}

            <motion.div
                animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.2, 0.35, 0.2],
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

            {/* =====================================
                3D SCENE
            ====================================== */}

            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle:
                        "preserve-3d",
                }}
                className="
                    absolute
                    inset-0
                "
            >
                {/* =================================
                    CENTER CARD
                ================================== */}

                <motion.div
                    layout
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        z-20
                        w-[255px]
                        rounded-[2rem]
                        border
                        border-border
                        bg-surface/80
                        p-6
                        shadow-2xl
                        backdrop-blur-2xl
                        sm:w-[280px]
                        sm:p-7
                        md:w-[310px]
                        md:p-8
                    "
                    style={{
                        transform:
                            "translate(-50%, -50%) translateZ(60px)",
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
                            mt-8
                            flex
                            h-[70px]
                            w-[70px]
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
                            md:h-20
                            md:w-20
                        "
                    >
                        <ActiveIcon size={34} />
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
                        <div className="flex gap-1.5">
                            {[1, 2, 3, 4].map(
                                (item) => (
                                    <motion.span
                                        key={item}
                                        animate={{
                                            width:
                                                item ===
                                                    1
                                                    ? 30
                                                    : 5,
                                        }}
                                        className="
                                            h-1
                                            rounded-full
                                            bg-foreground/20
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
                            01 / 11
                        </span>
                    </div>
                </motion.div>

                {/* =================================
                    FLOATING TECH
                ================================== */}

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
                                    setActiveTech(
                                        name
                                    )
                                }
                                onClick={() =>
                                    setActiveTech(
                                        name
                                    )
                                }
                                onFocus={() =>
                                    setActiveTech(
                                        name
                                    )
                                }
                                whileHover={{
                                    scale: 1.1,
                                    y: -6,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                animate={{
                                    y: [
                                        0,
                                        -7,
                                        0,
                                    ],
                                }}
                                transition={{
                                    y: {
                                        duration:
                                            3 +
                                            depth,
                                        repeat:
                                            Infinity,
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

                                    px-3
                                    py-2

                                    text-[10px]
                                    font-semibold

                                    backdrop-blur-xl

                                    transition-all
                                    duration-300

                                    sm:px-4
                                    sm:py-2.5
                                    sm:text-xs

                                    ${isActive
                                        ? `
                                                border-violet-400/40
                                                bg-violet-500/10
                                                text-violet-500
                                                shadow-lg
                                                shadow-violet-500/10
                                                dark:text-violet-300
                                            `
                                        : `
                                                border-border
                                                bg-surface/60
                                                text-muted
                                                hover:text-foreground
                                            `
                                    }
                                `}
                            >
                                <Icon size={14} />

                                {name}
                            </motion.button>
                        );
                    }
                )}

                {/* =================================
                    EXTRA STACK INDICATOR
                ================================== */}

                <motion.div
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                    className="
                        absolute
                        bottom-[15%]
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