import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { allFlattenRoutes as routes } from '~/routes';

const MainRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routes.map((route, index) => {
                    return !route.children ? (
                        <route.route
                            key={index}
                            path={route.path}
                            roles={route.roles}
                            exact={route.exact}
                            component={route.component}
                        ></route.route>
                    ) : null;
                })}
            </Switch>
        </Suspense>
    );
}

export default MainRouter;
