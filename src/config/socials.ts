import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faInstagram, faLinkedin, faSteam, faTwitter} from "@fortawesome/free-brands-svg-icons";

type Social = {
    id: string;
    name: string;
    url: string;
    icon: IconDefinition;
    color: string;
    title?: string
}

export const socials: Social[] = [
    {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/alvinvin00',
        icon: faFacebook,
        color: 'blue',
    },
    {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/alvinvin00',
        icon: faInstagram,
        color: 'pink',
    },
    {
        id: 'linkedin',
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/alvinvin00',
        icon: faLinkedin,
        color: 'darkblue',
    },
    {
        id: 'steam',
        name: 'Steam',
        url: 'https://steamcommunity.com/id/alvinvin00/',
        icon: faSteam,
        color: 'grey',
    },
    {
        id: 'twitter',
        name: 'Twitter',
        url: 'https://www.twitter.com/alvinvin00',
        icon: faTwitter,
        color: 'lightblue',
        title: 'I refused to call it X'
    },
]
