import { HeroBannerData } from '../assets/data'
import IntroLinks from './shared/_IntroLinks';
import IntroText from './shared/_IntroText';
import { FiClock } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

export default function HeroBanner() {

    const { introLinks, intoTextContent, settings, shopData, banners } = HeroBannerData;

    function isShopOpen(openTimeStr, closeTimeStr) {
        const now = new Date();

        // Helper: Convert "10:00 AM" → minutes since midnight
        const toMinutes = (timeStr) => {
            const [time, modifier] = timeStr.split(" ");
            let [hours, minutes] = time.split(":").map(Number);

            if (modifier === "PM" && hours !== 12) hours += 12;
            if (modifier === "AM" && hours === 12) hours = 0;

            return hours * 60 + minutes;
        };

        const openMinutes = toMinutes(openTimeStr);
        const closeMinutes = toMinutes(closeTimeStr);

        const nowMinutes = now.getHours() * 60 + now.getMinutes();

        return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
    }

    const open = isShopOpen(shopData?.openingHours?.openTime, shopData?.openingHours?.closeTime);

    return (
        <section className='hero-banner-section' id='herobanner'>
            <div className='inner-wrap'>
                <div className='container'>
                    <div className='w-full flex flex-wrap gap-5 lg:gap-0 items-center justify-center sm:-mx-3'>
                        <div className='w-full lg:w-1/2 sm:px-3'>
                            {shopData.openingHours && <div className='p-2.5 px-4 inline-flex items-center justify-start gap-2.5 bg-gray-100/20 rounded-4xl mb-2.5 lg:mb-5'>
                                <div className={`h-2 w-2 rounded-full ${open ? "bg-green-600" : 'bg-red-600'}`} />
                                <p className='mb-0 text-sm'>{open ? "Open Now" : 'Closed'}</p>
                            </div>}
                            <IntroText intoTextContent={intoTextContent} settings={settings} />
                            <IntroLinks introLinks={introLinks} settings={settings} />
                            {(shopData.openingHours || shopData.location) && <div className='flex flex-col items-start justify-center pt-7'>
                                <div className='w-full mb-7 h-px bg-gray-500' />
                                <div className='flex items-center justify-start gap-2.5 md:gap-6'>
                                    {shopData?.openingHours && <div className='flex items-center justify-center gap-2.5'>
                                        <FiClock className='text-base lg:text-xl' />
                                        <div className='flex flex-col items-start justify-center gap-1'>
                                            <span className='text-xs'>Opening Hours</span>
                                            <p className='mb-0 text-xs md:text-sm font-medium'>{shopData?.openingHours.openTime}-{shopData?.openingHours?.closeTime}</p>
                                        </div>
                                    </div>}
                                    {shopData?.location && <div className='flex items-center justify-center gap-2.5'>
                                        <SlLocationPin className='text-base lg:text-xl' />
                                        <div className='flex flex-col items-start justify-center gap-1'>
                                            <span className='text-xs'>Location</span>
                                            <p className='mb-0 text-xs md:text-sm font-medium'>{shopData?.location}</p>
                                        </div>
                                    </div>}
                                </div>
                            </div>}
                        </div>
                        <div className='w-full lg:w-1/2 sm:px-3'>
                            <div className='w-full flex lg:flex-row flex-col items-center gap-3 lg:gap-5'>
                                <div className='w-full lg:w-1/2 flex lg:flex-col items-center gap-3 lg:gap-5'>
                                    {banners.length > 0 && banners.slice(0, 2).map((item) => (
                                        <div className={`hero-banner-image`} key={item.id}>
                                            <div className='hero-banner-image-overlay' />
                                            {item.title && <p className='hero-banner-image-title hidden'>{item.title}</p>}
                                            <img src={item?.url} alt={item?.title} className={`w-full h-[250px] ${item.id == 1 ? "lg:h-[280px]" : "lg:h-[200px] "} object-cover`} />
                                        </div>
                                    ))}
                                </div>
                                {banners.length > 0 && banners.map((item) => (
                                    <div className={`${item.id == banners.length ? "hero-banner-image" : "hidden"}`} key={item.id}>
                                        <div className='hero-banner-image-overlay' />
                                        {item.title && <p className='hero-banner-image-title hidden'>{item.title}</p>}
                                        <img src={item?.url} alt={item?.title} className='w-full h-[250px] lg:h-[400px] object-cover' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className='fill-gray-100'></path></svg></div>
        </section >
    )
}
