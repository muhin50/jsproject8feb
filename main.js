$(document).ready(function(){
	// email validation
var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}



$('#exampleInputEmail1').keyup(function() {

    var value = $(this).val();
    var valid = validateEmail(value);

    if (!valid) {

         $("#p1").text("not valid").css('color', 'red');
       

    } else {

        $("#p1").text("valid").css('color', 'green');
       
    }

}); // email validation

	$("#exampleInputName2,#exampleInputName3").keyup(function(){

		var id1 = $("#exampleInputName2").val();
		var id = $("#exampleInputName2").val().length;
		var id2 = $("#exampleInputName3").val();
		var id0 = $("#exampleInputName3").val().length;

		if(id>0 && id0>0)
		{
			$("#exampleInputName4").val(id1+" "+id2);
		}
		else{
			$("#exampleInputName4").val("");
		}

	});
$(function() {
    $("#txtConfirmPassword").keyup(function() {
        var password = $("#txtNewPassword").val();
        $("#divCheckPasswordMatch").html(password == $(this).val() ? "Passwords match.": "Passwords do not match!");
    });

});
 

  $( function() {
    $( "#dable,#dable2" ).draggable({ revert: "valid" });
          $( "#mybox" ).droppable({
      drop: function( event, ui ) {
        $( this ).css("background-color","green");
      }
    });
  } );

});





