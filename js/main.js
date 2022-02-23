// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function toggleContents(x) {
    // To handle the upward and downward arrow icon of the contents section in blogs
    x.classList.toggle("fa-chevron-up");
}

$("input[name='orders_options']").click(function(){
  if($(this).attr('id') == "completedBox"){
    document.getElementById('ongoing_orders').style.display = "none";
    document.getElementById('completed_orders').style.display = "block";
  }
  else{
    document.getElementById('ongoing_orders').style.display = "block";
    document.getElementById('completed_orders').style.display = "none";
  }
});

$('#garagesNearby').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-garages .owl-nav-prev'), $('.owl-navigation-garages .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});

$('#reviews').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-reviews .owl-nav-prev'), $('.owl-navigation-reviews .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});

$('#blogs').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-blogs .owl-nav-prev'), $('.owl-navigation-blogs .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 4
        }
    }
});

$('#serviceslist').owlCarousel({
    loop: true,
    autoplay: false,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-serviceslist .owl-nav-prev'), $('.owl-navigation-serviceslist .owl-nav-next')],
    responsive: {
        0: {
            items: 2
        },
        960: {
            items: 8
        }
    }
});


$('#services_garagesnearby').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-services_garagesnearby .owl-nav-prev'), $('.owl-navigation-services_garagesnearby .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});


$('#select_engine_oil').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 2
        }
    }
});

$('#boost_service').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});


$('#frequently_added').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-frequently_added .owl-nav-prev'), $('.owl-navigation-frequently_added .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});


$('#frequently_added_loggedin').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-frequently_added .owl-nav-prev'), $('.owl-navigation-frequently_added .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 2
        }
    }
});


$('#my_car').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-my_car .owl-nav-prev'), $('.owl-navigation-my_car .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 1
        }
    }
});

$(document).ready(function () {
    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
});

$(".navbar-nav > li").click(function () {
    // To collapse navbar in mobile view when some link item is selected / clicked
    $(".navbar-nav > li > a").removeClass('active');
    $(this).children('a').addClass('active');
    $(".collapse").collapse('hide');

    // To handle the bar and cross icon at the same time
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


$(".select_car_modal_option > input").click(function(){
    var id = $(this).attr('id');
    $(".select_car_modal_option label").css('border-bottom', '3px solid #000');
    $('#select_' + id).css('border-bottom', '3px solid #E32F2F');

    $('#select_popup .row').addClass('d-none');
    $('#' + id + '_section').removeClass('d-none');
});