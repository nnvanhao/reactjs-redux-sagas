import { Cookies } from "react-cookie";
const cookies = new Cookies();

const handleSetCookies = (key, data) => {
    cookies.set(key, data, { path: "/" });
};

const handleGetCookies = (key) => {
    return cookies.get(key);
};

const handleRemoveCookies = (key) => {
    cookies.remove(key, { path: "/" });
};

export {
    handleSetCookies,
    handleGetCookies,
    handleRemoveCookies,
};