const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerStripes = document.querySelector('.fas.fa-bars');
const hamburgerClosed = document.querySelector('.close');


console.log(hamburgerMenu , hamburgerStripes)

hamburgerStripes.addEventListener ("click", function() {
    hamburgerMenu.classList.add('active');
    
})

hamburgerClosed.addEventListener ("click", function() {
    hamburgerMenu.classList.remove('active');
    
})







