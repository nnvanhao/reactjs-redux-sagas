import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPE } from '~/constants/actionTypes';
import httpRequest from '~/services/api';
import { handleGetApiPath } from '~/utils/api';
import { API } from '~/services/app.routes';
import { handleGetGithubTrendingSuccess } from '~/modules/github/actions';

function* handleGetGithubTrending() {
    const path = handleGetApiPath(API.GET_GITHUB_TRENDING);
    const result = yield call(httpRequest.get, path);
    const { data = [] } = result;
    yield put(handleGetGithubTrendingSuccess(data));
}

export default all([
    takeLatest(ACTION_TYPE.GITHUB.GET_GITHUB_TRENDING, handleGetGithubTrending),
]);
