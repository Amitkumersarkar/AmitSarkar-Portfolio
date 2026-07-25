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

/* =========================================================
   INITIAL THEME
========================================================= */

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
        ? "dark"
        : "light";
};

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
    const [theme, setTheme] = useState(getInitialTheme);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    /* =====================================================
       APPLY THEME
    ===================================================== */

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle(
            "dark",
            theme === "dark"
        );

        localStorage.setItem("theme", theme);
    }, [theme]);

    /* =====================================================
       SCROLL DETECTION
    ===================================================== */

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        handleScroll();

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

    /* =====================================================
       ACTIVE SECTION
    ===================================================== */

    useEffect(() => {
        const sections = navItems
            .map((item) =>
                document.querySelector(item.href)
            )
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter(
                        (entry) =>
                            entry.isIntersecting
                    )
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );

                if (visibleSections[0]) {
                    setActiveSection(
                        `#${visibleSections[0].target.id}`
                    );
                }
            },
            {
                rootMargin:
                    "-20% 0px -65% 0px",
                threshold: [0.1, 0.25, 0.5],
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    /* =====================================================
       CLOSE MENU ON ESC
    ===================================================== */

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, []);

    /* =====================================================
       LOCK BODY WHEN MOBILE MENU IS OPEN
    ===================================================== */

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    /* =====================================================
       CLOSE MENU WHEN SCREEN BECOMES DESKTOP
    ===================================================== */

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    /* =====================================================
       ACTIONS
    ===================================================== */

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light"
                ? "dark"
                : "light"
        );
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* =================================================
                HEADER
            ================================================= */}

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
                    inset-x-0
                    top-0
                    z-50
                    px-3
                    pt-3
                    sm:px-5
                    sm:pt-4
                    md:px-8
                    md:pt-5
                "
            >
                <nav
                    className={`
                        mx-auto
                        flex
                        w-full
                        max-w-7xl
                        items-center
                        justify-between
                        rounded-full
                        px-4
                        py-2.5
                        transition-all
                        duration-500
                        sm:px-5
                        md:py-3

                        ${scrolled
                            ? `
                                    border
                                    border-border/70
                                    bg-background/70
                                    shadow-[0_12px_45px_rgba(0,0,0,0.06)]
                                    backdrop-blur-2xl

                                    dark:shadow-[0_12px_45px_rgba(0,0,0,0.25)]
                                `
                            : `
                                    border
                                    border-transparent
                                    bg-transparent
                                `
                        }
                    `}
                >
                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="
                            group
                            relative
                            shrink-0
                            text-base
                            font-extrabold
                            tracking-[-0.08em]
                            text-foreground
                            sm:text-lg
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

                        {/* Logo accent line */}

                        <span
                            className="
                                absolute
                                -bottom-1
                                left-0
                                h-px
                                w-0
                                bg-accent
                                transition-all
                                duration-300
                                group-hover:w-full
                            "
                        />
                    </a>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <div
                        className="
                            hidden
                            items-center
                            gap-5
                            md:flex
                            lg:gap-7
                        "
                    >
                        {/* Links */}

                        <div
                            className="
                                flex
                                items-center
                                gap-5
                                lg:gap-7
                            "
                        >
                            {navItems.map((item) => {
                                const isActive =
                                    activeSection ===
                                    item.href;

                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="
                                            group
                                            relative
                                            py-2
                                            text-xs
                                            font-medium
                                            text-muted
                                            transition-colors
                                            duration-300
                                            hover:text-foreground
                                            lg:text-sm
                                        "
                                    >
                                        {item.label}

                                        {/* Hover / active line */}

                                        <span
                                            className={`
                                                absolute
                                                bottom-0
                                                left-0
                                                h-px
                                                bg-foreground
                                                transition-all
                                                duration-300

                                                ${isActive
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                                }
                                            `}
                                        />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Divider */}

                        <span
                            className="
                                h-5
                                w-px
                                bg-border
                            "
                        />

                        {/* Theme */}

                        <ThemeToggle
                            theme={theme}
                            onClick={toggleTheme}
                        />

                        {/* CTA */}

                        <TalkButton />
                    </div>

                    {/* =================================================
                        MOBILE ACTIONS
                    ================================================= */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            md:hidden
                        "
                    >
                        <ThemeToggle
                            theme={theme}
                            onClick={toggleTheme}
                        />

                        <motion.button
                            type="button"
                            whileTap={{
                                scale: 0.9,
                            }}
                            onClick={() =>
                                setMenuOpen(
                                    (previous) =>
                                        !previous
                                )
                            }
                            aria-label={
                                menuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={menuOpen}
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
                                text-foreground
                                shadow-sm
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                hover:border-foreground/20
                                hover:bg-surface
                            "
                        >
                            <AnimatePresence
                                mode="wait"
                                initial={false}
                            >
                                {menuOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{
                                            opacity: 0,
                                            rotate: -90,
                                            scale: 0.6,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: 90,
                                            scale: 0.6,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <FiX size={18} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{
                                            opacity: 0,
                                            rotate: 90,
                                            scale: 0.6,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            rotate: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotate: -90,
                                            scale: 0.6,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <FiMenu size={18} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* =================================================
                MOBILE BACKDROP + MENU
            ================================================= */}

            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={closeMenu}
                            className="
                                fixed
                                inset-0
                                z-40
                                bg-black/10
                                backdrop-blur-[3px]
                                dark:bg-black/35
                                md:hidden
                            "
                        />

                        {/* Menu */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -15,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -15,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                            className="
                                fixed
                                inset-x-3
                                top-[76px]
                                z-40
                                overflow-hidden
                                rounded-[1.75rem]
                                border
                                border-border/70
                                bg-surface/90
                                p-4
                                shadow-2xl
                                backdrop-blur-2xl
                                sm:inset-x-5
                                sm:top-[82px]
                                md:hidden
                            "
                        >
                            {/* Menu top */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-2
                                    pb-2
                                    pt-1
                                "
                            >
                                <span
                                    className="
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                        text-muted
                                    "
                                >
                                    Navigation
                                </span>

                                <span
                                    className="
                                        text-[10px]
                                        font-medium
                                        text-muted
                                    "
                                >
                                    AMIT.
                                </span>
                            </div>

                            {/* Links */}

                            <div className="mt-1">
                                {navItems.map(
                                    (
                                        item,
                                        index
                                    ) => {
                                        const isActive =
                                            activeSection ===
                                            item.href;

                                        return (
                                            <motion.a
                                                key={
                                                    item.label
                                                }
                                                href={
                                                    item.href
                                                }
                                                onClick={
                                                    closeMenu
                                                }
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
                                                        0.06,
                                                }}
                                                className="
                                                    group
                                                    flex
                                                    items-center
                                                    justify-between
                                                    border-b
                                                    border-border/70
                                                    py-4
                                                    text-xl
                                                    font-medium
                                                    last:border-b-0
                                                    sm:text-2xl
                                                "
                                            >
                                                <span
                                                    className={`
                                                        transition-colors
                                                        duration-300

                                                        ${isActive
                                                            ? "text-accent"
                                                            : "text-foreground"
                                                        }
                                                    `}
                                                >
                                                    {
                                                        item.label
                                                    }
                                                </span>

                                                <motion.span
                                                    initial={{
                                                        opacity: 0,
                                                        x: -4,
                                                        y: 4,
                                                    }}
                                                    whileHover={{
                                                        opacity: 1,
                                                        x: 2,
                                                        y: -2,
                                                    }}
                                                    className="
                                                        text-muted
                                                        transition-opacity
                                                        duration-300
                                                    "
                                                >
                                                    <FiArrowUpRight
                                                        size={
                                                            18
                                                        }
                                                    />
                                                </motion.span>
                                            </motion.a>
                                        );
                                    }
                                )}
                            </div>

                            {/* Mobile CTA */}

                            <div className="mt-4">
                                <TalkButton
                                    mobile
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

/* =========================================================
   THEME TOGGLE
========================================================= */

const ThemeToggle = ({
    theme,
    onClick,
}) => {
    const isDark = theme === "dark";

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{
                scale: 1.06,
            }}
            whileTap={{
                scale: 0.9,
            }}
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
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-border
                bg-surface/75
                text-foreground
                shadow-sm
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-foreground/20
                hover:bg-surface
            "
        >
            {/* Ambient accent */}

            <motion.span
                animate={{
                    scale: isDark ? 1.2 : 0.8,
                    opacity: isDark ? 0.15 : 0.08,
                }}
                transition={{
                    duration: 0.4,
                }}
                className="
                    absolute
                    inset-0
                    rounded-full
                    bg-accent
                    blur-md
                "
            />

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
                        className="relative z-10"
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
                        className="relative z-10"
                    >
                        <FiMoon size={17} />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

/* =========================================================
   LET'S TALK BUTTON
========================================================= */

const TalkButton = ({ mobile = false }) => {
    return (
        <motion.a
            href="#contact"
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            className={`
                group
                relative
                isolate
                flex
                items-center
                justify-between
                overflow-hidden
                rounded-full
                border
                border-violet-400/30
                bg-gradient-to-r
                from-[#6d5dfc]
                via-[#7c6cff]
                to-[#5b4de8]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_30px_rgba(109,93,252,0.22)]
                transition-all
                duration-500

                hover:border-violet-300/50
                hover:shadow-[0_12px_40px_rgba(109,93,252,0.38)]

                dark:border-violet-400/30
                dark:from-[#7c6cff]
                dark:via-[#8b7cff]
                dark:to-[#6655ed]
                dark:text-white
                dark:shadow-[0_8px_35px_rgba(139,124,255,0.18)]

                dark:hover:border-violet-300/60
                dark:hover:shadow-[0_12px_45px_rgba(139,124,255,0.35)]

                ${mobile ? "w-full py-3.5" : "shrink-0"}
            `}
        >
            {/* Animated shine */}
            <motion.span
                variants={{
                    hover: {
                        x: "180%",
                    },
                }}
                initial={{
                    x: "-130%",
                }}
                transition={{
                    duration: 0.75,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    inset-y-0
                    left-[-45%]
                    z-[-1]
                    w-1/2
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                "
            />

            {/* Purple glow */}
            <span
                className="
                    absolute
                    -right-5
                    -top-5
                    h-14
                    w-14
                    rounded-full
                    bg-white/20
                    blur-2xl
                    transition-transform
                    duration-500
                    group-hover:scale-[1.8]
                "
            />

            <span className="relative z-10">
                Let's Talk
            </span>

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
                    ease: "easeOut",
                }}
                className="
                    relative
                    z-10
                    ml-3
                "
            >
                <FiArrowUpRight size={15} />
            </motion.span>
        </motion.a>
    );
};

export default Navbar;