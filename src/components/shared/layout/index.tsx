import { Outlet, ScrollRestoration } from 'react-router';

import Header from "../header";
import Footer from "../footer";

export default function Layout() {
    return (
        <main>
            <Header />
                <Outlet />
            <Footer />
            <ScrollRestoration/>
        </main>
    )
}
