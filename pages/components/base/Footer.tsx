import dayjs from 'dayjs';
import { FaRegCopyright } from 'react-icons/fa';
import { FaRegFaceGrinBeam } from 'react-icons/fa6';

export default function Footer() {
    return (
        <div className='w-full flex py-2 justify-between max-w-2xl mx-auto px-4'>
            <div className='flex gap-1 items-center text-default-500'>
                <FaRegCopyright size={12} />
                <p className='text-tiny'>{dayjs().format('YYYY')} zuk246</p>
            </div>
            <div className='text-default-500 flex gap-1 items-center'>
                <FaRegFaceGrinBeam size={12} />
                <p className='text-tiny'>Thanks for visiting.</p>
            </div>
        </div>
    );
}
