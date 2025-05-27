import { Alert, Stack, Image, Title, Text, Card, Grid, Group, TextInput, Select, Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { BsArrowRight } from "react-icons/bs";
import { LuCircleAlert } from "react-icons/lu";

import styles from "./courses-list.module.scss";
import { programs } from "@/common/data/programs";

export default function CoursesList() {
    const navigate = useNavigate();
    const params = useParams<{ programId: string }>();
    const programId = params.programId;

    const program = programs.find((p) => p.slug === programId);
    if (!program) return null;
    return (
        <section className={styles.cl}>
            <Stack className={styles.cl__stack} align="center">
                <Title c="gray.9" order={1}>
                    About Program
                </Title>
                <Text ta="center" c="gray.7" fw={300}>
                    {program.description}
                </Text>
            </Stack>

            <Stack gap="xl">
                {program.courses.length > 0 && (
                    <Group justify="center" align="center" gap="xs">
                        <TextInput w={300} />
                        <Select />
                    </Group>
                )}

                {program.courses.length > 0 ? (
                    <Grid justify="center">
                        {program.courses.map((course) => (
                            <Grid.Col key={course.id} span={{base: 12, sm: 6, md: 4, lg: 3}}>
                                <Card className={styles.cl__card} shadow="sm" p="lg">
                                    <Card.Section>
                                        <Image h={200} src={course.image} alt={course.slug} />
                                    </Card.Section>
                                    <Stack flex={1} gap="xs" mt="md" justify="space-between">
                                        <Stack>
                                            <Title fw={600} order={4} lineClamp={2}>
                                            {course.name}
                                            </Title>
                                            <Text c="gray.6" size="sm" lineClamp={3}>
                                                {course.description}
                                            </Text>
                                        </Stack>

                                        <Button
                                            mt="md"
                                            size="md"
                                            radius="xs"
                                            color="primary.8"
                                            variant="filled"
                                            rightSection={<BsArrowRight />}
                                            classNames={{ label: styles.btnLabel}}
                                            onClick={() => navigate(`/programs/${program.slug}/${course.slug}`)}
                                        >
                                            View course
                                        </Button>
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                ) : (
                    <Alert w={600} mx="auto" variant="light" color="primary" fw={300} title="Courses Not Found!" icon={<LuCircleAlert size={22} />}>
                        No course contents available at the moment.
                        Please check back later or contact us for more information.
                    </Alert>
                )}
            </Stack>
        </section>
    )
}
