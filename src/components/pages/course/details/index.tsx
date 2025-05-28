import React, { useState } from "react";
import { useParams } from "react-router";
import { Tabs, Title, Text, Box, Stack, List } from "@mantine/core";

import styles from "./details.module.scss";

import { programs } from "@/common/data/programs";
import Brochure from "@/components/pages/course/brochure";
import Enrollment from "@/components/pages/course/enrollment";

export const TABS = {
    AIM: { id: 2, name: "AIM" },
    ABOUT: { id: 1, name: "ABOUT" },
    TARGET: { id: 3, name: "TARGET" },
    OUTCOME: { id: 4, name: "OUTCOME" },
    DELIVERY: { id: 5, name: "DELIVERY" },
    CONTENTS: { id: 6, name: "CONTENTS" },
    COACHING: { id: 7, name: "COACHING" },
    DOWNLOAD: { id: 11, name: "DOWNLOAD" },
    ENROLLMENT: { id: 12, name: "ENROLLMENT"},
    ADMISSIONS: { id: 8, name: "ADMISSIONS" },
    INTERNATIONAL: { id: 9, name: "INTERNATIONAL" },
    CERTIFICATION: { id: 10, name: "CERTIFICATION" },
} as const;

export default function CourseDetails() {
    const [activeTab, setActiveTab] = useState<string | null>(TABS.ABOUT["name"]);

    const params = useParams<{ programId: string, courseId: string }>();
    const programId = params.programId;
    const courseId = params.courseId;

    const program = programs.find((p) => p.slug === programId);
    if (!program) return null;

    const course = program.courses.find((c) => c.slug === courseId);
    if (!course) return null;

    return (
        <section className={styles.dets}>
            <Tabs 
                value={activeTab} 
                onChange={setActiveTab} 
                orientation="vertical"
                classNames={{ tab: styles.dets__tab}}
            >
                <Tabs.List>
                    <Tabs.Tab mb={5} value={TABS.ABOUT["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            About the Course
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.AIM["name"]} disabled={!course.tabs.aim}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Aim of the Course
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.TARGET["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            The Target Audience
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.OUTCOME["name"]} disabled={!course.tabs.outcome.length}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Outcome of the Program
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.DELIVERY["name"]} disabled={!course.tabs.delivery.length}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Mode of Delivery & Duration
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.CONTENTS["name"]} disabled={!course.tabs.contents.length}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Course Content
                        </Text>
                    </Tabs.Tab>
                    {course.tabs.coaching && (
                        <Tabs.Tab mb={5} value={TABS.COACHING["name"]}>
                            <Text tt="uppercase" ta="left" fz={12}>
                                Course Coaching
                            </Text>
                        </Tabs.Tab>
                    )}
                    <Tabs.Tab mb={5} value={TABS.ADMISSIONS["name"]} disabled={!course.tabs.admissions.length}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Course Admissions
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.INTERNATIONAL["name"]} disabled={!course.tabs.international.length}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            International Participants
                        </Text>
                    </Tabs.Tab>
                    {course.tabs.certification && (
                        <Tabs.Tab mb={5} value={TABS.CERTIFICATION["name"]}>
                            <Text tt="uppercase" ta="left" fz={12}>
                                Professional Certification
                            </Text>
                        </Tabs.Tab>
                    )}
                    <Tabs.Tab mb={5} value={TABS.DOWNLOAD["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Download Brochure
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab value={TABS.ENROLLMENT["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Course Enrollment
                        </Text>
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value={TABS.ABOUT["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                About the Course
                            </Title>
                            {course.tabs.about.map((entry, idx) => (
                                <Text key={idx} c="gray.8" fw={400} fz={14}>
                                    {entry}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.AIM["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Aim of the Course
                            </Title>
                            <Text c="gray.8" fw={400} fz={14}>
                                {course.tabs.aim}
                            </Text>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.TARGET["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                The Target Audience
                            </Title>
                            <List c="gray.8" fw={400} fz={14}>
                                {course.tabs.target.map((item, idx) => (
                                    <List.Item key={idx}>{item}</List.Item>
                                ))} 
                            </List>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.OUTCOME["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Outcome of the Program
                            </Title>
                            <List type="ordered" c="gray.8" fw={400} fz={15}>
                                {course.tabs.outcome.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        {item.title ? (
                                            <List.Item fw={700} mt="md" mb="xs">{item.title}</List.Item>
                                        ) : (
                                            <List.Item fw={400} mt="md" mb="xs">{item.meta}</List.Item>
                                        )}
                                        <List withPadding listStyleType="revert">
                                            {item.data.map((subItem, subIdx) => (
                                                <List.Item key={`${idx}-${subIdx}`}>
                                                    <Text fz={14} span fw={300}>{subItem}:</Text>
                                                </List.Item>
                                            ))}
                                        </List>
                                    </React.Fragment>
                                ))}
                            </List>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.DELIVERY["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Mode of Delivery & Duration
                            </Title>
                            {course.tabs.delivery.map((entry, idx) => (
                                <Text key={idx} c="gray.8" fw={400} fz={14}>
                                    {entry}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.CONTENTS["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Course Contents
                            </Title>
                            {course.tabs.contents.map((content, idx) => {
                                if(typeof content === "string"){
                                    return (
                                        <Text key={idx} c="gray.8" fw={400} fz={14}>
                                            {content}
                                        </Text>
                                    )
                                }

                                return (
                                    <Stack>
                                        <Title order={3} c="gray.9" fw={700}>
                                            {content.title}
                                        </Title>
                                        <List c="gray.8" fw={300} fz={15}>
                                            {content.data.map((item, itemIdx) => (
                                                <List.Item key={`${idx}-${itemIdx}`}>
                                                    <Text fz={14} span fw={400}>{item}</Text>
                                                </List.Item>
                                            ))} 
                                        </List>
                                    </Stack>
                                )
                            })}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.COACHING["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Course Coaching
                            </Title>
                            {course.tabs.coaching?.map((entry, idx) => (
                                <Text key={idx} c="gray.8" fw={400} fz={14}>
                                    {entry}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.ADMISSIONS["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Course Admissions
                            </Title>
                            {course.tabs.admissions.map((entry, idx) => (
                                <Text key={idx} c="gray.8" fw={400} fz={14}>
                                    {entry}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.INTERNATIONAL["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                International Participants
                            </Title>
                            {course.tabs.international.map((entry, idx) => (
                                <Text key={idx} c="gray.8" fw={400} fz={14}>
                                    {entry}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.CERTIFICATION["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Professional Certification: Certified 
                                Team Leader (CTL) (Optional)
                            </Title>
                            {course.tabs.certification?.map((entry, idx) => (
                                <Text key={idx} c="gray.8" fw={400} fz={14}>
                                    {entry}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.DOWNLOAD["name"]}>
                    <Brochure />
                </Tabs.Panel>

                <Tabs.Panel value={TABS.ENROLLMENT["name"]}>
                    <Enrollment />
                </Tabs.Panel>
            </Tabs>
        </section>
    )
}
