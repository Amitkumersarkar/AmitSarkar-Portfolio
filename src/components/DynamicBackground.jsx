import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const DynamicBackground = () => {
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);

    const smoothX = useSpring(mouseX, {
        stiffness: 35,
        damping: 25,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 35,
        damping: 25,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseX.set((event.clientX / window.innerWidth) * 100);
            mouseY.set((event.clientY / window.innerHeight) * 100);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Base */}
            <div className="absolute inset-0 bg-background transition-colors duration-700" />

            {/* Soft violet ambient light */}
            <motion.div
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -30, 40, 0],
                    scale: [1, 1.08, 0.96, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -left-32
                    -top-32
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-violet-300/15
                    blur-[120px]
                    dark:bg-violet-500/10
                "
            />

            {/* Soft blue ambient light */}
            <motion.div
                animate={{
                    x: [0, -60, 30, 0],
                    y: [0, 40, -30, 0],
                    scale: [1, 0.95, 1.05, 1],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -right-32
                    top-[25%]
                    h-[480px]
                    w-[480px]
                    rounded-full
                    bg-sky-300/15
                    blur-[120px]
                    dark:bg-sky-500/10
                "
            />

            {/* Soft peach ambient light */}
            <motion.div
                animate={{
                    x: [0, 40, -50, 0],
                    y: [0, 30, -40, 0],
                    scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    bottom-[-180px]
                    left-[25%]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-orange-200/15
                    blur-[120px]
                    dark:bg-orange-400/10
                "
            />

            {/* Mouse-following glow */}
            <motion.div
                className="
                    absolute
                    hidden
                    h-[450px]
                    w-[450px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    md:block
                "
                style={{
                    left: smoothX,
                    top: smoothY,
                    background:
                        "radial-gradient(circle, rgba(139,92,246,0.07) 0%, rgba(56,189,248,0.035) 30%, transparent 70%)",
                }}
            />

            {/* Very subtle texture */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.015]"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            to right,
                            var(--foreground) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to bottom,
                            var(--foreground) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "100px 100px",
                }}
            />
        </div>
    );
};

export default DynamicBackground;