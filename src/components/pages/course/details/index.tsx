import { useState } from "react";
import { useForm } from "@mantine/form";
import { useParams, useNavigate } from "react-router";
import { Tabs, Title, Text, Box, Group, Stack, List, TextInput, Divider } from "@mantine/core";

import styles from "./details.module.scss";
import { formatSlug } from "@/utils";

export const TABS = {
  ABOUT: { id: 1, name: "ABOUT" },
  AIM: { id: 2, name: "AIM" },
  TARGET: { id: 3, name: "TARGET" },
  OUTCOME: { id: 4, name: "OUTCOME" },
  DELIVERY: { id: 5, name: "DELIVERY" },
  CONTENTS: { id: 6, name: "CONTENTS" },
  ADMISSIONS: { id: 7, name: "ADMISSIONS" },
  META: { id: 8, name: "META" },
  DOWNLOAD: { id: 9, name: "DOWNLOAD" },
} as const;

export default function CourseDetails() {
    const [activeTab, setActiveTab] = useState<string | null>(TABS.ABOUT["name"]);

    const params = useParams<{ programId: string, courseId: string }>();
    const programId = params.programId;
    const courseId = params.courseId;

    const navigate = useNavigate();

    const form = useForm({
        initialValues: {

        },
        validate: {

        }
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log("Form submitted with values:", values);
    }

    console.log(courseId, programId, navigate, form);
    return (
        <section className={styles.dets}>
            {/* <Group justify="center" align="center">
                <Button
                    mt="md"
                    size="md"
                    radius="xs"
                    color="dark"
                    variant="primary.9"
                    //rightSection={<BsDownload />}
                    classNames={{ label: styles.btnLabel}}
                    //onClick={() => navigate(`/programs/${program.slug}`)}
                >
                    Download Brochure
                </Button>
                <Button
                    mt="md"
                    size="md"
                    radius="xs"
                    color="dark"
                    variant="primary.9"
                    //rightSection={<BsArrowRight />}
                    classNames={{ label: styles.btnLabel}}
                    //onClick={() => navigate(`/programs/${program.slug}`)}
                >
                    Course enrollment
                </Button>
            </Group> */}

            <Tabs 
                value={activeTab} 
                onChange={setActiveTab} 
                orientation="vertical"
                classNames={{ tab: styles.dets__tab}}
            >
                <Tabs.List justify="flex-end">
                    <Tabs.Tab mb="xs" value={TABS.ABOUT["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            About the Course
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb="xs" value={TABS.AIM["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Aim of the Course
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb="xs" value={TABS.TARGET["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            The Target Audience
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb="xs" value={TABS.OUTCOME["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Outcome of the Program
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb="xs" value={TABS.DELIVERY["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Mode of Delivery & Duration
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb="xs" value={TABS.CONTENTS["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Course Content
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb="xs" value={TABS.ADMISSIONS["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Course Admissions
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb="xs" value={TABS.META["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            International Students
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab value={TABS.DOWNLOAD["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Download Brochure
                        </Text>
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value={TABS.ABOUT["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                About the Course
                            </Title>
                            <Text c="gray.8">
                                The Business Analytics for Executives Program (BAEP) is tailored to empower leaders with the skills to
                                harness data-driven strategies, enabling informed decision-making and a competitive edge in today's
                                fast-paced market. By integrating internal and external data sources, participants will learn to foster
                                innovation, optimize business processes, and enhance productivity, ultimately allowing organizations
                                to reinvent their products and better respond to evolving market demands.
                            </Text>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.AIM["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Aim of the Course
                            </Title>
                            <Text c="gray.8">
                                This course aims to elevate executive capabilities in leveraging analytics for 
                                organizational success and sustained growth.
                            </Text>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.TARGET["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Target Audience
                            </Title>
                            <List>
                                <List.Item>C-Suite Executives</List.Item>
                                <List.Item>Senior Managers</List.Item>
                                <List.Item>Decision Makers</List.Item>
                                <List.Item>Business Owners</List.Item>
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
                            <List>
                                <List.Item fw={700}>To the Professional</List.Item>
                                <List withPadding listStyleType="disc">
                                    <List.Item>
                                        You will gain professional experience to enable you to make data-driven 
                                        decisions that impact organizational success
                                    </List.Item>
                                    <List.Item>
                                        You will develop critical skills for enhanced risk management. By understanding the potential
                                        risks associated with various business decisions, executives will be able to mitigate these risks
                                        and protect their organizations
                                    </List.Item>
                                    <List.Item>
                                        You will understand how to gain insights from complex datasets
                                    </List.Item>
                                    <List.Item>
                                        Using analytics to enhance operational efficiency and streamline workflows
                                    </List.Item>
                                    <List.Item>
                                        Developing the leadership mindset necessary to drive analytics initiatives 
                                        within your organization.
                                    </List.Item>
                                    <List.Item>
                                        Applying Artificial Intelligence tools to enhance decision making processes.
                                    </List.Item>
                                </List>
                            </List>
                            <List>
                                <List.Item fw={700}>To the Organization</List.Item>
                                <List withPadding listStyleType="disc">
                                    <List.Item>
                                        <Text span fw={600}>Market Competitive advantage:</Text> Your organization will absolutely benefit by leveraging data analytics
                                        to get critical insights into customer behaviour, market trends, and operational efficiencies, enabling
                                        them to make informed decisions, optimize strategies, and stay ahead of competitors in today's fast-
                                        paced, data-driven marketplace.
                                    </List.Item>
                                    <List.Item>
                                        <Text span fw={600}>Improved Organizational Performance:</Text> Leveraging data enables executives to make informed
                                        decisions that streamline operations, cut unnecessary expenses, and enhance customer experiences,
                                        ultimately boosting organizational performance and competitiveness.
                                    </List.Item>
                                </List>
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
                            <Text c="gray.8">
                                The program is delivered in 3 days on campus. The training program combines industry expert-led
                                and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays,
                                and group discussions to provide a dynamic and practical learning experience.
                            </Text>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.CONTENTS["name"]}>
                    <Box pl="xl">
                        
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.ADMISSIONS["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Course Admissions
                            </Title>
                            <Text>
                                We admit applicants on a rolling and space-available basis. You are therefore 
                                advised to submit your application as soon as possible. The admissions process 
                                is based on your professional experience and achievement, your responsibility in
                                the organisation, and the admissions criteria for each program as described in the 
                                Target Audience. There are no formal educational requirements for this program 
                                offered by the USIU-Africa Center for Executive Education.
                            </Text>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.META["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                International Participants
                            </Title>
                            <Text>
                                Accommodation: The university does not run student hostels but will assist you in securing affordable
                                accommodation at your own expense for the short duration of your stay.
                            </Text>
                            <Text>
                                Language of Instruction - United States International University utilizes English as its primary
                                language of instruction, making it essential for students to be proficient in English to effectively engage
                                with academic materials, participate in discussions, and complete coursework successfully.
                            </Text>
                            <Text>
                                Professional Certification: Certified Business Analyst Foundation (CBAF) (Optional)
                            </Text>
                            <Text>
                                We will issue certificates on the Business Analytics for Executives Program-(BAEP); however, for those
                                who are interested in getting the title Certified Business Analyst Foundation (CBAF) will be required
                                to take a multiple-choice application exam at a separate cost of US$220.
                                The certification is offered by an American Certifying body in conjunction with United States
                                International University.
                            </Text>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.DOWNLOAD["name"]}>
                    <Box className={styles.dets__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Download Brochure
                            </Title>
                            <Divider />
                            <Title order={2} c="gray.9" fw={700}>
                                {formatSlug(courseId)}
                            </Title>
                            <Text>
                                Kindly fill in the foem below and we shall 
                                send the brochure to you.
                            </Text>

                            <form className={styles.dets__form} onSubmit={form.onSubmit(handleSubmit)}>
                                <Group>
                                    <TextInput 
                                        flex={1}
                                        size="md"
                                        withAsterisk 
                                        label="First name"
                                        placeholder="Enter your first name"
                                        {...form.getInputProps("firstName")}
                                        classNames={{ 
                                            input: styles.dets__form__input,
                                            label: styles.dets__form__label,
                                        }} 
                                    />
                                    <TextInput 
                                        flex={1}
                                        size="md"
                                        withAsterisk 
                                        label="Last name" 
                                        placeholder="Enter your last name"
                                        {...form.getInputProps("lastName")}
                                        classNames={{ 
                                            input: styles.dets__form__input,
                                            label: styles.dets__form__label,
                                        }} 
                                    />
                                </Group>
                            </form>
                        </Stack>
                    </Box>
                </Tabs.Panel>
            </Tabs>
        </section>
    )
}
