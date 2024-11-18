$(function () {
    // 헤더 메뉴 글자 효과
    Splitting();

    // 화면 빠르게 바꾸기 //
    let baseline = -200;

    let con1 = $("#con1").offset().top;
    let con2 = $("#con2").offset().top + baseline;
    let con3 = $("#con3").offset().top + baseline;
    let con4 = $("#con4").offset().top + baseline;

    // console.log(con1, con2, con3, con4);

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();
        // console.log(scroll);

        if (scroll >= con1 && scroll < con2) {
            // console.log("con1입니다");

            $("#con1").addClass("on");
        } else if (scroll >= con2 && scroll < con3) {
            // console.log("con2입니다");
        } else if (scroll >= con3 && scroll < con4) {
            // console.log("con3입니다");
        } else {
            // console.log("con4입니다");
        }
    });

    // 모바일메뉴 펼치기//
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });

    // 홈페이지바로가기 색상 채우기 바 //
    $(".more").on("mouseenter", function () {
        $(".more").toggleClass("on");
    });
    $(".more").on("mouseleave", function () {
        $(".more").toggleClass("on");
    });

    // 일러스트 슬라이드 효과
    $(function () {
        let total = $(".panel li").length;
        // console.log(total);
        let i = 0;
        start();

        // ========정리=========//

        function move() {
            i++;
            if (i == total - 1) {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": "-3600px" }, function () {
                        $(".panel").css({ "margin-left": 0 });
                    });
                i = 0;
            } else {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": -i * 600 });
            }
        }

        function backmove() {
            i--;
            if (i < 0) {
                $(".panel").css({ "margin-left": -3600 });
                $(".panel").stop().animate({ "margin-left": -3000 });
                i = 5;
            } else {
                $(".panel")
                    .stop()
                    .animate({ "margin-left": -i * 600 });
            }
        }

        function style() {
            $(".navi li").removeClass("on");
            $(".navi li").eq(i).addClass("on");
        }

        //================================================================//

        // 슬라이드 //
        function start() {
            timer = setInterval(function () {
                move();
                style();
            }, 2000);
        }

        //다음클릭//
        $(".next").on("click", function () {
            clearInterval(timer); //클릭 잠시 멈춤//
            move();
            style();
            start();
        });

        //이전클릭//
        $(".prev").on("click", function () {
            clearInterval(timer);
            backmove();
            style();
            start();
        });

        //하단클릭//
        $(".navi li").on("click", function () {
            clearInterval(timer);
            i = $(this).index();
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 600 });
            style();
            start();
        });
    });
});
