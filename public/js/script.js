const gallery = document.querySelector(".gallery__container");
const leftArrow = document.querySelector(".left__Arrow");
const rightArrow = document.querySelector(".right__Arrow");
let count = 0;
let photos = [];

for (let i = 0; i <= gallery.children.length; i++) {
    if (i > 0 && i <11) {
        photos.push(gallery.children[i]);
    }
}

rightArrow.addEventListener('click', function(e) {

   if (count >= 11) {
     count = 0; 
     count ++;
   
     photos[count-1].style = "display: none";
     photos[count].style = "display: flex";
   } else { 
     count ++;
   
    photos[count-1].style = "display: none";
    photos[count].style = "display: flex";
}

})

leftArrow.addEventListener('click', function(e) {

    count --;
   
    photos[count+1].style = "display: none";
    photos[count].style = "display: flex";


})