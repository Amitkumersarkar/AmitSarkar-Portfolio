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
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => getInitialTheme());

    /* --------------------------------
       Apply Theme
    --------------------------------- */

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

    /* --------------------------------
       Scroll Detection
    --------------------------------- */

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    return (
        <>
            <motion.header
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-10"
            >
                <nav
                    className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled
                        ? "border border-border bg-background/75 shadow-sm backdrop-blur-xl"
                        : "bg-transparent"
                        }`}
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-lg font-semibold tracking-[-0.04em]"
                    >
                        AMIT<span className="text-muted">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <ThemeToggle
                            theme={theme}
                            onClick={toggleTheme}
                        />

                        {/* Let's Talk */}
                        <a
                            href="#contact"
                            className="group flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-all duration-300 hover:scale-105"
                        >
                            Let's Talk

                            <FiArrowUpRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                                setMenuOpen((prev) => !prev)
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
                            aria-label="Toggle navigation menu"
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
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                        className="fixed inset-x-5 top-24 z-40 rounded-3xl border border-border bg-surface p-6 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col">
                            {navItems.map((item, index) => (
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
                                        delay: index * 0.05,
                                    }}
                                    className="border-b border-border py-4 text-2xl font-medium last:border-b-0"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="group mt-5 flex items-center justify-between rounded-full bg-foreground px-5 py-3 text-sm text-background"
                        >
                            Let's Talk

                            <FiArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

/* --------------------------------
   Theme Toggle
--------------------------------- */

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
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-surface text-foreground transition-colors duration-300"
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
                        transition={{
                            duration: 0.25,
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
                        transition={{
                            duration: 0.25,
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