import { Title, Text, Group } from "@mantine/core";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router";

import styles from "./hero.module.scss";
import Reveal from "@/components/shared/io/reveal";

import { formatSlug } from "@/utils";

export default function Hero() {
    const params = useParams<{ programId: string, courseId: string; }>();
    const programId = params.programId;
    const courseId = params.courseId;
    return (
        <section className={styles.hero}>
            <Reveal>
                <Title order={1} fz={50} c="white">
                    Course details
                </Title>
            </Reveal>

            <Reveal>
                <Group gap={5}>
                    <Link to="/">Home</Link>

                    <GoChevronRight color="white" />

                    <Link to={`/programs/${programId}`}>
                        {formatSlug(programId?.replace(/-/g, " "))}
                    </Link>

                    <GoChevronRight color="white" />
                    
                    <Text fz={13.5} c="white">
                        {formatSlug(courseId?.replace(/-/g, " "))}
                    </Text>
                </Group>
            </Reveal>
        </section>
    )
}
