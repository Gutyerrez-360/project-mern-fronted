const SERVER_IP = "localhost:3330";

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}/api/v1`,
    API_ROUTES: {
        REGISTER: "user/register",
        LOGIN:"auth/login",
        REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
        USER_ME: "user/me",
    },
    JWT:{
        ACCESS:"access",
        REFRESH:"refresh"
    }
}