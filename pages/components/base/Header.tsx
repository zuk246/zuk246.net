import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import Time from '../atom/Time';
import { calculateAge } from '@/utils/calculate';

export default function Header() {
    return (
        <Navbar
            shouldHideOnScroll
            height='4rem'
            className=' backdrop-blur-md bg-background/10'
            classNames={{
                wrapper: 'max-w-2xl px-0',
            }}
        >
            <NavbarContent justify='start'>
                <NavbarItem>
                    <Time />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <div className='text-tiny text-default-500'>
                        <p>{calculateAge('2007-12-02')} years old</p>
                    </div>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
