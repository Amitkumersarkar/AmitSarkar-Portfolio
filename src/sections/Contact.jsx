import { motion } from "motion/react";
import {
    FiArrowUpRight,
    FiDownload,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiPhone,
} from "react-icons/fi";

const Contact = () => {
    return (
        <section
            id="contact"
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
                    SECTION LABEL
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
                        mb-10
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
                        Get in touch
                    </span>
                </motion.div>

                {/* =====================================
                    MAIN CONTENT
                ====================================== */}

                <div
                    className="
                        grid
                        gap-12
                        lg:grid-cols-[1.3fr_0.7fr]
                        lg:items-end
                    "
                >
                    {/* =================================
                        LEFT
                    ================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
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
                        }}
                    >
                        <h2
                            className="
                                max-w-5xl
                                text-[clamp(3.5rem,8vw,8rem)]
                                font-semibold
                                leading-[0.82]
                                tracking-[-0.09em]
                            "
                        >
                            Let&apos;s build
                            <br />

                            <span
                                className="
                                    bg-gradient-to-r
                                    from-violet-500
                                    via-indigo-500
                                    to-cyan-400
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                something.
                            </span>
                        </h2>

                        <p
                            className="
                                mt-8
                                max-w-xl
                                text-sm
                                leading-7
                                text-muted
                                md:text-base
                            "
                        >
                            Have a project in mind, an opportunity,
                            or simply want to connect? I&apos;d love
                            to hear from you.
                        </p>

                        {/* EMAIL */}

                        <motion.a
                            href="mailto:amitsarkar.dev.bd@gmail.com"
                            whileHover={{
                                x: 6,
                            }}
                            className="
                                group
                                mt-8
                                inline-flex
                                items-center
                                gap-3
                                text-base
                                font-semibold
                                transition-colors
                                hover:text-accent
                                md:text-lg
                            "
                        >
                            <FiMail
                                size={18}
                                className="text-accent"
                            />

                            <span>
                                amitsarkar.dev.bd@gmail.com
                            </span>

                            <FiArrowUpRight
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:-translate-y-1
                                    group-hover:translate-x-1
                                "
                            />
                        </motion.a>
                    </motion.div>

                    {/* =================================
                        RIGHT CARD
                    ================================= */}

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
                            delay: 0.15,
                        }}
                        className="
                            rounded-[2rem]
                            border
                            border-border
                            bg-surface/70
                            p-6
                            backdrop-blur-xl
                            md:p-7
                        "
                    >
                        <p
                            className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-muted
                            "
                        >
                            Connect
                        </p>

                        <div className="mt-5 flex flex-col">

                            {/* GITHUB */}

                            <a
                                href="https://github.com/Amitkumersarkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-border
                                    py-4
                                    transition-colors
                                    hover:text-accent
                                "
                            >
                                <span className="flex items-center gap-3">
                                    <FiGithub size={18} />

                                    <span className="text-sm font-medium">
                                        GitHub
                                    </span>
                                </span>

                                <FiArrowUpRight
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                    "
                                />
                            </a>

                            {/* LINKEDIN */}

                            <a
                                href="https://www.linkedin.com/in/amit-sarkar-63504b252/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-border
                                    py-4
                                    transition-colors
                                    hover:text-accent
                                "
                            >
                                <span className="flex items-center gap-3">
                                    <FiLinkedin size={18} />

                                    <span className="text-sm font-medium">
                                        LinkedIn
                                    </span>
                                </span>

                                <FiArrowUpRight
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                    "
                                />
                            </a>

                            {/* EMAIL */}

                            <a
                                href="mailto:amitsarkar.dev.bd@gmail.com"
                                className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-border
                                    py-4
                                    transition-colors
                                    hover:text-accent
                                "
                            >
                                <span className="flex items-center gap-3">
                                    <FiMail size={18} />

                                    <span className="text-sm font-medium">
                                        Email
                                    </span>
                                </span>

                                <FiArrowUpRight
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                    "
                                />
                            </a>

                            {/* PHONE */}

                            <a
                                href="tel:+8801986804513"
                                className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    py-4
                                    transition-colors
                                    hover:text-accent
                                "
                            >
                                <span className="flex items-center gap-3">
                                    <FiPhone size={18} />

                                    <span className="text-sm font-medium">
                                        +880 1986-804513
                                    </span>
                                </span>

                                <FiArrowUpRight
                                    size={16}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                    "
                                />
                            </a>
                        </div>

                        {/* =================================
                            CV BUTTON
                        ================================= */}

                        <a
                            href="/Amit-Sarkar-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                mt-6
                                flex
                                items-center
                                justify-between
                                rounded-full
                                bg-gradient-to-r
                                from-violet-500
                                via-indigo-500
                                to-violet-500
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-violet-500/20
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                hover:shadow-violet-500/30
                            "
                        >
                            <span className="flex items-center gap-2">
                                <FiDownload size={16} />

                                View / Download CV
                            </span>

                            <FiArrowUpRight
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:-translate-y-1
                                    group-hover:translate-x-1
                                "
                            />
                        </a>
                    </motion.div>
                </div>

                {/* =====================================
                    BOTTOM
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
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="
                        mt-24
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-border/60
                        pt-5
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
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
                        Amit Sarkar — Full-stack developer
                    </span>

                    <span
                        className="
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-muted
                        "
                    >
                        Dhaka, Bangladesh
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;