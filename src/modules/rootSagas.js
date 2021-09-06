import { all } from 'redux-saga/effects';
import devto from '~/modules/devto/sagas';

export default function* rootSaga() {
    return yield all([
        devto,
    ]);
}
