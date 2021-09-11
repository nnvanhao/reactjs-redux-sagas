import produce from 'immer';
import { ACTION_TYPE } from '~/constants/actionTypes';

const INITIAL_STATE = {
    isLoading: false,
};

const devTo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOADING.LOADING_SUCCESS:
            return produce(state, draft => {
                draft.isLoading = action.isLoading.isLoading;
            });

        default:
            return state;
    }
}

export default devTo;
