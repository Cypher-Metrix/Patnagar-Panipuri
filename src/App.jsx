import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

export default function App() {
    useEffect(() => {
        AOS.init({
            startEvent: "DOMContentLoaded",
            delay: 1000,
            easing: "ease-out-cubic",
            once: false,
        });
    }, []);

    return (
        <>
            <HeroBanner />
            <Testimonial />
            <Feature />
            <Counter />
            <NewsLetter />
            <Footer />
        </>
    );
}
