import { API } from "~/services/app.routes";

const handleGetApiPath = (route, params) => {
    return handleGetPath(route, params, API);
}

/**
 * pathsCollection: URL or API. See core/common/app.routes.js for details
 */
const getPathTemplate = (route, pathsCollection) => {
    if (route.parent) {
        let path = getPathTemplate(pathsCollection[route.parent], pathsCollection) + '/' + route.path;
        return path;
    }
    return route.path;
}

const handleGetPath = (route, params, pathsCollection) => {
    let path = getPathTemplate(route, pathsCollection);
    let queryArray = [];
    let routeParams = [];

    const rParams = path.match(/:\w+/g);
    if (rParams) {
        rParams.forEach(function (param) {
            routeParams.push(param.substring(1));
        });
    }

    if (params) {
        Object.keys(params).forEach(function (key) {
            if (routeParams.indexOf(key) > -1) {
                path = path.replace(':' + key, params[key]);
            } else if (params[key] !== null && params[key] !== undefined) {
                queryArray.push(key + '=' + params[key]);
            }
        });
        path += (queryArray.length ? '?' + queryArray.join('&') : '');
    }
    return path;
}

export {
    handleGetApiPath
}