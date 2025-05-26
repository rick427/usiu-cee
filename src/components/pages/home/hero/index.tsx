import { Title, Text, Stack } from "@mantine/core";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Stack className={styles.hero__stack}>
                <Title tt="capitalize" order={1} fz={55} c="white">
                    Briding knowledge with real-world impact
                </Title>
                <Text c="white">
                    Discover a world of opportunities at the United States International University Africa (USIU-A). 
                    Join us to shape your future with our diverse programs, expert faculty, and vibrant campus life.
                </Text>
            </Stack>
        </section>
    )
}
