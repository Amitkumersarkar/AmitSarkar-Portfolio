import { motion } from "motion/react";
import InteractiveTech from "../components/InteractiveTech";
import {
    FiArrowDown,
    FiArrowUpRight,
} from "react-icons/fi";

const Hero = () => {
    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                overflow-hidden
                px-5
                pb-8
                pt-28
                md:px-10
                md:pt-32
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    min-h-[calc(100vh-8rem)]
                    max-w-7xl
                    flex-col
                "
            >
                {/* =====================================
                    TOP META
                ====================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: -15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5">
                            <span
                                className="
                                    absolute
                                    inset-0
                                    animate-ping
                                    rounded-full
                                    bg-emerald-400
                                    opacity-60
                                "
                            />

                            <span
                                className="
                                    relative
                                    block
                                    h-2.5
                                    w-2.5
                                    rounded-full
                                    bg-emerald-500
                                "
                            />
                        </span>

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
                            Available for opportunities
                        </span>
                    </div>

                    <span
                        className="
                            hidden
                            text-xs
                            text-muted
                            md:block
                        "
                    >
                        Based in Bangladesh
                    </span>
                </motion.div>

                {/* =====================================
                    HERO AREA
                ====================================== */}

                <div
                    className="
                        relative
                        flex
                        flex-1
                        flex-col
                        justify-center
                        py-14
                        lg:py-10
                    "
                >
                    {/* Left side */}

                    <div
                        className="
                            relative
                            z-20
                            w-full
                            lg:w-[62%]
                        "
                    >
                        {/* Role */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
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
                                    bg-foreground/30
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
                                Frontend / MERN Developer
                            </span>
                        </motion.div>

                        {/* Main heading */}

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{
                                    y: "100%",
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.2,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                                className="
                                    text-[clamp(4rem,10vw,9.5rem)]
                                    font-semibold
                                    leading-[0.8]
                                    tracking-[-0.09em]
                                "
                            >
                                I BUILD
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{
                                    y: "100%",
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.3,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                                className="
                                    ml-[7vw]
                                    bg-gradient-to-r
                                    from-foreground
                                    via-foreground/70
                                    to-accent
                                    bg-clip-text
                                    text-[clamp(4rem,10vw,9.5rem)]
                                    font-semibold
                                    leading-[0.8]
                                    tracking-[-0.09em]
                                    text-transparent
                                "
                            >
                                DIGITAL
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{
                                    y: "100%",
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.4,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                                className="
                                    text-[clamp(4rem,10vw,9.5rem)]
                                    font-semibold
                                    leading-[0.8]
                                    tracking-[-0.09em]
                                "
                            >
                                EXPERIENCES
                                <span className="text-accent">
                                    .
                                </span>
                            </motion.h1>
                        </div>

                        {/* Name */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.7,
                            }}
                            className="
                                mt-10
                                flex
                                items-center
                                gap-4
                            "
                        >
                            <div
                                className="
                                    h-px
                                    w-10
                                    bg-border
                                "
                            />

                            <div>
                                <p className="text-sm font-semibold">
                                    Amit Sarkar
                                </p>

                                <p className="mt-1 text-xs text-muted">
                                    Full-stack developer
                                </p>
                            </div>
                        </motion.div>

                        {/* Description */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.8,
                            }}
                            className="
                                mt-8
                                max-w-md
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    leading-7
                                    text-muted
                                    md:text-base
                                "
                            >
                                I create modern, responsive
                                web experiences using React,
                                JavaScript and the MERN
                                stack — combining thoughtful
                                interfaces with clean,
                                scalable development.
                            </p>

                            <motion.a
                                href="#work"
                                whileHover={{
                                    x: 5,
                                }}
                                className="
                                    group
                                    mt-6
                                    inline-flex
                                    items-center
                                    gap-3
                                    border-b
                                    border-foreground/30
                                    pb-2
                                    text-sm
                                    font-semibold
                                    transition-colors
                                    hover:border-foreground
                                "
                            >
                                Explore my work

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
                        INTERACTIVE TECH
                    ====================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        className="
                            relative
                            mt-14
                            w-full
                            lg:absolute
                            lg:right-[-3%]
                            lg:top-1/2
                            lg:mt-0
                            lg:w-[47%]
                            lg:-translate-y-1/2
                        "
                    >
                        <InteractiveTech />
                    </motion.div>
                </div>

                {/* =====================================
                    BOTTOM
                ====================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                    }}
                    className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-border/60
                        pt-5
                    "
                >
                    <span
                        className="
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-muted
                        "
                    >
                        2026 — Portfolio
                    </span>

                    <a
                        href="#work"
                        className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-muted
                        "
                    >
                        Scroll to explore

                        <motion.span
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <FiArrowDown size={13} />
                        </motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;