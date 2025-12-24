import { FaAward, FaFireFlameCurved, FaRegClock } from 'react-icons/fa6'
import herobanner1 from './herobanner-1.jpeg'
import herobanner2 from './herobanner-2.jpeg'
import herobanner3 from './herobanner-3.jpeg'
import newsletterBG from './newsletter-bg.png'
import { PiUsersThree } from 'react-icons/pi'
import { CiHeart } from 'react-icons/ci'
import { HiSparkles } from 'react-icons/hi'
import { MdMenuBook } from 'react-icons/md'
import { BsClockHistory } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa'
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import { SiZomato, SiFacebook, SiInstagram } from "react-icons/si";

import itm1 from "./itm1.png"
import itm2 from "./itm2.png"
import itm3 from "./itm3.png"
import itm4 from "./itm4.png"


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
        richTextContent: '<p>Experience the authentic taste of crispy puris filled with tangy, spicy water and delicious fillings. Made fresh daily with love!</p>'
    },
    introLinks: [
        {
            id: 1,
            label: 'Explore More',
            link: '#contact-us'
        },
        {
            id: 2,
            label: 'Contact Us',
            link: '#contact-us'
        }
    ],
    shopData: {
        openingHours: {
            openTime: '10:00 AM',
            closeTime: '08:00 PM',
        },
        location: 'Gandhinagar, Gujarat'
    },
    banners: [
        {
            id: 1,
            title: 'Sample 1',
            url: herobanner1
        },
        {
            id: 2,
            title: 'Sample 2',
            url: herobanner2
        },
        {
            id: 3,
            title: 'Sample 3',
            url: herobanner3
        },
    ]
}

export const TestimonialData = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        headingTitle: 'Why people choose us ?',
        headingTitleSize: 'h2',
        subheading: 'FEATURES',
        description: 'Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.',
    },

    testimonialsData: [
        {
            review: "Lorem ipsum dolor sit amet consectetur...",
            author: "Karan Kumbhare",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1653771926533-380817d3e7b3?w=500"
        },
        {
            review: "Suspendisse aliquet tellus adipiscing...",
            author: "Aman Singh",
            rating: 5,
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500"
        },
        {
            review: "Dignissim nunc facilisi pretium id...",
            author: "Riya Das",
            rating: 4,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
        },
        {
            review: "Dignissim nunc facilisi pretium id...",
            author: "Riya Das",
            rating: 4,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
        },
        {
            review: "Dignissim nunc facilisi pretium id...",
            author: "Riya Das",
            rating: 4,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
        },
        {
            review: "Dignissim nunc facilisi pretium id...Dignissim nunc facilisi pretium id...Dignissim nunc facilisi pretium id...Dignissim nunc facilisi pretium id...",
            author: "Riya Das",
            rating: 4,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
        },
    ]
}

export const FeatureSectionData = {
    settings: {
        textAlignment: "center",
    },

    intoTextContent: {
        headingTitle: 'Why people choose us ?',
        headingTitleSize: 'h2',
        subheading: 'FEATURES',
        description: 'Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.',
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
            title: "10+",
            description: "Years Experience",
            icon: BsClockHistory,
            color: 'text-orange-500'
        },
        {
            title: "10K+",
            description: "Happy Customers",
            icon: PiUsersThree,
            color: 'text-orange-500'
        },
        {
            title: "20+",
            description: "Menu Items",
            icon: MdMenuBook,
            color: 'text-orange-500'
        },
        {
            title: "4.9",
            description: "Average Rating",
            icon: FaRegStar,
            color: 'text-orange-500'
        },
    ]
}

export const footerData = {
    storeName: "Panipuri Store",
    storeDescription: "Serving authentic and delicious panipuri since 2023.",
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
            link: "https://zomato.onelink.me/xqzv/4euxppzx",
            colorClass: 'text-var[--color-6] hover:text-red-600'
        },
        {
            id: 2,
            name: "Facebook",
            icon: SiFacebook,
            link: "https://zomato.onelink.me/xqzv/4euxppzx",
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
                label: 'Menus',
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

export const menuItems = [
    {
        id: 1,
        title: "Delicious Noodles",
        desc: "Flour, Sugar, Butter, Milk, Eggs, Baking Powder",
        image: itm1
    },
    {
        id: 2,
        title: "Healthy Pasta",
        desc: "Baking Powder, Vanilla, Milk, Caster Sugar",
        image: itm2,
    },
    {
        id: 3,
        title: "Spicy Noodles",
        desc: "Berries, Sugar, Lemon Juice, Cornstarch",
        image: itm3,
    },
    {
        id: 4,
        title: "Salmon Sushi",
        desc: "Ramen always consists of soup and noodles",
        image: itm4
    },
];