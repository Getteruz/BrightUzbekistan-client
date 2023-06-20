import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../icons"

export const categories = [
    {
        id: 2,
        link: '/journal',
        label: 'Электронный журнал',
        activeColor: ''
    },
    {
        id: 3,
        link: '/about-project',
        label: 'О проекте',
        activeColor: ''
    },
    {
        id: 4,
        link: '/ads-in-site',
        label: 'Реклама на сайте',
        activeColor: ''
    },
    {
        id: 5,
        link: '/contact-us',
        label: 'Связатся с нами',
        activeColor: ''
    },
    // {
    //     id: 8,
    //     link: '/sport-news',
    //     label: 'Спорт',
    //     activeColor: ''
    // },
    // {
    //     id: 6,
    //     link: '/business-news',
    //     label: 'Бизнес',
    //     activeColor: ''
    // },
    // {
    //     id: 7,
    //     link: '/society-news',
    //     label: 'Общество',
    //     activeColor: ''
    // },
]

export const contacts = [
    {
        id: 10,
        link: 'tel:+998900110000',
        label: '+998 90 011 00 00',
    },
    {
        id: 11,
        link: 'https://www.youtube.com/channel/UCqKubJUkz9N36NhO92Pq7-g',
        icon: <YoutubeIcon />,
        ariaLabel: 'Bright Uzbekistan page on Youtube',
    },
    {
        id: 12,
        link: 'https://twitter.com/brightuzb',
        icon: <TwitterIcon />,
        ariaLabel: 'Bright Uzbekistan page on Twitter',
    },
    {
        id: 13,
        link: 'https://www.facebook.com/bright.uzbekistan',
        icon: <FacebookIcon />,
        ariaLabel: 'Bright Uzbekistan page on Facebook',
    },
    {
        id: 14,
        link: 'https://www.instagram.com/bright_uzbekistan/',
        icon: <InstagramIcon />,
        ariaLabel: 'Bright Uzbekistan page on Instagram',
    },
]