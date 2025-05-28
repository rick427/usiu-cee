import clsx from "clsx";
import { useEffect, useState } from "react";
import { useIntersection } from "@mantine/hooks";

import styles from "./slide-in.module.scss";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export default function SlideIn({children, direction = "left", delay = 0, className}: SlideInProps) {
  const [visible, setVisible] = useState(false);
  const { ref, entry } = useIntersection({
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      const timeout = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [entry, delay]);

  return (
    <div
      ref={ref}
      className={clsx(
        styles.slideIn,
        styles[direction],
        visible && styles.visible,
        className
      )}
    >
      {children}
    </div>
  )
}
