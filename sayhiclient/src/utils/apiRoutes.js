export const HOST_PORT = "5000";

export const HOST_URL = `http://localhost:${HOST_PORT}`;

// Auth routes
export const AUTH_ROUTE = `${HOST_URL}/api/auth`;
export const REGISTER_ROUTE = `${AUTH_ROUTE}/register`;
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`;
export const FIREBASE_LOGIN_ROUTE = `${AUTH_ROUTE}/googleAuthFirebase`;
