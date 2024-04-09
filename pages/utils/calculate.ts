import dayjs from 'dayjs';

export function calculateAge(birth: string) {
    const birthday = dayjs(birth);
    const age = dayjs().diff(birthday, 'year');
    return age;
}
