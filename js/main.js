function heightWrapper(){var e=$(".sidebar").height();$(".wrapper__inner").css("min-height",e+25+"px")}$("#main-slider").length&&$("#main-slider").bxSlider({}),$("#brand-carousel").length&&$("#brand-carousel").owlCarousel({loop:!1,margin:10,dots:!1,nav:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:3},1e3:{items:6}}}),$("#letter-review").length&&$("#letter-review").owlCarousel({loop:!1,margin:10,dots:!1,nav:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),$("#review-carousel").length&&$("#review-carousel").owlCarousel({loop:!1,margin:30,dots:!1,nav:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{600:{items:1},1e3:{items:2}}}),$(document).ready(function(){$(".fancybox").fancybox({padding:0,openEffect:"elastic",closeEffect:"elastic",helpers:{overlay:{locked:!1}}})}),heightWrapper(),$(".slider-range").length&&($(".slider-range").slider({min:0,max:15e4,values:[0,15e4],range:!0,stop:function(e,a){$(".minCost").val($(".slider-range").slider("values",0)),$(".maxCost").val($(".slider-range").slider("values",1))},slide:function(e,a){$(".minCost").val($(".slider-range").slider("values",0)),$(".maxCost").val($(".slider-range").slider("values",1))}}),$(".minCost").change(function(){var e=$(".minCost").val(),a=$(".maxCost").val();parseInt(e)>parseInt(a)&&(e=a,$(".minCost").val(e)),$(".slider-range").slider("values",0,e)}),$(".maxCost").change(function(){var e=$(".minCost").val(),a=$(".maxCost").val();a>12e3&&(a=12e3,$(".maxCost").val(12e3)),parseInt(e)>parseInt(a)&&(a=e,$(".maxCost").val(a)),$(".slider-range").slider("values",1,a)}));