import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <>
            <motion.header
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-10"
            >
                <nav
                    className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled
                            ? "border border-black/10 bg-white/70 shadow-sm backdrop-blur-xl"
                            : "bg-transparent"
                        }`}
                >
                    <a
                        href="#home"
                        className="text-lg font-semibold tracking-[-0.04em]"
                    >
                        AMIT<span className="text-neutral-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-neutral-600 transition-colors hover:text-black"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="flex items-center gap-1 rounded-full bg-black px-4 py-2 text-sm text-white transition-transform duration-300 hover:scale-105"
                        >
                            Let's Talk
                            <FiArrowUpRight size={15} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-x-5 top-24 z-40 rounded-3xl border border-black/10 bg-white p-6 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.05,
                                    }}
                                    className="border-b border-black/10 py-4 text-2xl font-medium"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;