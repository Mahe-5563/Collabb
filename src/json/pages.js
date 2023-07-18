/**
 * List of all the pages in the application.
 */
import ClientChooseCatSubcat from "../pages/client/choose_cat_subcat";
import Login from "../pages/loginpage";
import Signup from "../pages/signup_page";
import account_creation from "../pages/signup_process/account_creation";
import AccountSummary from "../pages/signup_process/account_summary";
import IdentifyPurpose from "../pages/signup_process/identify_purpose";
import ClientIndex from "../pages/client";


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
        active: false,
    },
    {
        name: "account_creation",
        component: account_creation,
        active: false,
    },
    {
        name: "account_summary",
        component: AccountSummary,
        active: false,
    },
    {
        name: "client_home_page",
        component: ClientIndex,
        active: true,
    },
    {
        name: "client_choose_cat_subcat",
        component: ClientChooseCatSubcat,
        active: true,
    }
];