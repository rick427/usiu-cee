import { Stack, Title, Text, Group, Grid, Button, Image, Accordion } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

import styles from "./faqs.module.scss";
import faqsImage from "@/assets/faqs-1.webp";
import SlideIn from "@/components/shared/io/slide-in";

const faqsData = [
    {
        question: "What programs are offered by the Center for Executive Education?",
        answer:
        "The Center offers a range of executive short courses, leadership development programs, and custom training solutions designed for professionals, managers, and organizations seeking to upskill in today's competitive landscape."
    },
    {
        question: "Who are the programs designed for?",
        answer:
        "Our programs are specifically designed to cater to a diverse range of executives, including operational staff, mid- to senior-level professionals, entrepreneurs, and organizational leaders, aiming to strengthen their strategic thinking, leadership skills, and global competitiveness to drive organizational success and personal growth."
    },
    {
        question: "How do I enroll in a course?",
        answer:
        "Enrollment is simple. Visit our official website, select your preferred course, and complete the online registration form. Our team will follow up with further details and support."
    },
    {
        question: "Are the courses offered online or in-person?",
        answer:
        "We offer both in-person and hybrid learning formats to accommodate varying needs and schedules. Each program specifies its mode of delivery."
    },
];  

export default function FAQs() {
    const navigate = useNavigate();

    const items = faqsData.map((faq, index) => (
        <Accordion.Item key={index} value={`item-${index}`}>
            <Accordion.Control>
                <Text c="gray.9" fw={600}>
                    {faq.question}
                </Text>
            </Accordion.Control>
            <Accordion.Panel>
                <Text c="gray.8" size="sm" fw={300}>
                    {faq.answer}
                </Text>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <section className={styles.faqs}>
            <Grid gutter="xl" justify="center" align="center">
                <Grid.Col span={{base: 12, sm: 6, md: 5}}>
                    <SlideIn direction="left">
                        <Stack gap="xl">
                            <Stack className={styles.faqs__stack}>
                                <Title>
                                    Frequently Asked Questions
                                </Title>
                                <Text size="sm" c="gray.7" fw={400}>
                                    Here are some of the most frequently asked questions we receive 
                                    from prospective students. If you have any other questions, 
                                    feel free to reach out to us.
                                </Text>
                            </Stack>

                            <Accordion variant="separated" defaultValue="item-0">
                                {items}
                            </Accordion>

                            <Group align="center">
                                <Text fw={500}>My question is not here.</Text>
                                <Button
                                    size="md"
                                    radius="xs"
                                    variant="filled"
                                    color="primary.8"
                                    rightSection={<BsArrowRight />}
                                    classNames={{ label: styles.btnLabel}}
                                    onClick={() => navigate(`/contact-us`)}
                                >
                                    Contact Us
                                </Button>
                            </Group>
                        </Stack>
                    </SlideIn>
                </Grid.Col>
                
                <Grid.Col span={{base: 12, sm: 6, md: 4}}>
                    <SlideIn direction="right">
                        <Image 
                            width={600}
                            height={600}
                            src={faqsImage}
                            alt="faqs-image"
                            className={styles.faqs__image}
                        />
                    </SlideIn>
                </Grid.Col>
            </Grid>
        </section>
    )
}
