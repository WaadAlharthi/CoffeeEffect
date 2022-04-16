function getValues() {
				var q = document.getElementsById("quantity");
				var c = document.getElementsById("caf_time");
				var b = document.getElementsById("bedtime");
  
        var quantity = q.value;
				var caf_time = c.value;
				var bedtime = b.value;
  
				
				document.getElementById("result1").innerHTML = quantity;
				document.getElementById("result2").innerHTML = caf_time;
				document.getElementById("result3").innerHTML = bedtime;
}
