const current = document.querySelector('#current');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

img[0].style.opacity = opacity;

img.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset the opacity
    img.forEach(img => (img.style.opacity = 1));
    //Change the current img
    current.src = e.target.src;
    
    //Add fade in class
    current.classList.add('fade-in');
    
    //Remove the fade in class after 5sec
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //Change the opacity to opacity var
    e.target.style.opacity = opacity;
}


