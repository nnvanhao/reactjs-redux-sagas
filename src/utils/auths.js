import { Cookies } from "react-cookie";
import jwtDecode from "jwt-decode";

const cookies = new Cookies();
const cookieKey = 'estateUser';

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
    const user = handleGetLoggedInUser();
    if (!user) return false;
    const decoded = jwtDecode(user.token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // removeUserCookies();
        // store.dispatch(removeUserInfo());
        return false;
    }
    return true;
};

/**
 * Returns the logged in user
 */
const handleGetLoggedInUser = () => {
    const cookies = new Cookies();
    const user = cookies.get(cookieKey);
    return user;
};

export {
    isUserAuthenticated,
    handleGetLoggedInUser,
};
