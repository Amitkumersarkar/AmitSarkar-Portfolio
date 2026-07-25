import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    FiArrowUpRight,
    FiMenu,
    FiMoon,
    FiSun,
    FiX,
} from "react-icons/fi";

const navItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        return savedTheme;
    }

    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
        ? "dark"
        : "light";
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    /* Theme */
    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle(
            "dark",
            theme === "dark"
        );

        localStorage.setItem("theme", theme);
    }, [theme]);

    /* Scroll */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    const toggleTheme = () => {
        setTheme((current) =>
            current === "light"
                ? "dark"
                : "light"
        );
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{
                    y: -30,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    fixed
                    left-0
                    top-0
                    z-50
                    w-full
                    px-4
                    py-4
                    md:px-8
                    md:py-5
                "
            >
                <nav
                    className={`
                        mx-auto
                        flex
                        max-w-7xl
                        items-center
                        justify-between
                        rounded-full
                        px-4
                        py-2.5
                        transition-all
                        duration-500
                        md:px-5
                        md:py-3
                        ${scrolled
                            ? `
                                    border
                                    border-border/70
                                    bg-background/70
                                    shadow-[0_12px_45px_rgba(0,0,0,0.06)]
                                    backdrop-blur-2xl
                                    dark:shadow-black/20
                                `
                            : "bg-transparent"
                        }
                    `}
                >
                    {/* Logo */}

                    <a
                        href="#home"
                        className="
                            group
                            text-lg
                            font-bold
                            tracking-[-0.07em]
                        "
                    >
                        AMIT
                        <span
                            className="
                                text-muted
                                transition-colors
                                duration-300
                                group-hover:text-accent
                            "
                        >
                            .
                        </span>
                    </a>

                    {/* Desktop */}

                    <div className="hidden items-center gap-7 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="
                                    relative
                                    text-sm
                                    font-medium
                                    text-muted
                                    transition-colors
                                    duration-300
                                    hover:text-foreground
                                "
                            >
                                {item.label}

                                <span
                                    className="
                                        absolute
                                        -bottom-1
                                        left-0
                                        h-px
                                        w-0
                                        bg-foreground
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                    "
                                />
                            </a>
                        ))}

                        {/* Theme */}

                        <ThemeToggle
                            theme={theme}
                            onClick={toggleTheme}
                        />

                        {/* Let's Talk */}

                        <a
                            href="#contact"
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-foreground
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:shadow-lg
                                dark:text-black
                            "
                        >
                            Let's Talk

                            <FiArrowUpRight
                                size={15}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </a>
                    </div>

                    {/* Mobile */}

                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle
                            theme={theme}
                            onClick={toggleTheme}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setMenuOpen(
                                    (prev) => !prev
                                )
                            }
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-border
                                bg-surface/70
                            "
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <FiX size={18} />
                            ) : (
                                <FiMenu size={18} />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            scale: 0.98,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="
                            fixed
                            inset-x-4
                            top-24
                            z-40
                            rounded-3xl
                            border
                            border-border
                            bg-surface/90
                            p-6
                            shadow-2xl
                            backdrop-blur-2xl
                            md:hidden
                        "
                    >
                        <div className="flex flex-col">
                            {navItems.map(
                                (item, index) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={closeMenu}
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay:
                                                index *
                                                0.05,
                                        }}
                                        className="
                                            border-b
                                            border-border
                                            py-4
                                            text-2xl
                                            font-medium
                                            last:border-b-0
                                        "
                                    >
                                        {item.label}
                                    </motion.a>
                                )
                            )}
                        </div>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="
                                group
                                mt-5
                                flex
                                items-center
                                justify-between
                                rounded-full
                                bg-foreground
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                dark:text-black
                            "
                        >
                            Let's Talk

                            <FiArrowUpRight
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

/* =========================================================
   THEME TOGGLE
========================================================= */

const ThemeToggle = ({ theme, onClick }) => {
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-border
                bg-surface/80
                text-foreground
                transition-all
                duration-300
                hover:scale-105
            "
        >
            <AnimatePresence
                mode="wait"
                initial={false}
            >
                {isDark ? (
                    <motion.span
                        key="sun"
                        initial={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.5,
                        }}
                    >
                        <FiSun size={17} />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.5,
                        }}
                    >
                        <FiMoon size={17} />
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
};

export default Navbar;