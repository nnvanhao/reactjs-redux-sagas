import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { handleGetLoggedInUser, isUserAuthenticated } from '~/utils/auths';
import { ROUTE } from '~/constants/routes';

const HomePage = React.lazy(() => import('~/pages/Home'));
const CartPage = React.lazy(() => import('~/pages/Cart'));

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (!isUserAuthenticated()) {
                return (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                );
            }
            const loggedInUser = handleGetLoggedInUser();
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                return <Redirect to={{ pathname: "/" }} />;
            }
            return <Component {...props} />;
        }}
    />
);

const flattenRoutes = (routes) => {
    let flatRoutes = [];
    routes = routes || [];
    routes.forEach((item) => {
        flatRoutes.push(item);
        if (typeof item.children !== "undefined") {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

const homeRoute = {
    path: ROUTE.HOME,
    exact: true,
    component: HomePage,
    route: PrivateRoute
};

const cartRoute = {
    path: "/cart",
    exact: true,
    component: CartPage,
    route: PrivateRoute
};

const allRoutes = [
    homeRoute,
    cartRoute
];

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allFlattenRoutes };