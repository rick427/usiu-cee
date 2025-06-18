import { Title, Text, Stack, Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";

import p1 from "@/assets/partners/1.png";
import p2 from "@/assets/partners/2.png";
import p3 from "@/assets/partners/3.png";
import p4 from "@/assets/partners/4.png";
import p5 from "@/assets/partners/5.png";
import p6 from "@/assets/partners/6.jpg";

import styles from "./partners.module.scss";
import Reveal from "@/components/shared/io/reveal";

export default function Partners() {
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    const isXs = useMediaQuery('(max-width: 36em)');
    const isSm = useMediaQuery('(max-width: 48em)');

    const slidesToScroll = isXs ? 1 : isSm ? 2 : 3;
    return (
        <section className={styles.partners}>
            <Reveal>
                <Stack className={styles.partners__stack} align="center">
                    <Title c="gray.9" order={1}>
                        Our Partners & Clients
                    </Title>
                    <Text size="sm" ta="center" c="gray.7" fw={400}>
                        We're proud to work with a dynamic network of partners and clients who believe in our mission. 
                        Together, we co-create impactful solutions, unlock new opportunities, and drive meaningful change 
                        across industries.
                    </Text>
                </Stack>
            </Reveal>

            <Carousel
                slideSize={{ base: "50%", sm: "50%", md: "33.3%", lg: "20%" }}
                slideGap={{ base: "sm", sm: "md", md: "lg" }}
                onMouseLeave={() => autoplay.current.play()}
                onMouseEnter={autoplay.current.stop}
                plugins={[autoplay.current]}
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
                <Carousel.Slide py="sm">
                    <Image w={185} h={100} src={p1} alt="p1" />
                </Carousel.Slide>
                <Carousel.Slide py="sm">
                    <Image w={185} h={100} src={p2} alt="p2" />
                </Carousel.Slide>
                <Carousel.Slide py="sm">
                    <Image w={185} h={100} style={{objectFit: "contain"}} src={p3} alt="p3" />
                </Carousel.Slide>
                <Carousel.Slide py="sm">
                    <Image w={185} h={100} src={p4} alt="p4" />
                </Carousel.Slide>
                <Carousel.Slide py="sm">
                    <Image w={200} h={100} style={{objectFit: "contain"}} src={p5} alt="p5" />
                </Carousel.Slide>
                <Carousel.Slide py="sm">
                    <Image w={200} h={100} style={{objectFit: "contain"}} src={p6} alt="p6" />
                </Carousel.Slide>
            </Carousel>
        </section>
    )
}
