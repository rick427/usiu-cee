import { Title, Text, Stack } from "@mantine/core";

import styles from "./hero.module.scss";
import Reveal from "@/components/shared/io/reveal";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Stack className={styles.hero__stack}>
                <Reveal>
                    <Title tt="capitalize" order={1} fz={55} c="white">
                        Bridging knowledge with real-world impact
                    </Title>
                </Reveal>
                <Reveal delay={200}>
                     <Text c="white">
                        Discover a world of opportunities at the United States International University Africa (USIU-A). 
                        Join us to shape your future with our diverse programs, expert faculty, and vibrant campus life.
                    </Text>
                </Reveal>
            </Stack>
        </section>
    )
}
