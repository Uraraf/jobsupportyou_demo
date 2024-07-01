$(function(){
    // ハンバーガーメニュー
    $(".menu-button").on("click", function () {
        $("header").toggleClass("active");
      });
      // メニューのリンクをクリックした時
      $(".nav-menu li a").on("click", function () {
        $("header").toggleClass("active");
      });

      // スムーススクロール
        // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').on('click',function(){
        // クリックしたaタグのリンクを取得
        let href =$(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href=="" ? "html" : href);
        // トップページからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({scrollTop: position}, 600, "swing");
        // urlが変化しないようにfalseを返す
        return false;
        });

        $(window).on('load', function(){
          $("#mainvisual").addClass("fade-in");
      });

      // slick
      $('.satellite-slick').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000
      });
});