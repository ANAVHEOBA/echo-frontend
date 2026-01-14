import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    initial: {
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9], // Custom cubic-bezier for a "heavy" premium feel
        },
    },
};

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const scaleIn: Variants = {
    initial: {
        scale: 0.9,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
