import axios from 'axios';
import { METHOD, API_SERVICE_TYPE } from '~/constants/api';
import config from '~/config';
import { handleGenerateNonce, handleGenerateSignature, handleGenerateTimestamp } from '~/utils/securities';
import { handleGetTimeZone } from '~/utils/datetimes';
import store from '~/store';
import { handleLoading } from '~/modules/loading/actions';
import * as notification from '~/utils/notifications';
import { NOTIFICATION_TYPE } from '~/constants/common';

// Creat new instance
function HttpRequest() { }

// Get api url by type
const handleGetUrl = (url, type = API_SERVICE_TYPE.API_URL_FIRST_SERVER) => {
    return `${config[type]}${url}`;
}

const handleGetHeaders = (method, url, body = {}, user = {}) => {
    let headers, token, secret;

    if (body.data && body.data.username && body.data.password) {
        token = body.data.username;
        secret = body.data.password;
    } else {
        token = user ? user.token : null;
        secret = user ? user.secret : null;
    }

    headers = handleGetSecurityHeaders(method, url, body, token, secret);
    headers['Accept'] = 'application/json';
    headers['Cache-Control'] = 'no-cache';
    headers['Content-Type'] = 'application/json';
    headers['Accept-Language'] = 'da, en-gb;1=0.8, en;q=0.7';
    headers['Authorization'] = 'Bearer ' + token;
    headers['TimeZone'] = handleGetTimeZone();
    
    headers['x-rapidapi-host'] = 'github-trending.p.rapidapi.com';
    headers['x-rapidapi-key'] = '644cb23954mshac3995dc4947c0ap1ecec8jsn648a840acf27';

    return headers;
}

const sortObject = (obj) => {
    let keys = Object.keys(obj).sort(),
        sortedObj = {};

    for (let i in keys) {
        if (keys.hasOwnProperty(i)) {
            if (obj[keys[i]] === null) {
                sortedObj[keys[i]] = obj[keys[i]];
            }
            else {
                if (Object.prototype.toString.call(obj[keys[i]]) === "[object Array]" || typeof obj[keys[i]] === "object") {
                    obj[keys[i]] = sortObject(obj[keys[i]]);
                }
                sortedObj[keys[i]] = obj[keys[i]];
            }
        }
    }

    return sortedObj;
}

function handleGetSecurityHeaders(method, path, body, token, secret) {
    const bodyDataDeep = JSON.parse(JSON.stringify(body));
    const bodyDataClone = JSON.stringify(sortObject(bodyDataDeep));
    let nonce = handleGenerateNonce();
    let timeStamp = handleGenerateTimestamp();
    let signature = handleGenerateSignature(method, path, timeStamp, nonce, bodyDataClone, token, secret);

    return {
        Signature: signature,
        Timestamp: timeStamp,
        Nonce: nonce
    };
}

const request = async (method, url, body, isLoadingScreen = true, type, isUpload = false) => {
    let urlEncoded = encodeURI(url);
    let headers = handleGetHeaders(method, urlEncoded, body, null);
    let apiUrl = handleGetUrl(urlEncoded, type);

    const options = {
        method,
        mode: 'cors',
        headers,
        timeout: 60000, // 60s
    };

    if (body && isUpload) {
        options.data = body;
        delete options.headers['Content-Type'];
    } else if (body) {
        options.data = JSON.stringify(body);
    }

    // Handle show loading full screen
    isLoadingScreen && store.dispatch(handleLoading(true));

    return new Promise((resolve, reject) => {
        axios
            .request({
                url: apiUrl,
                timeout: 60000,
                ...options,
            })
            .then(response => {
                // Handle hide loading full screen
                isLoadingScreen && store.dispatch(handleLoading(false));

                const { data, status } = response;
                return resolve({ data, status });
            })
            .catch(error => {
                isLoadingScreen && store.dispatch(handleLoading(false));

                if (error.response) {
                    // The request was made and the server responded with a status code
                    const { data: errorData, status } = error.response;
                    return resolve({ ...errorData, status });
                } else if (error.request) {
                    // Show notification
                    notification.custom('Internal Server Error', error.message, NOTIFICATION_TYPE.ERROR);

                    return resolve({ status: 408, error: { message: 'ECONNABORTED' } });
                } else {
                    // Show notification
                    notification.custom('Internal Server Error', error.message, NOTIFICATION_TYPE.ERROR);

                    // Something happened in setting up the request that triggered an Error
                    reject(error);
                }
            });
    });
}

HttpRequest.get = (url, isLoadingScreen, type) => {
    const method = METHOD.GET;
    return request(method, url, {}, isLoadingScreen, type);
};

HttpRequest.post = (url, body, isLoadingScreen, type) => {
    const method = METHOD.POST;
    return request(method, url, body, isLoadingScreen, type);
};

HttpRequest.postFormData = (url, formData, isLoadingScreen, type) => {
    const method = METHOD.POST;
    return request(method, url, formData, isLoadingScreen, type, true);
};

HttpRequest.put = (url, body, isLoadingScreen, type) => {
    const method = METHOD.PUT;
    return request(method, url, body, isLoadingScreen, isLoadingScreen, type);
};

HttpRequest.delete = (url, body, isLoadingScreen, type) => {
    const method = METHOD.DELETE;
    return request(method, url, body, isLoadingScreen, type);
};

export default HttpRequest;