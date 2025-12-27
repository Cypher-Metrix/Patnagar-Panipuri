import { motion } from "framer-motion";
import { FeatureSectionData } from '../assets/data';
import FeatureCard from './FeatureCard';
import IntroText from './shared/_IntroText';

export default function Feature() {
    const { intoTextContent, settings, featuresData } = FeatureSectionData;
    return (
        <section className="features-section" id="features">
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-12">
                        {featuresData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.25 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <FeatureCard {...item} />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
