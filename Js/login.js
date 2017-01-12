$(document).ready(function(){
$("#my_form").submit(function(){
  if($("email_").val()== '' && $("password_").val()== ''){
    $("#email_error").show();
    $("#password_error").show();
  }
  else if($("password_").val()== ''){
        $("#email_error").hide();
        $("#password_error").show();
  }
  else if($("email_").val()== ''){
        $("#email_error").show();
        $("#password_error").hide();
  }


});
});
