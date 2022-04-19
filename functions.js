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
	
	
	var chart = new CanvasJS.Chart("chartContainer",
		{
			title:{
				text: "Spline Area Chart"
			},    		
			data: [
			{        
				type: "splineArea",
				dataPoints: [
				{x: new Date(1992,0), y: 2506000},     
				{x: new Date(1993,0), y: 2798000},     
				{x: new Date(1994,0), y: 3386000},     
				{x: new Date(1995,0), y: 6944000},     
				{x: new Date(1996,0), y: 6026000},     
				{x: new Date(1997,0), y: 2394000},     
				{x: new Date(1998,0), y: 1872000},     
				{x: new Date(1999,0), y: 2140000},     
				{x: new Date(2000,0), y: 7289000},     
				{x: new Date(2001,0), y: 4830000},     
				{x: new Date(2002,0), y: 2009000},     
				{x: new Date(2003,0), y: 2840000},     
				{x: new Date(2004,0), y: 2396000},     
				{x: new Date(2005,0), y: 1613000},     
				{x: new Date(2006,0), y: 2821000},     
				{x: new Date(2007,0), y: 2000000},     
				{x: new Date(2008,0), y: 1397000}    
				]
			}             
			]
		});

	chart.render();
	}


