// 상단 언어, 주요홈페이지 슬라이드 업다운
document.addEventListener("DOMContentLoaded", function() {
        var languageLink = document.getElementById("language");
        var langList = document.getElementById("lang_list");
    
        languageLink.addEventListener("click", function() {
            if (langList.style.height === "0px" || langList.style.height === "") {
                langList.style.height = langList.scrollHeight + "px"; // 슬라이드 다운
            } else {
                langList.style.height = "0px"; // 슬라이드 업
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var homepageLink = document.getElementById("homepage");
        var hpList = document.getElementById("hp_list");
    
        homepageLink.addEventListener("click", function() {
            if (hpList.style.height === "0px" || hpList.style.height === "") {
                hpList.style.height = hpList.scrollHeight + "px";
            } else {
                hpList.style.height = "0px";
            }
        });
    });


//탭메뉴
$(function() {
    $('.sub_group').hide();
    $('.mainMenu > li').on('mouseenter', function() {
        // 마우스가 메뉴에 들어갔을 때 슬라이드 다운
        $(this).find('.sub_group').stop().slideDown(300)/* .fadeIn(300) */;
    });

    $('.mainMenu > li').on('mouseleave', function() {
        // 마우스가 메뉴 영역을 벗어났을 때 슬라이드 업
        $(this).find('.sub_group').stop().slideUp(300)/* .fadeOut(300) */;
    });
});



// $(function() {
//     // 서브메뉴 초기 설정
//     $('.sub_group').hide();

//     let currentSubGroup = null;

//     // 메인메뉴 항목에 마우스 진입시
//     $('.mainMenu > li').on('mouseenter', function(e) {
//         e.stopPropagation();
        
//         const $subGroup = $(this).find('.sub_group');
        
//         // 다른 서브그룹이 열려있는 경우
//         if (currentSubGroup && currentSubGroup[0] !== $subGroup[0]) {
//             currentSubGroup.stop(true, true).slideUp(200, function() {
//                 $subGroup.css('display', 'flex').hide().slideDown(200);
//             });
//         } else {
//             // 처음이거나 같은 서브그룹인 경우
//             if(!$subGroup.is(':visible')) {
//                 $subGroup.css('display', 'flex').hide().slideDown(200);
//             }
//         }
        
//         currentSubGroup = $subGroup;
//     });

//     // 서브그룹 영역에서 벗어날 때
//     $('.sub_group').on('mouseleave', function(e) {
//         e.stopPropagation();
//         $(this).stop(true, true).slideUp(200, function() {
//             currentSubGroup = null;
//         });
//     });

//     // 메모리 누수 방지를 위한 이벤트 바인딩 최적화
//     $('.mainMenu > li, .sub_group').on('mouseleave mouseenter', function(e) {
//         e.stopPropagation();
//     });
// });

//햄버거메뉴 누르면 전체 메뉴 나타나기
$(document).ready(function() {
    $('.HB_menu a').on('click', function(e) {
        e.preventDefault();
        $('.btnMenu_wrap').css('display', 'block').hide().fadeIn(500);
    });
    
    $('.x_btn').on('click', function() {
        $('.btnMenu_wrap').fadeOut(500);
    });
});

// //햄버거메뉴 자바스크립트
// document.addEventListener('DOMContentLoaded', function() {
//     const menuBtn = document.querySelector('.HB_menu a');
//     const menuWrap = document.querySelector('.btnMenu_wrap');
//     const closeBtn = document.querySelector('.x_btn');
    
//     // 메뉴 열기
//     menuBtn.addEventListener('click', function(e) {
//         e.preventDefault();
//         menuWrap.style.display = 'block';
//         menuWrap.style.opacity = '0';
        
//         // opacity 변화에 트랜지션 효과 추가
//         menuWrap.style.transition = 'opacity 0.5s ease';
        
//         // fade in 효과
//         setTimeout(() => {
//             menuWrap.style.opacity = '1';
//         }, 10);
//     });
    
//     // 메뉴 닫기
//     closeBtn.addEventListener('click', function() {
//         menuWrap.style.opacity = '0';
        
//         // fade out 후 display none 처리
//         setTimeout(() => {
//             menuWrap.style.display = 'none';
//         }, 500); // 트랜지션 시간과 동일하게 설정
//     });
// });

function toggleNav(event) {
    event.preventDefault();
    const nav = document.getElementById('quickMenu');
    nav.classList.toggle('collapsed');
}