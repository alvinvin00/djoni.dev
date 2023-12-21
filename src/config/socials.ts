import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faInstagram, faLinkedin, faSteam, faTwitter} from "@fortawesome/free-brands-svg-icons";

type Social = {
    name: string;
    url: string;
    icon: IconDefinition;
    color: string;
    title?: string
}

export const socials: Social[] = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/alvinvin00',
        icon: faFacebook,
        color: 'blue',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/alvinvin00',
        icon: faInstagram,
        color: 'pink',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/alvinvin00',
        icon: faLinkedin,
        color: 'darkblue',
    },
    {
        name: 'Steam',
        url: 'https://steamcommunity.com/id/alvinvin00/',
        icon: faSteam,
        color: 'grey',
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com/alvinvin00',
        icon: faTwitter,
        color: 'lightblue',
        title: 'I refused to call it X'
    },
]
