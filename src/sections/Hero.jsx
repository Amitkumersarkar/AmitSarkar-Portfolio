import { motion } from "motion/react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col justify-between overflow-hidden px-5 pb-8 pt-32 md:px-10 md:pt-40"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-1 items-center">
                <div className="w-full">
                    {/* Small Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex items-center gap-3"
                    >
                        <span className="h-2 w-2 rounded-full bg-black" />

                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                            Frontend / MERN Developer
                        </p>
                    </motion.div>

                    {/* Main Heading */}
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-[19vw] font-semibold leading-[0.78] tracking-[-0.09em] md:text-[12vw]"
                        >
                            AMIT
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-[19vw] font-semibold leading-[0.78] tracking-[-0.09em] md:text-[12vw]"
                        >
                            SARKAR<span className="text-neutral-300">.</span>
                        </motion.h1>
                    </div>

                    {/* Description */}
                    <div className="mt-12 flex flex-col gap-7 md:ml-auto md:max-w-lg">
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.65 }}
                            className="text-base leading-7 text-neutral-600 md:text-lg"
                        >
                            I design and build modern digital experiences
                            with React, JavaScript, and the MERN stack —
                            focused on clean interfaces, usability, and
                            meaningful interactions.
                        </motion.p>

                        <motion.a
                            href="#work"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="group flex w-fit items-center gap-3 border-b border-black pb-2 text-sm font-medium uppercase tracking-wider"
                        >
                            Explore my work

                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <FiArrowUpRight />
                            </span>
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Bottom Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mx-auto flex w-full max-w-7xl items-end justify-between text-xs uppercase tracking-[0.2em] text-neutral-400"
            >
                <span>Based in Bangladesh</span>

                <a
                    href="#about"
                    className="hidden items-center gap-2 transition-colors hover:text-black sm:flex"
                >
                    Scroll to explore
                    <FiArrowDown />
                </a>

                <span>© 2026</span>
            </motion.div>
        </section>
    );
};

export default Hero;