$(document).ready(function() {	
 $(".projet").click(function() {
 
		   $(window).scrollTop($(window).scrollTop()-10000);
			
			

 
 
		$('#boxes').focus();
		if(jQuery(this).attr("id")=="anuradhapura")
			var id = '#dialog';
		if(jQuery(this).attr("id")=="bambarakanda")
			var id = '#dialog1';
		if(jQuery(this).attr("id")=="nuwaraeliya")
			var id = '#dialog2';
		if(jQuery(this).attr("id")=="polonnaruwa")
			var id = '#dialog4';
		if(jQuery(this).attr("id")=="trincomale")
			var id = '#dialog3';
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(500);	
		$('#mask').fadeTo("slow",0.9);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		
		 $('#id').focus();
	
		$(id).css('margin-top',100);
		//transition effect
		$(id).fadeIn(2000); 	
	
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});		
	
});
});