import React, { useState, useCallback, useEffect } from "react";
import { Styled } from "./styled";
import {
    TbChevronLeft,
    TbChevronRight,
    TbPointFilled,
} from "react-icons/tb";

// Image imports
import img1 from "/images/jwit-hero-1.png";
import img2 from "/images/jwit-hero-2.png";
import img3 from "/images/jwit-hero-3.png";
import img4 from "/images/jwit-hero-4.png";
import img5 from "/images/jwit-hero-5.png";
import img6 from "/images/jwit-hero-6.png";
import img7 from "/images/jwit-hero-7.png";

const SLIDES = [
    {
        src: img1,
        alt: "Women collaborating with sticky notes on a glass wall",
        title: "Planning the next build",
        tagline: "From ideas on sticky notes to working prototypes.",
    },
    {
        src: img2,
        alt: "Women carrying heavy boxes at an industrial site",
        title: "Strength at every shift",
        tagline: "Women leading operations on the shop floor.",
    },
    {
        src: img3,
        alt: "Woman working on a heavy machine in a workshop",
        title: "Making with machines",
        tagline: "Hands-on skills, from tools to terminals.",
    },
    {
        src: img4,
        alt: "Women sorting material on a long workbench",
        title: "Many hands, one line",
        tagline: "Teamwork turning raw work into finished output.",
    },
    {
        src: img5,
        alt: "Group of women lifting industrial crates together",
        title: "Lifting together",
        tagline: "Support systems matter in every workplace.",
    },
    {
        src: img6,
        alt: "Row of women in helmets and vests working on a line",
        title: "Precision in motion",
        tagline: "Discipline, focus, and quiet leadership.",
    },
    {
        src: img7,
        alt: "Another group of women in helmets and vests on an assembly line",
        title: "Future of work",
        tagline: "More women in every layer of industry.",
    },
];

const AUTO_DELAY = 6000; // ms

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const totalSlides = SLIDES.length;

    const goTo = useCallback(
        (index) => {
            const nextIndex = (index + totalSlides) % totalSlides;
            setCurrent(nextIndex);
        },
        [totalSlides]
    );

    const handlePrev = () => goTo(current - 1);
    const handleNext = () => goTo(current + 1);

    // Auto-play with pause on hover
    useEffect(() => {
        if (isHovered) return; // hover pe pause

        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % totalSlides);
        }, AUTO_DELAY);

        return () => clearInterval(id);
    }, [isHovered, totalSlides]);

    return (
        <Styled.Wrap>
            <div
                className="slider"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Slides */}
                {SLIDES.map((slide, index) => {
                    const isActive = index === current;
                    return (
                        <figure
                            key={slide.src + index}
                            className={
                                "slide" + (isActive ? " slide--active" : "")
                            }
                        >
                            <img src={slide.src} alt={slide.alt} />

                            <figcaption className="caption">
                                <div className="captionInner">
                                    <h3 className="captionTitle">
                                        {slide.title}
                                    </h3>
                                    <p className="captionText">
                                        {slide.tagline}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    );
                })}

                {/* Prev / Next arrows */}
                <button
                    type="button"
                    className="arrowBtn arrowBtn--prev"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    <TbChevronLeft />
                </button>
                <button
                    type="button"
                    className="arrowBtn arrowBtn--next"
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <TbChevronRight />
                </button>
            </div>

            {/* Bullets */}
            <div className="bullets" aria-label="Slide navigation">
                {SLIDES.map((slide, index) => {
                    const isActive = index === current;
                    return (
                        <button
                            key={slide.src + "bullet" + index}
                            type="button"
                            className={
                                "bullet" + (isActive ? " bullet--active" : "")
                            }
                            onClick={() => goTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <TbPointFilled />
                        </button>
                    );
                })}
            </div>
        </Styled.Wrap>
    );
};

export default HeroSlider;
