import React from 'react';
import { Wrapper } from '~/components/Container/styles';
import { ThemeProvider } from 'styled-components';
import {
    lightTheme,
    darkTheme
} from '~/styles/global';
import { useSelector } from 'react-redux';

// cart is coming from mapStateToProps
export default function Container(props) {
    const { themeMode } = useSelector(state => state.themeMode);

    return (
        <Wrapper>
            <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
                {props.children}
            </ThemeProvider>
        </Wrapper>
    )
}
