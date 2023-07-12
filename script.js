import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
import { firebaseConfig, credentialsConfig } from './config.js';

const app = initializeApp(firebaseConfig);

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  }

function getCurrentTime(){
    return (new Date()).toUTCString();
}

function signInWithEmail(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        user.getIdToken()
        .then((token) => {
            document.getElementById("tokenBox").innerText = token;
            document.getElementById("info").innerText = getCurrentTime();
        })
        .catch((error) => {
            document.getElementById("tokenBox").innerText = "Wrong credentials";
            console.error( error);
        });
    })
    .catch((error) => {
        document.getElementById("tokenBox").innerText = "An error occured";
        console.error( error);
    });
}

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        signInWithEmail(credentialsConfig.email, credentialsConfig.password);
    }
});

document.getElementById("tokenBox").addEventListener("click", (event) => {
    copyToClipboard(document.getElementById("tokenBox").innerText);
});

document.getElementById("info").innerText = getCurrentTime();