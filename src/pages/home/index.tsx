import Hero from "@/components/pages/home/home-hero";
import FAQs from "@/components/pages/home/home-faqs";
import Banner from "@/components/pages/home/home-banner";
import Programs from "@/components/pages/home/home-programs";
import Partners from "@/components/pages/home/home-partners";

export default function Home() {
    return (
        <>
            <Hero />
            <Programs />
            <Banner />
            <Partners />
            <FAQs />
        </>
    )
}
