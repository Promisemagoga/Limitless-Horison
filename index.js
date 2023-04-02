//Get the button
let mybutton = document.getElementById("myBtn");

//when user scroolls down 20px from the top of the docoment, show the button
window.onscroll = function() {
    scrollFunction()
};


function scrollFunction(){
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display ="none";
    }
}

//when the user clicks thebutton,scroll to the top of the document
function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function menu(){
    var x = document.getElementById("myTopnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}