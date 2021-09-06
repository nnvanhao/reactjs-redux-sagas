import produce from 'immer';
import { ACTION_TYPE } from '~/constants/actionTypes';

const INITIAL_STATE = {
    users: [],
};

const devTo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.DEV_TO.GET_DEVTO_NEWS_SUCCESS:
            return produce(state, draft => {
                const { users = [] } = action;
                draft.users = users;
            });

        default:
            return state;
    }
}

export default devTo;
