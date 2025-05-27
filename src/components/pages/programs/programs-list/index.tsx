import { Stack, Image, Title, Text, Card, Grid, Button } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

import styles from "./programs-list.module.scss";

import { programs } from "@/common/data/programs";

export default function ProgramList() {
    const navigate = useNavigate();
    return (
        <section className={styles.pl}>
            <Stack className={styles.pl__stack} align="center">
                <Title tt="capitalize" c="gray.9" order={1}>
                    All programs
                </Title>
                <Text ta="center" c="gray.7">
                    Discover our executive programs from intensive, days long courses 
                    for rapid skill gains to flexible modular tracks you can customize 
                    over time designed to sharpen your leadership and drive real results.
                </Text>
            </Stack>

             <Grid justify="center">
                {programs.map((program) => (
                    <Grid.Col key={program.id} span={{base: 12, sm: 6, md: 4, lg: 3}}>
                        <Card className={styles.programs__card} shadow="sm" p="lg">
                            <Card.Section>
                                <Image h={200} src={program.image} alt={program.slug} />
                            </Card.Section>
                            <Stack gap="xs" mt="md">
                                <Title fw={600} order={4}>
                                    {program.name}
                                </Title>
                                <Text c="gray.6" size="sm" lineClamp={3}>
                                    {program.description}
                                </Text>

                                <Button
                                    mt="md"
                                    size="md"
                                    radius="xs"
                                    color="dark"
                                    variant="primary.9"
                                    rightSection={<BsArrowRight />}
                                    classNames={{ label: styles.btnLabel}}
                                    onClick={() => navigate(`/programs/${program.slug}`)}
                                >
                                    View program
                                </Button>
                            </Stack>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </section>
    )
}
