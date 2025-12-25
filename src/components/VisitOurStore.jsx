import { visitOurStoreDatas } from "../assets/data";
import IntroText from "./shared/_IntroText";


export default function VisitOurStore(){
    const { intoTextContent, settings, visitOurStoreData} = visitOurStoreDatas;

    return (
        <section className="visit-our-store-section bg-white" id="visit-our-store">
            <div className="inner-wrap">
                <div className="container relative">

                    <IntroText intoTextContent={intoTextContent} settings={settings} />

                    <div className="flex gap-4 justify-center bg-orange-50 flex-wrap mt-10">
                        <div className="w-full lg:w-1/2 max-w-2xl h-screen">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0615745227556!2d72.65752080000001!3d23.240846299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b2667735d97%3A0xd72c00a234bda722!2sPatnagar%20Panipuri!5e0!3m2!1sen!2sin!4v1766425762071!5m2!1sen!2sin" loading="lazy" className="w-full h-screen"></iframe>
                        </div>

                        <div className="flex flex-col gap-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 m-auto">
                            <div>
                                <h2 className="text-4xl font-bold m-0">
                                    Contact Information
                                </h2>

                                <p className="text-base mb-1 max-w-sm">
                                    Reach out to us through any of these channels. We're always happy to help!
                                </p>
                            </div>
                            {visitOurStoreData.map((item, idx) => (
                                <div key={idx} className="flex flex-wrap items-start gap-5 bg-orange-50 rounded-2xl px-6 py-5 contact-card">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center contact-icon">
                                        {item.icon && (
                                            <item.icon
                                                size={22}
                                                className="text-white"
                                            />
                                        )}
                                    </div>

                                    <div className="flex flex-col flex-1">
                                        <h3 className="text-gray-900 text-lg font-medium leading-none mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm max-w-lg leading-none m-0 break-words">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
