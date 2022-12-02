const temp = document.createElement("div");
temp.innerHTML = "First Firebase App";
document.querySelector("body").appendChild(temp);

import { getAuth } from "firebase/auth";
const auth = getAuth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();
signInBtn.onclick = function () {
  signInBtn.innerText = "ugh";
};

signOutBtn.onclick = () => auth.signOut();
