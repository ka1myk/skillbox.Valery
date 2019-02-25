$(function(){
	$("#selectcity").click(function(){
		$("#popup-container").fadeIn(400);
		$("#popup").animate({
			width: '200px',
			height: '200px'
		},400);
		scrollLock.hide();
	});

	$("#popup-container").click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
			$("#popup").animate({
				width: 0,
				height: 0
			},400);
			scrollLock.show();
		}		
	});
	
		$.get('http://data.fixer.io/api/latest?access_key=dc3fde92810182d80b772b3019f22ec2&base=EUR&symbols=RUB', function(data){
			document.getElementById("currencyEUR").innerHTML += "<p>EUR MOEX</p>"+data.rates.RUB.toFixed(2);
						
		});
	});

