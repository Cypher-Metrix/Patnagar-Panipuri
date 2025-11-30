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

import herobanner1 from './herobanner-1.jpeg'
import herobanner2 from './herobanner-2.jpeg'
import herobanner3 from './herobanner-3.jpeg'

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