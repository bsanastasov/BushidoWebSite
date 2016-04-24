$(document).ready(function(){
    


    $(".flip1").hover(function(){

        var data_to_toggle = $(this).attr("data-inf");
        $("."+data_to_toggle).slideDown('400', function() {

        	$(this).mouseleave(function(event) {

        		
        		$(this).slideUp(400);

        	});
        		
        });
        
	});
	

  $(".sams").fadeIn(1000);

  $(".sams").hover(function(){


  		$(".budism-elements").slideDown(900);
  		$(this).hover(function() {
  			$("#spiritsamurai").show(2500);
  		});

  });

  $(".explain").fadeIn(1800);
  $("#old-man").fadeIn(1800);

    
});