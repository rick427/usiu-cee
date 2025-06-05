import { Stack, Title, Divider, Text } from "@mantine/core";

import styles from "./contact-area.module.scss";
import Reveal from "@/components/shared/io/reveal";
import ContactForm from "@/components/pages/contact-us/contact-form";

export default function ContactArea() {
    return (
        <section className={styles.ca}>
            <Reveal>
                <Stack className={styles.ca__stack} mb="lg" align="center">
                    <Title c="gray.9" order={1}>
                        Enquiries & Contact
                    </Title>
                    <Text size="sm" ta="center" c="gray.7" fw={400}>
                        If you have any questions, feedback, or would like to initiate 
                        a conversation, we welcome your message. We are committed to 
                        responding in a timely and thoughtful manner.
                    </Text>

                    <Divider w="70%" mx="auto" style={{alignSelf: "stretch"}} /> 
                    
                   <Stack gap={10}>
                        <Text size="sm" fw={500} c="gray.6">
                            Email: ceeinfo@usiu.ac.ke | WhatsApp/Call +254 755 340 340 | 
                        </Text>
                        <Text size="sm" fw={500} c="gray.6">
                            Call: +254 780 750 020 | Office Ext: 0730116113/286
                        </Text>
                    </Stack>
                </Stack>
            </Reveal>

            <div className={styles.ca__div}>
                <ContactForm />
            </div>       
        </section>
    )
}
