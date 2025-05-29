import { Stack, Title, Text } from "@mantine/core";

import styles from "./banner.module.scss";
import Reveal from "@/components/shared/io/reveal";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <Stack className={styles.banner__stack} align="center">
                <Reveal delay={250}>
                    <Title fz={50} ta="center" c="white" order={1}>
                        Elevate Leadership. Empower Change. Begin Your Journey Today.
                    </Title>
                </Reveal>
                <Reveal delay={300}>
                    <Text maw={580} c="white" ta="center"> 
                        The Center for Executive Education at USIU-Africa offers forward-thinking programs
                        designed for professionals seeking to lead with purpose, adapt with agility, and drive
                        meaningful impact in a rapidly evolving global landscape.
                    </Text>
                </Reveal>
            </Stack>
        </section>
    )
}
