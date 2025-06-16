import { Title, Text, Stack } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from '@mantine/carousel';
import { useRef } from "react";

import styles from "./hero.module.scss";
import Reveal from "@/components/shared/io/reveal";

const slides = [
  {
    title: "Bridging knowledge with real-world impact",
    description:
      "Explore management and leadership programs at USIU-A Center for Executive Education, where expert faculty bridge theory with hands-on insight.",
    image: "/hero-1.jpg",
  },
  {
    title: "Shape the future with executive insight",
    description:
      "Advance your leadership journey through immersive, high-impact learning experiences tailored for today's executive challenges.",
    image: "/hero-2.jpg",
  },
  {
    title: "Executive learning for a global mindset",
    description:
      "Develop strategic thinking and global leadership skills through diverse programs led by renowned faculty and seasoned professionals.",
    image: "/hero-3.jpg",
  },
];

export default function Hero() {
    const autoplay = useRef(Autoplay({
        delay: 6_000, 
        stopOnInteraction: false,
    }));
    return (
        <section className={styles.hero}>
            <Carousel
                h="100%"
                withControls={false}
                withIndicators={true}
                plugins={[autoplay.current]}
                styles={{
                    root: { height: "100%" },
                    viewport: { height: "100%" },
                    container: { height: "100%" },
                }}
            >
                {slides.map((slide, index) => (
                    <Carousel.Slide key={index}>
                        <div 
                            className={styles.hero__bg}
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.8)), url(${slide.image})`,
                            }}
                        >
                            <Stack className={styles.hero__stack}>
                                <Reveal>
                                    <Title tt="capitalize" order={1} fz={55} c="white">
                                        {slide.title}
                                    </Title>
                                </Reveal>
                                <Reveal delay={200}>
                                    <Text c="white">
                                        {slide.description}    
                                    </Text>
                                </Reveal>
                            </Stack>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </section>
    )
}
