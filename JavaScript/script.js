// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

//Get the button:
mybutton = document.getElementById("myBtn");

//when the user scrolls down 40px from the top of the document, show the buttom
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// when the user clicks on the button, scrolls top of the document
function topFunction() {
    document.body.scrollTop = 0; //For safari
    document.documentElement.scrollTop = 0; //For Chrome, firefox, IE and opera
}

const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});