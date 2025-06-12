import { Title, Text, Group } from "@mantine/core";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router";

import styles from "./hero.module.scss";
import Reveal from "@/components/shared/io/reveal";

import { formatSlug } from "@/utils";

export default function Hero() {
    const params = useParams<{ programId: string }>();
    const programId = params.programId;
    return (
        <section className={styles.hero}>
            <Reveal>
                <Title order={1} fz={50} c="white">
                    {formatSlug(programId?.replace(/-/g, " "))}
                </Title>
            </Reveal>

            <Reveal delay={200}>
                <Group gap={5}>
                    <Link to="/">Home</Link>
                    <GoChevronRight color="white" />
                    <Link to="/programs">
                        Programs
                    </Link>
                    <GoChevronRight color="white" />
                    <Text fz={13.5} c="white" tt="capitalize">
                        {formatSlug(programId)}
                    </Text>
                </Group>
            </Reveal>
        </section>
    )
}
