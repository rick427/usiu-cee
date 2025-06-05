import { Title, Text, Group } from "@mantine/core";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router";

import styles from "./hero.module.scss";
import Reveal from "@/components/shared/io/reveal";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Reveal>
                <Title order={1} fz={50} c="white">Contact Us</Title>
            </Reveal>

            <Reveal delay={200}>
                <Group gap="xs">
                    <Link to="/">Home</Link>
                    <GoChevronRight color="white" /> 
                    <Text fz={13.5} c="white">Contact Us</Text>
                </Group>
            </Reveal>
        </section>
    )
}
