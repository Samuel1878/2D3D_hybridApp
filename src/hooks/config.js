// const HOST = "http://13.250.223.218:8080"
const HOST = "http://localhost:8080";
export const REGISTER_URL = HOST + "/api/auth/register";
export const LOGIN_URL = HOST + "/api/auth/login";
export const OTP_URL = HOST + "/api/auth/verification";
export const USER_DATA = HOST + "/api/auth/userData";

export const _2d_URL = HOST + "/api/data/2d";
//API DATA 
export const _Live = "https://api.thaistock2d.com/live";
export const _2D_RESULT = "https://api.thaistock2d.com/2d_result";
export const _2D_HISTORY = "https://api.thaistock2d.com/history";


export const _2d_HISTORY = HOST + "/api/data/2d/history";
export const _2d_BET = HOST + "/api/data/2d/history";
export const _3d_BET = "";
export const SOCKET_URL = HOST;

export const _2d_BET_URL = HOST + "/api/bet/2D";
export const _3d_BET_URL = HOST + "/api/bet/3D";
export const _CHANGE_PWD_URL = HOST + "/api/admin/changePwd";
export const _CHANGE_NAME_URL = HOST + "/api/auth/changeName";
export const _CHANGE_PROFILE_URL = 
HOST + "/api/auth/changeProfile";
export const _ADD_PAYMENT = HOST + "/api/auth/addPayments";
export const _DELETE_PAYMENT = HOST + "/api/auth/deletePayment"
export const GET_TOPGAINER = HOST + "/api/data/topGainer";
export const GET_2DWINNERS = HOST + "/api/data/2d/winners";
export const GET_3DWINNERS = HOST + "/api/data/3d/winners";
export const isUserRegistered = HOST + "/api/data/isUserRegistered";
export const TRANSFER = HOST + "/api/admin/transfer";
export const PIN = HOST + "/api/admin/changePin";
export const DEPOSIT = HOST + "/api/admin/deposit";
export const WITHDRAWL = HOST + "/api/admin/withdrawl";

export const PAYMENTS = HOST + "/api/admin/payments";
export const CASHINOUTHIS = HOST + "/api/admin/cashinout";

export const RESETPIN = HOST + "/api/admin/resetPin";
export const RESETPWD = HOST + "/api/admin/resetPwd";