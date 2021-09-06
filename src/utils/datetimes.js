import dayjs from 'dayjs';

const handleGetTimeZone = () => {
    return dayjs().utcOffset / 60;
}

export {
    handleGetTimeZone
}