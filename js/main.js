if($('#main-slider').length){
	$('#main-slider').bxSlider({
	  
	});
}

if($('#brand-carousel').length){
	$('#brand-carousel').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    nav:true,
    navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        991:{
            items:5
        },
        1200:{
            items:6
        }
    }
	})
}
if($('#letter-review').length){
	$('#letter-review').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    nav:true,
    navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        991:{
            items:4
        },
        1200:{
            items:5
        }
    }
	})
}
if($('#review-carousel').length){
	$('#review-carousel').owlCarousel({
    loop:false,
    margin:30,
    dots: false,
    nav:true,
    navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
	})
}
$(document).ready(function() {
  $(".fancybox").fancybox({
    padding : 0,
    openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});

function heightWrapper(){
  var heightBlock = $('.sidebar').height();
  $('.wrapper__inner').css('min-height', heightBlock + 25 +'px');
}
heightWrapper()

if($('.slider-range').length){
    $(".slider-range").slider({
     min: 0,
     max: 150000,
     values: [0,150000],
     range: true,
     stop: function(event, ui) {
        $(".minCost").val($(".slider-range").slider("values",0));
        $(".maxCost").val($(".slider-range").slider("values",1));
      },
      slide: function(event, ui){
        $(".minCost").val($(".slider-range").slider("values",0));
        $(".maxCost").val($(".slider-range").slider("values",1));
      }
    });
     $(".minCost").change(function(){
     var value1=$(".minCost").val();
     var value2=$(".maxCost").val();

      if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        $(".minCost").val(value1);
     }
     $(".slider-range").slider("values",0,value1); 
    });
    $(".maxCost").change(function(){
     var value1=$(".minCost").val();
     var value2=$(".maxCost").val();
     
     if (value2 > 12000) { value2 = 12000; $(".maxCost").val(12000)}

     if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        $(".maxCost").val(value2);
     }
     $(".slider-range").slider("values",1,value2);
   });
}

if($('#card-slider').length){
  $('#card-slider').bxSlider({
    pagerCustom: '#card-thumb',
    controls: false
  });
}

var tab = new Array('#description','#char','#review');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){   
       $(arr[i]).hide();     
    }
    $(e).show();       
  }
}

$('.tab-list li').click(function(e) {
  $('.tab-list li').removeClass('active');
  $(this).addClass('active');
});

$('.navbar-toggle').click(function(event) {
  var menu = $(this).next();
  if(menu.is(':hidden')){
    menu.slideDown(250)
  }
  else{
    menu.slideUp(250)
  }
});