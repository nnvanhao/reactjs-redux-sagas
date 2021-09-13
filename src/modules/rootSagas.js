import { all } from 'redux-saga/effects';
import devto from '~/modules/devto/sagas';
import loading from '~/modules/loading/sagas';
import themeMode from '~/modules/theme/sagas';

export default function* rootSaga() {
    return yield all([
        devto,
        loading,
        themeMode
    ]);
}
