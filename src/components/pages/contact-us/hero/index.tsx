import { Title, Text } from "@mantine/core";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Title order={1} fz={50} c="white">Contact Us</Title>
            <Text c="white">Home &rarr; Contact</Text>
        </section>
    )
}
