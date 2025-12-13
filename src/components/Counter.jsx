import React from 'react'
import { CounterSectionData } from '../assets/data';
import IntroText from './shared/_IntroText';
import CounterCard from './CounterCard';

export default function Counter() {
    const { intoTextContent, settings, counterData } = CounterSectionData;
    const hasIntroText =
        intoTextContent && Object.keys(intoTextContent).length > 0;
    return (
        <section className="counter-section bg-gray-100" id="counter">
            <div className="inner-wrap">
                <div className="container relative">
                    <IntroText intoTextContent={intoTextContent} settings={settings} />

                    {counterData.length > 0 &&
                        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ${hasIntroText ? 'mt-12' : ""}`}>
                            {counterData?.map((counter, index) => (
                                <CounterCard key={index} counter={counter} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
