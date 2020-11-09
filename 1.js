$(function(){
   $('.about').on('click', function(event) {
   	event.preventDefault();
   	  $('html,body').animate({scrollTop: $('.page1').offset().top },1000);
    });
    $('.skills').on('click', function(event) {
   	event.preventDefault();
   	  $('html,body').animate({scrollTop: $('.page2').offset().top },1000);
    });
    $('.education').on('click', function(event) {
   	event.preventDefault();
   	  $('html,body').animate({scrollTop: $('.page3').offset().top },1000);
    });
    $('.experience').on('click', function(event) {
   	event.preventDefault();
   	  $('html,body').animate({scrollTop: $('.page4').offset().top },1000);
    });
    $('.portfolio').on('click', function(event) {
   	event.preventDefault();
   	  $('html,body').animate({scrollTop: $('.page5').offset().top },1000);
    });
     $('.contact').on('click', function(event) {
   	event.preventDefault();
   	  $('html,body').animate({scrollTop: $('.page6').offset().top },1000);
    });

    var tong = $('.ctsp ul').isotope({
       itemSelector:'li',
    });

    $('.menusp ul li').on('click', function(event) {
    	$('.menusp ul li').removeClass('active');
    	$(this).addClass('active');

    	var rel = $(this).data('rel');

    	if(rel == 'all')
    	{
    		tong.isotope({filter:'*'});
    	}
    	else
    	{
    		tong.isotope({filter: rel});
    	}
    	return false;
    });

       circliful.newCircle({
        percent: 70,
        id: 'tron1',
        type: 'simple',
        point: true,
        pointSize: 70,
        foregroundCircleWidth: 10,
        animateInView: true
    });
       circliful.newCircle({
        percent: 80,
        id: 'tron2',
        type: 'simple',
        point: true,
        pointSize: 70,
        foregroundCircleWidth: 10,
        animateInView: true
    });
       circliful.newCircle({
        percent: 65,
        id: 'tron3',
        type: 'simple',
        point: true,
        pointSize: 70,
        foregroundCircleWidth: 10,
        animateInView: true
    });
       circliful.newCircle({
        percent: 50,
        id: 'tron4',
        type: 'simple',
        point: true,
        pointSize: 70,
        foregroundCircleWidth: 10,
        animateInView: true
    });
})  

 