const carousel = document.querySelector(".carousel");
const img = carousel.querySelector(".carousel__item");
const imgArry = [];

const NO_OF_IMG = 6;
const IMG_ROOT = "dist/img/";
const CN_FADEIN = "fadeIn";

let count = 0;

function makeElements() {
    img.style.opacity = 0;
    if(count < NO_OF_IMG) {
        img.src = imgArry[count];
        setTimeout(() => {
            img.style.opacity = 1;
        }, 1000);
        count ++;
    } else {
        count = 0;
        img.src = imgArry[count];
        img.style.opacity = 1;
    }
}

function getImage() {
    for(let i = 1; i <= NO_OF_IMG; i++) {
        const imgSrc = IMG_ROOT + i + ".jpg";
        imgArry.push(imgSrc);
    };
}

function init() {
    getImage();
    makeElements();
    setInterval(makeElements, 3000);
}

init();