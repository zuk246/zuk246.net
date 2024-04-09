import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <Image
                src='/not-found.svg'
                alt='404 Not Found'
                width={1200}
                height={900}
                className='w-full h-auto p-2'
            />
        </div>
    );
}
