export default {
    endpoint: "auth",
    configureEndpoints: ["auth","customs-report","purchasing","garment-production","inventory","it-inventory"],

    loginUrl: "authenticate/AuthUI",
    profileUrl: "/me",

    authTokenType: "Bearer",
    accessTokenProp: "data",

    storageChangedReload: true
};