import {SiFacebook, SiInstagram, SiLinkedin, SiSteam, SiTwitter,} from '@icons-pack/react-simple-icons';
import type {ComponentType, SVGProps} from 'react';

type Social = {
    id: string;
    name: string;
    url: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    color: string;
    title?: string;
};

export const socials: Social[] = [
    {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/alvinvin00',
        icon: SiFacebook,
        color: '#1877F2',
    },
    {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/alvinvin00',
        icon: SiInstagram,
        color: '#E4405F',
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alvinvin00',
        icon: SiLinkedin,
        color: '#0A66C2',
    },
    {
        id: 'steam',
        name: 'Steam',
        url: 'https://steamcommunity.com/id/alvinvin00/',
        icon: SiSteam,
        color: '#171A21',
    },
    {
        id: 'twitter',
        name: 'Twitter',
        url: 'https://www.twitter.com/alvinvin00',
        icon: SiTwitter,
        color: '#1DA1F2',
        title: 'I refused to call it X',
    },
];
