import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
} from "motion/react";

import { useEffect, useState } from "react";

const DynamicBackground = () => {
    const shouldReduceMotion = useReducedMotion();

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    /* =====================================================
       CURSOR POSITION
    ===================================================== */

    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);

    const smoothX = useSpring(mouseX, {
        stiffness: 45,
        damping: 25,
        mass: 0.6,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 45,
        damping: 25,
        mass: 0.6,
    });

    /* =====================================================
       SCROLL POSITION
    ===================================================== */

    const scrollProgress = useMotionValue(0);

    const orbY = useTransform(
        scrollProgress,
        [0, 1],
        [0, -120]
    );

    const orbYReverse = useTransform(
        scrollProgress,
        [0, 1],
        [0, 100]
    );

    /* =====================================================
       DEVICE DETECTION
    ===================================================== */

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(pointer: coarse)"
        );

        const updateDevice = () => {
            setIsTouchDevice(mediaQuery.matches);
        };

        updateDevice();

        mediaQuery.addEventListener(
            "change",
            updateDevice
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                updateDevice
            );
        };
    }, []);

    /* =====================================================
       MOUSE TRACKING
    ===================================================== */

    useEffect(() => {
        if (isTouchDevice || shouldReduceMotion) {
            return;
        }

        const handleMouseMove = (event) => {
            const x =
                (event.clientX /
                    window.innerWidth) *
                100;

            const y =
                (event.clientY /
                    window.innerHeight) *
                100;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, [
        isTouchDevice,
        shouldReduceMotion,
        mouseX,
        mouseY,
    ]);

    /* =====================================================
       SCROLL TRACKING
    ===================================================== */

    useEffect(() => {
        if (shouldReduceMotion) {
            return;
        }

        const handleScroll = () => {
            const maxScroll =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            if (maxScroll <= 0) {
                scrollProgress.set(0);
                return;
            }

            scrollProgress.set(
                window.scrollY / maxScroll
            );
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        handleScroll();

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, [
        shouldReduceMotion,
        scrollProgress,
    ]);

    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                fixed
                inset-0
                z-0
                overflow-hidden
                bg-background
                transition-colors
                duration-700
            "
        >
            {/* =================================================
                BASE ATMOSPHERE
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent)_7%,transparent),transparent_38%)]
                "
            />

            {/* =================================================
                SUBTLE GRID
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.035]
                    dark:opacity-[0.045]
                    [background-image:linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)]
                    [background-size:72px_72px]
                    [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]
                "
            />

            {/* =================================================
                CURSOR SPOTLIGHT
            ================================================= */}

            {!isTouchDevice &&
                !shouldReduceMotion && (
                    <>
                        <motion.div
                            style={{
                                left: smoothX,
                                top: smoothY,
                            }}
                            className="
                                absolute
                                h-[min(38vw,520px)]
                                w-[min(38vw,520px)]
                                min-h-[280px]
                                min-w-[280px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_13%,transparent)_0%,color-mix(in_srgb,var(--accent-secondary)_5%,transparent)_32%,transparent_70%)]
                                blur-2xl
                                transition-opacity
                                duration-500
                            "
                        />

                        {/* Small cursor core */}

                        <motion.div
                            style={{
                                left: smoothX,
                                top: smoothY,
                            }}
                            className="
                                absolute
                                h-24
                                w-24
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-secondary)_10%,transparent),transparent_70%)]
                                blur-xl
                            "
                        />
                    </>
                )}

            {/* =================================================
                AURORA 01
            ================================================= */}

            <motion.div
                style={{
                    y: orbY,
                }}
                animate={
                    shouldReduceMotion
                        ? undefined
                        : {
                            x: [0, 70, -40, 0],
                            y: [0, 35, -20, 0],
                            scale: [
                                1,
                                1.08,
                                0.96,
                                1,
                            ],
                        }
                }
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -left-[18vw]
                    -top-[15vw]
                    h-[clamp(300px,48vw,720px)]
                    w-[clamp(300px,48vw,720px)]
                    rounded-full
                    bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_68%)]
                    blur-[100px]
                    sm:blur-[120px]
                    lg:blur-[150px]
                "
            />

            {/* =================================================
                AURORA 02
            ================================================= */}

            <motion.div
                style={{
                    y: orbYReverse,
                }}
                animate={
                    shouldReduceMotion
                        ? undefined
                        : {
                            x: [0, -60, 35, 0],
                            y: [0, -30, 45, 0],
                            scale: [
                                1,
                                0.94,
                                1.08,
                                1,
                            ],
                        }
                }
                transition={{
                    duration: 21,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -right-[20vw]
                    top-[5vh]
                    h-[clamp(320px,50vw,760px)]
                    w-[clamp(320px,50vw,760px)]
                    rounded-full
                    bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-secondary)_11%,transparent),transparent_68%)]
                    blur-[110px]
                    sm:blur-[130px]
                    lg:blur-[160px]
                "
            />

            {/* =================================================
                PINK AURORA
            ================================================= */}

            <motion.div
                animate={
                    shouldReduceMotion
                        ? undefined
                        : {
                            x: [0, 50, -25, 0],
                            y: [0, -35, 20, 0],
                            scale: [
                                1,
                                1.05,
                                0.95,
                                1,
                            ],
                        }
                }
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    bottom-[-22vw]
                    left-[10%]
                    h-[clamp(300px,45vw,650px)]
                    w-[clamp(300px,45vw,650px)]
                    rounded-full
                    bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-pink)_7%,transparent),transparent_70%)]
                    blur-[120px]
                    lg:blur-[160px]
                "
            />

            {/* =================================================
                BLUE AURORA
            ================================================= */}

            <motion.div
                animate={
                    shouldReduceMotion
                        ? undefined
                        : {
                            x: [0, -40, 25, 0],
                            y: [0, -20, 35, 0],
                        }
                }
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    bottom-[-20vw]
                    right-[-12vw]
                    h-[clamp(320px,45vw,680px)]
                    w-[clamp(320px,45vw,680px)]
                    rounded-full
                    bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-secondary)_7%,transparent),transparent_70%)]
                    blur-[120px]
                    lg:blur-[160px]
                "
            />

            {/* =================================================
                FLOATING LIGHT ORB
            ================================================= */}

            <motion.div
                animate={
                    shouldReduceMotion
                        ? undefined
                        : {
                            x: [
                                "-15vw",
                                "10vw",
                                "-5vw",
                                "-15vw",
                            ],
                            y: [
                                "5vh",
                                "25vh",
                                "45vh",
                                "5vh",
                            ],
                            opacity: [
                                0.15,
                                0.35,
                                0.18,
                                0.15,
                            ],
                        }
                }
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    left-[50%]
                    top-[10%]
                    h-3
                    w-3
                    rounded-full
                    bg-accent-secondary
                    shadow-[0_0_35px_10px_color-mix(in_srgb,var(--accent-secondary)_20%,transparent)]
                    blur-[1px]
                "
            />

            {/* =================================================
                PARTICLES
            ================================================= */}

            <div className="absolute inset-0">
                {[
                    {
                        left: "8%",
                        top: "18%",
                        delay: 0,
                    },
                    {
                        left: "18%",
                        top: "72%",
                        delay: 1,
                    },
                    {
                        left: "34%",
                        top: "30%",
                        delay: 2,
                    },
                    {
                        left: "48%",
                        top: "82%",
                        delay: 0.5,
                    },
                    {
                        left: "65%",
                        top: "18%",
                        delay: 1.5,
                    },
                    {
                        left: "78%",
                        top: "64%",
                        delay: 2.5,
                    },
                    {
                        left: "91%",
                        top: "30%",
                        delay: 1,
                    },
                    {
                        left: "56%",
                        top: "48%",
                        delay: 3,
                    },
                ].map((particle, index) => (
                    <motion.span
                        key={index}
                        animate={
                            shouldReduceMotion
                                ? undefined
                                : {
                                    opacity: [
                                        0.15,
                                        0.6,
                                        0.15,
                                    ],
                                    scale: [
                                        0.8,
                                        1.2,
                                        0.8,
                                    ],
                                    y: [
                                        0,
                                        -12,
                                        0,
                                    ],
                                }
                        }
                        transition={{
                            duration:
                                3.5 +
                                particle.delay,
                            delay:
                                particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: particle.left,
                            top: particle.top,
                        }}
                        className="
                            absolute
                            h-1
                            w-1
                            rounded-full
                            bg-foreground/20
                            dark:bg-white/20
                        "
                    />
                ))}
            </div>

            {/* =================================================
                HORIZONTAL LIGHT LINE
            ================================================= */}

            <motion.div
                animate={
                    shouldReduceMotion
                        ? undefined
                        : {
                            x: [
                                "-30%",
                                "130%",
                            ],
                        }
                }
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
                    absolute
                    left-0
                    top-[42%]
                    h-px
                    w-[30vw]
                    min-w-[220px]
                    bg-gradient-to-r
                    from-transparent
                    via-accent/10
                    to-transparent
                    blur-[1px]
                "
            />

            {/* =================================================
                VIGNETTE
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_115%)]
                    opacity-50
                "
            />

            {/* =================================================
                MOBILE SOFT OVERLAY
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-background/5
                    sm:bg-transparent
                "
            />
        </div>
    );
};

export default DynamicBackground;