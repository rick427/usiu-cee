import { Box, Title, Text, TextInput, Checkbox, Select, Button, SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useParams } from "react-router";

import styles from "./enrollment.module.scss";

import { formatSlug } from "@/utils";
import countries from "@/common/data/countries.json";

export default function Enrollment() {
    const params = useParams<{ courseId: string }>();
    const courseId = params.courseId;

    const form = useForm({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            country: "",
            tos: false,
        },
        validate: {
            phoneNumber: (value) => value ? null : "Phone number is required",
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            lastName: (value) => (value.trim().length < 2 ? "Last name is too short" : null),
            firstName: (value) => (value.trim().length < 2 ? "First name is too short" : null),
            country: (value) => (value ? null : "Country of origin is required"),
            tos: (value) => (value ? null : "Terms of service must be agreed"),
        }
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log("Form submitted with values:", values);
    }

    const countriesData = countries.map(country => ({
        label: country.name, value: country.code
    })) ?? [];
    return (
        <Box className={styles.box}>
            <Stack>
                <Title order={2} c="gray.9" fw={700}>
                    Course Enrollment - {formatSlug(courseId)}
                </Title>
                <Text c="gray.8" fw={300} fz={14}>
                    Kindly fill in the form below and we shall 
                    send the brochure to you.
                </Text>

                <form className={styles.form} onSubmit={form.onSubmit(handleSubmit)}>
                    <SimpleGrid cols={3}>
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="First Name"
                            placeholder="Gustave"
                            {...form.getInputProps("firstName")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Last Name" 
                            placeholder="Pierre"
                            {...form.getInputProps("lastName")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Email Address" 
                            placeholder="gustavepierre@gmail.com"
                            {...form.getInputProps("email")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Phone Number" 
                            placeholder="0908907862"
                            {...form.getInputProps("phoneNumber")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
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
                                input: styles.form__input,
                                label: styles.form__label,
                                option: styles.form__option,
                            }} 
                        />
                    </SimpleGrid>
                    <Checkbox 
                        label={
                            <Text fw={300} fz={13} span>
                                By submitting this form, I agree to USIU Africa University's collecting and processing
                                personal data contained in the form for program updates, promotions, and research; to share
                                information regarding academic research opportunities; and for other purposes described in
                                USIU Africa's Privacy Policy.
                            </Text>
                        }
                        {...form.getInputProps("tos", {type: "checkbox"})}
                    />
                    <Button
                        size="md"
                        radius="xs"
                        type="submit"
                        color="primary.8"
                        variant="filled"
                        loading={false}
                        style={{alignSelf: "baseline"}}
                        classNames={{ label: styles.btnLabel}}
                        
                    >
                        Enroll for course
                    </Button>
                </form>
            </Stack>
        </Box>
    )
}
