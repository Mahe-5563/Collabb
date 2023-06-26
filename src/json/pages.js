/**
 * List of all the pages in the application.
 */
import Login from "../pages/loginpage";
import Signup from "../pages/signup_page";
import account_creation from "../pages/signup_process/account_creation";
import IdentifyPurpose from "../pages/signup_process/identify_purpose";


export const pages = [
    {
        name: "login",
        component: Login,
        active: false,
    },
    {
        name: "signup",
        component: Signup,
        active: false,
    },
    {
        name: "identify_purpose",
        component: IdentifyPurpose,
        active: true,
    },
    {
        name: "account_creation",
        component: account_creation,
        active: true,
    }
];