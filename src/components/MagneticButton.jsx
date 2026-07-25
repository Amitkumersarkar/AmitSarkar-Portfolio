import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";

const MenuButton = ({ isOpen, onClick }) => {
    return (
        <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            aria-label={
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-surface/80
                text-foreground
                shadow-sm
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-violet-400/40
                hover:bg-violet-500/10
                hover:text-violet-500
                dark:hover:text-violet-300
            "
        >
            <AnimatePresence
                mode="wait"
                initial={false}
            >
                {isOpen ? (
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
                    >
                        <FiMenu size={18} />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default MenuButton;