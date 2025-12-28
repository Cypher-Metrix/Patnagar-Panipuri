import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TestimonialCard({ testimonialContent }) {

    const { review, author, image, rating } = testimonialContent;
    const [expanded, setExpanded] = useState(false);

    const totalStars = 5;

    return (
        <div className="w-full bg-slate-200 rounded-3xl testimonial-card mb-12 transition-all duration-300">
            <div className="testimonial-quote-icon bg-slate-300">
                <BiSolidQuoteAltLeft className="text-slate-600" />
            </div>

            <div className="w-full px-8 pt-12 pb-8 h-full flex flex-col items-center justify-between">
                <div
                    className={`testimonial-quote text-center text-sm font-medium transition-all duration-300 ${expanded ? "line-clamp-none" : "line-clamp-4"} cursor-pointer`}
                    onClick={() => setExpanded(!expanded)}
                >
                    {`“${review}”`}
                </div>

                <div className="flex flex-col justify-center items-center gap-2.5">
                    {/* ⭐ STAR RATING */}
                    <div className="flex justify-center gap-0.5">
                        {Array.from({ length: totalStars }).map((_, index) => {
                            const isFilled = index < rating;
                            return (
                                <motion.div className="h-6 w-6" key={index}
                                    initial={{ rotate: 180 }}
                                    whileInView={{ rotate: 360 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    {isFilled ?
                                        (
                                            <svg className="h-full w-full" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_187)">
                                                    <path d="M10.125 14.5716L15.3394 17.7188L13.9556 11.7872L18.5625 7.79625L12.4959 7.28156L10.125 1.6875L7.75406 7.28156L1.6875 7.79625L6.29437 11.7872L4.91063 17.7188L10.125 14.5716Z" className="fill-yellow-500" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_187">
                                                        <rect width="20.25" height="20.25" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>



                                        )
                                        :
                                        (
                                            <svg className="w-full h-full" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_188)">
                                                    <path d="M18.5625 7.79625L12.4959 7.27312L10.125 1.6875L7.75406 7.28156L1.6875 7.79625L6.29437 11.7872L4.91063 17.7188L10.125 14.5716L15.3394 17.7188L13.9641 11.7872L18.5625 7.79625ZM10.125 12.9937L6.9525 14.9091L7.79625 11.2978L4.995 8.86781L8.69063 8.54719L10.125 5.14687L11.5678 8.55563L15.2634 8.87625L12.4622 11.3062L13.3059 14.9175L10.125 12.9937Z" className="fill-yellow-500" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_188">
                                                        <rect width="20.25" height="20.25" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        )
                                    }
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="testimonial-author-details flex flex-col items-center gap-3 justify-center">
                        <img
                            src={image}
                            className="h-10 w-10 object-cover rounded-full"
                        />
                        <p className="font-medium mb-0">{author}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
