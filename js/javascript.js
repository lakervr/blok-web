var makeItRain = function () {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function () {
    $('body').toggleClass('splat-toggle');
    $('.splat-toggle.toggle').toggleClass('active');
    makeItRain();
});

$('.back-row-toggle.toggle').on('click', function () {
    $('body').toggleClass('back-row-toggle');
    $('.back-row-toggle.toggle').toggleClass('active');
    makeItRain();
});

$('.single-toggle.toggle').on('click', function () {
    $('body').toggleClass('single-toggle');
    $('.single-toggle.toggle').toggleClass('active');
    makeItRain();
});

makeItRain();

/*MICROINTERACTIE FILTEREN*/

var checkbox = document.querySelector('#checkbox1');

checkbox.addEventListener('click', resultatenGenerator);

function Timeout() {
    document.querySelector('#buttoncontainer').innerHTML = '<a href="resultaten.html"><button id="buttonstate3">22 RESULTATEN</button></a>';
}

function resultatenGenerator() {
    if (checkbox.checked == true) {
        document.querySelector('#buttoncontainer').innerHTML = '<button id="buttonstate2"<a href="resultaten.html"> <i class="fa fa-circle-o-notch fa-spin"></i>RESULTATEN BEKIJKEN </a> </button>';
        setTimeout(Timeout, 3000);

    } else {
        document.querySelector('#buttoncontainer').innerHTML = '<button id="buttonstate1"<a href="resultaten.html"> RESULTATEN BEKIJKEN </a> </button>';
    }
}

function resultatenErrorOpen() {
    document.querySelector("#pop-up").style.display = "block";
}

document.querySelector('#buttonstate1').addEventListener('click', resultatenErrorOpen, false);

function resultatenErrorClose() {
    document.querySelector("#pop-up").style.display = "none";
}

document.querySelector('#pop-up').addEventListener('click', resultatenErrorClose, false);

/*MICROINTERACTIE DOWNLOADEN*/

var slider = document.querySelector('#download1');
var header = document.querySelector('#header1');

console.log(slider);

slider.addEventListener('click', downloadPopUp);

function downloadPopUp() {
    if (slider.checked == true) {
        header.style.display = 'content';
        console.log('yes')

    } else {
        header.style.display = 'none';
        console.log('nein')
    }
}
