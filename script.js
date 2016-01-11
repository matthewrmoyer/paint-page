
$(document).ready(function(){

	$("div").mouseover(function(){
		var random = Math.random();
		if(random<=.33) {
		$(this).css("background-color", "yellow");

		}
		else if(random>=.33 && random<=.67){
			$(this).css("background-color", "red");
		}
		else if(random>.67){
			$(this).css("background-color", "green");
		}
	});

	$("#clear").click(function(){
		$(".box").css("background-color", "white");

	});

});

