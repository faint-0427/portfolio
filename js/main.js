
$('#fullpage').fullpage({
    //options here
    responsiveWidth: 1024,/* breakpoint 1024px */
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: false,
    navigationPosition: 'left', //기본값:right
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
        if (destination === 1) {
            $(".gnb > li").eq(0).addClass("on").siblings().removeClass("on");
        } else if (destination === 2) {
            $(".gnb > li").eq(1).addClass("on").siblings().removeClass("on");
        } else if (destination === 3) {
            $(".gnb > li").eq(2).addClass("on").siblings().removeClass("on");
        } else if (destination === 4) {
            $(".gnb > li").eq(3).addClass("on").siblings().removeClass("on");
        } else {
            $(".gnb > li").eq(4).addClass("on").siblings().removeClass("on");
        }
    },
});

