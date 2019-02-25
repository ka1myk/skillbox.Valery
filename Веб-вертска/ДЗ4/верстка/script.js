$(function(){	
	$("#add-case").off('click').on('click', function(){		
		$("#list-empty").hide();
		
		var valueName = $('#addname').val();
		if (!valueName) {
			alert ("Заполните поле название")
			return false
		}
			
		var valueDescription = $('#add-description').val();
		if (!valueDescription) {
			alert ("Заполните поле описание")
			return false
		}

		var containerTodoname = "<div class='to-do-block-name'><p class='to-do-name'>"+ valueName +"</p><input type='image' name='delete-button' class='delete-button' src='img/delete.png'><input type='image' name='hide-button' class='hide-button' src='img/hide.png'></div>"
		var containerTododesc = "<div class='to-do-block-description'>"+ valueDescription +"</div>"
		var containerTodo = "<div class='to-do-block'>"+ containerTodoname + containerTododesc +"</div>"

		$("#left-container").append(containerTodo);		
		$('#addname').val("");
		$('#add-description').val("");


	
	$('.delete-button').click(function(){
		$(this).parent().parent().remove();

	var n = $("div.to-do-block").length;
	console.log (n);
	if (n == 0) {
		$("#list-empty").show();
	}
	else
		return false;
	
		
		});

	$('.hide-button').off('click').on('click',function(){
		$(this).parent().next().slideToggle(200);
			
	});
	});	
});