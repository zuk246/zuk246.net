import Bluesky from '@/components/logos/bluesky';
import Note from '@/components/logos/note';
import { ReactNode } from 'react';
import { FaGithub, FaMastodon, FaTwitter } from 'react-icons/fa6';
import { SiBuymeacoffee, SiZenn } from 'react-icons/si';

export const sns: { name: string; icon: ReactNode; href: string }[] = [
    {
        name: 'Bluesky',
        icon: <Bluesky size={18} />,
        href: 'https://bsky.app/profile/zuk246.net',
    },
    {
        name: 'GitHub',
        icon: <FaGithub size={18} />,
        href: 'https://github.com/zuk246',
    },
    {
        name: 'Zenn',
        icon: <SiZenn size={18} />,
        href: 'https://zenn.dev/iizuka0000',
    },
    {
        name: 'Twitter',
        icon: <FaTwitter size={18} />,
        href: 'https://twitter.com/zuk246',
    },
    {
        name: 'Mastodon',
        icon: <FaMastodon size={18} />,
        href: 'https://mstdn.jp/@zuk246',
    },
    {
        name: 'Note',
        icon: <Note size={18} />,
        href: 'https://note.com/zuk246',
    },
    {
        name: 'Buy me a coffee',
        icon: <SiBuymeacoffee size={18} />,
        href: 'https://www.buymeacoffee.com/zuk246',
    },
];
