import Hero from "@/components/pages/home/hero";
import FAQs from "@/components/pages/home/faqs";
import Banner from "@/components/pages/home/banner";
import Programs from "@/components/pages/home/programs";
import Partners from "@/components/pages/home/partners";

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
