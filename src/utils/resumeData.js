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

export default {
    
    name: 'Shamsdine ZIANI',
    title: 'CS Engineer student',
    birthday: '23th November 2000',
    email: 'shamsdine.ziani@etu.univ-lyon1.fr',
    address: '7 rue Dedieu, 69100 Villeurbanne',
    phone: '+33 7 69 64 59 61',

    socials: {
        Github: {
            link: 'https://github.com/Shamzamg',
            text: 'redirection',
            icon: <GitHubIcon />
        },
        Linkedin: {
            link: 'https://www.linkedin.com/in/shamsdine-ziani-75a97b151/',
            text: 'redirection',
            icon: <LinkedInIcon />
        },
    },

    aboutme: 'I am currently studying computer science at Polytech Lyon in my third year (graduation in 2023). \n  \n I am fascinated by data sciences and looking to learn more during an internship starting in August 2021 for a duration of 6 months to complete my engineer degree. I have done many projects during the past years in which i developed an analytic mind and a general knowledge of most computer languages.',

    works: [
        {
            title: 'Science teacher, Alpha education',
            date: 'MAY 2019 - JUNE 2019',
            description: 'Helping highschool students doing their homeworks, mainly in mathematics.'
        },
        {
            title: "Employee, McDonald's",
            date: 'JUNE 2019 - AUGUST 2019',
            description: 'Understanding the hard work as an employee on the field to be a better manager.'
        }
    ],

    education: [
        {
            title: 'Computer science engineer, Polytech Lyon',
            date: 'SEPTEMBER 2018 - JUNE 2023',
            description: 'Studying maths and learning general programming skills'
        },
        {
            title: 'Preparatory classes',
            date: 'SEPTEMBER 2017 - JUNE 2018',
            description: 'A year undergraduate intensive course in mathematics and physics'
        }
    ],

    services: [
        {
            title: 'Web Development',
            description: 'This website is made with ReactJS because it is the current leader JS framework but i would love to learn other frameworks',
            icon: <WebIcon />
        },
        {
            title: 'Branding Identity',
            description: 'I had some dropshipping websites and i am aware of marketings techniques and the importance of branding identity',
            icon: <AssignmentIndIcon />
        },
        {
            title: 'Data analysis',
            description: 'I had R classes to modelize data and i have a light knowledge in Python and Matlab (~2 years of practice)',
            icon: <WebIcon />
        }
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                'ReactJS',
                'Javascript',
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
                'PHP'
            ]
        },
        {
            title: 'DATABASES',
            description: [
                'MySQL',
                'Oracle',
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
            description: 'Pic is a university project made in 2019 in which people can share GIFs or images. Users can register and login, edit their profile and view other profiles. Each picture have a description and an associated theme. ',
            links: [
                {link: 'https://github.com/Shamzamg/mini-Pinterest', icon: <GitHubIcon />},
                {link: 'http://picsharegz.myartsonline.com/', icon: <LanguageIcon />}
            ]
        },
        {
            tag: 'Python',
            image: binance,
            title: 'Crypto pump',
            caption: 'Place an order fast based on a Telegram message',
            description: 'There are Telegram groups that pump cryptocurrency at a given hour. The program runs and parse the message of the group to get the cryptocurrency. It auto buy and sell the given amount in BTC and sell with the risk chosen.',
            links: [
                {link: 'https://github.com/Shamzamg/BinancePump/', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'C# ASP Core',
            image: vroom,
            title: 'Vroom',
            caption: 'Book a car online',
            description: 'This is a university project made with ASP .Net Core using MVC. It has a map with markers that shows all the cars available and allow user to book the car they want. Every data comes from the database.',
            links: [
                {link: 'https://github.com/Shamzamg/AutolibASPCore', icon: <GitHubIcon />}
            ]
        }
    ]

}