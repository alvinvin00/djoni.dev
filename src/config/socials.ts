import {IconName} from "@fortawesome/fontawesome-svg-core";

type Social = {
    name: string;
    url: string;
    icon: IconName;
}

export const socials: Social[] = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/alvinvin00',
        icon: 'facebook'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/alvinvin00',
        icon: 'instagram'
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/alvinvin00',
        icon: 'linkedin'
    },
    {
        name: 'Steam',
        url: 'https://steamcommunity.com/id/alvinvin00/',
        icon: 'steam'
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com/alvinvin00',
        icon: 'twitter'
    },
]
