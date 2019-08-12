$(function(){
    $('.menunav').mouseenter(function(){
        //index -> 순서번째
        // var idx=$(this).index() 
        //fadeout=> 사라져라
        // $('.navbg').hide()
        //순서번째 데이타(eq(idx)) 나타나라(fadeIn())
        $('.navbg').stop().slideDown()
    })
    $('.menunav').mouseleave(function(){
        $('.navbg').stop().slideUp()
     })


    $('').mouseenter(function(){
        var idx=$(this).index() 
    })


  
        $('.Mlv1').mouseenter(function(){
            // alert()
            $('.Mlv2boxbg').stop().slideDown()
            var idx=$(this).index()
            $('.Mlv2').stop().hide()
            // 이벤트 하위에 있는 엘리먼트
            // tranversing[find]
            $('.Mlv2').eq(--idx).stop().show()
            //$(this).children('level2').slideDown()
            $('li').removeClass('on')
            // 현재번째의 사용자 클래스를 지정한다.
           $(this).addClass('on')
        })
        $('.Menubarbg').mouseleave(function(){
            $('.Mlv2boxbg').stop().slideUp()
         })
         $('.Mlv1h').mouseenter(function(){
            $('.Mlv2boxbg').stop().slideUp()
         })

})
    