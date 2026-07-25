import { motion } from "motion/react";
import {
    FiArrowUpRight,
    FiCode,
    FiLayers,
    FiZap,
} from "react-icons/fi";

const highlights = [
    {
        icon: FiCode,
        value: "MERN",
        label: "Primary Stack",
    },
    {
        icon: FiLayers,
        value: "Full-Stack",
        label: "Development",
    },
    {
        icon: FiZap,
        value: "Modern",
        label: "Web Experiences",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="
                relative
                overflow-hidden
                px-5
                py-24
                sm:py-28
                md:px-10
                md:py-36
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >
                {/* =====================================
                    SECTION HEADER
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
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
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-muted
                            sm:text-xs
                        "
                    >
                        About me
                    </span>
                </motion.div>

                {/* =====================================
                    MAIN CONTENT
                ====================================== */}

                <div
                    className="
                        mt-12
                        grid
                        gap-14
                        lg:grid-cols-[1.15fr_0.85fr]
                        lg:items-end
                        lg:gap-20
                    "
                >
                    {/* =================================
                        BIG STATEMENT
                    ================================== */}

                    <motion.div
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
                            duration: 0.9,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <h2
                            className="
                                max-w-4xl
                                text-[clamp(2.8rem,6vw,6.5rem)]
                                font-semibold
                                leading-[0.92]
                                tracking-[-0.07em]
                            "
                        >
                            I turn ideas into{" "}
                            <span
                                className="
                                    bg-gradient-to-r
                                    from-foreground
                                    via-foreground/70
                                    to-accent
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                useful
                            </span>{" "}
                            digital experiences.
                        </h2>
                    </motion.div>

                    {/* =================================
                        DESCRIPTION
                    ================================== */}

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
                            duration: 0.8,
                            delay: 0.15,
                        }}
                        className="
                            max-w-lg
                            lg:pb-2
                        "
                    >
                        <p
                            className="
                                text-sm
                                leading-7
                                text-muted
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            I'm Amit Sarkar, a Full-Stack
                            Developer focused on building
                            modern web applications with
                            thoughtful interfaces and
                            reliable backend systems.
                        </p>

                        <p
                            className="
                                mt-5
                                text-sm
                                leading-7
                                text-muted
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            I enjoy turning complex ideas
                            into simple, responsive and
                            scalable experiences using
                            React, MERN and the PERN
                            Stack.
                        </p>

                        <motion.a
                            href="#work"
                            whileHover={{
                                x: 5,
                            }}
                            className="
                                group
                                mt-7
                                inline-flex
                                items-center
                                gap-2
                                border-b
                                border-foreground/20
                                pb-2
                                text-sm
                                font-semibold
                                transition-colors
                                duration-300
                                hover:border-accent
                                hover:text-accent
                            "
                        >
                            See what I build

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

                {/* =====================================
                    HIGHLIGHTS
                ====================================== */}

                <div
                    className="
                        mt-20
                        grid
                        grid-cols-1
                        gap-px
                        overflow-hidden
                        rounded-3xl
                        border
                        border-border
                        bg-border
                        sm:grid-cols-3
                        lg:mt-28
                    "
                >
                    {highlights.map(
                        (
                            {
                                icon: Icon,
                                value,
                                label,
                            },
                            index
                        ) => (
                            <motion.div
                                key={label}
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
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay:
                                        index * 0.08,
                                }}
                                whileHover={{
                                    y: -4,
                                }}
                                className="
                                    group
                                    relative
                                    bg-surface
                                    p-6
                                    transition-colors
                                    duration-300
                                    hover:bg-surface-soft
                                    sm:p-7
                                    md:p-8
                                "
                            >
                                {/* Accent glow */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-8
                                        -top-8
                                        h-24
                                        w-24
                                        rounded-full
                                        bg-accent/10
                                        opacity-0
                                        blur-3xl
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                />

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        items-start
                                        justify-between
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-border
                                            bg-surface-soft
                                            text-accent
                                        "
                                    >
                                        <Icon size={17} />
                                    </div>

                                    <FiArrowUpRight
                                        size={16}
                                        className="
                                            text-muted
                                            transition-all
                                            duration-300
                                            group-hover:-translate-y-1
                                            group-hover:translate-x-1
                                            group-hover:text-accent
                                        "
                                    />
                                </div>

                                <div className="relative z-10 mt-12">
                                    <p
                                        className="
                                            text-xl
                                            font-semibold
                                            tracking-[-0.04em]
                                            sm:text-2xl
                                        "
                                    >
                                        {value}
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            uppercase
                                            tracking-[0.15em]
                                            text-muted
                                        "
                                    >
                                        {label}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>

                {/* =====================================
                    BOTTOM LINE
                ====================================== */}

                <motion.div
                    initial={{
                        scaleX: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        scaleX: 1,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                    }}
                    className="
                        mt-20
                        h-px
                        origin-left
                        bg-border/60
                        lg:mt-24
                    "
                />
            </div>
        </section>
    );
};

export default About;