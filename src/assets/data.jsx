import { FaAward, FaFireFlameCurved, FaRegClock } from 'react-icons/fa6'
import herobanner1 from './herobanner-1.jpeg'
import herobanner2 from './herobanner-2.jpeg'
import herobanner3 from './Panipuri-1.jpg'
import newsletterBG from './newsletter-bg.jpg'
import { PiUsersThree } from 'react-icons/pi'
import { CiHeart } from 'react-icons/ci'
import { HiSparkles } from 'react-icons/hi'
import { MdMenuBook, MdOutlineMail, MdOutlineLocationOn, MdOutlineWatchLater } from 'react-icons/md'
import { BsClockHistory } from 'react-icons/bs'
import {
    FaRegStar,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaQuoteLeft,
} from "react-icons/fa";
import { SiZomato, SiFacebook, SiInstagram } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import Panipuri from "./Panipuri.avif"
import Dahipuri from "./dahipuri.jpg"
import Sevpuri from "./sevpuri.jpg"
import BasketChat from "./BasketChat.jpg"
import Dahimamari from "./Dahimamari.jpg"
import Thepla from "./Thepla.avif"
import Churmu from "./Churmu.jpg"
import Chanabhel from "./Chanabhel.jpg"
import SukhaBhel from "./SukhaBhel.avif"
import WaferChutney from "./WaferChutney.avif"
import ChanaBatakaDough from "./ChanaBatakaDough.avif"
import FudinaBottle from "./FudinaBottle.avif"
import KhajurImliBottle from "./KhajurImliBottle.avif"
import KoriPuri from "./KoriPuri.avif"
import exterior_1 from "./ExteriorBanner-1.jpg"
import exterior_2 from "./ExteriorBanner-2.jpg"
import exterior_3 from "./ExteriorBanner-3.jpg"
import interior_1 from "./Interior-1.png"
import interior_2 from "./Interior-2.jpg"
import interior_2_png from "./Interior-2.png"
import interior_3 from "./Interior-3.jpg"
import OutdoorForGallery from "./OutdoorForGallery.jpg"
import OutdoorForGallery_2 from "./OutdoorForGallery2.jpg"
import TwoPillers from "./WM_NO_BG.png"


export const HomePageTextContent = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        headingTitle: 'Text Component',
        headingTitleSize: 'h2',
        subheading: 'Text Component Subheading',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae esse praesentium nobis voluptates earum eaque fugit ipsam enim? Ea corrupti impedit laboriosam nam fugit facere omnis excepturi dolores beatae praesentium, provident minus a unde rerum optio quos libero quidem?',
        richTextContent: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, consectetur?</p>'
    },
    introLinks: [
        {
            id: 1,
            label: 'Primary Button',
            link: '/'
        },
        {
            id: 2,
            label: 'Secondary Button',
            link: '/'
        },
    ]
}

export const HeroBannerData = {
    settings: {
        textAlignment: "left",
    },

    intoTextContent: {
        headingTitle: 'Best <span>Panipuri</span> in<br/> Town',
        headingTitleSize: 'h1',
        subheading: '',
        description: 'Experience the authentic taste of crispy puris filled with tangy, spicy water and delicious fillings. Made fresh daily with love!',
        richTextContent: '<p>The Best Panipuri in Gandhinagar</p>'
    },
    introLinks: [
        {
            id: 1,
            label: 'Explore More',
            link: '#testimonial'
        },
        {
            id: 2,
            label: 'Contact Us',
            link: '#visit-our-store'
        }
    ],
    shopData: {
        openingHours: {
            openTime: '10:00 AM',
            closeTime: '08:00 PM',
        },
        location: 'Gandhinagar, Gujarat',
        left_bg: TwoPillers
    },
    banners: [
        {
            id: 1,
            title: 'Patnagar Panipuri',
            url: herobanner1
        },
        {
            id: 2,
            title: 'Inside From Shop',
            url: herobanner2
        },
        {
            id: 3,
            title: 'Panipuri',
            url: herobanner3
        },
    ]
}

export const TestimonialData = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        headingTitle: 'Our Happy Customers',
        headingTitleSize: 'h2',
        subheading: '',
        description: 'Google reviews by our beloved customers',
    },

    testimonialsData: [
        {
            review: `Hygiene, taste, quality and overall great experience!!
इनकी पकौड़िया इंसान के हाथों से टच ना होने के कारण काफ़ी ज़्यादा hygienic है
Cleanliness और स्वाद बढ़िया है
यह सेव पूरी, दही पूरी तो ठीक flavored सोडा भी मिलते है
Must visit with family 😋🤩😇`,
            author: "Darshak Mehta",
            rating: 5,
            image: "https://lh3.googleusercontent.com/a-/ALV-UjWSFLazGN_h9vL5uqY8u8gsayTbKQu43nbPYV0TlQXuu46n6VpZcQ=w1024-h1024-p-rp-mo-ba4-br100"
        },
        {
            review: "Really great taste. Would hundred percent recommend.",
            author: "Hardik Thakkar",
            rating: 5,
            image: ""
        },
        {
            review: "Very testy. hygiene perfectly.Good service and a.c ambiounce.pure R.o Drinking water available.made with R.o water.",
            author: "Dipali Nanavaty",
            rating: 5,
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVrPXjUT7O9EyBxK93KIbTaH6mdAH4eESqXVWnTA_LlsrYGOaVS4w=w1024-h1024-p-rp-mo-br100"
        },
        {
            review: "It was good to have different taste of Pani puri, Service was very good. Dahi puri was also worth eating.. 👌🏻🤩",
            author: "Karan Kumbhare",
            rating: 5,
            image: "https://lh3.googleusercontent.com/a-/ALV-UjXO7hWzfhHfvZ5FYdTGUDulNSn77sL85BYX4x7rYur8vvnQCohr=w1024-h1024-p-rp-mo-br100"
        },
        {
            review: `Nice quality of panipuri
Uncle's nature is so familiar 🤗`,
            author: "Yagnik",
            rating: 5,
            image: ""
        },
        {
            review: `Best Pani Puri In Gandhinagar.
Taste me hit budget me fit.`,
            author: "Sujal Balar",
            rating: 5,
            image: "https://lh3.googleusercontent.com/a-/ALV-UjWc9_qkcx-FsO8FBUwIsn9pU9dO1-BypnuQHmGfrT-UPT7xO6rm=w1024-h1024-p-rp-mo-br100"
        },
        {
            review: `Panipuri and Dahipuri was amazing tast. We loved it 👌👍👌`,
            author: "Minaxi Odedra",
            rating: 5,
            image: "https://lh3.googleusercontent.com/a-/ALV-UjX8jzTc6m01CnbB7nCpMMtzbAHNlE4zXkGrQamYqgANeHI0Nqy4HA=w1024-h1024-p-rp-mo-br100"
        },
        {
            review: `Hygienic place to eat  Very Tasty Panipuri😋😋😋😋😋`,
            author: "Sonal Soni",
            rating: 5,
            image: ""
        },
        {
            review: `Kaka Ni Panipuri Jordar chhe......if it happens, life happens. Otherwise, nothing happens in Kaka's Panipuri...
Wow Kaka....Wow`,
            author: "Rakesh Makwana",
            rating: 5,
            image: "https://lh3.googleusercontent.com/a-/ALV-UjUUDj6c0OLJzDGmkEpizIC43_ok7-3Xd90HeHI_iti-NkwCXmsvfA=w1024-h1024-p-rp-mo-ba3-br100"
        },
    ]
}

export const FeatureSectionData = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        headingTitle: 'What Makes Our Pani Puri Special',
        headingTitleSize: 'h2',
        subheading: '',
        description: 'From authentic flavors and premium ingredients to daily freshness and top-level hygiene, we take pride in serving pani puri that’s made with love and enjoyed with complete peace of mind.',
    },
    featuresData: [
        {
            title: "Authentic Flavors",
            description:
                "Traditional recipes passed down through generations, bringing you the most authentic taste of Indian street food.",
            icon: <FaFireFlameCurved className="w-8 h-8 text-orange-600" />,
            borderColor: "border-orange-200",
            bgColor: "bg-orange-100",
        },
        {
            title: "Premium Quality",
            description:
                "Only the finest ingredients sourced fresh daily to ensure every bite is a premium experience you'll remember.",
            icon: <FaAward className="w-8 h-8 text-yellow-600" />,
            borderColor: "border-yellow-200",
            bgColor: "bg-yellow-100",
        },
        {
            title: "Fresh Daily",
            description:
                "Everything made from scratch each morning. No preservatives, no shortcuts - just pure, fresh goodness.",
            icon: <FaRegClock className="w-8 h-8 text-green-600" />,
            borderColor: "border-green-200",
            bgColor: "bg-green-100",
        },
        {
            title: "Family Friendly",
            description:
                "A welcoming atmosphere perfect for families, friends, and anyone who loves great food and good vibes.",
            icon: <PiUsersThree className="w-8 h-8 text-orange-600" />,
            borderColor: "border-orange-200",
            bgColor: "bg-orange-100",
        },
        {
            title: "Made with Love",
            description:
                "Every dish is crafted with passion and care, ensuring you get the authentic street food experience.",
            icon: <CiHeart className="w-8 h-8 text-red-600" />,
            borderColor: "border-red-200",
            bgColor: "bg-red-100",
        },
        {
            title: "Hygienic & Safe",
            description:
                "We maintain the highest standards of cleanliness and food safety so you can enjoy worry-free.",
            icon: <HiSparkles className="w-8 h-8 text-blue-600" />,
            borderColor: "border-blue-200",
            bgColor: "bg-blue-100",
        },
    ]
}

export const CounterSectionData = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        // headingTitle: 'Why people choose us ?',
        // headingTitleSize: 'h2',
        // subheading: 'FEATURES',
        // description: 'Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.',
    },
    counterData: [
        {
            title: "2+",
            description: "Years Experience",
            icon: BsClockHistory,
            color: 'text-orange-500'
        },
        {
            title: "5K+",
            description: "Happy Customers",
            icon: PiUsersThree,
            color: 'text-orange-500'
        },
        {
            title: "200+",
            description: "Zomato Reviews",
            icon: FaQuoteLeft,
            color: 'text-orange-500'
        },
        {
            title: "4.8",
            description: "Average Rating",
            icon: FaRegStar,
            color: 'text-orange-500'
        },
    ]
}

export const OurMenuData = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        headingTitle: 'Fresh, Flavorful & Made Daily',
        headingTitleSize: 'h2',
        subheading: '',
        description: 'From crispy pani puri to flavorful chaat, our menu is crafted fresh daily to give you an authentic and unforgettable street food experience',
    },
    menuItems: [
        {
            id: 1,
            title: "Panipuri",
            desc: "Crispy puris filled with spicy mashed potatoes, tangy water, and bold Indian flavours that burst in every bite.",
            image: Panipuri,
            link: "https://zomato.onelink.me/xqzv/hlaoj90j"
        },
        {
            id: 2,
            title: "Dahipuri",
            desc: "Golden puris topped with creamy yogurt, sweet chutney, and aromatic spices for a perfect balance of flavours.",
            image: Dahipuri,
            link: ""
        },
        {
            id: 3,
            title: "Sevpuri",
            desc: "A crunchy chaat layered with chutneys, fresh veggies, and fine sev for a spicy-sweet street food delight.",
            image: Sevpuri,
            link: ""
        },
        {
            id: 4,
            title: "Thepla",
            desc: "Soft, spiced Gujarati flatbread made with fresh herbs—perfectly wholesome and full of traditional taste.",
            image: Thepla,
            link: "https://zomato.onelink.me/xqzv/dbowjllf"
        },
        {
            id: 5,
            title: "Churmu",
            desc: "Crushed puris mixed with onions, chutneys, and spices for a bold, crunchy chaat experience.",
            image: Churmu,
            link: "https://zomato.onelink.me/xqzv/5l6bgi6w"
        },
        {
            id: 6,
            title: "Sukha Bhel",
            desc: "A dry, crunchy mix of puffed rice, sev, peanuts, and spices—light, tasty, and addictive.",
            image: SukhaBhel,
            link: "https://zomato.onelink.me/xqzv/ayee016t"
        },
        {
            id: 7,
            title: "Chanabhel",
            desc: "Protein-rich boiled chana tossed with onions, spices, and chutneys for a healthy yet flavorful chaat.",
            image: Chanabhel,
            link: ""
        },
        {
            id: 8,
            title: "Wafer Chutney",
            desc: "Crispy potato wafers mixed with tangy chutneys and masala for a crunchy street-style snack.",
            image: WaferChutney,
            link: "https://zomato.onelink.me/xqzv/k6vl4jig"
        },
        {
            id: 9,
            title: "Dahimamri",
            desc: "Crunchy mamra combined with chilled yogurt and spices for a refreshing and light chaat option.",
            image: Dahimamari,
            link: ""
        },
        {
            id: 10,
            title: "Basket Chat",
            desc: "An edible crispy basket filled with layered chutneys, veggies, and chaat toppings—rich and indulgent.",
            image: BasketChat,
            link: ""
        },
        {
            id: 11,
            title: "Sukha Puri",
            desc: "Dry puris tossed with spicy chutneys and crunchy toppings for a quick, flavour-packed snack.",
            image: KoriPuri,
            link: "https://zomato.onelink.me/xqzv/oxrp3lam"
        },
        {
            id: 12,
            title: "Chana Bataka Dough",
            desc: "A hearty mix of boiled chana and potatoes blended with traditional spices for a comforting chaat treat.",
            image: ChanaBatakaDough,
            link: "https://zomato.onelink.me/xqzv/iwd2hjzl"
        },
        {
            id: 13,
            title: "Fudina Pani",
            desc: "Refreshing mint-based water with a spicy kick, perfect for elevating every pani puri bite.",
            image: FudinaBottle,
            link: "https://zomato.onelink.me/xqzv/q9ghsgzb"
        },
        {
            id: 14,
            title: "Khajur Imli Pani",
            desc: "Sweet and tangy tamarind-date water that adds a rich, mouth-watering flavour to chaat.",
            image: KhajurImliBottle,
            link: "https://zomato.onelink.me/xqzv/n6rpxszl"
        }
    ]
}

export const GalleryData = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        headingTitle: 'Captured Moments of Deliciousness',
        headingTitleSize: 'h2',
        subheading: '',
        description: 'Explore snapshots of our fresh ingredients, flavorful pani puri, and the smiles we serve every day.',
    },
    images: [
        exterior_1, interior_1, interior_2, OutdoorForGallery, exterior_2, exterior_3, interior_3, interior_2_png, OutdoorForGallery_2
    ]
}

export const NewsLetterData = {
    settings: {
        textAlignment: "left",
    },

    intoTextContent: {
        headingTitle: 'NEWSLETTER',
        headingTitleSize: 'h2',
        subheading: 'Subscribe',
        description: 'Subscribe to our newsletter to get some spicy & delicious updates on your email !',
    },
    backgroundImage: newsletterBG
}

export const footerData = {
    storeName: "Patnagar Panipuri",
    storeDescription: "The Taste of Patnagar",
    socialLinks: [
        {
            id: 0,
            name: "Zomato",
            icon: SiZomato,
            link: "https://zomato.onelink.me/xqzv/4euxppzx",
            colorClass: 'text-var[--color-6] hover:text-red-700'
        },
        {
            id: 1,
            name: "Instagram",
            icon: SiInstagram,
            link: "https://www.instagram.com/patnagarpanipuri?igsh=cDQ0azV0eHJ2ZnI2",
            colorClass: 'text-var[--color-6] hover:text-red-600'
        },
        {
            id: 2,
            name: "Facebook",
            icon: SiFacebook,
            link: "https://www.facebook.com/share/17gknnAFFo/",
            colorClass: 'text-var[--color-6] hover:text-blue-700'
        }
    ],
    quickLinks: {
        heading: 'Quick Links',
        links: [
            {
                id: 0,
                label: 'About Us',
                link: '#herobanner'
            },
            {
                id: 1,
                label: 'Gallery',
                link: '#gallery'
            },
            {
                id: 2,
                label: 'Reviews',
                link: '#testimonial'
            },
            {
                id: 3,
                label: 'Menu',
                link: '#menu'
            },
        ]
    },
    contactsLinks: {
        heading: `Contact Us`,
        links: [
            {
                id: 0,
                icon: FaMapMarkerAlt,
                link: `https://maps.app.goo.gl/zrSjtKW3hwEpUTDy9?g_st=aw`,
                label: `Unit No. G/2, Lal Bhuvan Complex,
                            Plot No. 493/2, near GH6 Pujya Mota
                            Circle, Sector 22, Gandhinagar,
                            Gujarat 382021`
            },
            {
                id: 1,
                icon: FaPhoneAlt,
                link: `tel:+919664864133`,
                label: `+91 96648 64133`
            },
            {
                id: 0,
                icon: FaEnvelope,
                link: `mailto:patnagarpanipuri@gmail.com`,
                label: `patnagarpanipuri@gmail.com`
            }
        ]
    },
    copyrightText: "2025 Patnagar Panipuri. All rights reserved."
};

export const VisitOurStoreDatas = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        // headingTitle: '',
        // headingTitleSize: '',
        // subheading: '',
        // description: '',
    },

    visitOurStoreData: {
        heading: "Contact Us",
        description: "Reach out to us through any of these channels. We're always happy to help!",
        contacts: [
            {
                icon: MdOutlineLocationOn,
                title: "Address",
                content: "Unit No. G/2, Lal Bhuvan Complex, Plot No. 493/2, near GH6 Pujya Mota Circle, Sector 22, Gandhinagar, Gujarat 382021",
                link: "https://maps.app.goo.gl/zrSjtKW3hwEpUTDy9?g_st=aw"
            },
            {
                icon: FiPhone,
                title: "Phone",
                content: "+91 9664864133",
                link: "tel:+91 96648 64133"
            },
            {
                icon: MdOutlineMail,
                title: "E-mail",
                content: "patnagarpanipuri@gmail.com",
                link: "mailto:patnagarpanipuri@gmail.com"
            },
            {
                icon: MdOutlineWatchLater,
                title: "Open Hours",
                content: "Everyday: 10:00 AM - 8:00 PM"
            },
        ]
    }
}
