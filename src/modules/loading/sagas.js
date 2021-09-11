import { put, all, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPE } from '~/constants/actionTypes';
import { handleLoadingSuccess } from '~/modules/loading/actions';

function* handleLoading(isLoading) {
    yield put(handleLoadingSuccess(isLoading));
}

export default all([
    takeLatest(ACTION_TYPE.LOADING.LOADING, handleLoading),
]);
