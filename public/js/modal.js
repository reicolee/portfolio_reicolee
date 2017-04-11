// Get the modal
var modal1 = document.getElementById('portfolioModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("portfolio1");
var btn2 = document.getElementById("portfolio2");
var btn3 = document.getElementById("portfolio3");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
