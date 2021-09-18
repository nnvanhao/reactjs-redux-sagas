import React from 'react';
import { Wrapper } from '~/components/Container/styles';
import { ThemeProvider } from 'styled-components';
import {
    lightTheme,
    darkTheme
} from '~/styles/global';
import { useSelector } from 'react-redux';
import { THEME_MODE_TYPE } from '~/constants/common';

// cart is coming from mapStateToProps
export default function Container(props) {
    const { themeMode } = useSelector(state => state.themeMode);

    return (
        <Wrapper>
            <ThemeProvider theme={themeMode === THEME_MODE_TYPE.DARK ? darkTheme : lightTheme}>
                {props.children}
            </ThemeProvider>
        </Wrapper>
    )
}
