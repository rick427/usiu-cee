import { Stack, Image, Title, Text, Card, Grid, Button } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

import styles from "./programs.module.scss";

import { programs } from "@/common/data/programs";
import Reveal from "@/components/shared/io/reveal";
import Stagger from "@/components/shared/io/stagger";

export default function Programs() {
    const navigate = useNavigate();
    return (
        <section className={styles.programs}>
            <Reveal>
                <Stack className={styles.programs__stack} align="center">
                    <Title ta="center" c="gray.9" order={1}>
                        Browse our Programs
                    </Title>
                    <Text size="sm" ta="center" c="gray.7" fw={400}>
                        Explore our diverse range of programs designed to empower you with the 
                        knowledge and skills needed for success in today's dynamic world. 
                        Whether you're interested in business, technology, arts, or sciences, 
                        we have something for everyone.
                    </Text>
                </Stack>
            </Reveal>
            
            <Grid justify="center">
                {programs.map((program, index) => (
                    <Grid.Col key={program.id} span={{base: 12, sm: 6, md: 4, lg: 4, xl: 3}}>
                        <Stagger index={index}>
                            <Card className={styles.programs__card} shadow="sm" p="lg">
                                <Card.Section>
                                    <Image h={200} radius="sm" src={program.image} alt={program.slug} />
                                </Card.Section>
                                <Stack gap="xs" mt="md">
                                    <Title fw={600} lh={1.5} order={1} fz={18}>
                                        {program.name}
                                    </Title>
                                    <Text c="gray.6" size="sm" lineClamp={3}>
                                        {program.description}
                                    </Text>

                                    <Button
                                        mt="md"
                                        size="md"
                                        radius="xs"
                                        variant="filled"
                                        color="primary.8"
                                        rightSection={<BsArrowRight />}
                                        classNames={{ label: styles.btnLabel}}
                                        onClick={() => navigate(`/programs/${program.slug}`)}
                                    >
                                        {program.courses.length ? `View courses (${program.courses.length})` : "View program"}
                                    </Button>
                                </Stack>
                            </Card>
                        </Stagger>
                    </Grid.Col>
                ))}
            </Grid>
        </section>
    )
}
