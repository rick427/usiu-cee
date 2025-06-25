import { Title, Text, Group } from "@mantine/core";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router";

import styles from "./hero.module.scss";
import Reveal from "@/components/shared/io/reveal";

import { formatSlug } from "@/utils";

export default function Hero() {
    const params = useParams<{ teamId: string }>();
    const teamId = params.teamId;
    return (
        <section className={styles.hero}>
            <Reveal>
                <Title order={1} fz={50} c="white">
                    Our Team
                </Title>
            </Reveal>

            <Reveal delay={200}>
                <Group gap={5}>
                    <Link to="/">Home</Link>
                    <GoChevronRight color="white" /> 
                    <Text fz={13.5} c="white">Team</Text>
                    <GoChevronRight color="white" /> 
                    <Text fz={13.5} c="white">
                        {formatSlug(teamId)}
                    </Text>
                </Group>
            </Reveal>
        </section>
    )
}
