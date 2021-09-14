import EnglishIcon from '~/assets/icons/english_ic.svg';
import VietnamIcon from '~/assets/icons/vietnam_ic.svg';

const NOTIFICATION_TYPE = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
    WARNING: 'WARNING'
}

const LOCAL_STORAGE_KEY_TYPE = {
    THEME_MODE: 'THEME_MODE',
    CURRENT_LANGUAGE: 'CURRENT_LANGUAGE',
}

const LANGUAGES = [
    {
        key: 'en',
        value: 'English',
        flag: EnglishIcon
    },
    {
        key: 'vi',
        value: 'Vietnamese',
        flag: VietnamIcon
    }
]


export {
    NOTIFICATION_TYPE,
    LOCAL_STORAGE_KEY_TYPE,
    LANGUAGES
}