$(document).ready(function(){

	$("#hide_sidebar").click(function(){

	  $("#sidebar").hide();	
	  $("#hide_sidebar").hide();	
	  $("#show_sidebar").show();

	  $("#content").animate({
		width: "100%",
		marginLeft: "0"
	  }, 350 );	
	  
	  return false;
		
	});


	$("#show_sidebar").click(function () {
	  
	  $("#show_sidebar").hide();
	  $("#hide_sidebar").show();
	  $("#content").animate({
		width: "74.359%",
		marginLeft: "2.5641%"
	  }, 0 );	
	  
	  $("#sidebar").fadeIn("fast");	
	  
	  return false;
	});
	
	
});	
