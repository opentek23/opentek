(function ($) {
  "use strict";
  var windowOn = $(window);
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });
  if ($(".tp-main-menu nav > ul > li.has-dropdown > a").length) {
    $(".tp-main-menu nav > ul > li.has-dropdown > a").append(
      '<i class="fal fa-angle-down"></i>'
    );
  }
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 500) {
      $(".scroll-to-target").removeClass("open");
    } else {
      $(".scroll-to-target").addClass("open");
    }
  });
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      $("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
    });
  }
  if ($(".scroll-to-target-2").length) {
    $(".scroll-to-target-2").on("click", function () {
      var target = $(this).attr("data-target");
      $("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
    });
  }
  function smoothSctollTop() {
    $(".smooth a").on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate({ scrollTop: target.offset().top - 150 }, 1000);
      }
    });
  }
  smoothSctollTop();
  var wow = new WOW({ mobile: !0 });
  wow.init();
  var windowOn = $(window);
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 400) {
      $("#header-sticky").removeClass("header-sticky");
    } else {
      $("#header-sticky").addClass("header-sticky");
    }
  });
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });
  $("#mobile-menu-2").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "6000",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });
  $(window).on("load", function () {
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  });
  $(".tp-menu-bar").on("click", function () {
    $(".tpoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".tpoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".tpoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".popup-video").magnificPopup({ type: "iframe" });
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });
  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
  $(".counter").counterUp({ delay: 10, time: 1000 });
  $(".tp-slider-active").slick({
    fade: !0,
    autoplay: !0,
    slidesToShow: 1,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { arrows: !1 } },
      { breakpoint: 768, settings: { arrows: !1 } },
      { breakpoint: 480, settings: { arrows: !1 } },
    ],
  });
  $(".test-slider-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !1,
    asNavFor: ".test-img-active",
  });
  $(".test-img-active").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".test-slider-active",
    dots: !1,
    arrows: !0,
    focusOnSelect: !0,
    centerPadding: "0",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  $(".brand-slider-active").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 6,
    arrows: !1,
    Infinity: !0,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5, arrows: !1 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 4 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 3 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 2 } },
    ],
  });
  $(".blog-post-slider-active").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 1,
    arrows: !1,
    Infinity: !0,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  $(".tp-case-slider-active").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 2,
    arrows: !1,
    responsive: [
      { breakpoint: 1200, settings: {} },
      { breakpoint: 992, settings: {} },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
  $(".testimonial-slider-active").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 3,
    arrows: !1,
    dots: !0,
    Infinity: !0,
    responsive: [
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 2 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  $(".tp-slider-three-active").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 1,
    arrows: !1,
    dots: !1,
    Infinity: !0,
    responsive: [
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  $(".tp-team-slider-active").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 4,
    arrows: !0,
    dots: !1,
    Infinity: !0,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
    responsive: [
      { breakpoint: 1400, settings: { arrows: !1, slidesToShow: 3 } },
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 3 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  $(".testimonial-slider-three").slick({
    fade: !0,
    autoplay: !1,
    slidesToShow: 1,
    arrows: !1,
    dots: !0,
    Infinity: !0,
    responsive: [
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  $(".tp-case-active").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 4,
    arrows: !1,
    responsive: [
      { breakpoint: 1200, settings: {} },
      { breakpoint: 992, settings: {} },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
  $(".testimonial-active-three").slick({
    fade: !1,
    autoplay: !1,
    slidesToShow: 5,
    arrows: !1,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 4 } },
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
  $(".marque-slider-active").slick({
    speed: 10000,
    autoplay: !0,
    autoplaySpeed: 0,
    centerMode: !0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: !0,
    infinite: !0,
    initialSlide: 1,
    arrows: !1,
    buttons: !1,
    rtl: !0,
    responsive: [
      { breakpoint: 1200, settings: {} },
      { breakpoint: 992, settings: {} },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
  $(".marque-slider-active-2").slick({
    speed: 10000,
    autoplay: !0,
    autoplaySpeed: 0,
    centerMode: !0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: !0,
    infinite: !0,
    initialSlide: 1,
    arrows: !1,
    buttons: !1,
    responsive: [
      { breakpoint: 1200, settings: {} },
      { breakpoint: 992, settings: {} },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
  $(".tp-product-slider-active").slick({
    slidesToShow: 4,
    arrows: !1,
    autoplay: !1,
    Infinity: !0,
    responsive: [
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 3 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 3 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 2 } },
      { breakpoint: 480, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  $(".popup-image").magnificPopup({ type: "image", gallery: { enabled: !0 } });
  $("#showlogin").on("click", function () {
    $("#checkout-login").slideToggle(900);
  });
  $("#showcoupon").on("click", function () {
    $("#checkout_coupon").slideToggle(900);
  });
  $("#cbox").on("click", function () {
    $("#cbox_info").slideToggle(900);
  });
  $("#ship-box").on("click", function () {
    $("#ship-box-info").slideToggle(1000);
  });
  $(".popup-video").magnificPopup({ type: "iframe" });
  $(".grid").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: !0,
      layoutMode: "fitRows",
      masonry: { columnWidth: 1 },
    });
    $(".masonary-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
        animationOptions: { duration: 10000, easing: "linear", queue: !0 },
      });
    });
    $(".masonary-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });
  $(".tp-search-box").on("click", function () {
    $(".search-wrapper").toggleClass("search-open");
  });
  $("body > *:not(header)").on("click", function () {
    $(".search-wrapper").removeClass("search-open");
  });
  $(".cart-minus").on("click", function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return !1;
  });
  $(".cart-plus").on("click", function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return !1;
  });
  if ($("#slider-range").length) {
    $("#slider-range").slider({
      range: !0,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
    $("#filter-btn").on("click", function () {
      $(".filter-widget").slideToggle(1000);
    });
  }
  $("select").niceSelect();
})(jQuery);
