
function mouseevent(){
document.getElementById("enquiry").innerHTML="Click here for more information"
document.getElementById("enquiry").style.background="yellow";
document.getElementById("enquiry").style.width="200px";

document.getElementById("enquiry").style.height="100px"
}





// when the user clicks on the button,open the modal
function clickevent(){
    document.getElementById("modal-content").style.display="block"
}


// when the user clicks on span(x), close the modal
 function clickmeevent(){
document.getElementById("modal-content").style.display="none"
}
  

// when the user clicks anywhere outside of the modal, close it
