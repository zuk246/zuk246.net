import {
    Image as NextUIImage,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link as NextUILink,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <Navbar
            shouldHideOnScroll
            height='8rem'
            className=' backdrop-blur-md bg-background/10'
            classNames={{
                wrapper: 'max-w-3xl px-0',
            }}
        >
            <NavbarBrand>
                <NextUILink
                    as={Link}
                    href='/'
                    color='foreground'
                    className='flex items-center gap-2'
                >
                    <NextUIImage
                        as={Image}
                        src='/icon.png'
                        width={120}
                        height={120}
                        alt=''
                        className='w-10 h-10 rounded-full'
                    />
                    <p className='font-bold'>zuk246</p>
                </NextUILink>
            </NavbarBrand>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <NextUILink
                        as={Link}
                        href='/about'
                        color='foreground'
                        className='text-sm'
                        underline='hover'
                    >
                        Introduction
                    </NextUILink>
                </NavbarItem>
                <NavbarItem>
                    <NextUILink
                        as={Link}
                        href='/about'
                        color='foreground'
                        className='text-sm'
                        underline='hover'
                    >
                        Skill
                    </NextUILink>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
