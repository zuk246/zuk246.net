import Content from '@/components/atom/Content';
import shortURL from '@/utils/shortURL';
import { Image, Link } from '@nextui-org/react';
import dayjs from 'dayjs';
import Parser from 'rss-parser';

const RSS_FEED = 'https://zenn.dev/iizuka0000/feed?all=1';

export default async function BlogContent() {
    const feed = await (await new Parser().parseURL(RSS_FEED)).items;

    return (
        <Content
            title='Blog'
            subtitle='List of blogs I have written so far'
            className='mt-24'
        >
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                {feed.map((item, index) => (
                    <div key={index} className='w-full'>
                        <Link
                            isExternal
                            href={item.link}
                            color='foreground'
                            className='w-full'
                        >
                            <Image
                                src={item?.enclosure?.url ?? ''}
                                alt={item.title}
                                className='w-full'
                                isBlurred
                                radius='lg'
                            />
                        </Link>
                        <div className='flex justify-between text-default-500 text-tiny'>
                            <p>{dayjs(item.pubDate).format('YYYY/MM/DD')}</p>
                            <p>{shortURL(item.link ?? '')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Content>
    );
}
