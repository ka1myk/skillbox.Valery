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

		function menuFunction(x) {
		  if (x.matches) { // If media query matches
		    $('nav').hide();
		  } else {
		    $('nav').show();
		  }
		}

		var x = window.matchMedia("(max-width: 768px)")
		menuFunction(x) // Call listener function at run time
		x.addListener(menuFunction) // Attach listener function on state changes

		function searchFunction(xx) {
		  if (xx.matches) { // If media query matches
		    $('#search-line').hide();
		  } else {
		    $('#search-line').show();
		  }
		}

		var xx = window.matchMedia("(max-width: 530px)")
		searchFunction(xx) // Call listener function at run time
		xx.addListener(searchFunction) // Attach listener function on state changes

		if (window.matchMedia('(max-width: 768px)').matches)
		{
		    $('#menu-mobile').on('click', function()
		    {
		        var mobMenu = $('nav');
		        if(mobMenu.is(':visible'))
		        {
		           mobMenu.hide();
		        } 
		        else {
		           mobMenu.show();
		        }

		        return false;
		    });
		}
			

		if (window.matchMedia('(max-width: 530px)').matches)
		{
		    $('#search-bt').on('click', function()
		    {
		        var sline = $('#search-line');
		        var logo = $('#logo');
		        if(sline.is(':visible'))
		        {
		           sline.hide();
		           logo.show()
		        } 
		        else {
		           sline.show();
		           logo.hide();
		        }

		        return false;
		    });
		}



	});

