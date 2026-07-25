const SectionalLabel = ({ children, className = "" }) => {
    return (
        <div
            className={`
                flex
                items-center
                gap-3
                ${className}
            `}
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
                {children}
            </span>
        </div>
    );
};

export default SectionalLabel;