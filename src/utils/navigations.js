import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const redirectTo = (targetRoute) => {
    history.push(targetRoute);
}

export {
    history,
    redirectTo
}