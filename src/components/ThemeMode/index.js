import React, { useState } from 'react';
import {
    Container,
    CheckboxInput,
    Label,
    BallMoon,
    BallSun
} from '~/components/ThemeMode/styles';
import { HiSun } from 'react-icons/hi';
import { BsMoon } from 'react-icons/bs';
import { handleSetItemLocalStorage } from '~/storages/common';
import { LOCAL_STORAGE_KEY_TYPE } from '~/constants/common';
import { useDispatch } from 'react-redux';
import { handleChangeThemeMode } from '~/modules/theme/actions';

export default function ThemeMode(props) {
    const [mode, setMode] = useState(true);
    const dispatch = useDispatch();

    const handleChangeMode = () => {
        setMode(!mode);
        handleSetItemLocalStorage(LOCAL_STORAGE_KEY_TYPE.THEME_MODE, mode);
        dispatch(handleChangeThemeMode(mode));
    }

    return (
        <Container onClick={() => handleChangeMode()}>
            <CheckboxInput type="checkbox" />
            <Label>
                <BsMoon size={16} color={'#f1c40f'} />
                <HiSun size={16} color={'#f39c12'} />
                {mode ? <BallSun /> : <BallMoon />}
            </Label>
        </Container>
    )
}
