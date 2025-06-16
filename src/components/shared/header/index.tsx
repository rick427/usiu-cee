import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import { Group } from "@mantine/core";

import brand from "@/assets/brand.png";
import styles from "./header.module.scss";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <header className={styles.header}>
            <div onClick={() => navigate("/")} className={styles.header__logo}>
                <img src={brand} alt="usiu-cee" />
            </div>
            
            <Group gap="md">
                <ul className={styles.header__links}>
                    <li>
                        <Link className={currentPath === "/" ? styles.active : ""} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={currentPath.includes("programs") ? styles.active : ""} to="/programs">
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link className={currentPath.includes("contact") ? styles.active : ""} to="/contact-us">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <ul className={styles.header__socials}>
                    <li>Follow Us</li>
                    <li>
                        <FaFacebook size={16} />
                    </li>
                    <li>
                        <FaLinkedin size={16} />
                    </li>
                    <li>
                        <FaInstagram size={16} />
                    </li>
                </ul>
            </Group>
        </header>
    )
}
