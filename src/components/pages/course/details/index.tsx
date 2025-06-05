import React, { useState } from "react";
import { useParams } from "react-router";
import { Tabs, Title, Text, Box, Stack, List } from "@mantine/core";

import styles from "./details.module.scss";

import { programs } from "@/common/data/programs";
import Teams from "@/components/pages/course/teams";
import Brochure from "@/components/pages/course/brochure";
import Enrollment from "@/components/pages/course/enrollment";

const TABS = {
    AIM: { id: 1, name: "AIM" },
    COSTS: {id: 2, name: "COSTS"},
    ABOUT: { id: 3, name: "ABOUT" },
    TARGET: { id: 4, name: "TARGET" },
    OUTCOME: { id: 5, name: "OUTCOME" },
    DELIVERY: { id: 6, name: "DELIVERY" },
    CONTENTS: { id: 7, name: "CONTENTS" },
    COACHING: { id: 8, name: "COACHING" },
    DOWNLOAD: { id: 9, name: "DOWNLOAD" },
    ENROLLMENT: { id: 10, name: "ENROLLMENT"},
    ADMISSIONS: { id: 11, name: "ADMISSIONS" },
    INTERNATIONAL: { id: 12, name: "INTERNATIONAL" },
    CERTIFICATION: { id: 13, name: "CERTIFICATION" },
} as const;

export default function CourseDetails() {
    const [activeTab, setActiveTab] = useState<string | null>(TABS.ABOUT["name"]);

    const params = useParams<{ programId: string, courseId: string }>();
    const programId = params.programId;
    const courseId = params.courseId;

    const program = programs.find((p) => p.slug === programId);
    if (!program) return <div style={{margin: "20rem, 0"}}>No program</div>;

    const course = program.courses.find((c) => c.slug === courseId);
    if (!course) return <div style={{margin: "20rem, 0"}}>No course</div>;

    return (
        <section className={styles.dets}>
            <Tabs 
                value={activeTab} 
                onChange={setActiveTab} 
                orientation="vertical"
                classNames={{ 
                    root: styles.dets__root,
                    tab: styles.dets__tab,
                    panel: styles.dets__panel,
                }}
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
                    <Tabs.Tab mb={5} value={TABS.COSTS["name"]} disabled={!course.tabs.costs.length}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Course Costs & Dates
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
                            Make Application
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
                                            {item.data.map((subItem, subIdx) => {
                                                return (
                                                    <List.Item key={`${idx}-${subIdx}`}>
                                                        <Text fz={14} span fw={400}>
                                                            {subItem.includes(":") ? (
                                                                <>
                                                                    <Text span fz={14} fw={600}>{subItem.split(":")[0]}:</Text>
                                                                    {subItem.split(":").slice(1).join(":")}
                                                                </>
                                                            ) : subItem}
                                                        </Text>
                                                    </List.Item>
                                                )
                                            })}
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

                <Tabs.Panel value={TABS.COSTS["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Course Costs & Dates
                            </Title>
                            {course.tabs.costs.map((entry, idx) => {
                                if(typeof entry === "string"){
                                    return (
                                        <Text key={idx} c="gray.8" fw={400} fz={14}>
                                            {entry}
                                        </Text>
                                    )
                                }
                                return (
                                    <Stack>
                                        <Title order={4} c="gray.9" fw={700}>
                                            {entry.title}
                                        </Title>
                                        <List c="gray.8" fw={400} fz={15}>
                                            {entry.data.map((item, itemIdx) => (
                                                <List.Item key={`${idx}-${itemIdx}`} fw={itemIdx === 0 ? 600 : 400}>
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
                                        <Title order={4} c="gray.9" fw={700}>
                                            {content.title}
                                        </Title>
                                        <List c="gray.8" fw={400} fz={15}>
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
                                    {entry.includes(":") ? (
                                        <>
                                            <Text span fz={15} fw={600}>{entry.split(":")[0]}:</Text>
                                            {entry.split(":").slice(1).join(":")}
                                        </>
                                    ) : entry}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.CERTIFICATION["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                {course.tabs.certification?.title}
                            </Title>
                            {course.tabs.certification?.data?.map((entry, idx) => {
                                return (
                                    <Text key={idx} c="gray.8" fw={400} fz={14}>
                                        {entry}
                                    </Text>
                                )
                            })}
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

            <Teams />
        </section>
    )
}
