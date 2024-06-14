
// src/authConfig.js
import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "ed6c71d9-2df2-4a7c-b7d7-bb4b412c7841",
        authority: "https://login.microsoftonline.com/42f65d85-0044-4e88-9d17-5aeff505072a",
        redirectUri: "https://ashy-tree-03d0b1100.5.azurestaticapps.net/", // or your production URL
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
await msalInstance.initialize();
export const loginRequest = {
    scopes: ["User.Read"],
};