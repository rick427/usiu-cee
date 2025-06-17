import { Text, Group } from "@mantine/core";
import { Link } from "react-router";

import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Text size="xs" c="white">
                &copy; {new Date().getFullYear()} USIU-Africa - Center for Executive Education
            </Text>

            <Group className={styles.footer__links}>
                <Link to="/">Home</Link>
                <a href="https://www.usiu.ac.ke/accessibility/" target="_blank" rel="noreferrer">Accessibility</a>
                <a href="https://www.usiu.ac.ke/terms-of-use/" target="_blank" rel="noreferrer">Privacy Policy & Terms of Use</a>
            </Group>
        </footer>
    )
}
