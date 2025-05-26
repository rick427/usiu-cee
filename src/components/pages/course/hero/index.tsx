import { Title, Text } from "@mantine/core";
import { useParams } from "react-router";

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
            <Text c="white">
                Home &rarr; {formatSlug(programId?.replace(/-/g, " "))} &rarr; {formatSlug(courseId?.replace(/-/g, " "))}
            </Text>
        </section>
    )
}
