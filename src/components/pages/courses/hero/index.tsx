import { Title, Text } from "@mantine/core";
import { useParams } from "react-router";

import styles from "./hero.module.scss";
import { formatSlug } from "@/utils";

export default function Hero() {
    const params = useParams<{ programId: string }>();
    const programId = params.programId;
    return (
        <section className={styles.hero}>
            <Title order={1} fz={50} c="white">
                {formatSlug(programId?.replace(/-/g, " "))}
            </Title>
            <Text c="white">Home &rarr; Programs &rarr; {formatSlug(programId)}</Text>
        </section>
    )
}
