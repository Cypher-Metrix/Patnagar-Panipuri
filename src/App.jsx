import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import HeroBanner from './components/HeroBanner';
import Testimonial from './components/Testimonial';

export default function App() {

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      delay: 100,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  return (
    <>
      <HeroBanner />
      <Testimonial />
    </>
  )
}
