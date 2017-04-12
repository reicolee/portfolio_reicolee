$(document).ready(function() {
 let from, to, subject, text;
 $("#send_email").click(function(){
    from=$("#email").val();
    subject=$("#subject").val();
    text=$("#form-content").val();
    $("#message").text("Sending E-mail...Please wait");
    $.get('http://localhost:8080/send',
       {
        from: from,
        subject: subject,
        text: text
       }, function(data) {
        if(data === 'sent'){
            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
        }
       });
    });
 });
