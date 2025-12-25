import { BiChevronRight } from "react-icons/bi";
import { menuItems } from "../assets/data";
import "../css/menus.css";

const Menus = () => {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>Our Delicious Menus</h2>
                <p className="rich-text-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {/* ~25 words */}
                </p>
            </div>
            <div className="menu-wrapper">
                {menuItems.map((item, index) => (
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
            </div>
        </div >
    );
};

export default Menus;
