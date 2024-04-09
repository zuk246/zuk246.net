import { intro } from '@/store/intro';
import { sns } from '@/store/sns';
import { Button, Link as NextUILink } from '@nextui-org/react';
import Image from 'next/image';

export default function TopContent() {
    return (
        <div>
            <div>
                <div className='flex items-center gap-2'>
                    <Image
                        src='/icon.png'
                        alt='icon'
                        width={50}
                        height={50}
                        className='rounded-full w-12 h-12'
                    />
                    <h1 className='text-4xl font-bold'>zuk246</h1>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex gap-2'>
                    {sns.map((item, index) => (
                        <Button
                            isIconOnly
                            radius='full'
                            as={NextUILink}
                            href={item.href}
                            isExternal
                            key={index}
                            color='primary'
                            variant='flat'
                        >
                            {item.icon}
                        </Button>
                    ))}
                </div>
                <div className='mt-6'>
                    {intro.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
