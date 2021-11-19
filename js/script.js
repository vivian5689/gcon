// 모든 리소스가 불러들여지면 실행한다.
window.onload = function() {

    // 모달창 닫기
    $('.modal-close').click(function(){
        $('.modal').hide();
    });
    // hub 코드 
    // hub 메뉴들을 저장한다.
    var hubMenus = $('.hub-menu a');
    // hub 내용들을 저장한다.
    var hubInfos = $('.hub-info > li');
    // 모두 기능이 똑같다.
    $.each(hubMenus, function(index, item) {
        // 마우스 오버를 처리한다.
        $(this).mouseenter(function() {
            hubInfos.removeClass('hub-info-focus');
            hubInfos.eq(index).addClass('hub-info-focus');
        });

        // 마우스 아웃을 처리한다.
        $(this).mouseleave(function() {
            // hubInfos.removeClass('hub-info-focus');          
            // hubInfos.eq(0).addClass('hub-info-focus');
        });
    });

    // sns 카테고리 관련 코드
    var snsCate = $('.sns-cate li a');
    var snsCont = $('.sns-cont');
    snsCont.eq(0).show();

    $.each(snsCate, function(index, item) {

        $(this).click(function(e) {
            // href 를 막는다.
            e.preventDefault();
            // 5번째 버튼은 임시로 처리한다.
            if (index == 4) {
                return;
            }


            snsCate.removeAttr('class');
            snsCate.eq(3).addClass('i-naver');

            snsCont.hide();

            if (index == 0) {
                $(this).addClass('icon-focus-fb');
                snsCont.eq(0).show();

            } else if (index == 1) {
                $(this).addClass('icon-focus-is');
                snsCont.eq(1).show();

            } else if (index == 2) {
                $(this).addClass('icon-focus-yt');
                snsCont.eq(2).show();

            } else if (index == 3) {
                $(this).addClass('icon-focus-nv');
                snsCont.eq(3).show();

            }
        });

    });

    // news 관련 코드 
    var newsCate = $('.news-cate li a');
    // 현재 포커스 유지할 번호를 저장해 둔다.
    var newsFocusNum = 0;
    var newsCont = $('.news-cont');
    newsCont.eq(newsFocusNum).show();


    $.each(newsCate, function(index, item) {
        $(this).click(function(e) {
            // href 를 막는다.
            e.preventDefault();
            // 일단, 모두 제거한다.
            newsCate.removeClass('news-focus');
            newsCate.eq(index).addClass('news-focus');
            newsFocusNum = index;

            newsCont.hide();
            newsCont.eq(newsFocusNum).show();

        });

        $(this).mouseenter(function() {
            $(this).addClass('news-focus');
        });
        $(this).mouseleave(function() {
            if (newsFocusNum == index) {
                return;
            }
            $(this).removeClass('news-focus');
        });
    });

    // 펼침목록 관련
    var linkListBt = $('.link-list-bt');
    var linkSiteWrap = $('.link-site-wrap');

    linkListBt.click(function(e) {
        // a 태그의 href 를 막는다.
        e.preventDefault();
        // 아래 영역으로 클릭된 정보를 전달하지 않는다.
        e.stopPropagation();
        // 목록창을 보여준다.
        linkSiteWrap.toggleClass('link-site-wrap-on');
    });

    $('body').click(function() {
        linkSiteWrap.removeClass('link-site-wrap-on');
    });

    // 상단 메뉴 처리 관련
    var hTop = $('.header-top');
    var hTop_H = hTop.height();

    var hMiddle = $('.header-middle');
    var hMiddle_H = hMiddle.height();

    var hHeight = hTop_H + hMiddle_H;

    $(window).scroll(function() {
        // 스크롤바의 위치값을 파악한다.
        var scY = $(window).scrollTop();

        if (scY >= hHeight) {
            $('.header').addClass('h-fix');
            $('.content').addClass('h-fix-mt');
            $('.logo-gnb').addClass('h-show');
            $('.gnb').addClass('h-fix-gnb');
            $('.gotop').addClass('gotop_focus');

        } else {
            $('.header').removeClass('h-fix');
            $('.content').removeClass('h-fix-mt');
            $('.logo-gnb').removeClass('h-show');
            $('.gnb').removeClass('h-fix-gnb');
            $('.gotop').removeClass('gotop_focus');
        }

    });

    // gnb 관련 코드
    var gnb = $('.mainmenu');
    var dim = $('.header-dim');
    gnb.mouseenter(function() {
        dim.stop().fadeIn(200);
    });
    gnb.mouseleave(function() {
        dim.stop().fadeOut(200);
    });

    // 우측 고정메뉴 기능 관련
    var fixA = $('.fix-a');
    $.each(fixA, function(index, item) {
        $(this).click(function(e) {
            // href 기능 막기
            e.preventDefault();
            // href 에 있는 #의 위치를 파악한다.
            var id = $(this).attr('href');
            // 스크롤 바를 어느 만큼 이동하면
            // 화면에 위치가 id 와 같은지 파악한다.
            var tgY = $(id).offset().top;
            // 화면을 이동한다.
            $('html').stop().animate({
                scrollTop: tgY - 66
            }, 600);
            // 포커스 이동하기
            fixA.removeClass('fix-a-focus');
            // fixA.eq(index).addClass('fix-a-focus');            
            $(this).addClass('fix-a-focus');

        });
    });

    // 위로가기 관련
    $('.gotop').click(function(e) {
        // href 막기
        e.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        }, 600);
    });

    // 메뉴 관련
    var mainMenu = $('.mainmenu');
    var mainMenuLi = $('.mainmenu > li');
    var subMenu = $('.submenu');    
    $.each(subMenu, function(index, item){

        $(this).mouseenter(function(){
            mainMenuLi.eq(index).find('>a').addClass('mainmenu-focus');
        });

        $(this).mouseleave(function(){
            mainMenuLi.find('>a').removeClass('mainmenu-focus');
        });
    });


    var subMenuLi = $('.submenu > li');
    var allDepth3 = $('.submenu-3rd');
    var remIndex = -10000;

    // 각 주메뉴로 마우스 이동하는 경우에 대한 처리
    $.each(mainMenuLi, function(index, item){

        $(this).mouseenter(function(){
           
            allDepth3.hide();  

            // 모든 포커스 해제
            subMenuLi.removeClass('submenu_focus_link');

            // 서브 메뉴는 보여준다.
            $(this).find('.submenu').addClass('submenu_focus');

            $(this).css('z-index', 999);

        });

        $(this).mouseleave(function(){
            // 서브 메뉴는 숨긴다.
            $(this).find('.submenu').removeClass('submenu_focus');
        });

    });


    $.each(subMenuLi, function(index, item) {

        var aTag = $(this).find('> a');
        var depth3 = $(this).find('.submenu-3rd');
        
        aTag.click(function(e) {
            
            if( $(this).hasClass('link') ) {
                return;
            }

            // href 막는다.            
            e.preventDefault(); 

            if(remIndex == index) {
                // 동일한 버튼을 눌렀을 때                
            }else {
                // 다른 버튼을 눌렀을 때
                // 일단 모든 서브 메뉴들을 닫는다.
                allDepth3.hide();
                remIndex = index;
            }

            var nowDepth3 = depth3.css('display');
            if (nowDepth3 == 'none') {
                // 보이고 있지 않으면 보여준다.
                depth3.show();                
                // display: block;
                // 현재 많은 메뉴 중에 몇번째 클릭했는지를 저장한다.
                remIndex = index;

                // 메뉴 포커스 유지
                subMenuLi.removeClass('submenu_focus_link');
                subMenuLi.eq(index).addClass('submenu_focus_link');

            } else {
                // 만약에 현재 보이고 있다면 숨긴다.  
                depth3.hide();
                // display: none;

                // 모든 포커스 해제
                subMenuLi.removeClass('submenu_focus_link');
            }
        });
    }); 

    // content 슬라이드
    var sw_content = new Swiper('.sw-content', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loopedSlides: 3,
    });

    var sw_navi = new Swiper('.sw-navi', {
        loop: true,
        slidesPerView: 3,
        navigation: {
            nextEl: ".sw-navi-next",
            prevEl: ".sw-navi-prev",
        },
        centeredSlides: true,
        loopedSlides: 3,
        slideToClickedSlide: true,
    });

    sw_content.controller.control = sw_navi;
    sw_navi.controller.control = sw_content;

    var sw_notice = new Swiper('.sw-notice', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }, 
        loop: true,
        nested: true,
        navigation: {
            nextEl: ".sw-notice-next",
            prevEl: ".sw-notice-prev",
        },        
        pagination: {
            el: ".sw-notice-pg",
            type: 'fraction',
        },
    });

    // 일시 멈춤
    $('.sw-notice-pause').click(function(){ 
        // swiper 가 중첩되어져서 처리를 함.
        for(var i = 0; i < sw_notice.length; i++ ) {
            sw_notice[i].autoplay.stop();
        }
        // sw_notice.autoplay.stop();
    });
    // 자동 재생 실행
    $('.sw-notice-play').click(function(){
        // swiper 가 중첩되어져서 처리를 함.
        for(var i = 0; i < sw_notice.length; i++ ) {
            sw_notice[i].autoplay.start();
        }
        // sw_notice.autoplay.start();
    });

    // 공지사항 목록 관련
    var noticeA = $('.notice-menu > li');
    $.each(noticeA, function(index, item) {

        $(this).find('a').click(function(e){
            // href 막기
            e.preventDefault();
            // 포커스를 적용한다.
            // 탭 내용을 보여준다.
            showNotice(index);

        });
    });

    // 내용 모음
    var noticeLi = $('.notice-cont > li');

    // 내용을 보여주고, 포커스를 이동하는 
    // 사용자 지정 함수 : showNotice(인덱스)
    function showNotice(_index) {
        
        noticeA.removeClass('notice-menu-focus');
        noticeA.eq(_index).addClass('notice-menu-focus');

        noticeLi.hide();

        if(_index == 1) {
            return;
        }

        noticeLi.eq(_index).show();

    }

    var sw_edu = new Swiper('.sw-edu', {
        autoplay: {
            delay: 2000,
            // 사용자가 터치드래그 하고 난 후 자동 실행
            disableOnInteraction: false,
        }, 
        loop: true,
        nested: true,
        navigation: {
            nextEl: ".sw-edu-next",
            prevEl: ".sw-edu-prev",
        },        
        pagination: {
            el: ".sw-edu-pg",
            type: 'fraction',
        },
    });

    // 알람 탭메뉴
    var alramA = $('.alram-tab-menu a');
    var alramCont = $('.alram-tab-cont');

    // alramCont.hide();
    // alramCont.eq(0).show();

    $.each(alramA, function(index, item){

        $(this).click(function(e){
            e.preventDefault();

            alramCont.removeClass('alram-tab-cont-focus');
            alramCont.eq(index).addClass('alram-tab-cont-focus');

            alramA.removeClass('alram-tab-menu-focus');
            alramA.eq(index).addClass('alram-tab-menu-focus');
        });
    });

}