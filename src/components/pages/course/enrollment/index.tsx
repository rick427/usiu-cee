import { Box, Title, Text, TextInput, SimpleGrid, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import styles from "./enrollment.module.scss";

export default function Enrollment() {
    const form = useForm({
        initialValues: {

        },
        validate: {

        }
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log("Form submitted with values:", values);
    }
    return (
        <Box className={styles.box}>
            <Stack>
                <Title order={2} c="gray.9" fw={700}>
                    Course Enrollment -
                </Title>
                <Text c="gray.8" fw={300} fz={15}>
                    Kindly fill in the form below and we shall 
                    send the brochure to you.
                </Text>

                <form className={styles.form} onSubmit={form.onSubmit(handleSubmit)}>
                    <SimpleGrid cols={2}>
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="First name"
                            placeholder="Enter your first name"
                            {...form.getInputProps("firstName")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Last name" 
                            placeholder="Enter your last name"
                            {...form.getInputProps("lastName")}
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
                            label="Email address" 
                            placeholder="Enter your email"
                            {...form.getInputProps("email")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Phone number" 
                            placeholder="Enter your phone number"
                            {...form.getInputProps("phoneNumber")}
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
                            label="Country of Origin" 
                            placeholder="Select your country"
                            {...form.getInputProps("country")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                        <TextInput 
                            size="md"
                            withAsterisk 
                            label="Job Title / Position" 
                            placeholder="Enter your job title"
                            {...form.getInputProps("occupation")}
                            classNames={{ 
                                input: styles.form__input,
                                label: styles.form__label,
                            }} 
                        />
                    </SimpleGrid>
                    {/* <TextInput 
                        size="md"
                        withAsterisk 
                        label="Country of Origin" 
                        placeholder="Select your country"
                        {...form.getInputProps("country")}
                        classNames={{ 
                            input: styles.form__input,
                            label: styles.form__label,
                        }} 
                    /> */}
                </form>
            </Stack>
        </Box>
    )
}
