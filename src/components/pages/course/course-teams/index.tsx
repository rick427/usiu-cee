import { Stack, Title, Text, Avatar, Badge, Card, Button } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router";
import { useRef } from "react";

import styles from "./teams.module.scss";
import Reveal from "@/components/shared/io/reveal";

import t1 from "@/assets/teams/1-2.png";
import t2 from "@/assets/teams/2.jpg";
import t3 from "@/assets/teams/3.jpeg";
import t4 from "@/assets/teams/4.jpg";
import t5 from "@/assets/teams/5.png";
import t6 from "@/assets/teams/6.jpg";
import t7 from "@/assets/teams/7.jpg";
import t8 from "@/assets/teams/8.jpg";
import t9 from "@/assets/teams/9.jpg";
import t10 from "@/assets/teams/10.jpg";
import t11 from "@/assets/teams/11.jpg";
import t12 from "@/assets/teams/12.jpg";

export const teamsData = [
    {
        id: 7,
        name: "Irene Kinuthia MCC",
        slug: "irene-kinuthia",
        image: t7,
        role: "Executive Leadership and Team Coach",
        expertise: [
            "Leadership Excellence",
            "Sales Excellence",
            "Personal Excellence",
            "Strategy Execution",
            "Emotional Intelligence",
            "Culture Re-design",
        ],
        description: [
            "Irene is one of three Master Coaches in Africa (outside of South Africa) who hold an MCC-Master Certified Coach credential from the International Coach Federation (ICF). She has played a key role in Leadership development and coaching in Africa, working with leading organizations and clients across the globe.",
            "Irene is very passionate about developing great leaders for the African continent who can take their place at the global table. Having worked in Strathmore Business School for over 13 years, Irene has vast insights into the leadership challenges facing managers, executives, and board members in Africa.",
            "She now runs a coaching consultancy, THE COACHING HUB, with a fully accredited coach training program that certifies executive coaches under The International Coaching Federation (ICF). Irene also facilitates several leadership training programs.",
        ],
        credentials: [
            "Master Certified Coach (MCC) - International Coach Federation",
            "The Performance Solution (TPS), UK - ICF ACTP/Professional Coaching Skills",
            "The Coaching Hub - Accredited Coach Certification Trainer and Mentor",
            "Gallup - Certified Strengths Coach",
            "Clarity 4D (UK) - Certified Personality Assessment Coach",
        ],
        qualifications: [
            "Bachelor of Education in Economics",
            "Masters in Organizational Development (USIU)",
            "Senior Leadership Development (Strathmore)",
            "Faculty Development (IESE, Spain)",
            "Leadership Development courses (GIBS SA)",
            "Cultural Intelligence (Singapore)",
            "Business Acumen (Maastricht, Netherlands)"
        ],
        clients: [
            "Senior managers and branch managers, ABSA Bank Kenya and SA; USAID (Kenya, Tanzania, Hawaii, Jamaica, Côte d'Ivoire, Cambodia, Malaysia, and SA), Mastercard Foundation & Invest In Africa (Kenya, Senegal, and Ghana), DFCU Bank (Uganda), Safaricom, Centenary (Bank Uganda), NMB Bank (Tanzania), ILRI (Kenya and Ethiopia), ICPAK."
        ]
    },
    {
        id: 1,
        name: "Caroline Muthoni",
        slug: "caroline-muthoni",
        image: t1,
        role: "Administrator",
        description: [
            "Caroline Muthoni, the Administrator at USIU-Africa's Center for Executive Education, plays a vital role in facilitating seamless operations by providing high-level support to the Director's office, coordinating programs, events, meetings, and strategic initiatives that drive the center's growth.",
            "With a Bachelor of Commerce in Finance from Kenyatta University and currently pursuing a Master of Science in Management & Organizational Development at USIU-Africa, she has also completed specialized training in VIP & VVIP Protocol Management and professional development programs in customer experience and adaptive leadership from McKinsey Academy and Acumen Academy.",
            "Caroline believes that effective administrative support empowers executives to lead purposefully and impactfully, emphasizing the importance of people, process, and purpose in creating operational efficiency and meaningful engagement."
        ]
    },
    {
        id: 2,
        name: "Joseph Munyao",
        slug: "joseph-munyao",
        image: t4,
        role: "Head of Business Development & Ag. Center Director-CEE",
        publication: "https://scholar.google.com/citations?user=E59NuiEAAAAJ&hl=en",
        description: [
            "Joseph Munyao is a highly accomplished professional with over 15 years of leadership and expertise in strategic management, business development, marketing, and stakeholder relations, currently serving as the Head of Business Development and Acting Center Director at USIU Africa's Center for Executive Education.",
            "Joseph is highly passionate about executive transformation through executive education programs translating to organizational growth, performance and success, by focusing on enhancing management leadership skills for the executives to drive tangible organizational success. His expertise lies in designing Programs and implementing training strategies that foster leadership development, innovation, and change management, enabling organizations to thrive in competitive environments. Through his work, he aims to empower leaders to unlock their full potential and achieve sustainable growth.",
            "His extensive experience includes senior roles at Strathmore University Business School, where he advanced through strategic Management Leadership, Department start-ups, Executive Academic Students Management, marketing, sales, and Executive Academic program Development management, as well as previous positions at Africa Nazarene University and Cooperative Bank of Kenya.",
            "With a robust academic background including an MBA in Strategic Management, multiple Post Graduate and Advanced Diplomas in project management, General Management, Public Relations Marketing, and ongoing PhD studies, together with a Strategic Leadership training, Joseph combines practical leadership with training academic rigor, making him a thought leader in Strategic Management and Leadership, Strategic marketing, organizational development growth, as well as stakeholder engagement."
        ]
    },
    {
        id: 3,
        name: "Prof. Amos Njuguna",
        slug: "prof-amos-njuguna",
        image: t2,
        publication: "https://scholar.google.com/citations?user=1avbk3UAAAAJ&hl=en&oi=ao",
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
        name: "Prof. Peter Kiriri",
        slug: "prof-peter-kiriri",
        image: t3,
        role: "Professor of Marketing",
        description: [
            "Professor Peter Kiriri, a distinguished Doctor of Business Administration with a bias in leadership and organizational change management, is a seasoned academic and corporate trainer with over 20 years of experience.",
            "Currently serving as a Professor of Marketing at United States International University - Africa, he has facilitated leadership development programs for prominent organizations such as Britam, the Association of Insurance Brokers, Kenya Post Office Savings Bank, and the Central Bank of Kenya’s Kenya School of Monetary Studies, the Insurance Regulatory Authority, and the Retirement Benefits Authority.",
            "His extensive expertise in leadership training and organizational transformation underscores his significant contribution to both academia and industry, equipping professionals with vital skills for effective leadership and change management."
        ]
    },
    {
        id: 5,
        name: "Amb. Prof. Ruthie Rono",
        slug: "amb-prof-ruthie-rono",
        image: t5,
        role: "Professor of Psychology",
        description: [
            "Amb. Prof Ruthie Chepkoech Rono is currently a Professor of Psychology. She is the immediate former Deputy Vice Chancellor for Academic and Student Affairs and Professor of Psychology at the United States International University, Africa. She served as the Kenya High Commissioner to Zambia, Malawi and Permanent Representative to the Common Market to Eastern and Southern Africa (COMESA). She also served as Kenya’s Ambassador Plenipotentiary and Extraordinary to The Kingdom of the Netherlands in The Hague with concurrent accreditation to The Czech Republic. She was also concurrently Kenya’s Permanent Representative to The Organization for the Prohibition of Chemical Weapons (OPCW) and Governor to the Common Fund for Commodities (CFC) based in the Netherlands.",
            "Prof. Rono is an accomplished academician and diplomat who has a wealth of skills and experience as a diplomat, psychologist, educationist, researcher, author and administrator having previously served as an ambassador and high commissioner, Coordinator of Psychology Program, Associate Dean & Dean of the School of Arts & Sciences at the United States International University - Africa (USIU - A), Kenya.",
            "Prof. Rono served as Assistant Lecturer, Lecturer and Senior Lecturer at Kenyatta University. Prof. Rono has written and published widely for various audiences. She has authored and co-authored published books in various aspects of psychology and gender and contributed significantly in several published works, including contributions to renowned international journals such as Cross-Cultural Psychology, the World Psychiatry Journal and the Journal of Traumatology, editor and co-author of the African Textbook of Clinical Psychiatry and Mental Health, among others.",
            "Prof. Rono is the recipient of “The Outstanding African Ambassador Award 2012” presented by the Voice Magazine, Netherlands 2012 Achiever’s Award. She is also the recipient of a Role Model Award from Kericho County, “The Certificate of Recognition as a Woman of Exemplary Achievement” given by the Kericho Family Support Network. Prof. Rono was recognized as one of the Outstanding Kenyans, and decorated by the Head of State, receiving the “The Head of State Commendation (HSC)” given by His Excellency President Mwai Kibaki.",
            "Prof. Rono served as a member in the Dedan Kimathi University of Technology University Council. She served as a member of the Kenya Highlands University Seminary Taskforce. Prof. Rono currently serves as a member of the Board of Trustees for Kenya Highlands University, a member of the Advisory Board of KHU Seminary as well as a member of the Board of Trustees of AENI.",
            "Prof. Rono holds BA, MA & PhD in Educational Psychology."
        ]
    },
    {
        id: 6,
        name: "Amb. Dr. Josephine Ojiambo",
        slug: "amb-dr-josephine-ojiambo",
        image: t6,
        role: "Expert in Diplomacy, Strategy, Wellbing, Climate",
        description: [
            "Amb. Dr. Josephine Ojiambo is a Research associate at the Faculty of Science and Technology College, at Chiromo campus, University of Nairobi and an Adjunct lecturer at the School of Public Health, Kenyatta University. She is a resource person at the Foreign Service Academy, Kenya. Amb Ojiambo is Vice Chairperson of the Board of Bingwa-Social Entrepreneur, a digital platform that connects skilled youth to job opportunities in vocational fields (bingwa.ke). She is an associate of the Global Centre for Policy and Strategy (GLOCEPS), a think tank based in Nairobi. She is the Honorary President of the Commonwealth Business Women’s Network Kenya and Special advisor to the CBWN international. Additionally, she is an advisor to Ignite-her Africa, a platform that affirms women in their industrial circles of influence.",
            "She serves as the Rotary International representative to UNICEF and the UN office in Nairobi, where she has carried out projects on The Green transition, the safe return to schools and on Covid 19 education on multimedia platforms during the Pandemic. She is a member of the Rotary Emergency Response Committee, where she serves as the Rotary liaison to the National Business Compact Committee on COVID-19 (NBCCC) - a committee situated at the second tier of the Government’s National Emergency Response Committee. Here, Amb. Dr. Ojiambo’s tasks largely focus on water, sanitation and hygiene.",
            "Dr Ojiambo is a member of the Resource Development Committee of the Aga Khan University teaching hospital. She contributes to the development of projects and of an endowment fund for the Teaching hospital. Ambassador Dr. Josephine Ojiambo is an advocate of democracy, good governance and sustainable development. She is the Founding Director of the Peter Ojiambo Foundation: a charity that empowers Young people with technology, enterprise and leadership with a special focus on disabilities.",
            "Josephine is a champion of Global Partnerships in the implementation of the Sustainable Development Goals with a strong emphasis on vulnerability, including ensuring gender equality and reproductive health and rights, refugee, migrant and child rights. She is a strategic advisor on fundraising and partnership development to the National Council of Kenya on Non-communicable diseases and the African Population and Health Research Center. Ambassador Dr. Josephine Ojiambo has a distinguished public and diplomatic service career with deep engagement in a range of significant national, African and global issues. Josephine is a Former Ambassador and Deputy Permanent Representative of Kenya to the United Nations in New York and Immediate Past Deputy Secretary General of the Commonwealth of Nations."
        ],
        contact: {
            phone: "+254 799 744 560",
            email: "drojiambo@gmail.com"
        }
    },
    {
        id: 8,
        name: "Dr. Leah Mutanu Mwaura",
        slug: "dr-leah-mutanu-mwaura",
        image: t8,
        role: "Full-Time Faculty United States International University-Africa",
        expertise: [
            "Software Engineering",
            "Artificial Intelligence",
            "Data Analytics",
        ],
        description: [
            "Dr. Leah Mutanu Mwaura is a distinguished scholar and full-time faculty member at USIU-Africa's Department of Computing and Informatics. With over 15 years of experience in academia, she brings a deep commitment to teaching, research, and mentorship, anchored in AI-driven solutions for societal impact, autonomous computing architectures, and advanced data analytics.",
            "She holds a Ph.D. in Computer Science from Lancaster University, UK, where her doctoral research focused on service-oriented applications and runtime adaptation, laying the foundation for her pioneering work in Autonomous Computing and Artificial Intelligence for development. She also holds advanced degrees in Information Systems and Education from the University of Nairobi and Egerton University, respectively.",
            "Dr. Mwaura teaches Software Development and Artificial Intelligence across undergraduate and graduate programs and supervises student research in machine learning, systems design, and applied computing. Her academic contributions extend beyond the classroom through active engagement in policy development and knowledge-sharing initiatives that shape Kenya's digital future.",
            "Her research portfolio reflects a strategic focus on AI for development, including Early Warning Systems for infectious diseases, resource-efficient computing frameworks, and IoT-powered health solutions. These innovations have secured national research funding and led to high-impact publications in top-tier journals, global conferences, and edited academic volumes.",
            "As a member of the Association for Computing Machinery (ACM), Dr. Mwaura champions ethical technology education, contributing to curriculum design and digital literacy initiatives at both institutional and national levels. Her work seamlessly integrates cutting-edge AI research with practical application, influencing academic thought, technology governance, and public policy.",
        ],
        qualifications: [
            "PhD in Information Systems, University of South Africa, Pretoria, South Africa",
            "Master of Science in Information Technology (Information Systems Security and Audit), Strathmore University, Nairobi, Kenya.",
            "Bachelor of Science in Applied Computer Science, Daystar University, Nairobi, Kenya.",
            "Graduate Certificate in Instructional Design and Performance Improvement, Arizona States University"
        ]
    },
    {
        id: 9,
        name: "Dr. Stanley M. Githinji.",
        slug: "dr-stanley-m-githinji",
        image: t9,
        role: "Assistant Professor of Information Systems - Security.",
        expertise: [
            "Information Security,",
            "Cryptography",
            "Forensics",
            "Electronic Security",
            "Distributed Systems",
        ],
        description: [
            "Dr. Stanley Githinji is Assistant Professor of Information Systems. He has vast experience in Information Security, research and consultancy, and educational development. He previously worked at Kenya Methodist University as Head of Computer Science department, ESRI as a Support Engineer and as a Database Developer in implementation of school mapping program, Institute of Policy analysis and Research (IPAR) as a Head of IT department and serves as a board member at Applied Information Technology Research Center (AITREC).",
            "Dr. Stanley has vast knowledge and experience in Applied Cryptography, Computer Forensics, Enterprise Risk Management of Information Systems, Information Security Audit, IT Governance and implementation of ISO 27001 standards. His research, teaching, and interests are in the area of applied cryptography, Information Security, Distributed Systems and Integration of InfoSec Solutions. Stanley has consulted widely and trained professionals in Information Technology and Cybersecurity, both in the private and public sector.",
        ],
        courses: [
           "ISC 6110: Network Security and Management",
           "ISC 6220: Advanced Cryptography",
           "ISC 6310: Digital Forensics",
           "APT 4900: Information Technology Project",
           "APT 3090: Cryptography and network Security",
           "FIC 4010: Introduction to Information Security",
           "FIC 4030: Information Security and Audit",
           "DST 4010: Distributed Systems" 
        ]
    },
    {
        id: 10,
        name: "Dr. Edward Ombui",
        slug: "dr-edward-ombui",
        image: t10,
        publication: "https://scholar.google.com/citations?user=aWOCFdIAAAAJ&hl=en",
        role: "Assistant Professor of Artificial Intelligence at USIU-Africa",
        expertise: [
            "Artificial Intelligence",
            "Natural Language Processing",
            "Machine Learning",
            "Big Data"
        ],
        description: [
            "Dr. Ombui's primary research interests lie in Natural Language Processing (NLP), particularly in the classification and computational understanding of language within multilingual environments. He has published extensively on hate speech classification, codeswitched text processing, and the development of corpora tailored for Kenyan languages. His work is notable for its grounding in both academic rigor and real-world impact, especially in addressing issues like online toxicity and linguistic representation in computational systems.",
            "One of the core areas of his research is the computational processing of African languages, with a focus on indigenous languages such as Swahili, Dholuo, and Luhya. Recognizing the scarcity of digital resources and tools for these languages, Dr. Ombui has made significant contributions toward creating linguistic datasets and NLP models that support and preserve local linguistic diversity. His research helps ensure that African languages are not left behind in the global AI revolution.",
            "Dr. Ombui is also active in the broader field of machine learning and deep learning, applying these technologies to various NLP tasks, including machine translation, question answering, and transcription in multilingual communities. His work often intersects with the social dimensions of technology, exploring how AI can be used to empower marginalized voices and support inclusive development.",
            "Among his most prominent projects is Kencorpus, a landmark initiative that collected and stored both text and speech data in Swahili, Dholuo, and Luhya. This resource serves as a foundational dataset for machine learning tasks involving Kenyan languages and supports further research in language modeling and speech recognition. Another key contribution is his work in hate speech classification, where he has focused on identifying harmful content within codeswitched social media texts—an important challenge in multilingual African online spaces.",
            "Through these efforts, Dr. Edward Ombui continues to shape the future of AI in Africa, contributing not only to technological advancement but also to linguistic equity and cultural preservation. His work exemplifies how artificial intelligence can be made more inclusive, local, and socially relevant",
        ],
    },
    {
        id: 11,
        name: "Muthoni Muchai",
        slug: "muthoni-muchai",
        image: t11,
        role: "Strategic Marketing Leader | Executive Coach | Business Faculty | Founder, Tilvera Consulting & The Boardroom of Life",
        description: [
            "Muthoni Muchai is a powerhouse in strategic marketing and branding architecture, executive coaching, and leadership development. With over 15 years of experience across African markets, she is known for driving growth, sparking transformation, and equipping professionals to lead with authenticity and boldness.",
            "As the Founder of Tilvera Consulting and The Boardroom of Life, Muthoni has worked with global brands, healthcare institutions, startups, MSMEs, and C-suite leaders to align strategy, purpose, and performance. Her coaching practice is focused on career clarity, personal branding, executive presence, and entrepreneurial acceleration, delivering real results with lasting impact.",
            "As a respected educator in marketing strategy, brand building and business development, Muthoni is passionate about turning complex theory into practical tools for today’s dynamic business environment. She is passionate about bridging the gap between theory and high-performance practice. Her approach combines her experience as a Pan-African industry practitioner, business intelligence, deep personal insight, and cultural relevance, making her a relatable, dynamic, and thought-provoking speaker.",
            "Currently pursuing a Doctorate in Business Administration, her research explores the role of social media in healthcare decision-making, blending her passion for digital innovation and social impact.",
            "Muthoni Muchai is known for her ability to facilitate practical, thought-provoking sessions that drive meaningful transformation. With a style that is both engaging and results-oriented, she creates space for professionals, entrepreneurs, and leadership teams to reflect deeply, challenge assumptions, and walk away with clear, sometimes unorthodox, actionable strategies for growth and leadership.",
            "With Muthoni, transformation isn’t just a goal; it’s a journey toward living authentically and leading audaciously."
        ],
    },
    {
        id: 12,
        name: "Dr. Joshua Rumo Arongo Ndiege",
        slug: "dr-joshua-rumo-arongo-ndiege",
        image: t12,
        role: "Assistant Professor, Information Systems",
        description: [
            "Dr. Joshua Ndiege brings to the executive programs a wealth of practical experience and academic insight at the intersection of digital transformation, policy advisory, and ICT4D. He has served as a consultant for the Information and Communications Technology Authority (ICTA), where he developed key technical documents for the Kenya Digital Economy Acceleration Project (KDEAP), and as an academic advisor to the Council of Governors’ Maarifa Centre, supporting knowledge management strategies across Kenya’s county governments.",
            "He also initiated and currently leads an SME Digitization Program, which has enabled over 15 small enterprises to adopt e-commerce, digital payments, and remote work tools. With a strong track record in training senior professionals and designing digital strategies for SMEs and public institutions, Dr. Ndiege is well-positioned to help participants in executive programs translate emerging technologies into effective leadership and innovation within their organizations.",
            "He has contributed extensively to scholarly literature, authoring and co-authoring numerous peer-reviewed journal articles and conference papers. In addition to his research, Dr. Ndiege actively participates in the academic community as a reviewer for prominent journals like the South African Journal of Information Management and the African Journal of Information Systems. He also serves on the International Program Committees of various international conferences.",
            "Dr. Ndiege has supervised many postgraduate students and serves as an external examiner for master’s and doctoral programs across universities in Kenya and South Africa. His commitment to academic governance is evident through his involvement in several university committees, including the Senate, Educational Effectiveness Committee, and Academic Standards Committee.",
            "He holds a PhD in Information Systems, a Master of Commerce in Information Systems, a Master’s in e-Commerce, and a Bachelor of Commerce degree, underscoring his strong academic foundation and dedication to advancing the field of Information Systems."
        ],
        publication: "https://scholar.google.com/citations?user=Gwl8avUAAAAJ&hl=en",
    },
];

export default function Teams() {
    const navigate = useNavigate();
    const autoplay = useRef(Autoplay({ delay: 5000 }));

    const isXs = useMediaQuery('(max-width: 36em)');
    const isSm = useMediaQuery('(max-width: 48em)');

    const slidesToScroll = isXs ? 1 : isSm ? 2 : 3;

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
                        directly to USIU-Africa's reputation of excellence.
                    </Text>
                </Stack>
            </Reveal>

            <Carousel
                slideSize={{ base: "100%", sm: "50%", md: "33.3%", lg: "25%" }}
                plugins={[autoplay.current]}
                slideGap={{ base: "sm", sm: "md", md: "lg" }}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={() => autoplay.current.play()}
                withIndicators={true}
                withControls={false}
                emblaOptions={{
                    loop: true,
                    align: 'start', 
                    slidesToScroll,
                }}
                styles={{
                    indicator: {
                        backgroundColor: "var(--mantine-color-dark-8)"
                    }
                }}
            >
                {teamsData.map(team => (
                    <Carousel.Slide key={team.id} py="sm">
                        <Card className={styles.teams__card} shadow="sm" p="lg">
                            <Card.Section p="xl">
                                <Stack align="center">
                                    <div className={styles.teams__user}>
                                        <Avatar size={80} color="white" src={team.image} alt={team.name}>
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
                                    <Title fw={600} ta="center" order={5} c="gray.8">
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

                                {/* <Group justify="center" align="center">
                                    <FaFacebook color="gray" />
                                    <FaInstagram color="gray" />
                                    <FaLinkedin color="gray" />
                                </Group> */}
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
