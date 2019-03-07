$(function(){	
	

		function menuFunction(x) {
		  if (x.matches) { // If media query matches
		    $('nav').hide();
		  } else {
		    $('nav').show();
		  }
		}

		var x = window.matchMedia("(max-width: 950px)")
		menuFunction(x) // Call listener function at run time
		x.addListener(menuFunction) // Attach listener function on state changes
	

		if (window.matchMedia('(max-width: 950px)').matches)
		{
		    $('#menu-mobile').on('click', function()
		    {
		        var mobMenu = $('nav');
		        var mobprop = $('#mobile-header');
		        if(mobMenu.is(':visible'))
		        {
		           mobMenu.hide();
		           mobprop.show();
		        } 
		        else {
		           mobMenu.show();
		           mobprop.hide();
		        }

		        return false;
		    });
		}		

	});

