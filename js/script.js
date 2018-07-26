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


// scrolling
$(document).ready(function() {
  
   $('.howItWorksJs').bind('click', function(){
      
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 15 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
      
   });
 
});


// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

// document.querySelector('#open').onclick = () => {
// 	document.querySelector('#modalWindow_alert').modal();
// }

// $('#open').click(function() {
// 	$('#modalWindow_alert').modal({
// 		// backdrop: 'static',
// 		keyboard: false
// 	});
// });

// $('#modalWindow_alert').on('show.bs.modal', function (e) {
//   console.log(12);
// })

// console.log($('#modalWindow_alert'));

// console.log(11111111111);

// console.log(document.querySelector('#modalWindow_alert'));

                                        // var $hamburger = document.querySelector(".hamburger");
                                        // $hamburger.onclick = function(e) {
                                        // 	$hamburger.classList.toggle("is-active");
                                        //     // Do something else, like open/close menu
                                        //     if (this.classList.contains('is-active')) {
                                        //     	(function(){
                                        //     	document.querySelector('.mainSkipMenu').style.display = 'block';
                                        //     	})()
                                        //     	setTimeout(() => {
                                        //     		document.querySelector('.skipMenu').classList.add('showMainSkipMenu');
                                        //     	}, 0)
                                        //     } else {
                                        //     	document.querySelector('.skipMenu').classList.remove('showMainSkipMenu');
                                        //     }
                                        //  };

                                        // document.querySelector('.skipMenu').addEventListener('transitionend', () => {
                                        // 	if (!($hamburger.classList.contains("is-active"))) {
                                        // 		document.querySelector('.mainSkipMenu').style.display = 'none';
                                        // 	}
                                        // });

// 

// $('.slickContainer').slick({
// 	prevArrow: $('.prev'),
// 	nextArrow: $('.next'),
// 	slidesToShow: 2,
// 	infinite: true,
// });

// document.querySelector('.colCard a').onmouseenter = () => {
//     // console.log(16);
//     document.querySelector('.opacityLayerBackground').style.opacity = 1;
// };
// document.querySelector('.colCard a').onmouseleave = () => {
//     // console.log(17);
//     document.querySelector('.opacityLayerBackground').style.opacity = 0;
// };



// document.querySelector('.cardsContainer').onmouseover = (e) => {
    // console.log(16);
    // if (e.target.className == 'colCardItem') {
    //     console.log(e.target.querySelector('.opacityLayerBackground'));
    // }
    // console.log(e.target.tagName);
// };
// document.querySelector('.cardsContainer').onmouseleave = () => {
//     console.log(17);
//     // document.querySelector('.opacityLayerBackground').style.opacity = 0;
// };



// было включено
document.querySelector('.firstPageCardsPanelContainer').onmouseover = (e) => {
    if (e.target.className == 'borderCard') {
      e.target.parentNode.querySelector('.opacityLayerBackground').style.opacity = 1;  
    };
};

document.querySelector('.firstPageCardsPanelContainer').onmouseout = (e) => {
    if (e.target.className == 'borderCard') {
    
        e.target.parentNode.querySelector('.opacityLayerBackground').style.opacity = 0;
        
    };
};

$('.nav-tabs a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})



// editor submit
    

// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBTRkVT7tbugUbV0PGumc4RdGKCZby_DNc",
  //   authDomain: "tempproject-9e7ae.firebaseapp.com",
  //   databaseURL: "https://tempproject-9e7ae.firebaseio.com",
  //   projectId: "tempproject-9e7ae",
  //   storageBucket: "tempproject-9e7ae.appspot.com",
  //   messagingSenderId: "682367898884"
  // };
  // firebase.initializeApp(config);

  // var messagesRef = firebase.database().ref('messages');
  //   document.getElementById('editorData').onsubmit = (e) => {
  //       e.preventDefault();
        
  //       var name = getInputValue('naming');
  //       var price = getInputValue('price');
  //       var rate = getInputValue('rate');
  //       var recoupment = getInputValue('recoupment');
  //       var profit = getInputValue('profit');
  //       var description = getInputValue('description');
  //       var broker = getInputValue('broker');
  //       var city = getInputValue('city');
  //       var region = getInputValue('region');
  //       var section = getInputValue('section');
  //       var middleMonthTurnovers = getInputValue('middleMonthTurnovers');
  //       var middleMonthCosts = getInputValue('middleMonthCosts');
  //       var amountOfWorkers = getInputValue('amountOfWorkers');
  //       var salary = getInputValue('salary');
  //       var area = getInputValue('area');
  //       var rentPrice = getInputValue('rentPrice');
  //       var businessAge = getInputValue('businessAge');
  //       var organizationalAndLegalForm = getInputValue('organizationalAndLegalForm');

  //       saveMessage(name, price, rate, recoupment, profit, description, broker, city, region, section, middleMonthTurnovers, middleMonthCosts, amountOfWorkers, salary, area, rentPrice, businessAge, organizationalAndLegalForm);
  //       // console.log(name, price, rate, recoupment, profit, description, city, region, section, middleMonthTurnovers, middleMonthCosts, amountOfWorkers, salary, area, rentPrice, businessAge, organizationalAndLegalForm);
  //       // console.log(name);
  //   }
    
  //   function getInputValue(id) {
  //       return document.getElementById(id).value
  //   }
  //   console.log(messagesRef.push());

  //   function saveMessage(name, price, rate, recoupment, profit, description, broker, city, region, section, middleMonthTurnovers, middleMonthCosts, amountOfWorkers, salary, area, rentPrice, businessAge, organizationalAndLegalForm) {
  //       var newMessageRef = messagesRef.push();
  //       newMessageRef.set({
  //           name: name,
  //           price: price,
  //           rate: rate,
  //           recoupment: recoupment,
  //           profit: profit,
  //           description: description,
  //           broker: broker,
  //           city: city,
  //           region: region,
  //           section: section,
  //           middleMonthTurnovers: middleMonthTurnovers,
  //           middleMonthCosts: middleMonthCosts,
  //           amountOfWorkers: amountOfWorkers,
  //           salary: salary,
  //           area: area,
  //           rentPrice: rentPrice,
  //           businessAge: businessAge,
  //           organizationalAndLegalForm: organizationalAndLegalForm
  //       })
  //   };

  //   console.log('это сообщение!');


  var getEl = el => document.querySelector(el);

  console.log(getEl('.businessDescriptionMainHeader'));

  var db = firebase.database().ref();




////////////////////////////////////////////////////////////
document.querySelector('.hamburger').onclick = function(e) {
  document.querySelector('.hamburger').classList.toggle("is-active");
    // Do something else, like open/close menu
    if (this.classList.contains('is-active')) {
      (function(){
      document.querySelector('.mainSkipMenu').style.display = 'block';
      })()
      setTimeout(() => {
        document.querySelector('.skipMenu').classList.add('showMainSkipMenu');
      }, 0)
    } else {
      document.querySelector('.skipMenu').classList.remove('showMainSkipMenu');
    }
 };