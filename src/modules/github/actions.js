import { ACTION_TYPE } from '~/constants/actionTypes';

const handleGetGithubTrending = () => {
    return { type: ACTION_TYPE.GITHUB.GET_GITHUB_TRENDING };
}

const handleGetGithubTrendingSuccess = (githubTrendingList) => {
    return {
        type: ACTION_TYPE.GITHUB.GET_GITHUB_TRENDING_SUCCESS,
        githubTrendingList
    };
}

export {
    handleGetGithubTrending,
    handleGetGithubTrendingSuccess
}