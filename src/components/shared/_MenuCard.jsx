import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MenuCard({ menuCardContent }) {

    const { title, image, desc, link } = menuCardContent;
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="w-full h-full bg-slate-100 rounded-xl testimonial-card transition-all duration-300 overflow-hidden">
            <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="relative w-full bg-white overflow-hidden aspect-auto h-auto lg:h-50">
                    <img src={image} className="w-full h-full object-cover" />
                </div>
                <div className="menu-content p-4 flex flex-1 flex-col items-start justify-between gap-4">
                    <div className="flex flex-col items-stretch justify-start gap-2.5">
                        <h4 className="mb-0 text-2xl font-semibold heading line-clamp-2">{title}</h4>
                        <p className={`mb-0 font-medium ${expanded ? "line-clamp-none" : "line-clamp-2"} cursor-pointer`}
                            onClick={() => setExpanded(!expanded)}
                        >{desc}</p>
                    </div>
                    {link && (
                        <a href={link} target="_blank" className="w-full bg-linear-to-r from-[var(--color-2)] to-[var(--color-3)] text-[var(--color-1)] text-center py-1.5 rounded-lg transition-opacity duration-300 hover:opacity-50">
                            Order Now
                        </a>
                    )}
                </div>
            </div>
        </div >
    );
}
