import { put, all, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPE } from '~/constants/actionTypes';
import { handleChangeThemeModeSuccess } from '~/modules/theme/actions';

function* handleChangeThemeMode(mode) {
    yield put(handleChangeThemeModeSuccess(mode));
}

export default all([
    takeLatest(ACTION_TYPE.THEME_MODE.THEME_MODE, handleChangeThemeMode),
]);
