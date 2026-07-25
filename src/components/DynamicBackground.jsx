import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const DynamicBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 40,
        damping: 25,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 40,
        damping: 25,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, [mouseX, mouseY]);

    return (
        <div
            className="
                pointer-events-none
                fixed
                inset-0
                -z-10
                overflow-hidden
                bg-background
                transition-colors
                duration-500
            "
        >
            {/* Mouse-following glow */}
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                }}
                className="
                    absolute
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-violet-400/10
                    blur-[120px]
                    dark:bg-violet-500/10
                "
            />

            {/* Top left */}
            <motion.div
                animate={{
                    x: [0, 35, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -left-40
                    -top-40
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-violet-400/10
                    blur-[120px]
                    dark:bg-violet-500/10
                "
            />

            {/* Top right */}
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 35, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -right-48
                    top-10
                    h-[600px]
                    w-[600px]
                    rounded-full
                    bg-cyan-300/10
                    blur-[140px]
                    dark:bg-cyan-500/8
                "
            />

            {/* Bottom left */}
            <motion.div
                animate={{
                    x: [0, 25, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -bottom-60
                    left-[15%]
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-pink-300/8
                    blur-[150px]
                    dark:bg-pink-500/7
                "
            />

            {/* Bottom right */}
            <motion.div
                animate={{
                    x: [0, -25, 0],
                    y: [0, -25, 0],
                    scale: [1, 1.06, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -bottom-60
                    -right-40
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-blue-300/10
                    blur-[140px]
                    dark:bg-blue-500/8
                "
            />

            {/* Very subtle center light */}
            <motion.div
                animate={{
                    opacity: [0.25, 0.45, 0.25],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    left-1/2
                    top-[38%]
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-indigo-300/5
                    blur-[150px]
                    dark:bg-indigo-500/5
                "
            />
        </div>
    );
};

export default DynamicBackground;