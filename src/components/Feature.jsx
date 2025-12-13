import React from 'react'
import { FeatureSectionData } from '../assets/data';
import FeatureCard from './FeatureCard';
import IntroText from './shared/_IntroText';

export default function Feature() {
    const { intoTextContent, settings, featuresData } = FeatureSectionData;
    return (
        <section className="features-section" id="features">
            <div className="inner-wrap">
                <div className="container relative">
                    <IntroText intoTextContent={intoTextContent} settings={settings} />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-12">
                        {featuresData.map((item, index) => (
                            <FeatureCard key={index} {...item} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
