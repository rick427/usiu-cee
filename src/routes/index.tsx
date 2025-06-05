import { createBrowserRouter } from "react-router";

import Home from "@/pages/home";
import Team from "@/pages/team";
import Course from "@/pages/course";
import Courses from "@/pages/courses";
import Brochure from "@/pages/brochure";
import Programs from "@/pages/programs";
import ContactUs from "@/pages/contact-us";

import Layout from "@/components/shared/layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/brochure",
                element: <Brochure />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/programs",
                element: <Programs />
            },
            {
                path: "/programs/:programId",
                element: <Courses />
            },
            {
                path: "/programs/:programId/:courseId",
                element: <Course />
            },
            {
                path: "/teams/:teamId",
                element: <Team />
            },
        ]
    }
]);