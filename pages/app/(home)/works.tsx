import Content from '@/components/atom/Content';
import { Works } from '@/types/cms';
import {
    Button,
    Card,
    CardFooter,
    Image,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@nextui-org/react';
import dayjs from 'dayjs';
import { FaInfo, FaRegClock } from 'react-icons/fa';
import { FaArrowUpRightFromSquare, FaRegCircleDot, FaT } from 'react-icons/fa6';

const API = 'https://zuk246.microcms.io/api/v1/works';
const headers = {
    'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY ?? '',
};

export default async function WorksContent() {
    const works = await fetch(API, { cache: 'force-cache', headers }).then(
        (res) => res.json() as Works
    );

    if (!works.contents) return;

    return (
        <Content
            title='作品'
            subtitle='これまでに開発したアプリや拡張機能'
            className='mt-24'
        >
            <div className='grid grid-cols-1 gap-6'>
                {works.contents.map((work) => (
                    <Card
                        key={work.id}
                        isFooterBlurred
                        radius='lg'
                        className='border-none'
                    >
                        <Image
                            src={work.image.url}
                            alt={work.title}
                            width={1200}
                            height={900}
                            className='w-full aspect-[3/2] object-cover rounded-large cursor-pointer'
                        />{' '}
                        <CardFooter className='justify-between bg-white/40 overflow-hidden py-1 absolute rounded-large bottom-2 w-[calc(100%_-_16px)] shadow-small left-2 z-10 backdrop-blur-md'>
                            <div className='flex gap-2 items-center'>
                                <Image
                                    src={work.icon.url}
                                    alt={work.title}
                                    width={32}
                                    height={32}
                                    className='rounded-full w-6 h-6'
                                />
                                <p className='text-sm font-semibold'>
                                    {work.title}
                                </p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <p className='text-tiny hidden sm:block'>
                                    {dayjs(work.release).format('YYYY/MM/DD')}
                                </p>
                                <Popover placement='top'>
                                    <PopoverTrigger>
                                        <Button
                                            size='sm'
                                            isIconOnly
                                            radius='lg'
                                            className='text-tiny text-white bg-black/20'
                                        >
                                            <FaInfo size={10} />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <ul className='p-2 flex flex-col gap-2'>
                                            <li className='flex items-center gap-2'>
                                                <FaRegCircleDot />
                                                <div>
                                                    {work.running
                                                        ? 'アクティブ'
                                                        : '非アクティブ'}
                                                </div>
                                            </li>
                                            <li className='flex items-center gap-2'>
                                                <FaRegClock />
                                                <div>
                                                    {dayjs(work.release).format(
                                                        'YYYY/MM/DD'
                                                    )}{' '}
                                                    にリリース
                                                </div>
                                            </li>
                                            <li className='flex items-center gap-2'>
                                                <FaT />
                                                <div>{work.caption}</div>
                                            </li>
                                        </ul>
                                    </PopoverContent>
                                </Popover>
                                <Button
                                    className='text-tiny text-white bg-black/20'
                                    variant='flat'
                                    color='default'
                                    radius='lg'
                                    size='sm'
                                    endContent={
                                        <FaArrowUpRightFromSquare size={10} />
                                    }
                                    as={Link}
                                    href={work.url}
                                    isExternal
                                >
                                    Visit
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Content>
    );
}
