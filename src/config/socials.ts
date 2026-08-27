import {
  SiFacebook,
  SiInstagram,
  SiSteam,
  SiX,
} from '@icons-pack/react-simple-icons';
import {LinkIcon} from 'lucide-react';
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
    icon: LinkIcon,
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
    name: 'X',
    url: 'https://www.x.com/alvinvin00',
    icon: SiX,
    color: '#000000',
    title: 'Formerly Twitter',
  },
];
