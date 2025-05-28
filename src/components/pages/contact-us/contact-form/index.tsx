import { Stack, Title, Text, SimpleGrid, TextInput, Textarea, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";

import styles from "./contact-form.module.scss";

export default function ContactForm() {
    const [loading, setLoading] = useState<boolean>(false);

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
            const templateParams = {
                to_email: `jmmunyao@usiu.ac.ke`,
                //to_email: `ceeinfo@usiu.ac.ke`,
                from_name: `${values.firstName} ${values.lastName}`,
                from_email: values.email,
                from_phone: values.phoneNumber,
                subject: values.subject,
                message: values.message,
            };

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
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
    return (
        <section className={styles.cf}>
            <Stack className={styles.cf__stack} mb="lg" align="center">
                <Title c="gray.9" order={1}>
                    Enquiries & Contact
                </Title>
                <Text ta="center" c="gray.7" fw={300}>
                    If you have any questions, feedback, or would like to initiate 
                    a conversation, we welcome your message. We are committed to 
                    responding in a timely and thoughtful manner.
                </Text>
            </Stack>
            
            <form onSubmit={form.onSubmit(handleSubmit)} className={styles.cf__form}>
                <SimpleGrid cols={2}>
                    <TextInput 
                        size="md"
                        withAsterisk 
                        label="First name"
                        placeholder="Enter your first name"
                        {...form.getInputProps("firstName")}
                        classNames={{ 
                            input: styles.cf__form__input,
                            label: styles.cf__form__label,
                        }} 
                    />
                    <TextInput 
                        size="md"
                        withAsterisk 
                        label="Last name" 
                        placeholder="Enter your last name"
                        {...form.getInputProps("lastName")}
                        classNames={{ 
                            input: styles.cf__form__input,
                            label: styles.cf__form__label,
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
                            input: styles.cf__form__input,
                            label: styles.cf__form__label,
                        }} 
                    />
                    <TextInput 
                        size="md"
                        withAsterisk 
                        label="Phone number" 
                        placeholder="Enter your phone number"
                        {...form.getInputProps("phoneNumber")}
                        classNames={{ 
                            input: styles.cf__form__input,
                            label: styles.cf__form__label,
                        }} 
                    />
                </SimpleGrid>
                <TextInput 
                    size="md"
                    withAsterisk 
                    label="Subject" 
                    placeholder="Tell us the subject"
                    {...form.getInputProps("subject")}
                    classNames={{ 
                        input: styles.cf__form__input,
                        label: styles.cf__form__label,
                    }} 
                />
                <Textarea 
                    rows={6}
                    size="md"
                    withAsterisk 
                    label="Message" 
                    placeholder="Your message here"
                    {...form.getInputProps("message")}
                    classNames={{ 
                        input: styles.cf__form__input,
                        label: styles.cf__form__label,
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
                    classNames={{ label: styles.btnLabel}}
                >
                    Send Message
                </Button>
            </form>
        </section>
    )
}
