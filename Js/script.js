$(document).ready(function(){
  $(".error").hide();
  $("#date").parsley();
  $("#selectKtm").hide();
  $("#selectIndian").hide();
  $("#selectNw").hide();
  $("#myKtm").hide();


  $("#my_form").submit(function(){
    if($("#name_").val()== '' && $("#email_").val() == '' &&
   $("#password_").val() == ''&& $("#rpassword_").val() == ''&&
    $("#number_").val() == '' &&
    $("#cemployer_").val() == '' && $("#cemployerAdd_").val() == '' &&
    $("#pemployer_").val() == '' && $("#pemployerAdd_").val() == ''){
        // alert($(".error").show());
        $("#name_error").show();
        $("#email_error").show();
        $("#password_error").show();
        $("#rpassword_error").show();
        $("#number_error").show();
        $("#cemployer_error").show();
        $("#cemployerAdd_error").show();
        $("#pemployer_error").show();
        $("#pemployerAdd_error").show();
        $("#pemployer_error").show();
        $("#pemployer_error").show();
        $("#pemployer_error").show();
       return false;
    }
    // else{
    //   $("#name_error").hide();
    //   $("#email_error").hide();
    //   $("#password_error").hide();
    //   $("#rpassword_error").hide();
    //   $("#number_error").hide();
    //   $("#cemployer_error").hide();
    //   $("#cemployerAdd_error").hide();
    //   $("#pemployer_error").hide();
    //   $("#pemployerAdd_error").hide();
    //   $("#pemployer_error").hide();
    //   $("#pemployer_error").hide();
    //   $("#pemployer_error").hide();
    //
    // }





  });
  $("#date").datepicker({
    format:('mm-dd-yyyy'),
    endDate:' 01-01-1993'
  });
  $("#plus").click(function(){
    $("#emp").append($("#append").html())
  });

  $("#plus1").click(function(){
    $("#emp1").append($("#append1").html())
  });
  $("#plus2").click(function(){
    $("#emp2").append($("#append2").html())
  });
  $("#select_").change(function(){
    if($("#select_").val()== "np"){
      $("#selectKtm").show();
      $("#selectIndian").hide();
      $("#selectNw").hide();
    }
    if($("#select_").val()== "ind"){
      $("#selectKtm").hide();
      $("#selectIndian").show();
      $("#selectNw").hide();
    }

    if($("#select_").val()== "new"){
      $("#selectKtm").hide();
      $("#selectIndian").hide();
      $("#selectNw").show();
    }


    $("#myKtm").show();
  });

});
