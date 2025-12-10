
$('#fullpage').fullpage({
    //options here
    responsiveWidth: 1024,/* breakpoint 1024px */
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true, // 좌우에 영역지정 메뉴 기본값:false(노출안됨)
    navigationPosition: 'left', //기본값:right
/*     navigationTooltips: ['SINSIWAY', 'Solution', 'Business', 'Partner'  ], //글자 노출되는 부분 */
    showActiveTooltip: true, //기본값:false
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 2 || destination === 4) {
            $("#header,#fp-nav").addClass("active");
            /* destination이 2(번구역)에 도달했을 때 active가 실행된다 */
        } else {
            $("#header,#fp-nav").removeClass("active");
        };
        if (destination === 6) {
            $("#fp-nav, #header").fadeOut();
        } else {
            $("#fp-nav, #header").fadeIn();
        };
    },
});




$(".mgnb_wrap").hide();
$(".btn_ham").click(function () {
    $(this).toggleClass("active");
    $(".mgnb_wrap").fadeToggle();

    if ($(this).text() === "메뉴열기") {
        $(this).text("메뉴닫기");
    } else {
        $(this).text("메뉴열기");
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.gnb li');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            menuItems.forEach(li => {
                li.classList.remove('on');
            });
            this.classList.add('on');
        });
    });
});


//solution_list 초기화

const solution_list = new Swiper(".solution_list", {
    slidesPerView: 1.5,
    spaceBetween: 10, /* 간격 10px */
    breakpoints: {
        1500: {
            slidesPerView: 3.5,
        },

        1200: {
            slidesPerView: 2.5,
        },
    },
});

//partner_list
const partner_list = new Swiper(".partner_list", {
    slidesPerView: 8,
    spaceBetween: 20,

    loop: true,
    breakpoints: {
        1500: {
            slidesPerView: 8,
        },
        1200: {
            slidesPerView: 6,
        },
        800: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 6000,
});