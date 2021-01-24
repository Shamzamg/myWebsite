import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
    
    name: 'Shamsdine ZIANI',
    title: 'IT Engineer student',
    birthday: '23th November 2000',
    email: 'shamsdine.ziani@etu.univ-lyon1.fr',
    address: '7 rue Dedieu, 69100 Villeurbanne',
    phone: '+33 7 69 64 59 61',

    socials: {
        Facebook: {
            link: '',
            text: 'shamsFacebook',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: 'https://twitter.com/ChiraiiTv',
            text: 'shamsTwitter',
            icon: <TwitterIcon />
        },
        Github: {
            link: '',
            text: 'shamsGitHub',
            icon: <LinkedInIcon />
        },
        Linkedin: {
            link: '',
            text: 'shamsLinkedIn',
            icon: <GitHubIcon />
        },
    },

    aboutme: 'I am currently a student blablablaaaaaaaaaaaa \n \n Yoooooo',

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
    ]

}