import clsx from "clsx";
import { useEffect, useState } from "react";
import { useIntersection } from "@mantine/hooks";

import styles from "./reveal-element.module.scss";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
    const [visible, setVisible] = useState(false);
    const { ref, entry } = useIntersection({
        root: null,
        threshold: 0.3,
        rootMargin: "0px",
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            const timer = setTimeout(() => setVisible(true), delay);
            return () => clearTimeout(timer);
        }
    }, [entry, delay]);

    return (
        <div
            ref={ref}
            className={clsx(styles.reveal, {[styles.visible]: visible}, className)}
        >
            {children}
        </div>
    )
}
