import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
import { firebaseConfig } from './config.js';

const app = initializeApp(firebaseConfig);

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  }

function signInWithEmail(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        user.getIdToken()
        .then((token) => {
            document.getElementById("tokenBox").innerText = token;
        })
        .catch((error) => {
            document.getElementById("tokenBox").innerText = "Please authentificate";
            console.error( error);
        });
    })
    .catch((error) => {
        document.getElementById("tokenBox").innerText = "Please authentificate";
        console.error( error);
    });
}

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        signInWithEmail(document.getElementById("email").value, document.getElementById("password").value);
    }
});

document.getElementById("copy").addEventListener("click", (event) => {
    copyToClipboard(document.getElementById("tokenBox").innerText)
});