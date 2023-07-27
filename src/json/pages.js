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
import poj_job_description from "../pages/client/poj_job_description";
import poj_budget_req from "../pages/client/poj_budget_req";
import poj_summary from "../pages/client/poj_summary";

/* 
    Page Animations:
    1. default
    2. fade
    3. fade_from_bottom
    4. flip
    5. none
    6. simple_push
    7. slide_from_bottom
    8. slide_from_left
    9. slide_from_right
 */


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
    },
    {
        name: "poj_job_description",
        component: poj_job_description,
        active: true,
        animation: ""
    },
    {
        name: "poj_budget_requirements",
        component: poj_budget_req,
        active: true,
        animation: "slide_from_right"
    },
    {
        name: "poj_summary",
        component: poj_summary,
        active: true,
        animation: "slide_from_right"
    }
];