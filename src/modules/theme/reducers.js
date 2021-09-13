import produce from 'immer';
import { ACTION_TYPE } from '~/constants/actionTypes';

const INITIAL_STATE = {
    themeMode: false,
};

const devTo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.THEME_MODE.THEME_MODE_SUCCESS:
            return produce(state, draft => {
                draft.themeMode = action.mode.mode;
            });

        default:
            return state;
    }
}

export default devTo;
