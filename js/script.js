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




document.querySelector('.firstPageCardsPanelContainer').onmouseover = (e) => {


    // console.log(e.target.className);

    if (e.target.className == 'borderCard') {
    // console.log('cardsWrapper IN');
        e.target.parentNode.querySelector('.opacityLayerBackground').style.opacity = 1;
        // console.log("e.target.querySelector('.opacityLayerBackground').style.opacity = 1;");
    };
    // document.querySelector('.cardsWrapper').onmouseout = (e) => {
    //     // console.log('cardsWrapper OUT');
    //     e.target.querySelector('.opacityLayerBackground').style.opacity = 0;
    // };

};

document.querySelector('.firstPageCardsPanelContainer').onmouseout = (e) => {
    if (e.target.className == 'borderCard') {
    // console.log('cardsWrapper IN');
        e.target.parentNode.querySelector('.opacityLayerBackground').style.opacity = 0;
        // console.log("e.target.querySelector('.opacityLayerBackground').style.opacity = 1;");
    };
};

$('.nav-tabs a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})