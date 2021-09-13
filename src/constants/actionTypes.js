const LOADING_PREFIX = '@loading/';
const THEME_MODE_PREFIX = '@themeMode/'
const DEV_TO_PREFIX = '@devto/';
const HACKER_NEWS_PREFIX = '@hackerNews/';

const ACTION_TYPE = {
    LOADING: {
        LOADING: `${LOADING_PREFIX}LOADING`,
        LOADING_SUCCESS: `${LOADING_PREFIX}LOADING_SUCCESS`,
    },
    THEME_MODE: {
        THEME_MODE: `${THEME_MODE_PREFIX}THEME_MODE`,
        THEME_MODE_SUCCESS: `${THEME_MODE_PREFIX}THEME_MODE_SUCCESS`,
    },
    DEV_TO: {
        GET_DEVTO_NEWS: `${DEV_TO_PREFIX}GET_DEVTO_NEWS`,
        GET_DEVTO_NEWS_SUCCESS: `${DEV_TO_PREFIX}GET_DEVTO_NEWS_SUCCESS`
    },
    HACKER_NEWS_PARENT: {
        GET_HACKER_NEWS: `${HACKER_NEWS_PREFIX}GET_HACKER_NEWS`
    }
}

export {
    ACTION_TYPE
}