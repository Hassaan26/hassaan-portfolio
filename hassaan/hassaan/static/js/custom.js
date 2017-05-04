$(window).load(function(){
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
   $('#loader').fadeOut();
   $('#loader-wrapper').fadeOut();
});
$( document ).ready(function() { // 6,32 5,38 2,34
	$("#html").circliful({
	    animation: 1,
	    animationStep: 5,
	    foregroundBorderWidth: 5,
	    backgroundBorderWidth: 5,
	    percent: 80,
	    textSize: 24,
	    textStyle: 'font-size: 12px;',
	    textColor: '#666',
	    multiPercentage: 1,
	    percentages: [10, 20, 30]
	});
	$("#css").circliful({
	    animation: 1,
	    animationStep: 5,
	    foregroundBorderWidth: 5,
	    backgroundBorderWidth: 5,
	    percent: 80,
	    textSize: 24,
	    textStyle: 'font-size: 12px;',
	    textColor: '#666',
	    multiPercentage: 1,
	    percentages: [10, 20, 30]
	});
	$("#bootstrap").circliful({
	    animation: 1,
	    animationStep: 5,
	    foregroundBorderWidth: 5,
	    backgroundBorderWidth: 5,
	    percent: 50,
	    textSize: 24,
	    textStyle: 'font-size: 12px;',
	    textColor: '#666',
	    multiPercentage: 1,
	    percentages: [10, 20, 30]
	});
	$("#jquery").circliful({
	    animation: 1,
	    animationStep: 5,
	    foregroundBorderWidth: 5,
	    backgroundBorderWidth: 5,
	    percent: 70,
	    textSize: 24,
	    textStyle: 'font-size: 12px;',
	    textColor: '#666',
	    multiPercentage: 1,
	    percentages: [10, 20, 30]
	});
	$("#angular").circliful({
	    animation: 1,
	    animationStep: 5,
	    foregroundBorderWidth: 5,
	    backgroundBorderWidth: 5,
	    percent: 50,
	    textSize: 24,
	    textStyle: 'font-size: 12px;',
	    textColor: '#666',
	    multiPercentage: 1,
	    percentages: [10, 20, 30]
	});
	$("#pd").circliful({
	    animation: 1,
	    animationStep: 5,
	    foregroundBorderWidth: 5,
	    backgroundBorderWidth: 5,
	    percent: 40,
	    textSize: 24,
	    textStyle: 'font-size: 12px;',
	    textColor: '#666',
	    multiPercentage: 1,
	    percentages: [10, 20, 30]
	});
});