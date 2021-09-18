import produce from 'immer';
import { ACTION_TYPE } from '~/constants/actionTypes';
import { THEME_MODE_TYPE } from '~/constants/common';

const INITIAL_STATE = {
    themeMode: THEME_MODE_TYPE.LIGHT,
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
