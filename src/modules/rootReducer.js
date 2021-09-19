import { combineReducers } from 'redux';

import devTo from '~/modules/devto/reducers';
import github from '~/modules/github/reducers';
import loading from '~/modules/loading/reducers';
import themeMode from '~/modules/theme/reducers';

export default combineReducers({
    devTo,
    github,
    loading,
    themeMode
});
