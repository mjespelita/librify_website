$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 10, // margin in pixels between items
    item: 2,
    loop: true
  });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});

