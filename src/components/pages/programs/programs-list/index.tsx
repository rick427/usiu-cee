import { Stack, Image, Group, Alert, TextInput, Title, Text, Card, Grid, Button, Select } from "@mantine/core";
import { LuCircleAlert } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useState } from "react";

import styles from "./programs-list.module.scss";

import { programs } from "@/common/data/programs";

export default function ProgramList() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

    const navigate = useNavigate();

    let filteredPrograms = programs.filter((program) => {
        return searchTerm.trim() === "" ? true : (
            program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            program.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    if (sortOrder) {
        filteredPrograms = [...filteredPrograms].sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            return sortOrder === "asc" ? aName.localeCompare(bName) : bName.localeCompare(aName);
        });
    }
    return (
        <section className={styles.pl}>
            <Stack className={styles.pl__stack} align="center">
                <Title c="gray.9" order={1}>
                    Browse our Programs
                </Title>
                <Text ta="center" c="gray.7" fw={300}>
                    Discover our executive programs from intensive, days long courses 
                    for rapid skill gains to flexible modular tracks you can customize 
                    over time designed to sharpen your leadership and drive real results.
                </Text>
            </Stack>

            <Stack gap="xl">
                <Group justify="center" align="center" gap="xs">
                    <TextInput 
                        w={250} 
                        value={searchTerm}
                        placeholder="Search programs"
                        onChange={(evt) => setSearchTerm(evt.currentTarget.value)}
                    />
                    <Select 
                        w={120}
                        clearable
                        placeholder="Sort by"
                        value={sortOrder}
                        disabled={!filteredPrograms.length}
                        onChange={(val) => setSortOrder(val as "asc" | "desc" | null)}
                        data={[
                            { value: "asc", label: "Sort A-Z" },
                            { value: "desc", label: "Sort Z-A" },
                        ]}
                    />
                </Group>

                <Grid justify="center">
                    {filteredPrograms.length > 0 ? (
                        filteredPrograms.map((program, index) => (
                            <Grid.Col 
                                key={program.id} 
                                data-index={index}
                                className={styles.pl__gridcol}
                                span={{base: 12, sm: 6, md: 4, lg: 3}}
                            >
                                <Card className={styles.pl__card} shadow="sm" p="lg">
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
                                            color="primary.8"
                                            variant="filled"
                                            rightSection={<BsArrowRight />}
                                            classNames={{ label: styles.btnLabel}}
                                            onClick={() => navigate(`/programs/${program.slug}`)}
                                        >
                                            View courses ({program.courses.length})
                                        </Button>
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        ))
                    ) : (
                        <Alert 
                            w={600} 
                            mt="md" 
                            fw={300} 
                            mx="auto" 
                            variant="light" 
                            color="primary" 
                            title="Program Not Found!" 
                            icon={<LuCircleAlert size={22} />}
                        >
                            No program matching your search value - <Text span size="sm" fw={600}>{searchTerm}</Text> was found!
                            Please check your search term or contact us 
                            for more information should you need assistance.
                        </Alert>
                    )}
                </Grid>
            </Stack>
        </section>
    )
}
