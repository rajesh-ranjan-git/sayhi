export const HOST_PORT = "5000";

export const HOST_URL = `http://localhost:${HOST_PORT}`;

// Auth routes
export const AUTH_ROUTE = `${HOST_URL}/api/auth`;
export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/checkUser`;
export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onboardUser`;
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`;
