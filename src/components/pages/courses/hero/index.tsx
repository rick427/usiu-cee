import { Title, Text, Group } from "@mantine/core";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router";

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
            <Group gap="xs">
                <Link to="/">Home</Link>

                <GoChevronRight color="white" />

                <Link to="/programs">Programs</Link>

                <GoChevronRight color="white" />
                
                <Text c="white"> {formatSlug(programId)}</Text>
            </Group>
        </section>
    )
}
