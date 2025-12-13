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

import { FaAward, FaFireFlameCurved, FaRegClock } from 'react-icons/fa6'
import herobanner1 from './herobanner-1.jpeg'
import herobanner2 from './herobanner-2.jpeg'
import herobanner3 from './herobanner-3.jpeg'
import { PiUsersThree } from 'react-icons/pi'
import { CiHeart } from 'react-icons/ci'
import { HiSparkles } from 'react-icons/hi'

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