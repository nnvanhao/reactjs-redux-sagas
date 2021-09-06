import { ACTION_TYPE } from '~/constants/actionTypes';

const handleGetDevToNews = () => {
    return { type: ACTION_TYPE.DEV_TO.GET_DEVTO_NEWS };
}

const handleGetDevToNewsSuccess = (users) => {
    return {
        type: ACTION_TYPE.DEV_TO.GET_DEVTO_NEWS_SUCCESS,
        users
    };
}

export {
    handleGetDevToNews,
    handleGetDevToNewsSuccess
}