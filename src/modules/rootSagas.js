import { all } from 'redux-saga/effects';
import devto from '~/modules/devto/sagas';
import github from '~/modules/github/sagas';
import loading from '~/modules/loading/sagas';
import themeMode from '~/modules/theme/sagas';

export default function* rootSaga() {
    return yield all([
        devto,
        github,
        loading,
        themeMode
    ]);
}
