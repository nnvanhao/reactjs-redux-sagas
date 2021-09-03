import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import '~/config/ReactotronConfig';

import GlobalStyle from '~/styles/global';
import Header from '~/components/Header';
import MainRouter from '~/mainRouter';

import history from '~/utils/history';
import store from '~/store';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <MainRouter />
                <GlobalStyle />
                <ToastContainer autoClose={3000} />
            </Router>
        </Provider>
    );
}

export default App;
