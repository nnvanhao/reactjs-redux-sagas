import produce from 'immer';
import { ACTION_TYPE } from '~/constants/actionTypes';

const INITIAL_STATE = {
    githubTrendingList: [],
};

const githubReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.GITHUB.GET_GITHUB_TRENDING_SUCCESS:
            return produce(state, draft => {
                const { githubTrendingList = [] } = action;
                draft.githubTrendingList = githubTrendingList;
            });

        default:
            return state;
    }
}

export default githubReducer;
