// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";

jQuery(document).ready(function ($) {
  $(".icon-menu").on("click", function () {
    $("html").toggleClass("lock");
    $("html").toggleClass("menu-open");
  });
  $(".scroll").on("click", 'a[href*="#"]', function (e) {
    e.preventDefault();
    let paddingTop = $(this).closest(".scroll").data("padding");
    console.log(paddingTop);
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - paddingTop,
      },
      800,
      "linear"
    );
    $("html").removeClass("lock");
    $("html").removeClass("menu-open");
  });

  let scene = document.getElementById("faces");
  //let parallaxInstance = new Parallax(scene);
});
