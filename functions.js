function getValues() {
  var cof_time = document.querySelector("#cof_time").value;
  var quantity = document.querySelector("#quantity").value;
	
	var med_time = document.querySelector("#med_time").value;
	var bedtime = document.querySelector("#bedtime").value;

  //[ { x: min value of cof_time or med_time , y: quantity * 200 or medication dose },
  //  { x: prev x+100, y: prev y-? },
  // continure untill bedtime
  //  { x: bedtime , y: depends?} ]
  
  med = med_time.substring(0, 2);
	med = parseInt(med);
  
  cof = cof_time.substring(0, 2);
	cof = parseInt(cof);
  
  quantity = parseInt(quantity);
  
  var startX = cof;
  var startY = 80*quantity;
  
  if (med < cof) 
  {
    startX = med;
    startY = 200;
  } 
    
  document.querySelector("#result1").innerHTML =startX ;
  
  
  var datapoints = [{x:startX, y: startY}]
	document.querySelector("#chartContainer").options.data = datapoints;
	
	document.querySelector("#chartContainer").render();
	
	document.querySelector(".first").src = 'ezgifcom-gif-maker5.gif';
	document.querySelector(".second").src = 'ezgifcom-gif-maker3.gif';
	document.querySelector(".third").src = 'ezgifcom-gif-maker4.gif';
 	document.querySelector(".forth").src = 'ezgifcom-gif-maker6.gif';
  	
	
}
