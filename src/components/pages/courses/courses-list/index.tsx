import { Alert, Stack, Image, Title, Text, Card, Grid, Group, NumberInput, TextInput, Select, Button } from "@mantine/core";
import { DatePickerInput, type DatesRangeValue } from "@mantine/dates";
import { useNavigate, useParams } from "react-router";
import { LuCircleAlert } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

import styles from "./courses-list.module.scss";
import Reveal from "@/components/shared/io/reveal";
import CustomSolutions from "@/components/pages/programs/custom-solutions";

import { programs } from "@/common/data/programs";

export default function CoursesList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [minAmount, setMinAmount] = useState<number | string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
    const [dateRange, setDateRange] = useState<DatesRangeValue>([null, null]);

    const navigate = useNavigate();
    const params = useParams<{ programId: string }>();
    const programId = params.programId;

    const program = programs.find((p) => p.slug === programId);
    if (!program) return null;

    let filteredCourses = program.courses.filter((course) => {
        const matchesSearch = searchTerm.trim() === "" ||
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesAmount = minAmount === "" ||
            (course.amount !== undefined && course.amount >= Number(minAmount));

        const matchesDateRange = (() => {
            if (!dateRange[0] || !dateRange[1]) return true;
            if (!course.duration) return false;

            const [startDateStr] = course.duration.split(" - ");
            const parsedStart = new Date(startDateStr);

            return parsedStart >= dateRange[0]! && parsedStart <= dateRange[1]!;
        })();

        return matchesSearch && matchesAmount && matchesDateRange;
    });

    if (sortOrder) {
        filteredCourses = [...filteredCourses].sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            return sortOrder === "asc" ? aName.localeCompare(bName) : bName.localeCompare(aName);
        });
    }

    if(program.is_custom) return <CustomSolutions />

    if(program.courses.length === 0) {
        return (
            <section className={styles.cl}>
                <Stack className={styles.cl__stack} align="center">
                    <Title c="gray.9" order={1}>
                        About Program
                    </Title>
                    <Text size="sm" ta="center" c="gray.6" fw={400}>
                        {program.description}
                    </Text>
                </Stack>

                <Alert 
                    w={600} 
                    mx="auto" 
                    variant="light" 
                    color="primary" 
                    fw={300} 
                    title="Program Courses Unavailable!" 
                    icon={<LuCircleAlert size={22} />}
                >
                    No courses are available for this program at the moment.
                    Please contact us for more information should you 
                    need further assistance.
                </Alert>
            </section>
        )
    }

    return (
        <section className={styles.cl}>
            <Reveal>
                <Stack className={styles.cl__stack} align="center">
                    <Title c="gray.9" order={1}>
                        About Program
                    </Title>
                    <Text size="sm" ta="center" c="gray.7" fw={400}>
                        {program.description}
                    </Text>
                </Stack>
            </Reveal>

            <Stack gap="xl">
                {program.courses.length > 0 && (
                    <Group justify="center" align="center" gap="xs">
                        <TextInput 
                            className={styles.cl__group__input}
                            value={searchTerm}
                            placeholder="Search courses"
                            onChange={(e) => setSearchTerm(e.currentTarget.value)}
                        />
                        <DatePickerInput
                            type="range"
                            placeholder="Select date range"
                            value={dateRange}
                            onChange={setDateRange}
                            className={styles.cl__group__input}
                        />
                        <NumberInput
                            className={styles.cl__group__input}
                            prefix="Ksh"
                            placeholder="Min amount"
                            value={minAmount}
                            allowNegative={false}
                            allowDecimal={false}
                            thousandSeparator=","
                            onChange={(val) => setMinAmount(val)}
                            min={0}
                        />

                        <Select
                            className={styles.cl__group__select}
                            clearable
                            placeholder="Sort by"
                            value={sortOrder}
                            onChange={(val) => setSortOrder(val as "asc" | "desc" | null)}
                            data={[
                                { value: "asc", label: "Sort A-Z" },
                                { value: "desc", label: "Sort Z-A" },
                            ]}
                        />
                    </Group>
                )}

                {filteredCourses.length > 0 ? (
                    <Grid justify="center">
                        {filteredCourses.map((course, index) => (
                            <Grid.Col 
                                key={course.id} 
                                data-index={index}
                                className={styles.cl__gridcol}
                                span={{base: 12, sm: 6, md: 4, lg: 4, xl: 3}}
                            >
                                <Card className={styles.cl__card} shadow="sm" p="lg">
                                    <Card.Section>
                                        <Image h={200} radius="sm" src={course.image} alt={course.slug} />
                                    </Card.Section>
                                    <Stack flex={1} gap="xs" mt="md" justify="space-between">
                                        <Stack>
                                            <Title fw={600} lh={1.5} order={1} fz={18} lineClamp={2}>
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
                    <Alert 
                        w={750} 
                        mx="auto" 
                        variant="light" 
                        color="primary" 
                        fw={300} 
                        title="Program Courses Unavailable!" 
                        icon={<LuCircleAlert size={22} />}
                    >
                        No course matching your search value - <Text span size="sm" fw={600}>{searchTerm}</Text> was found!
                        Please check your search term or contact us 
                        for more information should you need assistance.
                    </Alert>
                )}
            </Stack>
        </section>
    )
}
