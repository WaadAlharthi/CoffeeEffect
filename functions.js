function getValues() {
  var cof_time = document.querySelector("#cof_time").value;
  var quantity = document.querySelector("#quantity").value;
	
	var med_time = document.querySelector("#med_time").value;
	var bedtime = document.querySelector("#bedtime").value;

  //[ { x: min value of cof_time or med_time , y: quantity * 200 or medication dose },
  //  { x: prev x+100, y: prev y-? },
  // continure untill bedtime
  //  { x: bedtime , y: depends?} ]
  start = Math.min(med_time, cof_time);
  
	document.querySelector("#result1").innerHTML =start;
  
  
  //var datapoints = [{x:},
  //                  {},
  //                  {}]
  //chart.options.data = datapoints
	
	document.querySelector(".first").src = 'ezgifcom-gif-maker5.gif';
	document.querySelector(".second").src = 'ezgifcom-gif-maker3.gif';
	document.querySelector(".third").src = 'ezgifcom-gif-maker4.gif';
  document.querySelector(".forth").src = 'ezgifcom-gif-maker6.gif';
  
  
	
	
}
