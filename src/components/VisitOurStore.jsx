import { VisitOurStoreDatas } from "../assets/data";
import IntroText from "./shared/_IntroText";
import { motion } from "framer-motion";

export default function VisitOurStore() {
    const { intoTextContent, settings, visitOurStoreData } = VisitOurStoreDatas;
    const hasIntroText =
        intoTextContent && Object.keys(intoTextContent).length > 0;

    return (
        <section className="visit-our-store-section bg-white" id="visit-our-store">
            <div className="inner-wrap relative lg:py-0">
                <div className="relative">
                    <motion.div className="w-full lg:w-1/2 lg:h-full h-112.5 lg:absolute left-0 top-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.061439656849!2d72.65494587406414!3d23.24085120814964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b2667735d97%3A0xd72c00a234bda722!2sPatnagar%20Panipuri!5e0!3m2!1sen!2sin!4v1766768307748!5m2!1sen!2sin" allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            sandbox="allow-scripts allow-same-origin allow-popups"
                            className="w-full border-0 h-full"></iframe>
                    </motion.div>
                    <div className="container relative">
                        <motion.div className="flex justify-end"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full lg:w-1/2 pt-10 lg:py-16 lg:pl-14">
                                <div className="w-full flex flex-col items-start justify-start gap-10">
                                    {hasIntroText && <div className="w-full">
                                        <IntroText intoTextContent={intoTextContent} settings={settings} />
                                    </div>}
                                    <div className="w-full flex flex-col items-start justify-start gap-8">
                                        <div className="flex flex-col gap-2.5 lg:gap-5 items-start justify-start">
                                            <h2 className="text-2xl lg:text-4xl font-bold m-0 text-gray-700">
                                                {visitOurStoreData?.heading}
                                            </h2>
                                            <p className="text-base lg:text-lg mb-0 text-gray-500">
                                                {visitOurStoreData?.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-6 items-start justify-start">
                                            {visitOurStoreData.contacts?.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-5">
                                                    <div className="shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center contact-icon">
                                                        {item.icon && (
                                                            <item.icon
                                                                size={24}
                                                                className="text-white"
                                                            />
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col items-start justify-start">
                                                        <h3 className="text-gray-900 text-xl lg:text-2xl font-medium leading-none mb-1">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-gray-700 text-sm lg:text-base mb-0">
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}
