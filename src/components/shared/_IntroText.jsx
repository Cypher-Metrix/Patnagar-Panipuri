import parse from "html-react-parser";

export default function IntroText({ intoTextContent, settings }) {

    const HeadingTag = intoTextContent.headingTitleSize;

    let textAlignment = "text-left";

    switch (settings.textAlignment) {
        case "left":
            textAlignment = "text-left";
            break;
        case "center":
            textAlignment = "text-center";
            break;
        case "right":
            textAlignment = "text-right";
            break;
        default:
            textAlignment = "text-left";
            break;
    }

    return (
        <>
            {(intoTextContent.headingTitle || intoTextContent.subheading) && (
                <div className={`title-wrap ${textAlignment} w-full`}>
                    {intoTextContent.subheading && <h6 className={`subheading ${textAlignment} w-full`}>{intoTextContent.subheading}</h6>}
                    {intoTextContent.headingTitle && <HeadingTag className={`heading ${textAlignment} w-full`}>{parse(intoTextContent.headingTitle)}</HeadingTag>}
                </div>)}

            {intoTextContent.description && (
                <div className={`description-wrap w-full ${textAlignment}`}>
                    <p>{intoTextContent.description}</p>
                </div>
            )}

            {intoTextContent.richTextContent && (
                <div className={`rich-text-content w-full rte ${textAlignment}`}>
                    {parse(intoTextContent.richTextContent)}
                </div>
            )}
        </>
    )
}
