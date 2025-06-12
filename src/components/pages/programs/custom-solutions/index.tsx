import { Tabs, Title, Text, Box, Stack, List, Button, TextInput, Divider, Select, Textarea, SimpleGrid } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";

import styles from "./custom-solutions.module.scss";
import Teams from "@/components/pages/course/teams";
import countries from "@/common/data/countries.json";

const TABS = {
    ABOUT: { id: 1, name: "ABOUT" },
    ESSENTIALS: { id: 2, name: "ESSENTIALS" },
    ENQUIRIES: { id: 3, name: "ENQUIRIES"},
} as const;

export default function CustomSolutions() {
    const [loading, setLoading] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string | null>(TABS.ABOUT["name"]);

    const form = useForm({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
        },
        validate: {
            phoneNumber: (value) => value ? null : "Phone number is required",
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            lastName: (value) => (value.trim().length < 2 ? "Last name is too short" : null),
            firstName: (value) => (value.trim().length < 2 ? "First name is too short" : null),
            subject: (value) => (value.trim().length < 10 ? "Subject should be at least 10 characters" : null),
            message: (value) => value.trim().length < 10 ? "Message should be at least 10 characters" : null,
        },
    });

    const handleSubmit = async (values: typeof form.values) => {
        try {
            setLoading(true);
            const universityParams = {
                to_email: `ceeinfo@usiu.ac.ke`,
                from_name: `${values.firstName} ${values.lastName}`,
                from_email: values.email,
                from_phone: values.phoneNumber,
                subject: values.subject,
                message: values.message,
            };

            // const autoReplyParams = {
            //     user_name: `${values.firstName} ${values.lastName}`,
            //     user_email: values.email,
            // }

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                universityParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            if (result.status === 200) {
                form.reset();
                toast.success("Message sent successfully!");
            }
        } catch (error) {
            console.error("Email send error:", error);
            toast.error("Oops! Something went wrong while sending your message.");
        } finally {
            setLoading(false);
        }
    };

    const countriesData = countries.map(country => ({
        label: country.name, value: country.code
    })) ?? [];
    return (
        <section className={styles.cs}>
            <Tabs 
                value={activeTab} 
                onChange={setActiveTab} 
                orientation="vertical"
                classNames={{ 
                    root: styles.cs__root,
                    tab: styles.cs__tab,
                    panel: styles.cs__panel,
                }}
            >
                <Tabs.List>
                    <Tabs.Tab mb={5} value={TABS.ABOUT["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            About the Program
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.ESSENTIALS["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Essential Components
                        </Text>
                    </Tabs.Tab>
                    <Tabs.Tab mb={5} value={TABS.ENQUIRIES["name"]}>
                        <Text tt="uppercase" ta="left" fz={12}>
                            Customised Program Enquiries
                        </Text>
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value={TABS.ABOUT["name"]}>
                    <Box className={styles.cs__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                About the Program
                            </Title>
                             <Text c="gray.8" fw={400} fz={14}>
                                Customized solutions development programs are targeted training initiatives that align with an
                                organization's unique needs and goals, addressing specific challenges and skill gaps of employees.
                                Unlike generic training, these programs are tailored to individual learning preferences and
                                organizational objectives, resulting in improved employee performance, increased productivity, and
                                the promotion of a culture of continuous growth and improvement within the organization.
                             </Text>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.ESSENTIALS["name"]}>
                    <Box className={styles.cs__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Essential Components
                            </Title>
                            <List>
                                <List.Item mb="md">
                                    <Stack gap="xs">
                                        <Text c="gray.8" fw={600} fz={15}>
                                            Needs Assessment:
                                        </Text>
                                        <Text c="gray.8" fw={400} fz={14}>
                                            We identify specific skill gaps and learning requirements within your organization through various
                                            methods such as skills assessments, performance reviews, and employee feedback. 
                                        </Text>
                                    </Stack>
                                </List.Item>
                                <List.Item mb="md">
                                    <Stack gap="xs">
                                        <Text c="gray.8" fw={600} fz={15}>
                                            Tailored Content:
                                        </Text>
                                        <Text c="gray.8" fw={400} fz={14}>
                                            We develop training materials, activities, and resources that are relevant to your organization's
                                            industry, culture, and strategic goals.
                                        </Text>
                                    </Stack>
                                </List.Item>
                                <List.Item mb="md">
                                    <Stack gap="xs">
                                        <Text c="gray.8" fw={600} fz={15}>
                                            Personalized Learning:
                                        </Text>
                                        <Text c="gray.8" fw={400} fz={14}>
                                            We use various learning modalities, including online modules, workshops, coaching, and simulations,
                                            to cater to diverse learning styles and preferences.
                                        </Text>
                                    </Stack>
                                </List.Item>
                                <List.Item mb="md">
                                    <Stack gap="xs">
                                        <Text c="gray.8" fw={600} fz={15}>
                                            Practical Application:
                                        </Text>
                                        <Text c="gray.8" fw={400} fz={14}>
                                            We focus on practical skills development through hands-on exercises, real-world case studies, and
                                            opportunities for on the job application.
                                        </Text>
                                    </Stack>
                                </List.Item>
                                <List.Item>
                                    <Stack gap="xs">
                                        <Text c="gray.8" fw={600} fz={15}>
                                            Evaluation and Feedback:
                                        </Text>
                                        <Text c="gray.8" fw={400} fz={14}>
                                            We measure the effectiveness of the program through assessments, feedback mechanisms, and
                                            tracking of performance improvements.
                                        </Text>
                                    </Stack>
                                </List.Item>
                            </List>
                        </Stack>
                    </Box>
                </Tabs.Panel>

                <Tabs.Panel value={TABS.ENQUIRIES["name"]}>
                    <Box className={styles.cs__box}>
                        <Stack>
                            <Title order={2} c="gray.9" fw={700}>
                                Customised Program Enquiries
                            </Title>
                            <Text c="gray.8" fw={300} fz={14}>
                                Kindly fill in the form below and we shall 
                                get back to you as soon as possible.
                            </Text>
                            <form onSubmit={form.onSubmit(handleSubmit)} className={styles.cs__form}>
                                <SimpleGrid cols={3}>
                                    <TextInput 
                                        size="md"
                                        withAsterisk 
                                        label="First name"
                                        placeholder="Enter your first name"
                                        {...form.getInputProps("firstName")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                        }} 
                                    />
                                    <TextInput 
                                        size="md"
                                        withAsterisk 
                                        label="Last name" 
                                        placeholder="Enter your last name"
                                        {...form.getInputProps("lastName")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                        }} 
                                    />
                                    <TextInput 
                                        size="md"
                                        withAsterisk 
                                        label="Email address" 
                                        placeholder="Enter your email"
                                        {...form.getInputProps("email")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                        }} 
                                    />
                                </SimpleGrid>
                                <SimpleGrid cols={2}>
                                    <TextInput 
                                        size="md"
                                        withAsterisk 
                                        label="Phone number" 
                                        placeholder="Enter your phone number"
                                        {...form.getInputProps("phoneNumber")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                        }} 
                                    />
                                    <Select 
                                        size="md"
                                        searchable
                                        withAsterisk 
                                        data={countriesData}
                                        label="Country of Origin" 
                                        placeholder="Kenya"
                                        {...form.getInputProps("country")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                            option: styles.cs__form__option,
                                        }} 
                                    />
                                </SimpleGrid>
                                <Divider label="Professional Information" my="sm" />
                                <SimpleGrid cols={3}>
                                    <TextInput 
                                        size="md"
                                        withAsterisk 
                                        label="Organization Name" 
                                        placeholder="Safaricom Limited"
                                        {...form.getInputProps("organizationName")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                        }} 
                                    />
                                    <TextInput 
                                        size="md"
                                        withAsterisk 
                                        label="Job Title / Position" 
                                        placeholder="Senior Product Manager"
                                        {...form.getInputProps("jobTitle")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                        }} 
                                    />
                                    <TextInput 
                                        size="md"
                                        withAsterisk 
                                        label="Total Years of Experience" 
                                        placeholder="2 Years | 4 Months | 3 Weeks"
                                        {...form.getInputProps("yearsOfExperience")}
                                        classNames={{ 
                                            input: styles.cs__form__input,
                                            label: styles.cs__form__label,
                                        }} 
                                    />
                                </SimpleGrid>
                                <Textarea 
                                    rows={6}
                                    size="md"
                                    withAsterisk 
                                    label="Message" 
                                    placeholder="Your message / enquiry here"
                                    {...form.getInputProps("message")}
                                    classNames={{ 
                                        input: styles.cs__form__input,
                                        label: styles.cs__form__label,
                                    }} 
                                />
                                <Button
                                    mt="md"
                                    size="md"
                                    radius="xs"
                                    type="submit"
                                    variant="filled"
                                    color="primary.8"
                                    loading={loading}
                                    loaderProps={{ size: "xs" }}
                                    style={{alignSelf: "baseline"}}
                                    classNames={{ label: styles.btnLabel}}
                                >
                                    Send program enquiry
                                </Button>
                            </form>
                        </Stack>
                    </Box>
                </Tabs.Panel>
            </Tabs>

            <Teams />
        </section>
    )
}
