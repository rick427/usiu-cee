import { Group, Drawer, Burger, Stack, Divider, Text } from "@mantine/core";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import { useDisclosure } from '@mantine/hooks';
import { useState, useEffect } from "react";

import brand from "@/assets/brand-2.png";
import styles from "./header.module.scss";

export default function Header() {
    const [opened, { toggle }] = useDisclosure();
    const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <div onClick={() => navigate("/")} className={styles.header__logo}>
                    <img src={brand} alt="usiu-cee" />
                </div>
                
                <Group gap="md" className={styles.header__group}>
                    <ul className={styles.header__links}>
                        <li>
                            <Link 
                                to="/"
                                className={currentPath === "/" ? styles.active : ""} 
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/programs"
                                className={currentPath.includes("programs") ? styles.active : ""} 
                            >
                                Programs
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact-us"
                                className={currentPath.includes("contact") ? styles.active : ""} 
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    <ul className={styles.header__socials}>
                        <li>Follow Us</li>
                        <li onClick={() => window.open("https://www.facebook.com/profile.php?id=61577627242516", "_blank")}>
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

                <Burger 
                    size="md"
                    opened={opened} 
                    onClick={toggle} 
                    aria-label="Toggle navigation" 
                    className={styles.header__burger} 
                    color={scrolled ? "dark" : "white"}
                />
            </header>

            {/* Mobile Drawer */}
            <Drawer 
                opened={opened}
                onClose={toggle}
                position="right"
                withCloseButton={true}
            >
                <Stack className={styles.drawer} gap="xl" justify="space-between">
                    <Stack align="center">
                        <Stack align="center" gap="lg">
                            <div onClick={() => navigate("/")} className={styles.drawer__logo}>
                                <img src={brand} alt="usiu-cee" />
                            </div>
                            <Text fs="italic" c="gray.7" w="85%" fz={13} fw={300} ta="center">
                                Explore management and leadership programs at USIU-Africa Center for Executive Education, 
                                where expert faculty bridge theory with hands-on insight.
                            </Text>
                        </Stack>

                        <Divider color="gray.1" style={{alignSelf: "stretch"}} />
                        <Stack>
                            <Link 
                                to="/"
                                className={currentPath === "/" ? styles.active : ""} 
                            >
                                Home
                            </Link>
                            <Link 
                                to="/programs"
                                className={currentPath.includes("programs") ? styles.active : ""} 
                            >
                                Our Programs
                            </Link>
                            <Link 
                                to="/contact-us"
                                className={currentPath.includes("contact") ? styles.active : ""} 
                            >
                                Contact Us
                            </Link>
                            <a href="https://www.usiu.ac.ke/accessibility/" target="_blank" rel="noreferrer">
                                Accessibility
                            </a>
                            <a href="https://www.usiu.ac.ke/terms-of-use/" target="_blank" rel="noreferrer">
                                Privacy Policy & Terms of Use
                            </a>
                        </Stack>
                        <Divider color="gray.1" style={{alignSelf: "stretch"}} />
                    </Stack>

                    <Stack align="center">
                        <Group>
                            <div onClick={() => window.open("https://www.facebook.com/profile.php?id=61577627242516", "_blank")}>
                                <FaFacebook color="#515459" size={16} />
                            </div>
                            <FaLinkedin color="#515459" size={16} />
                            <FaInstagram color="#515459" size={16} />
                        </Group>
                        <Text c="gray.7" fz={13} fw={300} fs="italic">
                            Follow us to stay updated on the latest
                        </Text>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    )
}
