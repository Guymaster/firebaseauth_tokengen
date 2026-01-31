# firebaseauth_tokengen
Simple auth token generator using Firebase email/password Authentication

## Before starting

Set up configuration data in a `config.js` file at root directory.
```
export const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",  
    storageBucket: "...",  
    messagingSenderId: "...",  
    appId: "...",  
    measurementId: "..."
  };

export const credentialsConfig = {
  email: "...",
  password: "..."
};
```

## How to use
Press `Enter` to load a new token and click on the generated token to copy it to clipboard.
