import { BiChevronRight } from "react-icons/bi";
import { OurMenuData } from "../assets/data";
import IntroText from "./shared/_IntroText";
import { motion } from "framer-motion";

const Menus = () => {

    const { intoTextContent, settings, menuItems } = OurMenuData;
    return (
        <section className="menu-section" id="menu">
            <div className="inner-wrap">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <IntroText intoTextContent={intoTextContent} settings={settings} />
                    </motion.div>
                    <motion.div className="menu-wrapper mt-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        {menuItems.map((item) => (
                            <div
                                key={item.id}
                                className={`menu-card`}
                            >
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>

                                <div className="menu-cta-wrapper">
                                    Learn more
                                    <BiChevronRight />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Menus;
