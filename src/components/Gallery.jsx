import Masonry from "react-masonry-css";
import { useState } from "react";
import "../css/gallery.css";

const images = [
    "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80",
    "https://tinypng.com/images/social/website.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY4ZhdaTaeaDiMrEl_YRU8_8txhzBh2hQcA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-7UIYLcEK1mAwct1XgW8aSMnvm3ZEQBYgQ&s",
    "https://burst.shopifycdn.com/photos/beach-sunset-thailand.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80",
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://media.istockphoto.com/id/1597475039/photo/abstract-colorful-glass-background.jpg?s=612x612&w=0&k=20&c=Gv5iCYYzRnE7F_RwFDacJGmEgLfArYnkeyORu1umeZM="
];

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};

const Gallery = () => {
    const [, forceUpdate] = useState(0);

    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h2>Our Gallery</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. {/* ~25 words */}
                </p>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
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
        </div>
    );
};

export default Gallery;
