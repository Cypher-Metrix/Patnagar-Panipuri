import Masonry from "react-masonry-css";
import { useState } from "react";
import { motion } from "framer-motion";
import IntroText from "./shared/_IntroText";
import { GalleryData } from "../assets/data";

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};

const Gallery = () => {
    const [, forceUpdate] = useState(0);
    const { images, intoTextContent, settings } = GalleryData;

    return (
        <div className="gallery-section" id="gallery">
            <div className="inner-wrap">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <IntroText settings={settings} intoTextContent={intoTextContent} />
                    </motion.div>
                    <motion.div
                        className="w-full flex items-center justify-center mt-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="masonry-grid w-full lg:w-10/12"
                            columnClassName="masonry-grid_column"
                        >
                            {images.map((img, index) => (
                                <div key={index} className="masonry-item">
                                    <img
                                        src={img}
                                        alt={`gallery-${index}`}
                                        loading="lazy"
                                        onLoad={() => forceUpdate((v) => v + 1)}
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
