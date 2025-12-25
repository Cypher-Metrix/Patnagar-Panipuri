import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

export default function App() {
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
