let sliderInner = document.querySelector(".slider-inner");

let index = 1;

let images = sliderInner.querySelectorAll("img");

setInterval(function(){
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    index++;
    if(index > (images.length - 1))
    {
        index = 0;
    }
},3000);