// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA49rBWmPizgzcxGkftz7SbiiwWCXw0co0",
    authDomain: "kwitter-db-8a47b.firebaseapp.com",
    databaseURL: "https://kwitter-db-8a47b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-db-8a47b",
    storageBucket: "kwitter-db-8a47b.appspot.com",
    messagingSenderId: "471817541894",
    appId: "1:471817541894:web:c98b22d174cc739b53a687"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Getting username
var username = localStorage.getItem("Username");
// Add Friend
function addFriend() {
    var newFriend = document.getElementById("newFriend").value;
    firebase.database().ref(`/${username}/Requests`).push({
        newFriend: `Request recived from ${newFriend}`
    });
}