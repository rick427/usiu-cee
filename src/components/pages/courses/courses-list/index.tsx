import { Box, Stack, Image, Title, Text, Card, Grid, Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { BsArrowRight } from "react-icons/bs";
import { IoIosAlert } from "react-icons/io";

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
                    Program Summary
                </Title>
                <Text ta="center" c="gray.7">
                    {program.description}
                </Text>
            </Stack>

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
                                        color="dark"
                                        variant="primary.9"
                                        rightSection={<BsArrowRight />}
                                        classNames={{ label: styles.btnLabel}}
                                        onClick={() => navigate(`/programs/${program.slug}/${course.slug}`)}
                                    >
                                        View courses
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            ) : (
                <Box className={styles.cl__box}>
                    <Box className={styles.cl__box__icon}>
                        <IoIosAlert size={30} />
                    </Box>
                    <Stack gap={5} align="center">
                        <Title c="gray.8" fw={600} order={3}>
                            No courses found!
                        </Title>
                        <Text c="gray.6" size="sm" ta="center">
                            This program currently has no courses available. 
                            Please check back later or contact us for more information.
                        </Text>
                    </Stack>
                </Box>
            )}
        </section>
    )
}
