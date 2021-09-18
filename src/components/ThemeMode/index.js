import React, { useState, useEffect } from 'react';
import {
    Container,
    CheckboxInput,
    Label,
    BallMoon,
    BallSun
} from '~/components/ThemeMode/styles';
import { HiSun } from 'react-icons/hi';
import { BsMoon } from 'react-icons/bs';
import { handleGetItemLocalStorage, handleSetItemLocalStorage } from '~/storages/common';
import { LOCAL_STORAGE_KEY_TYPE, THEME_MODE_TYPE } from '~/constants/common';
import { useDispatch } from 'react-redux';
import { handleChangeThemeMode } from '~/modules/theme/actions';

export default function ThemeMode() {
    let [mode, setMode] = useState(THEME_MODE_TYPE.LIGHT);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageThemeMode = handleGetItemLocalStorage(LOCAL_STORAGE_KEY_TYPE.THEME_MODE);
        setMode(localStorageThemeMode);
        dispatch(handleChangeThemeMode(localStorageThemeMode));
    }, [])

    const handleChangeMode = () => {
        if (mode === THEME_MODE_TYPE.DARK) {
            mode = THEME_MODE_TYPE.LIGHT
        } else {
            mode = THEME_MODE_TYPE.DARK
        }

        setMode(mode);
        handleSetItemLocalStorage(LOCAL_STORAGE_KEY_TYPE.THEME_MODE, mode);
        dispatch(handleChangeThemeMode(mode));
    }

    return (
        <Container onClick={() => handleChangeMode()}>
            <CheckboxInput type="checkbox" />
            <Label>
                <BsMoon size={16} color={'#f1c40f'} />
                <HiSun size={16} color={'#f39c12'} />
                {mode === THEME_MODE_TYPE.DARK ? <BallSun /> : <BallMoon />}
            </Label>
        </Container>
    )
}
