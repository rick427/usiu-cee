import p1 from "@/assets/programs/1.jpg";
import p2 from "@/assets/programs/2.jpg";
import p3 from "@/assets/programs/3.jpg";
import p4 from "@/assets/programs/4.jpg";
import p6 from "@/assets/programs/6.jpg";
import p7 from "@/assets/programs/7.jpg";
import p8 from "@/assets/programs/8.jpg";
import p9 from "@/assets/programs/9.jpg";
import p10 from "@/assets/programs/10.jpg";
import p12 from "@/assets/programs/12.jpg";

interface CourseTabContent {
    about: string[];
    aim: string;
    target: string[];
    outcome: {
        meta?: string;
        title?: string;
        data: string[];
    }[];
    delivery: string[];
    contents: string[] | {
        title: string;
        data: string[];
    }[];
    admissions: string[];
    coaching: string[] | null;
    international: string[];
    certification: string[] | null;
}

interface Program {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    courses: {
        id: string | number;
        name: string;
        slug: string;
        description: string;
        image: string;
        duration?: string;
        amount?: number;
        tabs?: CourseTabContent;
    }[];
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
                slug: "business-analytics-for-executives-program-(BAEP)",
                description: "The Business Analytics for Executives Program (BAEP) is tailored to empower leaders with the skills to harness data-driven strategies, enabling informed decision-making and a competitive edge in today's fast-paced market. By integrating internal and external data sources, participants will learn to foster innovation, optimize business processes, and enhance productivity, ultimately allowing organizations to reinvent their products and better respond to evolving market demands.",
                image: p2,
                duration: "27th - 31st October 2025",
                amount: 45_000,
                tabs: {
                    about: [
                        "The Business Analytics for Executives Program (BAEP) is tailored to empower leaders with the skills to harness data-driven strategies, enabling informed decision-making and a competitive edge in today's fast-paced market. By integrating internal and external data sources, participants will learn to foster innovation, optimize business processes, and enhance productivity, ultimately allowing organizations to reinvent their products and better respond to evolving market demands.",
                    ],
                    aim: "This course aims to elevate executive capabilities in leveraging analytics for organizational success and sustained growth.",
                    target: [
                        "C-Suite Executives",
                        "Senior Managers",
                        "Decision Makers",
                        "Business Owners",
                    ],
                    outcome: [
                        {
                            title: "To the professional",
                            data: [
                                "You will gain professional experience to enable you to make data-driven decisions that impact organizational success",
                                "You will develop critical skills for enhanced risk management. By understanding the potential risks associated with various business decisions, executives will be able to mitigate these risks and protect their organizations",
                                "You will understand how to gain insights from complex datasets",
                                "Using analytics to enhance operational efficiency and streamline workflows",
                                "Developing the leadership mindset necessary to drive analytics initiatives within your organization.",
                                "Applying Artificial Intelligence tools to enhance decision making processes.",
                            ]
                        },
                        {
                            title: "To the Organization",
                            data: [
                                "Market Competitive advantage: Your organization will absolutely benefit by leveraging data analytics to get critical insights into customer behaviour, market trends, and operational efficiencies, enabling them to make informed decisions, optimize strategies, and stay ahead of competitors in today&#39;s fast-paced, data-driven marketplace.",
                                "Improved Organizational Performance-Leveraging data enables executives to make informed decisions that streamline operations, cut unnecessary expenses, and enhance customer experiences, ultimately boosting organizational performance and competitiveness.",
                            ]
                        }
                    ],
                    delivery: [
                        "The program is delivered in 3 days on campus. The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience.",
                    ],
                    contents: [],
                    coaching: null,
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.",
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education.",
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully.",
                    ],
                    certification: [
                        "We will issue certificates on the Business Analytics for Executives Program-(BAEP); however, for those who are interested in getting the title Certified Business Analyst Foundation (CBAF) will be required to take a multiple-choice application exam at a separate cost of US$220.", 
                        "The certification is offered by an American Certifying body in conjunction with United States International University.",
                    ],
                },
            },
            {
                id: 2,
                name : "Client Experience Excellence Program - (CEEP)",
                slug: "client-experience-excellence-program-(CEEP)",
                description: "The Client Experience Excellence Program (CEEP) at USIU Africa is designed to go beyond traditional training by enabling executives to implement innovative strategies that truly transform customer interactions and foster deep loyalty. Focusing on practical application and leadership, CEEP is designed to help executives turn satisfied customers into passionate advocates, driving organizational success through a superior and memorable client experience.",
                image: p4,
                duration: "15th - 17th October 2025",
                tabs: {
                    about: [
                        "The Client Experience Excellence Program (CEEP) at USIU Africa is designed to go beyond traditional training by enabling executives to implement innovative strategies that truly transform customer interactions and foster deep loyalty. Focusing on practical application and leadership, CEEP is designed to help executives turn satisfied customers into passionate advocates, driving organizational success through a superior and memorable client experience."
                    ],
                    aim: "",
                    target: [
                        "C-Suite executives &amp; Business Level Executives (Directors, Vice Presidents, General Managers).",
                        "Functional level executives (Customer Service Managers &amp; Practitioners, Marketers, Sales professionals, Business Developers, and Human Resources Practitioners).",
                        "Entrepreneurs &amp; Business Owners",
                    ],
                    outcome: [],
                    delivery: [],
                    contents: [
                        "The Psychology of Customers: To deliver exceptional customer experiences, employees must have insight into the customer mindset. Understanding of the Customer Service Trinity and the Head, Heart and Hand model introduces the employees to the “Why” of customer excellence.",
                        "Customer Experience Journey Mapping: Attendees map their organization&#39;s customer experience journey, focusing on TEA: Touchpoints, Emotions, and Action points.",
                        "The Human-Process-Human Principle: This emphasizes on the human touch in customer interactions, using primacy and recency laws; discuss small touches for memorable visits, minimizing complaints, and enhancing experiences.",
                        "Focus on Self-care: Undoubtedly, the responsibility of catering to customers can be emotionally taxing, highlighting the crucial need for employees to prioritize their mental well-being. This program delves into positive intelligence, equipping attendees with valuable tools to navigate stress and handle challenging situations. Our course empowers individuals to manage these pressures effectively, ensuring they don&#39;t become mentally drained in the process.",
                        "Focus on Experience, not just Service: The course focuses on shifting the mindset from delivering service to orchestrating exceptional customer experiences. This involves understanding the emotional journey beyond transactions, building genuine connections, and fostering brand loyalty.",
                        "Innovation and Future-proofing: The course delves into emerging trends and the future. It discusses how customer service is evolving with new technologies and changing customer expectations, preparing executives for the future of customer interactions.",
                    ],
                    coaching: null,
                    admissions: [],
                    international: [],
                    certification: [
                        "We will issue certificates on the Client Experience Excellence Program (CEEP); however, for those who are interested in getting the title Certified Customer Service Professional (CCSP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                        "The certification is offered by an American Certifying body in conjunction with United States International University."
                    ],
                },
            },
            {
                id: 3,
                name : "New Manager Development Program - (NMDP)",
                slug: "new-manager-development-program-(NMPD)",
                description: "The New Manager Development Program aims to equip new managers with a solid understanding of business processes, management principles, and essential skills, helping them grasp how core functions interrelate and enhancing their ability to lead effectively within their organizations.",
                image: p12,
                duration: "1st - 5th September 2025",
                amount: 55_000,
                tabs: {
                    about: [
                        "Absolutely, stepping into a managerial role is both an exciting and demanding milestone that requires thorough preparation to navigate new responsibilities effectively; developing leadership skills, understanding organizational dynamics, and fostering strong communication are essential for adapting successfully and driving team success.",
                        "The New Manager Development Program (NMDP) at the Centre for Executive Education in USIU-Africa plays a vital role in preparing new managers by providing essential skills, knowledge, and confidence to lead teams effectively, thereby enhancing organizational performance and fostering strong leadership capabilities.",
                        "This training program is designed to equip new managers with essential leadership skills, enabling them to effectively guide teams toward achieving organizational goals, manage budgets efficiently, monitor and improve performance, and foster clear, open communication to ensure a cohesive and productive work environment.",
                    ],
                    aim: "The New Manager Development Program aims to equip new managers with a solid understanding of business processes, management principles, and essential skills, helping them grasp how core functions interrelate and enhancing their ability to lead effectively within their organizations.",
                    target: [
                        "This program is suitable for new managers who have just assumed the role, people who are aspiring to be managers soon and people who have been in management roles for between 0 years and 2years."
                    ],
                    outcome: [
                        {
                            title: "To the Executive Professional",
                            data: [
                                "Increased manager effectiveness in delivery: It equips you with the right skills and hands-on knowledge to deliver successfully.",
                                "Increased employee engagement: It helps creating and promoting a positive and supportive work environment.",
                                "Alignment with organizational goals: It helps you to better understand and align yourself with the vision of the organization hence making you a better employee."
                            ]
                        },
                        {
                            title: "To the Organization",
                            data: [
                                "Increased Productivity &amp; Performance: The training will lead to fostering effective communication, collaboration, and shared goals within a team which enhances synergy, in turn improving overall outcomes and organizational results by leveraging diverse skills and perspectives to achieve common objectives more efficiently.",
                                "Increased employee retention: -Implementing effective talent development and succession planning strategies helps the organization retain top talent, foster employee engagement, and build a robust leadership pipeline to ensure long-term organizational success.",
                                "Stronger Organizational Culture: It helps to promote the culture of continuous learning and development."
                            ]
                        }
                    ],
                    delivery: [
                        "The one-week training program offers a dynamic blend of face-to-face and virtual sessions, providing participants with a comprehensive learning experience. Led by experienced industry experts and knowledgeable faculty, the program employs diverse teaching methods such as case studies, structured learning materials, video sessions, simulations, role plays, and group discussions to enhance engagement and practical understanding. This multifaceted approach aims to equip participants with relevant skills and insights through interactive and immersive learning techniques.",
                    ],
                    contents: [
                        "The Shift: From specialist to Manager and leader",
                        "Understanding the difference between Leadership and Management",
                        "Understanding the Financial Environment in Business",
                        "Aligning with organisational strategy",
                        "Communication in Leadership and Management",
                        "High-Performing Team Leadership and Management",
                        "Conflict Management and Resolution",
                        "Making Informed decisions during a crisis",
                        "Collaboration and Delegation",
                        "Receiving, analysing and interpreting feedback"
                    ],
                    coaching: null,
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.", 
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education.",
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully."
                    ],
                    certification: [
                        "We will issue certificates on the New Manager Development Program (NMDP); however, for those who are interested in getting the title Certified Team Leader (CTL) will be required to take a multiple-choice application exam at a separate cost of US$250.", 
                        "The certification is offered by an American Certifying body in conjunction with United States International University.",
                    ],
                }
            },
        ]
    },

    {
        id: 2,
        name: "Open Executive Modular Programs.",
        slug: "open-executive-modular-programs",
        description: "Build leadership skills over time with more flexible modules focused on strategy, governance, and institutional excellence ideal for higher education leaders and managers seeking long-term growth. Check out our courses for more details.",
        image: p8,
        courses: [
            {
                id: 1,
                name: "Developing Emerging Leaders in Higher Learning Institutions - (DEL-HLIP)",
                slug: "developing-emerging-leaders-in-higher-learning-institutions-(DEL-HLIP)",
                description: "Developing Emerging Leaders in Higher Learning Institutions program aims at preparing the next set of higher education managers and administrators towards effectiveness, resilience, accountability and courageous management and leadership while instilling the urge to drive their institutions path towards success.",
                image: p6,
                duration: "20th April, 2025",
                tabs: {
                    about: [
                        "The USIU Africa DEL-HLIP program aims to equip academic and administrative professionals in higher education with the skills, mindset, and networks needed to effectively lead university initiatives as well as prepare them for transition into senior leadership roles. By focusing on understanding the diverse responsibilities within higher learning institutions, the program fosters professional growth, enhances leadership capabilities, and provides participants with valuable connections and support to advance their careers both in academia and administrative roles in institutions of higher learning across the world."
                    ],
                    aim: "Developing Emerging Leaders in Higher Learning Institutions program aims at preparing the next set of higher education managers and administrators towards effectiveness, resilience, accountability and courageous management and leadership while instilling the urge to drive their institutions' path towards success.",
                    target: [
                        "Academic, administrative and managerial professionals in higher learning institutions who are exploring opportunities to advance to higher-level administrative positions.",
                        "Newly appointed academicians, managers and administrators looking to sharpen their leadership skills and mindset."
                    ],
                    outcome: [
                        {
                            title: "To the Professional",
                            data: [
                                "You will gain professional as well as personal growth through a comprehensive understanding of the various aspects of the higher learning institution management and how they relate to each other.",
                                "You will develop critical skills for managing complex projects and leading institutional positive change towards growth.",
                                "You will get the correct tools, which will help you to step into leadership roles in higher learning institutions.",
                                "You will get a broader and possibly global network. You will build a strong and supportive network of peers and mentors.",
                                "Through your coach&#39;s guidance, you will demonstrate your leadership skills by leading your own chosen project or initiative within your workplace from start to end.",
                            ]
                        },
                        {
                            title: "To the Organization",
                            data: [
                                "Your organization will get increased productivity &amp; performance due to better team synergy, outcomes and organizational results derived from the leadership course.",
                                "Your organization will have increased employee retention, which will help talent growth while building a strong leadership pipeline.",
                                "Your organization will have stronger employee motivational and skill growth culture promoted by the culture of continuous learning and development.",
                            ]
                        }
                    ],
                    delivery: [
                        "The program spans four modules over eight months, with each module lasting five days and incorporating a blend of three days on campus and two days online/Zoom. One module is delivered internationally through partner institutions in South Africa, Europe, or the USA, providing a global learning experience, while the other three modules are conducted at USIU Africa Campus, offering a balanced mix of local and international engagement.",
                        "The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience. The inclusion of coaching from seasoned professionals further personalizes the training, helping participants apply concepts effectively and develop their skills in real-world scenarios."
                    ],
                    contents: [
                        "Module 1: Self-awareness: Understanding your capabilities in Management and Leadership",
                        "Module 2: Environment Awareness: Understanding Higher Education Systems",
                        "Module 3: Developing Management and Leadership skills for higher learning (International)",
                        "Module 4: Strategic thinking towards the future of higher learning"
                    ],
                    coaching: [
                        "Participants will spearhead a strategic project within their organization during the program, guided by a designated Coach to ensure successful implementation and growth. The project is designed to generate meaningful organizational impact while supporting the participant’s professional development goals, fostering leadership skills and aligning personal aspirations with organizational priorities."
                    ],
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.", 
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education.",
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully."
                    ],
                    certification: null
                }
            },
            {
                id: 2,
                name: "Effective Management Development Program (EMDP)",
                slug: "effective-management-development-program-(EMDP)",
                description: "The primary aim of the Effective Management Development Program is to enhance the effectiveness of the manager through the impartation of managerial skills and competencies, building leadership capabilities, and preparing managers for future strategic leadership roles, ultimately contributing to improved organisational performance and effectiveness.",
                image: p7,
                duration: "11th August, 2025",
                amount: 360_000,
                tabs: {
                    about: [
                        "Globally, there is a vast number of challenges that mid-level managers face during their day-to-day engagements in their workplace, including effective strategies implementation, managing conflicting expectations, and ensuring optimal team engagement, all while often lacking the necessary skills, resources and support.",
                        "The Effective Management &amp; Leadership Development Program (EMLDP) at the Center for Executive Education is meant to give solutions to the said challenges for mid-level management, and it empowers you to take charge of your future as a manager.",
                        "It teaches you how to inspire productive and meaningful change within your organisation gives you the best skills on how to lead the implementation of the organisational strategic plan as a manager. By the end of this program, you will have the skills, knowledge, and confidence to enter into a new strategic level of leadership.",
                    ],
                    aim: "The primary aim of the Effective Management Development Program is to enhance the effectiveness of the manager through the impartation of managerial skills and competencies, building leadership capabilities, and preparing managers for future strategic leadership roles, ultimately contributing to improved organisational performance and effectiveness.",
                    target: [
                        "Middle-level managers",
                        "Managers aspiring for higher strategic leadership roles",
                        "Professionals aiming to enhance their skills for future strategic leadership roles"
                    ],
                    outcome: [
                        {
                            meta: "The program offers a positive outcome to both you and your organisation.",
                            title: "Outcomes for your Organization",
                            data: [
                                "Because of your pivotal role between strategy and implementation, the investment you make in cultivating your individual performance, through this program, together with that of the team you lead, will have an impact across the organisation as your influence sets the tone and builds team confidence throughout the organisation for enhanced delivery and success."
                            ]
                        },
                        {
                            title: "Outcomes for you",
                            data: [
                                "Help you adapt your own behaviours. Since you are at the point between executives and the front-line employees, you often confront organisational complexities, misalignment, and change management challenges. This friction can uncover personality triggers that can be hard to manage if you are not taught how to modulate and cope.",
                                "You get an opportunity to network and debate with industry experts from different industries and functional areas from across Kenya and sub-Saharan Africa."
                            ]
                        },
                    ],
                    delivery: [
                        "The program spans four modules over eight months, with each module lasting five days and incorporating a blend of three days on campus and two days online/zoom. One module is delivered internationally through partner institutions in South Africa, Europe, or the USA, providing a global learning experience, while the other three modules are conducted at USIU Africa Campus, offering a balanced mix of local and international engagement.",
                        "The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience. The inclusion of coaching from seasoned professionals further personalizes the training, helping participants apply concepts effectively and develop their skills in real-world scenarios."
                    ],
                    contents: [
                        "Module 1: Understanding the Perspective and Landscape of Business in Crisis. (11th - 15th Aug 2025)",
                        "Module 2: Understanding the art of upward and downward management. (17th - 21st Nov 2025)",
                        "Module 3: Understanding how to manage organisational strategy. (16th - 20th 2026)-International Module-South Africa",
                        "Module 4: Learn how to lead organisational change and inspire high-performing teams. (18th - 22nd May 2026)"
                    ],
                    coaching: [
                        "Participants will spearhead a strategic project within their organization during the program, guided by a designated Coach to ensure successful implementation and growth. The project is designed to generate meaningful organizational impact while supporting the participant’s professional development goals, fostering leadership skills and aligning personal aspirations with organizational priorities.",
                    ],
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.",
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education."
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully.",
                    ],
                    certification: [
                        "We will issue certificates on the Effective Management Development Program (EMDP); however, for those who are interested in getting the title Business Management Professional (BMP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                        "The certification is offered by an American Certifying Body in conjunction with United States International University."
                    ],
                }
            },
            {
                id: 3,
                name: "Executive Leadership Development Program for Higher Learning Institutions Leaders (ELDP-HLIL)",
                slug: "executive-leadership-development-program-for-higher-learning-institutions-leaders-(ELDP-HLIL)",
                description: "The Executive Leadership Development Program for Higher Learning Institutions (ELDP-HLI) at USIU Africa is designed to equip senior leaders of colleges and universities worldwide, public and private, with essential skills and strategies to effectively navigate the unique challenges of higher education management, foster innovative leadership, enhance institutional governance, and promote sustainable growth in a rapidly evolving global academic landscape.",
                image: p9,
                duration: "28th July, 2026",
                amount: 530_000,
                tabs: {
                    about: [
                        "The Executive Leadership Development Program for Higher Learning Institutions (ELDP-HLI) at USIU Africa is designed to equip senior leaders of colleges and universities worldwide, public and private, with essential skills and strategies to effectively navigate the unique challenges of higher education management, foster innovative leadership, enhance institutional governance, and promote sustainable growth in a rapidly evolving global academic landscape."
                    ],
                    aim: "The program aims to make you a better leader in higher learning institution through creation of understanding and awareness of how to sustain an institutional culture of informed decision making from evidence through use of data effectively. It will also help you create a better understanding of the 5 principles of exemplary leadership in higher education institutions i.e. demonstrate the path, inspire a mutual vision, challenge the process, enable others to act, and reassure the future.",
                    target: [
                        "College Principals, Deans, DVCs, and Senior Leaders in the institutions of higher learning."
                    ],
                    outcome: [
                        {
                            title: "To you the Participant",
                            data: [
                                "You will get a better perception and comprehension of the effective change management in higher learning institutions, university finance and budget administration.",
                                "You will better understand how to navigate through the organizational strategic plan, leadership vision, and institutional expectations.",
                                "You will get better adeptness to integrate academic planning with university resources while building trust through effective communication.",
                                "You will get an inspiring mastery of a transformational and ethical leadership in building and maintaining institutional resilience."
                            ]
                        },
                        {
                            title: "To your Organization",
                            data: [
                                "Your organization will get increased productivity &amp; performance due to better leadership outcomes and organizational results derived from the expanded capabilities achieved from the leadership upskilling.",
                                "Your organization will have stronger organizational skill growth culture promoted by the culture of continuous learning and development.",
                            ]
                        }
                    ],
                    delivery: [
                        "The program spans two modules over eight months, with each module lasting five days and incorporating a blend of three days on campus and two days online/zoom. One module is delivered internationally through partner institutions in South Africa, Europe, or the USA, providing a global learning experience, while the other module will be conducted in Kenya at a designated conducive learning environment, offering a balanced mix of local and international engagement.",
                        "The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience. The inclusion of coaching from seasoned professionals further personalizes the training, helping participants apply concepts effectively and develop their skills in real-world scenarios."
                    ],
                    contents: [
                        {
                            title: "Module 1: Higher Learning Institution Processes and Resource Management",
                            data: [
                                "Resource Administration and Integrated Academic Program Planning",
                                "Partnerships for Institutional Success",
                                "Case Analysis: Leadership Challenge Case Studies",
                                "Student success",
                                "Budgeting for success",
                            ]
                        },
                        {
                            title: "Module 2: Developing Holistic Bold Leadership Skills for higher learning institutions",
                            data: [
                                "Your role as the leader in a higher learning institution- Exemplary Leadership",
                                "Navigating uncertainty in higher learning institutions -Leading through crisis",
                                "Case Analysis: Bold and Brave Leadership",
                                "Building and maintaining institutional resilience",
                                "Building trust: Strategic Communication",
                            ]
                        }
                    ],
                    coaching: [
                        "Participants will spearhead a strategic project within their organization during the program, guided by a designated Coach to ensure successful implementation and growth. The project is designed to generate meaningful organizational impact while supporting the participant’s professional development goals, fostering leadership skills and aligning personal aspirations with organizational priorities."
                    ],
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.",
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education."
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully."
                    ],
                    certification: [
                        "We will issue certificates on the Executive Leadership Development Program for Higher Learning Institutions Leaders (ELDP-HLIL); however, for those who are interested in getting the title Certified Business Continuity Professional (CBCP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                        "The certification is offered by an American Certifying body in conjunction with United States International University."
                    ],
                }
            },
            {
                id: 4,
                name: "Senior Leadership Development Program (SLDP): For Higher Learning Insitutions Leaders",
                slug: "senior-leadership-development-program-(SLDP)-for-higher-learning-insitutions-leaders",
                description: "Executive Leadership Development Program (SLDP): For Higher Learning Institutions Leaders at USIU Africa aims at developing the next set of College Principals, University DVCs and VCs for higher learning institutions. The program aims to develop a wide range of skills that senior executives in higher learning institutions will need to meet the challenges of today's educational environment and serve the students.",
                image: p10,
                tabs: {
                    about: [
                        "This Program at USIU Africa is designed to prepare the mid-level and experienced academic Managers, directors and academic professionals for leadership roles in the next levels of DVCs and VCs of Universities and other institutions of higher learning. The program dissects through all major aspects of the higher learning institutions and instils a better understanding to the participants making them ready for the top positions. It covers areas of strategic planning, student recruitment &amp; enrolment, financial management, marketing, fundraising, endowment fund management, governmental &amp; alumni relations, athletics and student affairs among others."
                    ],
                    aim: "Executive Leadership Development Program (SLDP): For Higher Learning Institutions Leaders at USIU Africa aims at developing the next set of College Principals, University DVCs and VCs for higher learning institutions. The program aims to develop a wide range of skills that senior executives in higher learning institutions will need to meet the challenges of today’s educational environment and serve the students.",
                    target: [
                        "Senior Academic, senior administrative and managerial professionals in higher learning institutions who are exploring opportunities to the next levels of leadership in higher institutions of learning such as College Principals, University DVCs and VCs."
                    ],
                    outcome: [
                        {
                            meta: "You will walk away with skills and knowledge to navigate complex challenges in higher learning institutions.",
                            data: [],
                        },
                        {
                            meta: "You will get an understanding of strategic planning and strategy development as well as fostered effective governance skills for institution of higher learning.",
                            data: [],
                        },
                        {
                            meta: "You will be able to ultimately lead an enhanced institutional performance and a stronger impact on higher learning leadership.",
                            data: [],
                        },
                    ],
                    delivery: [
                        "The program is delivered in 4 modules spread across a period of 8 months. Each module equals a week of 5 days and there is a blend of online and face to face interaction for each module of 5 days. One module is offered internationally through our partner institutions in either South Africa, Europe or USA while the other 3 modules are offered in selected venues in Kenya including USIU Africa Campus.",
                        "The admission is only done once a year with a specific and limited number of slots and therefore you are encouraged to reserve your slot early in advance to avoid inconveniences.",
                        "Experienced industry experts and knowledgeable faculty both from Kenya and abroad will deliver the training. Case studies, structured learning materials, videos sessions, simulations &amp; role plays and group discussions will be used to deliver the program.",
                    ],
                    contents: [
                        "Module 1: Enrollment and marketing",
                        "Module 2: Endowment and financial management",
                        "Module 3: Government relations",
                        "Module 4: Alumni relations",
                        "Module 5: Crisis communications",
                        "Module 6: Strategic planning",
                    ],
                    coaching: null,
                    admissions: [],
                    international: [],
                    certification: [],
                }
            }
        ],
    },

    {
        id: 3,
        name: "Organizational Custom Solutions.",
        slug: "organizational-custom-solutions",
        description: "Tailored programs co-designed with your organization to solve real challenges—whether it's leadership development, cultural transformation, or team-wide upskilling. Contact us to discuss your organizational needs.",
        image: p3,
        courses: [],
    },
]