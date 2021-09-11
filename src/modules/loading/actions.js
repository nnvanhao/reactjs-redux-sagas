import { ACTION_TYPE } from '~/constants/actionTypes';

const handleLoading = (isLoading) => {
    return { type: ACTION_TYPE.LOADING.LOADING, isLoading };
}

const handleLoadingSuccess = (isLoading) => {
    return { type: ACTION_TYPE.LOADING.LOADING_SUCCESS, isLoading };
}

export {
    handleLoading,
    handleLoadingSuccess
}