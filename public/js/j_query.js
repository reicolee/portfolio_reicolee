$(document).ready(function() {
    let from, to, subject, text;
    $("#send_email").click(function() {
        from = $("#email").val();
        subject = $("#subject").val();
        text = $("#form-content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get('https://reicolee.herokuapp.com/send', {
            from: from,
            subject: subject,
            text: text
        }, function(data) {
            if (data === 'sent') {
                $("#message").empty().html("Email is been sent at " + to + " . Please check inbox!");
            }
        });
    });

    $(".page-scroll").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 750, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
