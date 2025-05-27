import { Title, Text, Group } from "@mantine/core";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router";

import styles from "./hero.module.scss";
import { formatSlug } from "@/utils";

export default function Hero() {
    const params = useParams<{ programId: string, courseId: string; }>();
    const programId = params.programId;
    const courseId = params.courseId;
    return (
        <section className={styles.hero}>
            <Title order={1} fz={50} c="white">
                Course details
            </Title>
            <Group gap="xs">
                <Link to="/">Home</Link>

                <GoChevronRight color="white" />

                <Link to={`/programs/${programId}`}>
                    {formatSlug(programId?.replace(/-/g, " "))}
                </Link>

                <GoChevronRight color="white" />
                
                <Text c="white">
                    {formatSlug(courseId?.replace(/-/g, " "))}
                </Text>
            </Group>
        </section>
    )
}
