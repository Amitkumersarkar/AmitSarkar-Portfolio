import { motion, useScroll, useTransform } from "motion/react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import InteractiveTech from "../components/InteractiveTech";

const Hero = () => {
    const { scrollY } = useScroll();

    const backgroundY = useTransform(
        scrollY,
        [0, 700],
        [0, 120]
    );

    const techY = useTransform(
        scrollY,
        [0, 700],
        [0, -45]
    );

    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                overflow-hidden
                px-5
                pb-6
                pt-28
                sm:px-6
                md:px-10
                md:pt-32
                lg:pb-8
            "
        >
            {/* =========================================
                SUBTLE HERO GRID
            ========================================== */}

            <motion.div
                style={{ y: backgroundY }}
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    opacity-[0.035]
                    dark:opacity-[0.025]
                "
            >
                <div
                    className="
                        absolute
                        inset-0
                        bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)]
                        bg-[size:80px_80px]
                        [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
                    "
                />
            </motion.div>

            {/* =========================================
                PURPLE AMBIENT GLOW
            ========================================== */}

            <motion.div
                animate={{
                    x: [0, 25, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-[18%]
                    -z-10
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-accent/10
                    blur-[130px]
                    sm:h-[520px]
                    sm:w-[520px]
                    lg:h-[650px]
                    lg:w-[650px]
                "
            />

            <motion.div
                animate={{
                    x: [0, -20, 0],
                    y: [0, 25, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    bottom-[5%]
                    -z-10
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-accent-secondary/5
                    blur-[120px]
                    sm:h-[450px]
                    sm:w-[450px]
                "
            />

            <div
                className="
                    mx-auto
                    flex
                    min-h-[calc(100vh-8rem)]
                    max-w-7xl
                    flex-col
                "
            >
                {/* =========================================
                    TOP META
                ========================================== */}

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
                        ease: "easeOut",
                    }}
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >
                    <div className="flex items-center gap-3">
                        {/* Availability indicator */}

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
                                    shadow-[0_0_12px_rgba(16,185,129,0.5)]
                                "
                            />
                        </span>

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-muted
                                sm:text-[10px]
                                md:text-xs
                                md:tracking-[0.2em]
                            "
                        >
                            Available for opportunities
                        </span>
                    </div>

                    <span
                        className="
                            hidden
                            text-xs
                            font-medium
                            text-muted
                            md:block
                        "
                    >
                        Based in Bangladesh
                    </span>
                </motion.div>

                {/* =========================================
                    HERO CONTENT
                ========================================== */}

                <div
                    className="
                        relative
                        flex
                        flex-1
                        flex-col
                        justify-center
                        py-14
                        sm:py-16
                        lg:py-10
                    "
                >
                    {/* =====================================
                        LEFT CONTENT
                    ====================================== */}

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
                                sm:mb-7
                            "
                        >
                            <span
                                className="
                                    h-px
                                    w-7
                                    bg-accent
                                    sm:w-9
                                "
                            />

                            <span
                                className="
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-muted
                                    sm:text-[10px]
                                    md:text-xs
                                    md:tracking-[0.2em]
                                "
                            >
                                Frontend / MERN / PERN Stack Developer
                            </span>
                        </motion.div>

                        {/* =================================
                            MAIN TITLE
                        ================================== */}

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{
                                    y: "105%",
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
                                    whitespace-nowrap
                                    text-[clamp(3rem,12vw,9.5rem)]
                                    font-semibold
                                    leading-[0.82]
                                    tracking-[-0.085em]
                                    sm:text-[clamp(4rem,10vw,9.5rem)]
                                "
                            >
                                I BUILD
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{
                                    y: "105%",
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
                                    ml-[5vw]
                                    whitespace-nowrap
                                    bg-gradient-to-r
                                    from-foreground
                                    via-foreground/80
                                    to-accent
                                    bg-clip-text
                                    text-[clamp(3rem,12vw,9.5rem)]
                                    font-semibold
                                    leading-[0.82]
                                    tracking-[-0.085em]
                                    text-transparent
                                    sm:ml-[7vw]
                                    sm:text-[clamp(4rem,10vw,9.5rem)]
                                "
                            >
                                DIGITAL
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{
                                    y: "105%",
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
                                    whitespace-nowrap
                                    text-[clamp(3rem,12vw,9.5rem)]
                                    font-semibold
                                    leading-[0.82]
                                    tracking-[-0.085em]
                                    sm:text-[clamp(4rem,10vw,9.5rem)]
                                "
                            >
                                EXPERIENCES
                                <span className="text-accent">
                                    .
                                </span>
                            </motion.h1>
                        </div>

                        {/* =================================
                            NAME
                        ================================== */}

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
                                mt-8
                                flex
                                items-center
                                gap-4
                                sm:mt-10
                            "
                        >
                            <div
                                className="
                                    h-px
                                    w-8
                                    bg-accent/60
                                    sm:w-10
                                "
                            />

                            <div>
                                <p
                                    className="
                                        text-sm
                                        font-semibold
                                        tracking-[-0.02em]
                                    "
                                >
                                    Amit Sarkar
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-[11px]
                                        text-muted
                                        sm:text-xs
                                    "
                                >
                                    Full-Stack Developer
                                </p>
                            </div>
                        </motion.div>

                        {/* =================================
                            DESCRIPTION
                        ================================== */}

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
                                mt-7
                                max-w-md
                                sm:mt-8
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    leading-7
                                    text-muted
                                    sm:text-base
                                "
                            >
                                I craft modern, responsive web experiences with React.js, Next.js, and the MERN/PERN stack — blending thoughtful design, seamless interactions, and scalable engineering.

                            </p>

                            {/* CTA */}

                            <motion.a
                                href="#work"
                                whileHover="hover"
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="
                                    group
                                    mt-6
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-accent/30
                                    bg-accent/5
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    text-accent
                                    transition-all
                                    duration-300
                                    hover:border-accent/50
                                    hover:bg-accent
                                    hover:text-white
                                    hover:shadow-[0_10px_35px_rgba(109,93,252,0.25)]
                                "
                            >
                                Explore my work

                                <motion.span
                                    variants={{
                                        hover: {
                                            x: 4,
                                            y: -4,
                                            rotate: 5,
                                        },
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >
                                    <FiArrowUpRight
                                        size={15}
                                    />
                                </motion.span>
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* =====================================
                        INTERACTIVE TECH
                    ====================================== */}

                    <motion.div
                        style={{
                            y: techY,
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.92,
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
                            mt-12
                            w-full
                            sm:mt-14
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

                {/* =========================================
                    BOTTOM META
                ========================================== */}

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
                        pt-4
                        sm:pt-5
                    "
                >
                    <span
                        className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-muted
                            sm:text-[10px]
                            sm:tracking-[0.2em]
                        "
                    >
                        2026 — Portfolio
                    </span>

                    <a
                        href="#work"
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-muted
                            transition-colors
                            hover:text-accent
                            sm:text-[10px]
                            sm:tracking-[0.2em]
                        "
                    >
                        <span className="hidden xs:block">
                            Scroll to explore
                        </span>

                        <span className="xs:hidden">
                            Explore
                        </span>

                        <motion.span
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                text-accent
                            "
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