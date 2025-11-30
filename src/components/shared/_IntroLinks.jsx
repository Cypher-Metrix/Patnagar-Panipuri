

export default function IntroLinks({ introLinks, settings }) {

    let textAlignment = "justify-start";

    switch (settings.textAlignment) {
        case "left":
            textAlignment = "justify-start";
            break;
        case "center":
            textAlignment = "justify-center";
            break;
        case "right":
            textAlignment = "justify-end";
            break;
        default:
            textAlignment = "justify-start";
            break;
    }

    return (
        <>
            {introLinks && <div className={`buttons-group ${textAlignment}`}>
                {introLinks?.map((button, index) => (
                    <a href={button?.link} key={index} className={`btn ${index == 0 ? 'button-primary' : 'button-secondary'}`}>{button.label}</a>
                ))}
            </div>}
        </>
    )
}
