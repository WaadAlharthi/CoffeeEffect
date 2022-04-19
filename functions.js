function getValues() {
  var cof_time = document.querySelector("#cof_time").value;
  var quantity = document.querySelector("#quantity").value;
	
	var med_time = document.querySelector("#med_time").value;
	var bedtime = document.querySelector("#bedtime").value;
	
	document.querySelector("#result1").innerHTML = cof_time;			
	document.querySelector("#result2").innerHTML = quantity;
	
	document.querySelector("#result3").innerHTML = med_time;
	document.querySelector("#result4").innerHTML = bedtime;
	
	document.querySelector(".first").src = 'ezgifcom-gif-maker5.gif';
	document.querySelector(".second").src = 'ezgifcom-gif-maker3.gif';
	document.querySelector(".third").src = 'ezgifcom-gif-maker4.gif';
  document.querySelector(".forth").src = 'ezgifcom-gif-maker6.gif';
	
	
}


