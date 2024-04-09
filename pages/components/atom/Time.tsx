'use client';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';

export default function Time() {
    const [time, setTime] = useState<string>('00:00:00');

    useEffect(() => {
        dayjs.extend(utc);
        dayjs.extend(timezone);
        const interval = setInterval(() => {
            setTime(dayjs().tz('Asia/Tokyo').format('HH:mm:ss'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex items-center text-default-500 gap-3 text-tiny'>
            <div className='flex gap-1 items-center font-semibold'>
                <FaRegClock size={12} />
                <p>Japan</p>
            </div>
            <p>{time}</p>
        </div>
    );
}
