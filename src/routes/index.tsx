import { createBrowserRouter } from "react-router";

import Home from "@/pages/home";
import Course from "@/pages/course";
import Support from "@/pages/support";
import Courses from "@/pages/courses";
import Brochure from "@/pages/brochure";
import Programs from "@/pages/programs";

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
                path: "/support",
                element: <Support />
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
        ]
    }
]);