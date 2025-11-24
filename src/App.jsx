import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { HomePageTextContent } from './assets/data';
import TextComponents from './components/TextComponent';

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

  const content = HomePageTextContent;
  return (
    <>
      <TextComponents content={content} />
    </>
  )
}
