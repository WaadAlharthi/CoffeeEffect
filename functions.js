function getValues() {
  	var quantity = document.querySelector("#quantity").value;
	var caf_time = document.querySelector("#caf_time").value;
	var bedtime = document.querySelector("#bedtime").value;
				
	document.querySelector("#result1").innerHTML = quantity;
	document.querySelector("#result2").innerHTML = caf_time;
	document.querySelector("#result3").innerHTML = bedtime;
	
	document.querySelector(".second").style.fill = 'red';
	

}
