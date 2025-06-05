import { Text, Group } from "@mantine/core";
import { Link } from "react-router";

import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Text size="xs" c="white">
                &copy; {new Date().getFullYear()} USIU-Africa - Center for Executive Education
            </Text>

            <Group>
                <Link to="/">Home</Link>
                <a href="/">Virtual Tours</a>
                <a href="/">Accessibility</a>
                <a href="/">Privacy Policy</a>
            </Group>
        </footer>
    )
}
