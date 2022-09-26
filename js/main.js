// const axios = require('axios').default;

// Url de uso local para dev

// const localFetch = 'http://127.0.0.1:5500/data/main.json';

const urlFetch = 'http://www.veronicamillares.com/data/main.json';

// const localWeb = 'http://127.0.0.1:5500/';

const urlWeb = 'http://www.veronicamillares.com/';


const main = {
  "videos": [
    {
      "id": 1,
      "name": "video-conoceme",
      "path": "conoceme.mp4",
      "alt": "conoceme",
      "poster": "placeholder.svg"
    },
    {
      "id": 2,
      "name": "video-1",
      "path": "video1",
      "alt": "video1",
      "poster": "placeholder.svg"
    },
    {
      "id": 3,
      "name": "video-2",
      "path": "video2",
      "alt": "video2",
      "poster": "placeholder.svg"
    },
    {
      "id": 4,
      "name": "video-3",
      "path": "video3",
      "alt": "video3",
      "poster": "placeholder.svg"
    },
    {
      "id": 5,
      "name": "video-4",
      "path": "video4",
      "alt": "video4",
      "poster": "placeholder.svg"
    }
  ],
  "imagenes1": [
    {
      "id": 1,
      "name": "img1",
      "path": "20220216_092813.jpg",
      "alt": "img1"
    },
    {
      "id": 2,
      "name": "img2",
      "path": "20220216_092828.jpg",
      "alt": "img2"
    },
    {
      "id": 3,
      "name": "img3",
      "path": "20220216_092855.jpg",
      "alt": "img3"
    },
    {
      "id": 4,
      "name": "img4",
      "path": "20220216_092830.jpg",
      "alt": "img4"
    },
    {
      "id": 5,
      "name": "img5",
      "path": "20220216_093149.jpg",
      "alt": "img5"
    }
  ],
  "imagenes2": [
    {
      "id": 1,
      "name": "img1",
      "path": "20220216_093152.jpg",
      "alt": "img1"
    },
    {
      "id": 2,
      "name": "img2",
      "path": "20220216_093523.jpg",
      "alt": "img2"
    },
    {
      "id": 3,
      "name": "img3",
      "path": "20220216_093623.jpg",
      "alt": "img3"
    },
    {
      "id": 4,
      "name": "img4",
      "path": "20220216_093633.jpg",
      "alt": "img4"
    },
    {
      "id": 5,
      "name": "img5",
      "path": "20220216_093636.jpg",
      "alt": "img5"
    },
    {
      "id": 6,
      "name": "img6",
      "path": "20220216_093725.jpg",
      "alt": "img6"
    }
  ]
}

///////////////////// Validación Correo ///////////////////

window.REQUIRED_CODE_ERROR_MESSAGE = 'Elija un código de país';
window.LOCALE = 'es';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";

window.REQUIRED_ERROR_MESSAGE = "Este campo no puede quedarse vacío. ";

window.GENERIC_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";

window.translation = {
  common: {
    selectedList: '{quantity} lista seleccionada',
    selectedLists: '{quantity} listas seleccionadas'
  }
};

var AUTOHIDE = Boolean(1);

///////////////////// Menu Scroll Smooth ///////////////////

// Cache selectors
const topMenu = $(".navbar");
topMenuHeight = topMenu.outerHeight() + 1;
// All list items
menuItems = $(".navbar ul li a");
buttonItems = $('.links-a');

// Anchors corresponding to menu items
scrollItems = menuItems.map(function () {
  const item = $($(this).attr("href"));
  if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  const href = $(this).attr("href")
  offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight - 10;
  $('html, body').stop().animate({
    scrollTop: offsetTop + 270
  }, 1000);
  menuItems.removeClass('active')
  $(this).addClass('active')
  e.preventDefault();
});

buttonItems.click(function (e) {
  const href = $(this).attr("href")
  offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight - 10;
  $('html, body').stop().animate({
    scrollTop: offsetTop + 270
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  const fromTop = $(this).scrollTop() + topMenuHeight + 50;

  // Get id of current scroll item
  let cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  let id = cur && cur.length ? cur[0].id : "";

  // Set/remove active class
  menuItems.removeClass("active");
  $('#' + id + '-link').addClass('active');

});


///////////////////// Animaciones Cards Table ///////////////////

// var b = document.getElementsByTagName("BODY")[0];  
// // var a = document.getElementById("top-table");
// var cards = document.getElementsByClassName('card');

// for(const card of cards){
//   card.classList.add('parallaxed')
// }

// b.addEventListener("mousemove", function(event) {
//   parallaxed(event);
// });

// function parallaxed(e) {
//   var amountMovedX = (e.clientX * -0.2 / 10);
//   var amountMovedY = (e.clientY * -0.2 / 10);
//   var x = document.getElementsByClassName("parallaxed");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
//   }
// }


///////////////////// Animaciones Parallax ///////////////////

function swapImages() {
  var $active = $('.card-item2 .active');
  var $next = ($('.card-item2 .active').next().length > 0) ? $('.card-item2 .active').next() : $('.card-item2 img:first');
  $active.removeClass('active');
  $next.fadeIn().addClass('active');
}

// Run our swapImages() function every 5secs
setInterval('swapImages()', 3000);

function swapImages2() {
  var $active = $('.card-item5 .active');
  var $next = ($('.card-item5 .active').next().length > 0) ? $('.card-item5 .active').next() : $('.card-item5 img:first');
  $active.removeClass('active');
  $next.fadeIn().addClass('active');
}
$('.card-item5 img').bind("contextmenu", function (e) {
  return false;
});
// Run our swapImages() function every 5secs
setInterval('swapImages2()', 5000);

gsap.registerPlugin(CSSPlugin, CSSRulePlugin, ScrollTrigger)

let rule = CSSRulePlugin.getRule(".top-table:before");
let rule2 = CSSRulePlugin.getRule(".top-table:before");

gsap.timeline({
  scrollTrigger: {
    trigger: "#vero-section",
    scrub: true,
    pin: true
  }
})
.to('.letter-disappear', 8, {
  opacity: 0,
  y: -40,
  display: 'none'
})
.to('.V-letter', 8, {
  x: 165,
  scale: .5
}, '-=8')
.to('.M-letter', 8, {
  x: -28.3,
  y: 8,
  scale: .5
}, '-=8')
.to('.logo-vero', 8, {
  scale: 2.5
}, '-=8')


gsap.timeline({
  scrollTrigger: {
    trigger: "#first-section",
    start: "center center",
    end: "bottom top",
    scrub: true,
    pin: true
  }
})
.to('.linea-text', 8, {
  height: '2800px'
}, '-=8')
.to('.shadow-table', 8, {
    rotationX: -90,
    height: 0
}, '-=8')
.to('.top-table', 8, {
  rotationX: 0,
  marginLeft: '0'
}, '-=8')
// .to('.legs-table', 8, {
//   opacity: 0,
//   rotationX: -70,
//   y: -400
// }, '-=8')
.to('.table', 8, {
  marginTop: 60
}, '-=8')
.to('.text-left', 6, {
  left: '-1500px',
  opacity: 0,
})
.to('.card1', 6, {
  opacity: 0,
}, '-=6')
.to('.first-card1', 6, {
  right: 1500,
}, '-=6')
.to('.first-card2', 6, {
  right: 2000,
}, '-=6')
.to('.first-card3', 6, {
  right: 3000,
}, '-=6')
.to('.first-card4', 6, {
  right: 4000,
}, '-=6')
.to('.first-card5', 6, {
  right: 5000,
}, '-=6')
.to('.first-card6', 6, {
  right: 6000,
}, '-=6')
.to('.first-card7', 6, {
  right: 7000,
}, '-=6')
.to('.first-card8', 6, {
  right: 8000,
}, '-=6')
.to('.first-card9', 6, {
  right: 9000,
}, '-=6')
.to('.second-cards', 4, {
  left: 0,
}, '-=5')
.to('.text-right', 4, {
  left: 0,
  opacity: 1
}, '-=5')
.to('.card2', 4, {
  left: 0,
  opacity: 1
}, '-=4')
.to('.top-table', 2, {
  rotationX: 40,
  width: '100%',
})
.to('.shadow-table', 2, {
  rotationX: -40,
  height: 40
}, '-=2')
// .to('.legs-table', 2, {
//   opacity: 1,
//   rotationX: 0,
//   y: 0
// }, '-=2')
.to('.table', 2, {
  marginTop: -20
}, '-=2')
.to('.scroll-downs', 1, {
  opacity: 0
}, '-=2')



///////////////////// Fetch Img ///////////////////

const info = main.imagenes1
const info2 = main.imagenes2

const carousel = document.getElementById('images-carousel');
const carousel2 = document.getElementById('images-carousel2');


info.forEach((img) => {
  let slide = document.createElement('div');
  slide.classList.add('swiper-slide', 'item');

  let imgSlide = document.createElement('img');
  imgSlide.classList.add('img-modal');
  imgSlide.src = urlWeb + 'img/' + img.path;

  slide.appendChild(imgSlide);

  carousel.appendChild(slide);

})

info2.forEach((img2) => {
  let slide2 = document.createElement('div');
  slide2.classList.add('swiper-slide', 'item');

  let imgSlide2 = document.createElement('img');
  imgSlide2.classList.add('img-modal');
  imgSlide2.src = urlWeb + 'img/' + img2.path;

  imgSlide2.addEventListener('click', () => {
  })

  slide2.appendChild(imgSlide2);

  carousel2.appendChild(slide2);

})

///////////////////// Swipers ///////////////////

$('#images-carousel').owlCarousel({
  stagePadding: 200,
  loop: true,
  margin: 30,
  items: 1.5,
  autoplay: true,
  autoplaySpeed: 15000,
  autoplayTimeout: 15000,
  autoplayHoverPause: true,
  slideTransition: 'linear',
  responsive: {
    0: {

      stagePadding: 60
    },
    600: {

      stagePadding: 100
    },
    1000: {

      stagePadding: 200
    },
    1200: {

      stagePadding: 250
    },
    1400: {

      stagePadding: 300
    },
    1600: {

      stagePadding: 350
    },
    1800: {

      stagePadding: 400
    }
  }

})

$('#images-carousel2').owlCarousel({
  stagePadding: 200,
  loop: true,
  margin: 30,
  items: 1.5,
  autoplay: true,
  autoplaySpeed: 15000,
  autoplayTimeout: 15000,
  autoplayHoverPause: true,
  slideTransition: 'linear',
  rtl: true,
  responsive: {
    0: {

      stagePadding: 60
    },
    600: {

      stagePadding: 100
    },
    1000: {

      stagePadding: 200
    },
    1200: {

      stagePadding: 250
    },
    1400: {

      stagePadding: 300
    },
    1600: {

      stagePadding: 350
    },
    1800: {

      stagePadding: 400
    }
  }
})

//////////////// Modal Img //////////////////

let thumbnails = document.getElementsByClassName('img-modal');
let activeImages = document.getElementsByClassName('active');
let modal = document.getElementById('modal');
let cerrar = document.getElementById('cerrar-modal');
let modalFather = document.getElementById('modal-container');

let overlay = document.getElementById('modal-overlay')

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function (e) {

    modalFather.style.display = 'block';
    setTimeout(() => { modalFather.style.opacity = 1 }, [1])

    if (activeImages.lenght > 0) {
      activeImages[0].classList.remove('active');
    }
    this.classList.add('active');

    modal.src = this.src;

    modal.classList.add('fadeIn')

    overlay.addEventListener('click', () => {
      modalFather.style.opacity = 0;
      setTimeout(() => { modalFather.style.display = 'none' }, [501])
    })
  })
}

cerrar.addEventListener('click', () => {
  modalFather.style.opacity = 0;
  setTimeout(() => { modalFather.style.display = 'none' }, [501])
})

//////////////// Video Funcionality /////////////

let videoButton = document.getElementById('video-conoceme');

videoButton.addEventListener('click', function (e) {

  e.preventDefault();

  let controls = document.querySelector('.video-container-vero .plyr__controls');
  let getVideo = document.getElementById('video-vero');

  let idVideo = this.id;

  const info = main.videos

  let video = info.shift()

  let createVideo = document.createElement('source');

  createVideo.src = './videos/conoceme.mp4';

  getVideo.appendChild(createVideo)

  getVideo.play()

  this.style.display = 'none';
  controls.style.display = 'flex';
})

/////////////////// Cathc video slider Function ///////////////////

let getSlider = document.getElementById('video-slider');

let videos = main.videos;

videos.shift();

videos.forEach((video) => {

  createSlide = document.createElement('div');
  createSlide.classList.add('video-slide', 'item'),

  createVideo = document.createElement('video');
  createVideo.setAttribute('id', `place-${video.id}`)
  createVideo.classList.add('js-player');
  createVideo.setAttribute('poster', './img/placeholder.svg')
  createVideo.setAttribute('controls', '');
  createVideo.setAttribute('playsinline', '');
  createVideo.setAttribute('crossorigin', '');

  createButton = document.createElement('button');
  createButton.setAttribute('id', `video-${video.id}`)
  createButton.classList.add('video-button');

  createI = document.createElement('i');
  createI.classList.add('material-icons', 'play_pause');
  createI.textContent = 'play_arrow';

  createButton.appendChild(createI);
  createSlide.append(createVideo, createButton);

  getSlider.appendChild(createSlide)

})

let getButton = document.querySelectorAll('.video-button');

function putVideo() {

  getId = this.getAttribute('id');
  let newStr = getId.slice(6);

  videos.forEach((video) => {

    if (newStr == video.id) {

      let createSource = document.createElement('source');
      createSource.src = './videos/' + video.path + '.mp4';

      let videoAppend = document.getElementById(`place-${newStr}`);
      videoAppend.appendChild(createSource);

      videoAppend.play();

      this.style.opacity = 0;
      setTimeout(() => { this.style.display = 'none' }, [501])

    }
  })
}

getButton.forEach((button) => {
  button.addEventListener('click', putVideo)
})

$('#video-slider').owlCarousel({
  items: 1,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      stagePadding: 100
    },
    700: {
      stagePadding: 150
    },
    820: {
      stagePadding: 170
    },
    1000: {
      stagePadding: 200
    },
    1100: {
      stagePadding: 230
    },
    1200: {
      stagePadding: 250
    },
    1300: {
      stagePadding: 270
    },
    1500: {
      stagePadding: 310
    }
  }
})

var playerSettings = {
  controls: [
    'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
  resetOnEnd: true,
  clickToPlay: false,
  loadSprite: true,
  keyboard: false,
  disableContextMenu: false
}

const players = Plyr.setup('.js-player', playerSettings);

players.forEach(function (instance, index) {
  instance.on('play', function () {
    players.forEach(function (instance1, index1) {
      if (instance != instance1) {
        instance1.pause();
      }
    });
  });
});

$('.video-section').on('translated.owl.carousel', function (event) {
  players.forEach(function (instance, index1) {
    instance.pause();
  });
});

/* Video Sobre Mi */

var playerSettings2 = {
  controls: [
    'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
  resetOnEnd: true,
  clickToPlay: true,
  loadSprite: 'true',
  keyboard: false,
  disableContextMenu: false
}

const players2 = Plyr.setup('.video-vero', playerSettings2);

players2.forEach(function (instance, index) {
  instance.on('play', function () {
    players.forEach(function (instance1, index1) {
      if (instance != instance1) {
        instance1.pause();
      }
    });
  });
});