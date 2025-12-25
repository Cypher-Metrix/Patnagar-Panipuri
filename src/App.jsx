import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import Menus from "./components/Menus";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import VisitOurStore from "./components/VisitOurStore";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

export default function App() {
    return (
        <>
            <HeroBanner />
            <Testimonial />
            <Feature />
            <Menus />
            <Gallery />
            <Counter />
            <VisitOurStore />
            <NewsLetter />
            <Footer />
        </>
    );
}
