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
import TalentIndex from "../pages/talent";
import ApplyJob from "../pages/talent/apply_job";
import TalentProfile from "../pages/account/talentprofile";
import talent_applications from "../pages/talent/talent_applications";

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

const accountCreation = [
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
  },
]

const clientPages = [
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
    animation: "",
  },
  {
    name: "poj_budget_requirements",
    component: poj_budget_req,
    active: true,
    animation: "slide_from_right",
  },
  {
    name: "poj_summary",
    component: poj_summary,
    active: true,
    animation: "slide_from_right",
  },
];

const talentPages = [
  {
    name: "talent_home_page",
    component: TalentIndex,
    active: true,
    animation: "",
  },
  {
    name: "talent_apply_job_page",
    component: ApplyJob,
    active: true,
    animation: "slide_from_right",
  },
  {
    name: "talent_applications",
    component: talent_applications,
    active: true,
    animation: "slide_from_right",
  },
];

const commonPages = [
  {
    name: "profile_page",
    component: TalentProfile,
    active: true,
    animation: "slide_from_right",
  },
]

export const pages = [
  ...accountCreation,
  ...clientPages,
  ...talentPages,
  ...commonPages,
];
