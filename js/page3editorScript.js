// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNfQ1t5k2bT12hb7RUm5ilXiPC5WOe_bM",
  authDomain: "page3editor.firebaseapp.com",
  databaseURL: "https://page3editor.firebaseio.com",
  projectId: "page3editor",
  storageBucket: "",
  messagingSenderId: "622842989948"
};
firebase.initializeApp(config);


var getEl = el => document.querySelector(el);

getEl('.businessDescriptionMainHeader');

var db = firebase.database().ref();

