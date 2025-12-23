import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import Counter from "./components/Counter";
import VisitOurStore from "./components/VisitOurStore";
import Footer from "./components/Footer";

export default function App() {
    useEffect(() => {
        AOS.init({
            startEvent: "DOMContentLoaded",
            delay: 100,
            easing: "ease",
            once: false,
            mirror: false,
            anchorPlacement: "top-bottom",
        });
    }, []);

    return (
        <>
            <HeroBanner />
            <Testimonial />
            <Feature />
            <Counter />
            <VisitOurStore/>
            <Footer />
        </>
    );
}
