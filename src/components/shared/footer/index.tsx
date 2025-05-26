import { Text, Group } from "@mantine/core";
import { Link } from "react-router";

import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Text size="xs" c="white">
                &copy; {new Date().getFullYear()} USIU-Africa
            </Text>

            <Group>
                <Link to="/">Home</Link>
                <a href="/">Virtual Tours</a>
                <a href="/">Accessibility</a>
                <a href="/">Privacy Policy</a>
                <a href="/">USIS-Africa Online</a>
            </Group>
        </footer>
    )
}
