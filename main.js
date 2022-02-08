const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerStripes = document.querySelector('.fas.fa-bars');
const hamburgerClosed = document.querySelector('.close');


console.log(hamburgerMenu , hamburgerStripes)

hamburgerStripes.addEventListener ("click", function() {
    hamburgerMenu.style.display="block";
})

hamburgerClosed.addEventListener ("click", function() {
    hamburgerMenu.style.visibility="hidden";
})
