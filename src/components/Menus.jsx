import { BiChevronRight } from "react-icons/bi";
import { OurMenuData } from "../assets/data";
import IntroText from "./shared/_IntroText";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import MenuCard from "./shared/_MenuCard";

const Menus = () => {

    const { intoTextContent, settings, menuItems } = OurMenuData;
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(4);

    const totalSlides = menuItems.length;

    const slickSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        afterChange: (index) => {
            setCurrentSlide(index);

            // Get actual slidesToShow from react-slick
            if (sliderRef.current) {
                const actualSlidesToShow =
                    sliderRef.current.innerSlider.props.slidesToShow;
                setVisibleSlides(actualSlidesToShow);
            }
        },
        responsive: [
            { breakpoint: 1440, settings: { slidesToShow: 4 } },
            { breakpoint: 1080, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
        ]
    };

    // Disable logic based on ACTUAL visible slides
    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide >= totalSlides - visibleSlides;

    return (
        <section className="menu-section" id="menu">
            <div className="inner-wrap">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <IntroText intoTextContent={intoTextContent} settings={settings} />
                    </motion.div>
                    <motion.div className="w-full"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Slider ref={sliderRef} {...slickSettings}>
                            {menuItems.map((item) => (
                                <div className="w-full h-full" key={item.id}>
                                    <MenuCard menuCardContent={item} />
                                </div>
                            ))}
                        </Slider>
                    </motion.div>

                    <div className="w-full flex gap-4 justify-center lg:justify-end"
                    >

                        {/* Prev Button */}
                        <button
                            disabled={isPrevDisabled}
                            className="custom-prev-next"
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <GrFormPrevious size={24} />
                        </button>

                        {/* Next Button */}
                        <button
                            disabled={isNextDisabled}
                            className="custom-prev-next"
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <GrFormNext size={24} />
                        </button>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default Menus;
