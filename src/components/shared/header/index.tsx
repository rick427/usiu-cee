import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Group } from "@mantine/core";
import { Link } from "react-router";

import brand from "@/assets/brand.png";
import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src={brand} alt="usiu-cee" />
            </div>
            
            <Group gap="md">
                <ul className={styles.header__links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/programs">Programs</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>

                <ul className={styles.header__socials}>
                    <li>Follow Us-</li>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaLinkedin/>
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                </ul>
            </Group>
        </header>
    )
}
