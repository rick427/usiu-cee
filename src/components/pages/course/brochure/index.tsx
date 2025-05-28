import { Box, Title, Text, TextInput, SimpleGrid, Select, Stack, Divider, Button, Checkbox } from "@mantine/core";
import { BsDownload } from "react-icons/bs";
import { useParams } from "react-router";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";

import styles from "./brochure.module.scss";

import { formatSlug } from "@/utils";
import countries from "@/common/data/countries.json";

export default function Brochure() {
    const [loading, setLoading] = useState<boolean>(false);

    const params = useParams<{ courseId: string }>();
    const courseId = params.courseId;

    const form = useForm({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            country: "",
            organizationName: "",
            jobTitle: "",
            yearsOfExperience: "",
            tos: false,
        },
        validate: {
            phoneNumber: (value) => value ? null : "Phone number is required",
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            lastName: (value) => (value.trim().length < 2 ? "Last name is too short" : null),
            firstName: (value) => (value.trim().length < 2 ? "First name is too short" : null),
            organizationName: (value) => (value.trim().length < 3 ? "Org. name should be at least 3 characters" : null),
            jobTitle: (value) => (value.trim().length < 5 ? "Job title should be at least 5 characters" : null),
            yearsOfExperience: (value) => (value ? null : "Years of experience is required"),
            country: (value) => (value ? null : "Country of origin is required"),
            tos: (value) => (value ? null : "Terms of service must be agreed"),
        }
    });

    const handleSubmit = async (values: typeof form.values) => {
        try {
            const selectedCountry = countries.find(c => c.code === values.country);
            const countryName = selectedCountry?.name ?? "Unknown";

            setLoading(true);
            const templateParams = {
                //to_email: `ceeinfo@usiu.ac.ke`,
                to_email: `jmmunyao@usiu.ac.ke`,
                firstName: values.firstName,
                lastName: values.firstName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                country: countryName,
                organizationName: values.organizationName,
                jobTitle: values.jobTitle,
                yearsOfExperience: values.yearsOfExperience,
                courseId: formatSlug(courseId),
                currentDate: new Date().toLocaleDateString()
            };

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_BD_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            if (result.status === 200) {
                form.reset();
                toast.success("Brochure downloaded!");
                //@: Trigger Download Brochure Here
            }
        } catch (error) {
            toast.error("Oops! Something went wrong while processing your request.");
        } finally {
            setLoading(false);
        }
    }

    const countriesData = countries.map(country => ({
        label: country.name, value: country.code
    })) ?? [];
    return (
        <Box className={styles.box}>
            <Stack>
                <Title order={2} c="gray.9" fw={700}>
                    Download Brochure - ({formatSlug(courseId)})
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
                            placeholder="Eren"
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
                            placeholder="Yeager"
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
                            placeholder="erenyeager@gmail.com"
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
                            placeholder="0705987678"
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
                            placeholder="Select your country"
                            {...form.getInputProps("country")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                                option: styles.form__option,
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
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Job Title / Position" 
                            placeholder="Senior Product Manager"
                            {...form.getInputProps("jobTitle")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Total Years of Experience" 
                            placeholder="2 Years | 4 Months | 3 Weeks"
                            {...form.getInputProps("yearsOfExperience")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
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
                        loading={loading}
                        rightSection={<BsDownload />}
                        style={{alignSelf: "baseline"}}
                        classNames={{ label: styles.btnLabel}}
                        
                    >
                        Download brochure
                    </Button>
                </form>
            </Stack>
        </Box>
    )
}
