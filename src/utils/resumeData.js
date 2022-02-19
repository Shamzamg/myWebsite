import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import vroom from '../assets/images/vroom.png';
import pic from '../assets/images/pic.png';
import binance from '../assets/images/binance.jpg';
import portfolio from '../assets/images/portfolio.png';
import binpacking from '../assets/images/binpacking.png';
import gyromite from '../assets/images/gyromite.png';

export default {
    
    name: 'Shamsdine ZIANI',
    title: 'CS Engineer student',
    birthday: '23th November 2000',
    email: 'shamsdine.ziani@etu.univ-lyon1.fr',
    address: '19 rue Willy Brandt, 69100 Villeurbanne',
    phone: '+33 7 69 64 59 61',

    socials: {
        Github: {
            link: 'https://github.com/Shamzamg',
            text: 'Github',
            icon: <GitHubIcon />
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/shamsdine-ziani-75a97b151/',
            text: 'LinkedIn',
            icon: <LinkedInIcon />
        },
    },

    aboutme: 'I am currently studying computer science at Polytech Lyon in the first year of my masters degree. \n  \n I am fascinated by information technology and blockchain. I am looking to learn more during an internship starting in February 2023 for a duration of 6 months. I have done many projects during the past years through which I developed an analytical mind and a general knowledge of most computer languages.',

    works: [
        {
            title: 'Science teacher, Alpha education',
            date: 'MAY 2019 - JUNE 2019',
            description: 'Helping highschool students doing their homeworks, mainly in mathematics.'
        },
        {
            title: "Intern, Credit Agricole",
            date: 'SEPTEMBER 2021 - FEBRUARY 2022',
            description: 'Full stack development of applications for the different units of the company.'
        }
    ],

    education: [
        {
            title: 'Computer science engineer, Polytech Lyon',
            date: 'SEPTEMBER 2018 - JUNE 2023',
            description: 'Studying maths and learning general programming skills.'
        },
        {
            title: 'Preparatory classes',
            date: 'SEPTEMBER 2017 - JUNE 2018',
            description: 'A year undergraduate intensive course in mathematics and physics.'
        }
    ],

    services: [
        {
            title: 'Web Development',
            description: 'I developed many websites during the past years and love to discover new frameworks.',
            icon: <WebIcon />
        },
        {
            title: 'Branding Identity',
            description: 'I am aware of marketing techniques and the importance of branding identity for a company.',
            icon: <AssignmentIndIcon />
        },
        {
            title: 'Data analysis',
            description: 'I had R classes through which I learned to modelize data and I have a good knowledge in Python and Matlab.',
            icon: <WebIcon />
        }
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                'ReactJS',
                'Bootstrap',
                'Material UI'
            ]
        },
        {
            title: 'BACK-END',
            description: [
                'NodeJS',
                'C# ASP.Core',
                'Python',
                'PHP',
                'Express'
            ]
        },
        {
            title: 'DATABASES',
            description: [
                'Oracle',
                'SQL Server',
                'MongoDB',
                'phpMyAdmin'
            ]
        },
        {
            title: 'WORK CONTROL',
            description: [
                'Git',
                'Agile',
                'UML'
            ]
        }
    ],

    contactinformation: [
        {
            title: 'Adress',
            info: '7 rue Dedieu, 69100 VILLEURBANNE'
        },
        {
            title: 'Phone',
            info: '+33 7 69 64 59 61'
        },
        {
            title: 'Email',
            info: 'shamsdine.ziani@etu.univ-lyon1.fr'
        }
    ],

    projects: [
        {
            tag: 'PHP',
            image: pic,
            title: 'mini-Pinterest',
            caption: 'Users can share pictures online',
            description: 'Pic is a university project made in 2019 in which people can share GIFs or images. Users can register and login, edit their profiles and view others profiles. Each picture has a description and an associated theme. ',
            links: [
                {link: 'https://github.com/Shamzamg/mini-Pinterest', icon: <GitHubIcon />},
                {link: 'http://picsharegz.myartsonline.com/', icon: <LanguageIcon />}
            ]
        },
        {
            tag: 'React JS',
            image: binpacking,
            title: '3DBinPacking',
            caption: 'Fit boxes in a container in the smartest way',
            description: 'This project allows users to fit boxes in a container recursively in the best way. It is an NP-problem.',
            links: [
                {link: 'https://github.com/Shamzamg/3DBinPacking', icon: <GitHubIcon />},
                {link: 'https://hidden-ocean-77913.herokuapp.com/', icon: <LanguageIcon />}
            ]
        },
        {
            tag: 'Java',
            image: gyromite,
            title: 'Gyromite',
            caption: 'Copy of the 1985 Nintendo Gyromite done in Java',
            description: 'You control the professor Hector and have to collect all the radishes under the given time. There are multiple levels to finish but be careful: a collision with a Smick could be fatal ...',
            links: [
                {link: 'https://github.com/Shamzamg/Gyromite', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'Python',
            image: binance,
            title: 'Crypto pump',
            caption: 'Place an order fast based on a Telegram message',
            description: 'This program runs and parses the message of a Telegram group to get the cryptocurrency (in a pump & dump context). It buys and sells on Binance the given amount of BTC. The sell is made with the chosen risk.',
            links: [
                {link: 'https://github.com/Shamzamg/BinancePump/', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'C# ASP Core',
            image: vroom,
            title: 'Autolib',
            caption: 'Book a car online',
            description: 'This is a university project made with ASP .Net Core using MVC. It has a map with markers that shows all the cars available and allows the user to book the car they want. Every data comes from the database.',
            links: [
                {link: 'https://github.com/Shamzamg/AutolibASPCore', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'React JS',
            image: portfolio,
            title: 'Portfolio website',
            caption: 'Introduce yourself with a website',
            description: 'I wanted to introduce myself and show my frontend skills. This website do both. I use MaterialUI for the CSS and the contact functionality uses EmailJS. ',
            links: [
                {link: 'https://github.com/Shamzamg/myWebsite', icon: <GitHubIcon />}
            ]
        }
    ]

}