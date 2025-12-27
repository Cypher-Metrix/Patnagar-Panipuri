import { motion } from "framer-motion";
import { CounterSectionData } from '../assets/data';
import IntroText from './shared/_IntroText';
import CounterCard from './CounterCard';

export default function Counter() {
    const { intoTextContent, settings, counterData } = CounterSectionData;
    const hasIntroText =
        intoTextContent && Object.keys(intoTextContent).length > 0;
    return (
        <section className="counter-section bg-gray-50" id="counter">
            <div className="inner-wrap">
                <div className="container relative">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <IntroText intoTextContent={intoTextContent} settings={settings} />
                    </motion.div>

                    {counterData.length > 0 &&
                        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ${hasIntroText ? 'mt-12' : ""}`}>
                            {counterData?.map((counter, index) => (
                                <motion.div key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * .2 }}
                                    viewport={{ once: true }}

                                >

                                    <CounterCard counter={counter} />
                                </motion.div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section >
    )
}
