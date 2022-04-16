function getValues() {
				var quantity = document.getElementsById("quantity").value;
				const caf_time = document.getElementsById("caf_time").value;
				const bedtime = document.getElementsById("bedtime").value;
				
				document.getElementById("result1").innerHTML = quantity.val;
				document.getElementById("result2").innerHTML = caf_time;
				document.getElementById("result3").innerHTML = bedtime;
}

var X = "XX";

document.getElementById("result3").innerHTML = X;
