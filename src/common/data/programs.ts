import p1 from "@/assets/programs/16.webp";
import p2 from "@/assets/programs/14.webp";
import p3 from "@/assets/programs/3.jpg";
import p4 from "@/assets/programs/15.webp";
import p6 from "@/assets/programs/6.jpg";
import p7 from "@/assets/programs/7.jpg";
import p8 from "@/assets/programs/8.jpg";
import p9 from "@/assets/programs/17.webp";
import p10 from "@/assets/programs/18.webp";
import p12 from "@/assets/programs/2.jpg";
import p13 from "@/assets/programs/13.jpg";

interface CourseTabContent {
    about: string[];
    aim: string | string[];
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
    costs: {
        title: string;
        data: string[];
    }[] | string[];
    admissions: string[];
    coaching: string[] | null;
    international: string[];
    certification: {
        title: string;
        data: string[];
    } | null;
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
        tabs: CourseTabContent;
    }[];
    is_custom?: boolean;
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
                    aim: "The Business Analytics for Executives program aims to equip leaders with the skills to interpret and apply data-driven insights for strategic decision-making, focusing on practical frameworks that address real business challenges. By emphasizing understanding and utilization of data rather than technical details, the program helps executives improve business performance, optimize operations, and maintain a competitive advantage in their industries.",
                    target: [
                        "C-Suite Executives",
                        "Senior Managers",
                        "Decision Makers",
                        "Business Owners",
                        "Employees interested in data-based decision making"
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
                            title: "To the organization",
                            data: [
                                "Market Competitive advantage: Your organization will absolutely benefit by leveraging data analytics to get critical insights into customer behaviour, market trends, and operational efficiencies, enabling them to make informed decisions, optimize strategies, and stay ahead of competitors in today's fast-paced, data-driven marketplace.",
                                "Improved Organizational Performance: Leveraging data enables executives to make informed decisions that streamline operations, cut unnecessary expenses, and enhance customer experiences, ultimately boosting organizational performance and competitiveness.",
                            ]
                        }
                    ],
                    delivery: [
                        "The program is delivered in 3 days on campus. The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience.",
                    ],
                    contents: [
                        {
                            title: "Describing and Summarizing Data",
                            data: [
                                "Visualizing Data",
                                "Descriptive Statistics",
                                "Relationship Between Two Variables",
                                "Case Study"
                            ],
                        },
                        {
                            title: "Sampling and Estimation",
                            data: [
                                "Creating Representative and Unbiased Samples",
                                "The Normal Distribution",
                                "Confidence Intervals",
                                "Amazon's Inventory Sampling"
                            ],
                        },
                        {
                            title: "Single Variable Linear Regression",
                            data: [
                                "The Regression Line",
                                "Forecasting",
                                "Interpreting the Regression Output",
                                "Performing Regression Analyses",
                                "Making Decisions"
                            ],
                        },
                    ],
                    costs: [
                        {
                            title: "Cost - Kshs 45,000",
                            data: [
                                "Cohort 1: 28th - 30th Oct 2025",
                                "Cohort 2: 14th - 17th April 2026",
                                "Cohort 3: 11th - 13th Aug 2026",
                            ]
                        },
                    ],
                    coaching: null,
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.",
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education.",
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully.",
                    ],
                    certification: {
                        title: "Professional Certification: Certified Business Analyst Foundation (CBAF) (Optional)",
                        data: [
                            "We will issue certificates on the Business Analytics for Executives Program-(BAEP); however, for those who are interested in getting the title Certified Business Analyst Foundation (CBAF) will be required to take a multiple-choice application exam at a separate cost of US$220.", 
                            "The certification is offered by an American Certifying body in conjunction with United States International University.",
                        ],
                    }
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
                    aim: "The Client Experience Excellence Program (CEEP) is designed to empower executives to foster a customer-centric culture that emphasizes exceptional service, proactive engagement, and continuous improvement, ultimately boosting customer satisfaction, loyalty, retention, and lifetime value by ensuring every interaction aligns with the organization's commitment to exceeding customer expectations.",
                    target: [
                        "C-Suite executives: Business Level Executives (Directors, Vice Presidents, General Managers).",
                        "Functional level executives (Customer Service Managers: Practitioners, Marketers, Sales professionals, Business Developers, and Human Resources Practitioners).",
                        "Entrepreneurs: Business Owners",
                    ],
                    outcome: [
                        {
                            title: "To the professional",
                            data: [
                                "Your skills in customer interaction, conflict resolution, and strategic service design will be enhanced significantly elevating your professionalism.",
                                "You will be enabled to build stronger client relationships, effectively manage disputes, and develop innovative service strategies that meet diverse needs and drive organizational success.",
                                "You will get the chance of professional certification earning the title Certified Customer Service Professional (CCSP)-(optional)."
                            ]
                        },
                        {
                            title: "To the organization",
                            data: [
                                "Enhanced Customer Loyalty: Positive experiences foster loyalty, leading customers to return for repeat business and recommend the company to others.",
                                "Improved Customer Retention: Lower customer churn rates are a direct result of increased satisfaction and loyalty, leading to a more stable customer base.",
                                "Stronger Brand Reputation: Positive customer experiences contribute to a positive brand image, attracting new customers and enhancing the company&#39;s reputation.",
                            ]
                        }
                    ],
                    delivery: [
                        "The program is delivered in 3 days on campus. The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience."
                    ],
                    contents: [
                        {
                            title: "The Psychology of Customers",
                            data: [
                                "To deliver exceptional customer experiences, employees must have insight into the customer mindset.",
                                "Understanding of the Customer Service Trinity and the Head, Heart and Hand model introduces the employees to the “Why” of customer excellence."
                            ]
                        },
                        {
                            title: "Customer Experience Journey Mapping",
                            data: [
                                "Attendees map their organization's customer experience journey, focusing on TEA: Touchpoints, Emotions, and Action points."
                            ]
                        },
                        {
                            title: "The Human-Process-Human Principle",
                            data: [
                                "This emphasizes on the human touch in customer interactions, using primacy and recency laws; discuss small touches for memorable visits, minimizing complaints, and enhancing experiences."
                            ]
                        },
                        {
                            title: "Focus on Self-care",
                            data: [
                                "Undoubtedly, the responsibility of catering to customers can be emotionally taxing, highlighting the crucial need for employees to prioritize their mental well-being. This program delves into positive intelligence, equipping attendees with valuable tools to navigate stress and handle challenging situations. Our course empowers individuals to manage these pressures effectively, ensuring they don't become mentally drained in the process."
                            ]
                        },
                        {
                            title: "Focus on Experience, not just Service",
                            data: [
                                "Shifting the mindset from delivering service to orchestrating exceptional customer experiences. This involves understanding the emotional journey beyond transactions, building genuine connections, and fostering brand loyalty."
                            ]
                        },
                        {
                            title: "Innovation and Future-proofing",
                            data: [
                                "Delve into emerging trends and the future. It discusses how customer service is evolving with new technologies and changing customer expectations, preparing executives for the future of customer interactions."
                            ]
                        }
                    ],
                    costs: [
                        {
                            title: "Cost - Kshs 51,000",
                            data: [
                                "Cohort 1: 15th - 17th Oct 2025",
                                "Cohort 2: 11th - 13th March 2026",
                                "Cohort 3: 8th - 10th Aug 2026",
                            ]
                        }
                    ],
                    coaching: null,
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.",
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education."
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully."
                    ],
                    certification: {
                        title: "Professional Certification: Certified Customer Service Professional (CCSP) (Optional)",
                        data: [
                            "We will issue certificates on the Client Experience Excellence Program (CEEP); however, for those who are interested in getting the title Certified Customer Service Professional (CCSP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                            "The certification is offered by an American Certifying body in conjunction with United States International University."
                        ],
                    }
                },
            },
            {
                id: 3,
                name : "New Manager Development Program - (NMDP)",
                slug: "new-manager-development-program-(NMDP)",
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
                                "Increased Productivity Performance: The training will lead to fostering effective communication, collaboration, and shared goals within a team which enhances synergy, in turn improving overall outcomes and organizational results by leveraging diverse skills and perspectives to achieve common objectives more efficiently.",
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
                    costs: [
                        {
                            title: "Cost - Kshs 55,000",
                            data: [
                                "Cohort 1: 1st - 5th Sept 2025",
                                "Cohort 2: 1st - 5th Dec 2025",
                                "Cohort 3: 4th - 8th May 2026",
                                "Cohort 4: 3rd - 7th Aug 2026",
                            ]
                        },
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
                    certification: {
                        title: "Professional Certification: Certified Team Leader (CTL) (Optional)",
                        data: [
                            "We will issue certificates on the New Manager Development Program (NMDP); however, for those who are interested in getting the title Certified Team Leader (CTL) will be required to take a multiple-choice application exam at a separate cost of US$250.", 
                            "The certification is offered by an American Certifying body in conjunction with United States International University.",
                        ],
                    }
                }
            },
            {
                id: 4,
                name : "Artificial Intelligence for Executives Program (AIEP)",
                slug: "artificial-intelligence-for-executives-program-(AIEP)",
                description: "In today's rapidly evolving business environment, Artificial Intelligence (AI) is no longer just a buzzword but a crucial driver of competitive advantage. This intensive training course is designed to equip executives, senior leaders, and decision-makers with the knowledge and practical tools they need to strategically leverage AI within their organizations. Through a blend of theoretical insights, real-world case studies, and hands-on exercises, participants will gain a comprehensive understanding of AI technologies and how they can be applied to achieve significant business outcomes.",
                image: p13,
                //duration: "1st - 5th September 2025",
                amount: 45_000,
                tabs: {
                    about: [
                        "In today's rapidly evolving business environment, Artificial Intelligence (AI) is no longer just a buzzword but a crucial driver of competitive advantage. This intensive training course is designed to equip executives, senior leaders, and decision-makers with the knowledge and practical tools they need to strategically leverage AI within their organizations. Through a blend of theoretical insights, real-world case studies, and hands-on exercises, participants will gain a comprehensive understanding of AI technologies and how they can be applied to achieve significant business outcomes.",
                    ],
                    aim: [
                        "Develop a solid understanding of AI fundamentals and its potential as a competitive advantage.",
                        "Explore various AI technologies and their applications through hands-on exercises.",
                        "Analyze and learn from real-life AI case studies to appreciate strategic benefits and challenges.",
                        "Enhance decision-making skills by identifying appropriate AI and data science approaches for specific business problems.",
                        "Build strategic AI plans tailored to participant's organizations, fostering long-term success."
                    ],
                    target: [
                        "Decision-makers, senior leaders, and technical leaders responsible for leading AI initiatives.",
                        "Entrepreneurs and business owners aiming to integrate AI into their business models.",
                        "Professionals seeking to enhance their capabilities in strategy, leadership, and innovation in the digital age."
                    ],
                    outcome: [
                        {
                            title: "To the Individual",
                            data: [
                                "You will be equipped with the right decision-making skills, fostering your innovation ability towards personal and organisational success",
                                "You will be equipped with the skills to navigate a rapidly evolving technological landscape, giving you an edge over the technological complexities in the business world.",
                                "You will be provided with the knowledge and skills to leverage AI for data-driven decision-making, operational efficiency, and ethical leadership."
                            ]
                        },
                    ],
                    delivery: [
                        "The program is delivered in 3 days on campus. The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience."
                    ],
                    contents: [
                        {
                            title: "Day 1 - Session 1: Understanding AI Fundamentals",
                            data: [
                                "Overview of AI, machine learning, and deep learning.",
                                "Key AI technologies: Definitions and applications.",
                                "The current AI landscape and its impact on businesses."
                            ]
                        },
                        {
                            title: "Day 1 - Session 2: Building an AI Strategy",
                            data: [
                                "Aligning AI with organizational goals.",
                                "Road mapping AI integration: Phases, resources, timelines.",
                                "Budgeting and resource allocation for AI projects."
                            ]
                        },
                        {
                            title: "Day 2 - Session 1: Overview of AI Tools and Platforms",
                            data: [
                                "Introduction to popular AI tools and platforms.",
                                "Exploratory Analysis",
                                "Predictive modeling."
                            ]
                        },
                        {
                            title: "Day 2 - Session 2: AI for Planning, Scheduling and Optimization",
                            data: [
                                "Resource planning",
                                "Workforce Optimization",
                                "Scheduling Problems"
                            ]
                        },
                        {
                            title: "Day 3 - Session 1: Generative AI",
                            data: [
                                "Prompt Engineering for Enhanced Searching.",
                                "Content Creation",
                                "Interactive tools for Customer Service"
                            ]
                        },
                        {
                            title: "Day 3 - Session 2: AI in Decision Making",
                            data: [
                                "Rule based decision making.",
                                "Reasoning with Uncertainty",
                                "Multi Criteria Decision Making"
                            ]
                        },
                    ],
                    costs: [
                        {
                            title: "Cost - Kshs 45,000",
                            data: [
                                "Cohort 1: 12th to 14th Nov 2025",
                                "Cohort 2: 18th to 20th March 2026",
                                "Cohort 3: 24th to 26th June 2026",
                            ]
                        },
                    ],
                    coaching: null,
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.",
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education."
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University, Africa utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully."
                    ],
                    certification: {
                        title: "Professional Certification: Certified Artificial Intelligence Professional (CAIP)  (Optional)",
                        data: [
                           "We will issue certificates on the Artificial Intelligence for Executives Program (AIEP); however, for those who are interested in getting the title Certified Artificial Intelligence Professional (CAIP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                           "The certification is offered by an American Certifying body in conjunction with United States International University."
                        ],
                    }
                }
            },
        ]
    },

    {
        id: 2,
        name: "Open Executive Modular Programs.",
        slug: "open-executive-modular-programs",
        description: "Build leadership skills over time with more flexible modules focused on strategy, governance, and institutional excellence ideal for higher education leaders and managers seeking long-term growth.",
        image: p8,
        courses: [
            {
                id: 2,
                name: "Strategic Management Development Program (SMDP)",
                slug: "strategic-management-development-program-(SMDP)",
                description: "The Strategic Management Development Program (SMDP) is designed to enhance managers effectiveness by developing their skills, building leadership abilities, and preparing them for strategic leadership roles, which collectively contribute to improved organizational performance and sustained success.",
                image: p7,
                duration: "11th August, 2025",
                amount: 360_000,
                tabs: {
                    about: [
                        "Mid-level managers worldwide encounter numerous challenges such as implementing strategies effectively, balancing conflicting stakeholder expectations, and maintaining high team engagement, often compounded by limited skills, inadequate resources, and insufficient support systems, which hinder their ability to lead efficiently and achieve organizational goals.",
                        "The Strategic Management Development Program (SMDP) at the Center for Executive Education is designed to equip mid-level managers with the skills and knowledge necessary to address current organizational challenges, enhance strategic thinking, and develop leadership capabilities, thereby empowering participants to proactively shape their careers and lead their teams effectively into the future.",
                        "This program therefore, equips managers with the essential skills, knowledge, and confidence needed to effectively inspire meaningful change and lead the implementation of their organization's strategic plan, empowering them to reach a new level of strategic leadership and drive productive organizational transformation.",
                    ],
                    aim: "The Strategic Management Development Program (SMDP) is designed to enhance managers effectiveness by developing their skills, building leadership abilities, and preparing them for strategic leadership roles, which collectively contribute to improved organizational performance and sustained success.",
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
                    costs: [
                        {
                            title: "Cost-Kshs 360,000",
                            data: [
                                "Module 1: 18th - 22nd Aug 2025 (Nairobi Kenya) Cohort 1",
                                "Module 2: 17th - 21st Nov 2025 (Nairobi Kenya) Cohort 1",
                                "Module 3: 16th - 20th Feb 2026 (International Module-South Africa) Cohort 1 & 2",
                                "Module 4: 18th - 22nd May 2026 (Nairobi Kenya) Cohort 1"
                            ]
                        },
                        {
                            title: "Cohort 2 Start Date",
                            data: [
                                "Module 1: 16th - 20th Feb 2026 (International Module-South Africa) Cohort 1 & 2"
                            ]
                        }
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
                    certification: {
                        title: "Professional Certification: Business Management Professional (BMP) (Optional)",
                        data: [
                            "We will issue certificates on the Strategic Management Development Program (SMDP); however, for those who are interested in getting the title Business Management Professional (BMP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                            "The certification is offered by an American Certifying Body in conjunction with United States International University."
                        ],
                    }
                }
            },
            {
                id: 4,
                name: "Senior Leadership Development Program (SLDP)",
                slug: "senior-leadership-development-program-(SLDP)",
                description: "Executive Leadership Development Program (SLDP) at USIU Africa aims at developing the next set of College Principals, University DVCs and VCs for higher learning institutions. The program aims to develop a wide range of skills that senior executives in higher learning institutions will need to meet the challenges of today's educational environment and serve the students.",
                image: p10,
                tabs: {
                    about: [
                        "The Senior Leadership Development Program at USIU Africa's Center for Executive Education is designed to enhance strategic thinking and leadership skills among senior executives. This program integrates essential management concepts and best practices, providing a transformational learning experience that equips leaders to navigate complex market dynamics and maintain a sustainable competitive edge. The curriculum emphasizes integrated leadership, entrepreneurial skills, and collaboration, utilizing interactive learning techniques that include real-life case studies and insights from global executives. Participants can expect to develop a comprehensive understanding of the business landscape, which not only enhances individual capabilities but also fosters a holistic view of organizational challenges and opportunities."
                    ],
                    aim: "The primary aim of the Senior Leadership Development Program (SLDP) at USIU Africa's Center for Executive Education is to equip current and future senior leaders with the skills, knowledge, and mindset necessary to effectively lead their organizations and achieve strategic objectives. The key components in this program involve developing strategic thinking, strategic business acumen, strategic ambidextrous leadership abilities, strategic management, and the capacity to foster a culture of innovation and change.",
                    target: [
                        "Senior Leadership Development Program (SLDP) is designed for executives and high-performing senior managers who have significant management responsibilities. It's also suitable for functional senior leaders, principals of small and medium firms, entrepreneurs, and executives seeking to enhance their strategic leadership capabilities.",
                        "They specifically include:\n",
                        "General Managers",
                        "Cross-functional Heads such as Heads of Human Resource",
                        "Heads of Training and Development",
                        "Heads of Sales and Marketing",
                        "Heads of Customer Service",
                        "Heads of Finance",
                        "Heads of Compliance",
                        "Heads of Operations",
                        "Heads of Strategy",
                        "Heads of Quality",
                        "Heads of Business Development",
                        "Heads of Production",
                        "Heads of Fleet Management",
                        "Heads of Projects",
                        "Functional Directors",
                        "Senior Managers",
                        "Regional Managers among others"
                    ],
                    outcome: [
                        {
                            title: "Outcome of the Program to you",
                            data: [
                                "You will walk away with skills and knowledge to navigate complex challenges in dynamic organizational and group leadership.",
                                "You will be able to ultimately lead an enhanced institutional performance and a stronger impact on organizational success.",
                                "You will be enabled as a leader to understand and manage your own emotions, as well as those of your team members. This will result in more effective communication and collaboration within the organization.",
                                "You will walk away with a better understanding of how to involve your team in decision-making, which creates a more collaborative and productive work environment.",
                                "You will get an understanding of strategic planning and strategy development as well as fostered effective governance skills for success."
                            ],
                        },
                        {
                            title: "Outcome of the Program to your organization",
                            data: [
                                "Your organization will benefit from improved employee engagement and retention",
                                "There will be enhanced organizational performance and productivity",
                                "The clarity of vision and goals imparted to individual participant will lead to clearer and more defined organizational culture.",
                                "It will also strengthen succession planning, fostering a more agile and innovative organizational environment."
                            ]
                        }
                    ],
                    delivery: [
                        "The program spans four modules over eight months, with each module lasting five days and incorporating a blend of three days on campus and two days online/zoom. One module is delivered internationally through partner institutions in South Africa, Europe, or the USA, providing a global learning experience, while the other three modules are conducted at USIU Africa Campus, offering a balanced mix of local and international engagement.",
                        "The training program combines industry expert-led and faculty instruction with diverse learning methods like case studies, videos, simulations, role plays, and group discussions to provide a dynamic and practical learning experience. The inclusion of coaching from seasoned professionals further personalizes the training, helping participants apply concepts effectively and develop their skills in real-world scenarios."
                    ],
                    contents: [
                        {
                            title: "Module 1: Developing Emotional Intelligence and Strategic Communication.",
                            data: [
                                "Emotional Awareness and Self-Regulation",
                                "Empathy and Stress Management",
                                "Active Listening and Self-Reflection",
                                "Building Resilience",
                                "Creating a Communication Strategy and Audience analysis",
                                "Change Management and Communication",
                                "Feedback Mechanisms",
                                "Crisis Communication",
                                "Evaluation and Feedback",
                            ],
                        },
                        {
                            title: "Module 2: Understanding different Leadership styles and Self-Leadership",
                            data: [
                                "Transformational Leadership: vision and innovation.",
                                "Transactional Leadership: Effective in structured environments where tasks are clear.",
                                "Servant Leadership: Encourage collaboration and empowerment among team members.",
                                "Autocratic Leadership: Individual control over all decisions",
                                "Democratic Leadership: Team Members involvement in decision making",
                                "Laissez-Faire Leadership: Minimal supervision-team members make decisions"
                            ]
                        },
                        {
                            title: "Module 3: Building and Leading High-Performing Teams.",
                            data: [
                                "Understanding the difference between high-performing teams and Dysfunctional teams",
                                "Synergy and Teamwork in the workplace",
                                "Setting the right expectations for team members",
                                "Organizing, planning and prioritizing",
                                "Acknowledging and Improving on weak spots",
                            ]
                        },
                        {
                            title: "Module 4: Leading Organizational Success through Turbulence: Innovation, resilience, and adaptive capacity in the face of crises.",
                            data: [
                                "Recognizing the sources and signs of organizational turbulence",
                                "Building resilience in teams",
                                "Adapting to change, and developing leadership skills to navigate disruption",
                                "Creating meaning for employees, fostering trust and psychological safety.",
                                "Promoting effective decision-making.",
                                "Developing and implementing strategies that can withstand turbulent times.",
                            ]
                        }
                    ],
                    costs: [
                        {
                            title: "Costs - Kshs 375,000",
                            data: [
                                "Module 1: 4th to 8th May 2026",
                                "Module 2: 24th to 28th May 2026",
                                "Module 3: 5th to 9th Oct 2026",
                                "Module 4: 7th to 11th Dec 2026",
                            ]
                        }
                    ],
                    coaching: [
                        "Participants will spearhead a strategic project within their organization during the program, guided by a designated Coach to ensure successful implementation and growth. The project is designed to generate meaningful organizational impact while supporting the participant's professional development goals, fostering leadership skills and aligning personal aspirations with organizational priorities."
                    ],
                    admissions: [
                        "We admit applicants on a rolling and space-available basis. You are therefore advised to submit your application as soon as possible.",
                        "The admissions process is based on your professional experience and achievement, your responsibility in the organisation, and the admissions criteria for each program as described in the Target Audience. There are no formal educational requirements for this program offered by the USIU-Africa Center for Executive Education."
                    ],
                    international: [
                        "Accommodation: The university does not run student hostels but will assist you in securing affordable accommodation at your own expense for the short duration of your stay.",
                        "Language of Instruction: United States International University utilizes English as its primary language of instruction, making it essential for students to be proficient in English to effectively engage with academic materials, participate in discussions, and complete coursework successfully."
                    ],
                    certification: {
                        title: "Professional Certification: Business Management Professional (BMP) (Optional)",
                        data: [
                            "We will issue certificates on the Senior Leadership Development Program (SLDP); however, for those who are interested in getting the title Business Management Professional (BMP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                            "The certification is offered by an American Certifying Body in conjunction with United States International University."
                        ]
                    }
                }
            },
            {
                id: 3,
                name: "Executive Leadership Development Program (ELDP)",
                slug: "executive-leadership-development-program-(ELDP)",
                description: "The Executive Leadership Development Program (ELDP) at USIU Africa is designed to equip senior leaders of colleges and universities worldwide, public and private, with essential skills and strategies to effectively navigate the unique challenges of higher education management, foster innovative leadership, enhance institutional governance, and promote sustainable growth in a rapidly evolving global academic landscape.",
                image: p9,
                duration: "28th July, 2026",
                amount: 530_000,
                tabs: {
                    about: [
                        "The Executive Leadership Development Program (ELDP) at USIU Africa is designed to equip senior leaders of colleges and universities worldwide, public and private, with essential skills and strategies to effectively navigate the unique challenges of higher education management, foster innovative leadership, enhance institutional governance, and promote sustainable growth in a rapidly evolving global academic landscape."
                    ],
                    aim: "This program is designed to enhance leadership capabilities in higher education by fostering a deep understanding of sustaining an institutional culture rooted in evidence-based decision making through effective data utilization. It also aims to cultivate leadership qualities aligned with the five principles of exemplary leadership, i.e. demonstrating the path, inspiring a shared vision, challenging the status quo, empowering others, and ensuring future resilience and ultimately enabling leaders to guide their institutions with informed, innovative, and collaborative strategies.",
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
                                "Your organization will get increased productivity performance due to better leadership outcomes and organizational results derived from the expanded capabilities achieved from the leadership upskilling.",
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
                            title: "Module 1: Leading Higher Learning Institution Processes and Resource Management",
                            data: [
                                "Navigating through Change: Leading change through challenges in Learning institutions",
                                "Leading Resource Administration and Integrated Academic Program Planning",
                                "Leading Partnerships for Institutional Success",
                                "Case Analysis: Leadership Challenge Case Studies",
                                "Understanding the art of leading Student success",
                                "Budgeting for Success",
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
                    costs: [
                        {
                            title: "Cost-Kshs 530,000",
                            data: [
                                "Module 1: Cohort 1: 25th Aug - 29th Aug 2025 (Nairobi, Kenya)",
                                "Module 2: Cohort 1: 25th - 29th May 2026 (International Module-South Africa)",
                                "Module 1: Cohort 2: 25th - 29th May 2026 (International Module-South Africa)",
                                "Module 2: Cohort 2: 7th -11th Dec 2026 (Nairobi Kenya)"
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
                    certification: {
                        title: "Professional Certification: Certified Business Continuity Professional (CBCP) (Optional)",
                        data: [
                            "We will issue certificates on the Executive Leadership Development Program (ELDP); however, for those who are interested in getting the title Certified Business Continuity Professional (CBCP) will be required to take a multiple-choice application exam at a separate cost of US$250.",
                            "The certification is offered by an American Certifying body in conjunction with United States International University."
                        ],
                    }
                }
            },
            {
                id: 1,
                name: "Developing Emerging Leaders Program - (DELP)",
                slug: "developing-emerging-leaders-program-(DELP)",
                description: "Developing Emerging Leaders program aims at preparing the next set of higher education managers and administrators towards effectiveness, resilience, accountability and courageous management and leadership while instilling the urge to drive their institutions path towards success.",
                image: p6,
                duration: "20th April, 2025",
                tabs: {
                    about: [
                        "The USIU Africa DEL program aims to equip academic and administrative professionals in higher education with the skills, mindset, and networks needed to effectively lead university initiatives as well as prepare them for transition into senior leadership roles. By focusing on understanding the diverse responsibilities within higher learning institutions, the program fosters professional growth, enhances leadership capabilities, and provides participants with valuable connections and support to advance their careers both in academia and administrative roles in institutions of higher learning across the world."
                    ],
                    aim: "Developing Emerging Leaders program aims at preparing the next set of higher education managers and administrators towards effectiveness, resilience, accountability and courageous management and leadership while instilling the urge to drive their institutions' path towards success.",
                    target: [
                        //"Academic, administrative and managerial professionals in higher learning institutions who are exploring opportunities to advance to higher-level administrative positions.",
                        //"Newly appointed academicians, managers and administrators looking to sharpen their leadership skills and mindset.",
                        "The aforementioned groups generally consist of: mid-level managers, recently appointed managers, and employees who have aspirations of assuming managerial roles in the near future.",
                        "They typically include:",
                        "Managers and Assistant Managers in HR, Finance, Library, Transport, Procurement, Faculty Affairs, Student Affairs etc",
                        "Department Managers, Heads, and Assistants",
                        "Assistant Principals and Deputy Principals",
                        "Assistant Deans and Deputy Deans",
                        "Assistant Directors and Deputy Directors",
                        "Deputy Principals in High School and school Coordinators",
                        "Newly appointed Principals, Deans, HODs, Managers, Directors, etc"
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
                                "Your organization will get increased productivity performance due to better team synergy, outcomes and organizational results derived from the leadership course.",
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
                    costs: [
                        {
                            title: "Cost - Kshs 407,000",
                            data: [
                                "Module 1: 20th - 24th April 2026 (Nairobi Kenya)",
                                "Module 2: 6th - 10th July 2026 (International Module South Africa)",
                                "Module 3: 7th - 11th Sept 2026 (Nairobi Kenya)",
                                "Module 4: 1st - 5th Dec 2026 (Nairobi Kenya)"
                            ]
                        }
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
        ],
    },

    {
        id: 3,
        name: "Organizational Custom Solutions.",
        slug: "organizational-custom-solutions",
        description: "Customized solutions development programs are tailored training initiatives designed to meet your organization's specific goals and employee needs. They address unique challenges, enhance performance and productivity, and foster a culture of continuous growth unlike one-size-fits-all training approaches.",
        image: p3,
        courses: [],
        is_custom: true,
    },
]