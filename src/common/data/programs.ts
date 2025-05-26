import p1 from "@/assets/programs/1.jpg";
import p2 from "@/assets/programs/2.jpg";
import p3 from "@/assets/programs/3.jpg";
import p4 from "@/assets/programs/4.jpg";
import p5 from "@/assets/programs/12.jpg";
import p6 from "@/assets/programs/6.jpg";
import p7 from "@/assets/programs/7.jpg";
import p8 from "@/assets/programs/8.jpg";
import p9 from "@/assets/programs/9.jpg";
import p10 from "@/assets/programs/10.jpg";

interface Program {
    id: number;
    name: string;
    slug: string;
    image: string;
    courses: {
        id: string | number;
        name: string;
        slug: string;
        description: string;
        image: string;
        duration?: string;
        amount?: number;
    }[];
    description: string;
}

export const programs:Program[] = [
    {
        id: 1,
        name: "Open Executive Short Programs.",
        slug: "open-executive-short-programs",
        description: "Fast-paced courses (2-5 days) for leaders who need immediate impact. Tackle key areas like data-driven decision-making, customer experience, and new manager skills with hands-on, expert-led sessions.",
        image: p1,
        courses: [
            {
                id: 1,
                name : "Business Analytics for Executives Program - (BAEP)",
                slug: "business-analytics-for-executives-program-baep",
                description: "The Business Analytics for Executives Program (BAEP) is tailored to empower leaders with the skills to harness data-driven strategies, enabling informed decision-making and a competitive edge in today’s fast-paced market. By integrating internal and external data sources, participants will learn to foster innovation, optimize business processes, and enhance productivity, ultimately allowing organizations to reinvent their products and better respond to evolving market demands.",
                image: p2,
                duration: "27th - 31st October 2025",
                amount: 45_000
            },
            {
                id: 2,
                name : "Client Experience Excellence Program - (CEEP)",
                slug: "client-experience-excellence-program-ceep",
                description: "The Client Experience Excellence Program (CEEP) at USIU Africa is designed to go beyond traditional training by enabling executives to implement innovative strategies that truly transform customer interactions and foster deep loyalty. Focusing on practical application and leadership, CEEP is designed to help executives turn satisfied customers into passionate advocates, driving organizational success through a superior and memorable client experience.",
                image: p4,
                duration: "15th - 17th October 2025",
            },
            {
                id: 3,
                name : "New Manager Development Program - (NMDP)",
                slug: "new-manager-development-program-nmdp",
                description: "The New Manager Development Program aims to equip new managers with a solid understanding of business processes, management principles, and essential skills, helping them grasp how core functions interrelate and enhancing their ability to lead effectively within their organizations.",
                image: p5,
                duration: "1st - 5th September 2025",
                amount: 55_000
            },
        ]
    },
    {
        id: 2,
        name: "Open Executive Modular Programs.",
        slug: "open-executive-modular-programs",
        description: "Build leadership skills over time with flexible modules focused on strategy, governance, and institutional excellence—ideal for higher education leaders and managers seeking long-term growth.",
        image: p8,
        courses: [
            {
                id: 1,
                name: "Developing Emerging Leaders in Higher Learning Institutions - (DEL-HLIP)",
                slug: "developing-emerging-leaders-in-higher-learning-institutions-del-hlip",
                description: "Developing Emerging Leaders in Higher Learning Institutions program aims at preparing the next set of higher education managers and administrators towards effectiveness, resilience, accountability and courageous management and leadership while instilling the urge to drive their institutions path towards success.",
                image: p6,
                duration: "20th April, 2025"
            },
            {
                id: 2,
                name: "Effective Management Development Program (EMDP)",
                slug: "effective-management-development-program-emd",
                description: "The primary aim of the Effective Management Development Program is to enhance the effectiveness of the manager through the impartation of managerial skills and competencies, building leadership capabilities, and preparing managers for future strategic leadership roles, ultimately contributing to improved organisational performance and effectiveness.",
                image: p7,
                duration: "11th August, 2025",
                amount: 360_000,
            },
            {
                id: 3,
                name: "Executive Leadership Development Program for Higher Learning Institutions Leaders (ELDP-HLIL)",
                slug: "executive-leadership-development-program-for-higher-learning-institutions-leaders-eldp-hlil",
                description: "The Executive Leadership Development Program for Higher Learning Institutions (ELDP-HLI) at USIU Africa is designed to equip senior leaders of colleges and universities worldwide, public and private, with essential skills and strategies to effectively navigate the unique challenges of higher education management, foster innovative leadership, enhance institutional governance, and promote sustainable growth in a rapidly evolving global academic landscape.",
                image: p9,
                duration: "28th July, 2026",
                amount: 530_000,
            },
            {
                id: 4,
                name: "Senior Leadership Development Program (SLDP): For Higher Learning Insitutions Leaders",
                slug: "senior-leadership-development-program-sldp-for-higher-learning-insitutions-leaders",
                description: "Executive Leadership Development Program (SLDP): For Higher Learning Institutions Leaders at USIU Africa aims at developing the next set of College Principals, University DVCs and VCs for higher learning institutions. The program aims to develop a wide range of skills that senior executives in higher learning institutions will need to meet the challenges of today's educational environment and serve the students.",
                image: p10,
            }
        ],
    },
    {
        id: 3,
        name: "Organizational Custom Solutions.",
        slug: "organizational-custom-solutions",
        description: "Tailored programs co-designed with your organization to solve real challenges—whether it’s leadership development, cultural transformation, or team-wide upskilling.",
        image: p3,
        courses: [],
    },
]