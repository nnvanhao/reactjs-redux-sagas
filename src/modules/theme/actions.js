import { ACTION_TYPE } from '~/constants/actionTypes';

const handleChangeThemeMode = (mode) => {
    return { type: ACTION_TYPE.THEME_MODE.THEME_MODE, mode };
}

const handleChangeThemeModeSuccess = (mode) => {
    return { type: ACTION_TYPE.THEME_MODE.THEME_MODE_SUCCESS, mode };
}

export {
    handleChangeThemeMode,
    handleChangeThemeModeSuccess
}