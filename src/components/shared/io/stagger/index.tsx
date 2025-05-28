import clsx from "clsx";
import { useEffect, useState } from "react";
import { useIntersection } from "@mantine/hooks";

import styles from "./stagger-element.module.scss";

interface StaggerProps {
    index: number;
    children: React.ReactNode;
}

export default function Stagger({index, children}:StaggerProps) {
    const [visible, setVisible] = useState(false);

    const { entry, ref } = useIntersection({
        root: null,
        threshold: 0.3,
        rootMargin: "0px",
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            setTimeout(() => {
                setVisible(true);
            }, index * 100);
        }
    },[entry, index]);

    return (
        <div 
            ref={ref} 
            className={clsx(styles.cardWrapper, {[styles.visible]: visible})}
        >
            {children}
        </div>
    )
}
