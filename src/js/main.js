const carousel = document.querySelector(".carousel");
const img = carousel.querySelector(".carousel__item");
const imgArry = [];

const NO_OF_IMG = 6;
const IMG_ROOT = "dist/img/";
const CN_FADEIN = "fadein";

let count = 0;

function makeElements() {
    if(count < NO_OF_IMG) {
        // img.classList.remove(CN_FADEIN);
        img.src = imgArry[count];
        // img.classList.add(CN_FADEIN);
        count ++;
    } else {
        count = 0;
        // img.classList.remove(CN_FADEIN);
        img.src = imgArry[count];
        // img.classList.add(CN_FADEIN);
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