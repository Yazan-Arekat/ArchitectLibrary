import {
auth,
signInWithEmailAndPassword
} from "./js/firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");

document.getElementById("loginBtn").onclick = async () => {

try{

await signInWithEmailAndPassword(
auth,
email.value,
password.value
);

window.location.href="admin.html";

}catch(e){

error.innerHTML="Wrong email or password";

}

};