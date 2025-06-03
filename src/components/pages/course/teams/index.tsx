import { Stack, Group, Title, Text, Grid, Avatar, Card } from "@mantine/core";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import styles from "./teams.module.scss";
import Reveal from "@/components/shared/io/reveal";

const teams = [
    {
        id: 1,
        name: "Dr. Miriam Okoth",
        image: "https://randomuser.me/api/portraits/women/16.jpg",
        role: "DVC Transformative Teaching",
        description:
        "Leads the strategic transformation of teaching practices and curriculum design to foster experiential, student-centered learning across the university.",
    },
    {
        id: 2,
        name: "Prof. Daniel Wanjala",
        image: "https://randomuser.me/api/portraits/men/80.jpg",
        role: "Learning & Research",
        description:
        "Oversees academic innovation, research initiatives, and knowledge-sharing frameworks to ensure evidence-based learning and institutional excellence.",
    },
    {
        id: 3,
        name: "Dr. Brenda Kamau",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        role: "Center Director (HBD)",
        description:
        "Drives executive education strategy and spearheads human behavior dynamics (HBD) programs, connecting theory with industry-driven application.",
    },
    {
        id: 4,
        name: "Sarah Mwikali",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
        role: "Office Administrator & Provision",
        description:
        "Ensures seamless program delivery through logistical coordination, administrative support, and participant engagement at every level.",
    },
];

export default function Teams() {
    return (
        <section className={styles.teams}>
            <Reveal>
                <Stack className={styles.teams__stack} mb="lg"  align="center">
                    <Title c="gray.9" order={1}>
                        Meet the Team
                    </Title>
                    <Text ta="center" c="gray.7" fw={300}>
                        Our Internationally acclaimed researchers and teachers are all 
                        dedicated and gifted individuals who contribute 
                        directly to USIU-A's reputation of excellence.
                    </Text>
                </Stack>
            </Reveal>

            <Grid justify="center">
                {teams.map((team, _index) => (
                    <Grid.Col key={team.id} span={{base: 12, md: 6, lg: 3}}>
                        <Card className={styles.pl__card} shadow="sm" p="lg">
                            <Card.Section p="xl">
                                <Stack align="center">
                                    <div className={styles.teams__user}>
                                        <Avatar w={100} h={100} src={team.image} alt={team.name}>
                                            {team.name
                                                .split(" ")
                                                .map((n) => n[0])
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

                                <Text ta="center" c="gray.6" size="sm" lineClamp={3}>
                                    {team.description}
                                </Text>    

                                <Group justify="center" align="center">
                                    <FaFacebook color="gray" />
                                    <FaInstagram color="gray" />
                                    <FaLinkedin color="gray" />
                                </Group>                        
                            </Stack>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </section>
    )
}
