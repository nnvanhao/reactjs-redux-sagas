import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import '~/config/reactotronConfig';

import GlobalStyle from '~/styles/global';
import Header from '~/components/Header';
import MainRouter from '~/mainRouter';

import { history } from '~/utils/navigations';
import store from '~/store';

import Container from '~/components/Container';
import Loading from '~/components/Loading';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Container>
                    <Loading>
                        <Header />
                        <MainRouter />
                        <GlobalStyle />
                        <ToastContainer autoClose={3000} />
                    </Loading>
                </Container>
            </Router>
        </Provider>
    );
}

export default App;
