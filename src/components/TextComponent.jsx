import IntroLinks from "./Shared/_IntroLinks";
import IntroText from "./Shared/_IntroText";

export default function TextComponents({ content }) {

    const settings = content.settings;
    const intoTextContent = content.intoTextContent;
    const introLinks = content.introLinks;

    let textAlignment = "items-start";
    switch (settings.textAlignment) {
        case "left":
            textAlignment = "items-start";
            break;
        case "center":
            textAlignment = "items-center";
            break;
        case "right":
            textAlignment = "items-end";
            break;
        default:
            textAlignment = "items-start";
            break;
    }

    return (
        <section>
            <div className="inner-wrap bg-primary" data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <div className={`flex flex-col justify-center ${textAlignment}`}>

                        {intoTextContent && (
                            <IntroText
                                intoTextContent={intoTextContent}
                                settings={settings}
                            />
                        )}


                        {
                            introLinks &&
                            introLinks.length > 0 && (
                                <IntroLinks introLinks={introLinks} settings={settings} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
