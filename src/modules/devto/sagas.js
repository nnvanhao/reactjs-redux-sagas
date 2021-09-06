import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { ACTION_TYPE } from '~/constants/actionTypes';
import httpRequest from '~/services/api';
import { handleGetApiPath } from '~/utils/api';
import { API } from '~/services/app.routes';
import { handleGetDevToNewsSuccess } from '~/modules/devto/actions';

function* handleGetDevToNews() {
    const path = handleGetApiPath(API.GET_DEV_TO);
    const result = yield call(httpRequest.get, path);
    const { data = [] } = result;
    yield put(handleGetDevToNewsSuccess(data));
}

export default all([
    takeLatest(ACTION_TYPE.DEV_TO.GET_DEVTO_NEWS, handleGetDevToNews),
]);
