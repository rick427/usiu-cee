import { Title, Text, Group } from "@mantine/core";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Title order={1} fz={50} c="white">Programs</Title>
            <Group gap={5}>
                <Link to="/">Home</Link>
                <GoChevronRight color="white" /> 
                <Text fz={13.5} c="white">Programs</Text>
            </Group>
        </section>
    )
}
