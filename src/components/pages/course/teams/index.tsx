import { Stack, Group, Title, Text, Avatar, Badge, Card, Button } from "@mantine/core";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router";
import { useRef } from "react";

import styles from "./teams.module.scss";
import Reveal from "@/components/shared/io/reveal";

import t1 from "@/assets/teams/1.jpg";
import t2 from "@/assets/teams/2.jpg";
import t3 from "@/assets/teams/3.jpeg";
import t4 from "@/assets/teams/4.jpg";

export const teams = [
    {
        id: 1,
        name: "Caroline Muthoni",
        slug: "caroline-muthoni",
        image: t1,
        role: "Office Administrator",
        description: [
            "Caroline Muthoni, the Administrator at USIU-Africa's Center for Executive Education, plays a vital role in facilitating seamless operations by providing high-level support to the Director's office, coordinating programs, events, meetings, and strategic initiatives that drive the center's growth.",
            "With a Bachelor of Commerce in Finance from Kenyatta University and currently pursuing a Master of Science in Management & Organizational Development at USIU-Africa, she has also completed specialized training in VIP & VVIP Protocol Management and professional development programs in customer experience and adaptive leadership from McKinsey Academy and Acumen Academy.",
            "Passionate about climate change and sustainability, Caroline believes that effective administrative support empowers executives to lead purposefully and impactfully, emphasizing the importance of people, process, and purpose in creating operational efficiency and meaningful engagement."
        ]
    },
    {
        id: 2,
        name: "Joseph Munyao",
        slug: "joseph-munyao",
        image: t4,
        role: "Head of Business Development & Ag. Center Director-CEE",
        description: [
            "Joseph Munyao is a highly accomplished business professional with over 15 years of leadership and expertise in strategic management, business development, marketing, and stakeholder relations, currently serving as the Head of Business Development and Acting Center Director at USIU Africa's Center for Executive Education.",
            "Joseph is highly passionate about executive transformative programs, focusing on enhancing leadership skills to drive tangible organizational success. His expertise lies in designing Programs and implementing training strategies that foster leadership development, innovation, and change management, enabling organizations to thrive in competitive environments. Through his work, he aims to empower leaders to unlock their full potential and achieve sustainable growth.",
            "His extensive experience includes senior roles at Strathmore University Business School, where he advanced through marketing, sales, and program management, as well as previous positions at Africa Nazarene University and Cooperative Bank of Kenya.",
            "With a robust academic background including an MBA in Strategic Management, multiple Post Graduate and Advanced Diplomas in project management, General Management, Public Relations & Marketing, and ongoing PhD studies, Joseph combines practical leadership with academic rigor, making him a thought leader in strategic marketing, organizational growth, and stakeholder engagement."
        ]
    },
    {
        id: 3,
        name: "Prof. Amos Njuguna",
        slug: "prof-amos-njuguna",
        image: t2,
        role: "DVC - Academics, Transaformative Teaching, Learning & Research",
        description: [
            "Prof. Amos Njuguna at USIU-Africa exemplifies transformational leadership in research, spearheading initiatives that address pressing African challenges such as MSME resilience, youth employment in the creative sector, gender bias in politics, aging populations, and the research-practice gap, all with a focus on societal impact.",
            "His leadership in programs like the Africa Impact Academy, NIERA, and the Scholarship of Teaching and Learning fosters inclusive, impact-driven research that influences policy, empowers communities, and builds capacity among youth and researchers across Africa.",
            "Prof. Amos Njuguna's Demand Driven Research Initiatives addresses the disconnect between academic research and practical application by involving practitioners and policymakers from the outset, ensuring research is relevant and implementable. This approach actively engages users as contributors rather than mere recipients, fostering collaborative problem-solving across various pressing issues in Kenya, Uganda, and Ethiopia, such as gambling addiction, urban poverty, healthcare insurance, vaccination strategies, HIV testing, and youth employment in the creative sector.",
            "By empowering researchers to align their work with real-world needs and involving stakeholders throughout the research process, the initiative enhances the likelihood of effective policy and program adoption, ultimately contributing to meaningful social and economic improvements in the region.",
            "These initiatives not only generate valuable evidence and innovative solutions but also actively involve students, practitioners, and policymakers, thereby bridging knowledge with tangible development outcomes, aligning with USIU-Africa’s mission of fostering impactful scholarship."
        ]
    },
    {
        id: 4,
        name: "Dr. Kiriri",
        slug: "dr-kiriri",
        image: t3,
        role: "N/A",
        description: [
            "Professor Peter Kiriri, a distinguished Doctor of Business Administration with a bias in leadership and organizational change management, is a seasoned academic and corporate trainer with over 20 years of experience.",
            "Currently serving as a Professor of Marketing at United States International University - Africa, he has facilitated leadership development programs for prominent organizations such as Britam, the Association of Insurance Brokers, Kenya Post Office Savings Bank, and the Central Bank of Kenya’s Kenya School of Monetary Studies, the Insurance Regulatory Authority, and the Retirement Benefits Authority.",
            "His extensive expertise in leadership training and organizational transformation underscores his significant contribution to both academia and industry, equipping professionals with vital skills for effective leadership and change management."
        ]
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
                                    <Badge 
                                        radius="xs" 
                                        ta="center" 
                                        variant="light"
                                        fz={10} 
                                    >
                                        {team.role}
                                    </Badge>
                                </Stack>

                                <Text ta="left" c="gray.6" size="sm" lineClamp={3}>
                                    {team.description[0]}
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
