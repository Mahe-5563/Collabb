/**
 * List of all the pages in the application.
 */
import Login from "../pages/loginpage";
import Signup from "../pages/signup_page";
import account_creation from "../pages/signup_process/account_creation";
import AccountSummary from "../pages/signup_process/account_summary";
import IdentifyPurpose from "../pages/signup_process/identify_purpose";


export const pages = [
    {
        name: "login",
        component: Login,
        active: true,
    },
    {
        name: "signup",
        component: Signup,
        active: true,
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
    },
    {
        name: "account_summary",
        component: AccountSummary,
        active: true,
    }
];