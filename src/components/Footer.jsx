import { footerData } from "../assets/data";

const Footer = () => {
    const { storeName, storeDescription, socialLinks, quickLinks, contactsLinks, copyrightText } = footerData;
    return (
        <footer className="footer-section" id="footer">
            <div className="inner-wrap">
                <div className="container">
                    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-8">
                        <div className="flex flex-col items-start justify-start gap-4">
                            <div className="title-wrap">
                                <h4 className="heading mb-0 font-bold">{storeName}</h4>
                            </div>
                            <p className="footer-text font-medium">
                                {storeDescription}
                            </p>

                            <div className="footer-sociallinks grid grid-cols-3 gap-2.5">
                                {socialLinks?.map(({ id, link, icon: Icon, colorClass }) => (
                                    <a href={link} target="_blank" key={id} className={`relative group h-5 w-5 lg:h-8 lg:w-8 flex items-center justify-center rounded-full`}>
                                        {Icon && <Icon fontSize={30} className={`${colorClass} w-full h-full`} />}
                                    </a>
                                ))}
                            </div>

                        </div>

                        <div className="flex flex-col items-start justify-start gap-4">
                            <div className="title-wrap">
                                <h4 className="heading mb-0 font-bold">{quickLinks?.heading}</h4>
                            </div>
                            <ul className="footer-links-list flex flex-col items-start justify-start gap-2.5">
                                {quickLinks?.links?.map((link) => (
                                    <li className="relative" key={link.id}>
                                        <a className="text-sm lg:text-base font-medium hover:text-[var(--color-2)] transition-colors" href={link?.link}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col items-start justify-start gap-4">
                            <div className="title-wrap">
                                <h4 className="heading mb-0 font-bold">{contactsLinks.heading}</h4>
                            </div>
                            <ul className="footer-contact">
                                <ul className="footer-contact flex flex-col justify-start items-start gap-2.5">
                                    {contactsLinks?.links.map(({ id, link, label, icon: Icon }) => (
                                        <li key={id} className="relative">
                                            <a href={link} target="_blank" className="flex items-start justify-start gap-3 font-medium hover:text-[var(--color-2)] transition-colors">
                                                {Icon && <Icon className="shrink-0" />}
                                                <span className="text-sm lg:text-base">{label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright pt-8 flex items-center justify-center border-t border-gray-400/50">
                        <p className="mb-0 font-medium">&copy; {copyrightText}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
