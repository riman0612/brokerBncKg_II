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

function putDataInHTML(el, data) {
  getEl(el).innerHTML = data;
};

var db = firebase.database().ref('businessData');
////////////////////////////////////////////////////////

db.once('value', snap => {
  var data = snap.val();
    ////////////////////////
    putDataInHTML('.businessDescriptionMainHeader', data.name);
    putDataInHTML('.priceFinanceHeader', data.price);
    putDataInHTML('.rateHeader', data.rate);
    putDataInHTML('.recoupmentSpanHeader', data.recoupment);
    putDataInHTML('.recoupmentSpan', data.recoupment);
    putDataInHTML('.profitSpanHeader', data.profit);
    putDataInHTML('.allBusinessDescription', data.description);
    putDataInHTML('.mainCity', data.city);
    putDataInHTML('.mainRegion', data.region);
    putDataInHTML('.priceFinance', data.price);
    putDataInHTML('.profitSpan', data.profit);
    putDataInHTML('.section', data.section);
    putDataInHTML('.turnover', data.rate);
    putDataInHTML('.monthCosts', data.middleMonthCosts);
    putDataInHTML('.amountOfWorkers', data.amountOfWorkers);
    putDataInHTML('.fond', data.salary);
    putDataInHTML('.spaceOfArea', data.area);
    putDataInHTML('.priceOfRent', data.rentPrice);
    putDataInHTML('.ageOfBussines', data.businessAge);
    putDataInHTML('.ip', data.organizationalAndLegalForm);
});

