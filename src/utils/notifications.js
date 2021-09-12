import toast from 'react-hot-toast';
import { notification } from '~/components/Notification';

const config = {
    position: 'top-right',
    duration: 3000,
    // Aria
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
    },
    style: {
        // minWidth: '250px',
    },
}

const success = (message) => {
    toast.error(message, config);
}

const custom = (title, description, type) => {
    toast.custom(evt => notification(evt, title, description, type), config);
}

export {
    success,
    custom
}