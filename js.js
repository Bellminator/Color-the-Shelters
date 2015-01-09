$(document).ready(function(){
	$(".logo").lettering();

	// Indigo - 5B6DC8
	// Red - 954932
	// Orange - CF9717
	// Yellow - E7D127
	// Violet - 493984
	// Blue - 176B82
	// Green - 4A8F19
	var colors = [ "#954932", "#CF9717", "#E7D127", "#4A8F19", "#176B82", "#5B6DC8", "#493984" ];
	var letter = 1;
	var color = 0;

	window.setInterval(function(){
			if( letter <= 18 ){
				$(".char" + letter).css("color", colors[color]);

				if( letter < 6 || letter > 9){ letter++; }else{ letter = 10; };

				if( color > 5 ){ color = 0; }else{ color++; };
			}
		} 
	,200);
});