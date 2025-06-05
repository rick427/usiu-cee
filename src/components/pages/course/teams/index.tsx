import { Stack, Group, Title, Text, Avatar, Card, Button } from "@mantine/core";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router";
import { useRef } from "react";

import styles from "./teams.module.scss";
import Reveal from "@/components/shared/io/reveal";

const teams = [
    {
        id: 1,
        name: "Dr. Miriam Okoth",
        slug: "dr-miriam-okoth",
        image: "https://randomuser.me/api/portraits/women/16.jpg",
        role: "DVC Transformative Teaching",
        description:
        "Leads the strategic transformation of teaching practices and curriculum design to foster experiential, student-centered learning across the university.",
    },
    {
        id: 2,
        name: "Prof. Daniel Wanjala",
        slug: "prof-daniel-wanjala",
        image: "https://randomuser.me/api/portraits/men/80.jpg",
        role: "Learning & Research",
        description:
        "Oversees academic innovation, research initiatives, and knowledge-sharing frameworks to ensure evidence-based learning and institutional excellence.",
    },
    {
        id: 3,
        name: "Dr. Brenda Kamau",
        slug: "dr-brenda-kamau",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        role: "Center Director (HBD)",
        description:
        "Drives executive education strategy and spearheads human behavior dynamics (HBD) programs, connecting theory with industry-driven application.",
    },
    {
        id: 4,
        name: "Sarah Mwikali",
        slug: "sarah-mwikali",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
        role: "Office Administrator & Provision",
        description:
        "Ensures seamless program delivery through logistical coordination, administrative support, and participant engagement at every level.",
    },
];

export default function Teams() {
    const navigate = useNavigate();
    const autoplay = useRef(Autoplay({ delay: 5000 }));

    return (
        <section className={styles.teams}>
            <Reveal>
                <Stack className={styles.teams__stack} gap={10} mb="lg"  align="center">
                    <Title c="gray.9" order={2} fz={28}>
                        Meet the Team
                    </Title>
                    <Text size="sm" ta="center" c="gray.7" fw={400}>
                        Our Internationally acclaimed researchers and teachers are all 
                        dedicated and gifted individuals who contribute 
                        directly to USIU-A's reputation of excellence.
                    </Text>
                </Stack>
            </Reveal>

            <Carousel
                slideSize={{ base: "100%", sm: "50%", md: "33.3%", lg: "25%" }}
                plugins={teams.length > 4 ? [autoplay.current] : []}
                slideGap={{ base: "sm", sm: "md", md: "lg" }}
                withIndicators={true}
                withControls={false}
                styles={{
                    indicator: {
                        backgroundColor: "var(--mantine-color-primary-8)"
                    }
                }}
            >
                {teams.map(team => (
                    <Carousel.Slide key={team.id} py="sm">
                        <Card className={styles.teams__card} shadow="sm" p="lg">
                            <Card.Section p="xl">
                                <Stack align="center">
                                    <div className={styles.teams__user}>
                                        <Avatar w={80} h={80} src={team.image} alt={team.name}>
                                            {team.name
                                                .split(" ")
                                                .map((n:string) => n[0])
                                                .join("")
                                                .slice(0, 2)
                                                .toUpperCase()
                                            }
                                        </Avatar>
                                    </div>
                                </Stack>
                            </Card.Section>

                            <Stack align="center" gap="lg">
                                <Stack gap={5} align="center">
                                    <Title fw={600} order={5} c="gray.8">
                                        {team.name}
                                    </Title>
                                    <Title order={6} c="gray.7" fz={12} tt="uppercase" fw={500}>
                                        {team.role}
                                    </Title>
                                </Stack>

                                <Text ta="left" c="gray.6" size="sm" lineClamp={3}>
                                    {team.description}
                                </Text>    

                                <Group justify="center" align="center">
                                    <FaFacebook color="gray" />
                                    <FaInstagram color="gray" />
                                    <FaLinkedin color="gray" />
                                </Group>
                                <Button
                                    size="md"
                                    radius="xs"
                                    fullWidth
                                    color="primary.8"
                                    variant="filled"
                                    classNames={{ label: styles.btnLabel}}
                                    onClick={() => navigate(`/teams/${team.slug}`)}
                                >
                                    view profile
                                </Button>                        
                            </Stack>
                        </Card>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </section>
    )
}
