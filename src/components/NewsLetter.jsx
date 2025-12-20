import React from 'react'
import { NewsLetterData } from '../assets/data'
import IntroText from './shared/_IntroText';

export default function NewsLetter() {

    const { settings, intoTextContent, backgroundImage } = NewsLetterData;

    return (
        <section className="newsletter-section" id="newsletter" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="inner-wrap">
                <div className="container relative">
                    <IntroText settings={settings} intoTextContent={intoTextContent} />
                    <div className="w-full mt-12">
                        <div className='w-full lg:w-7/12'>
                            <form action="" className="w-full flex flex-col lg:flex-row items-center justify-start gap-5">
                                <input placeholder='Enter you email' className='flex-1 bg-white h-[50px] rounded-sm outline-none border-none px-4 py-2.5' />
                                <div className="buttons-group mt-0">
                                    <button className='btn button-primary h-[50px] px-5'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
