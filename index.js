const next = document.getElementById('right');
const nextIcon = next.querySelector('.bx');
const previous = document.getElementById('left');
const previousIcon = previous.querySelector('.bx');
const dots = document.querySelectorAll('.dots');
const navDots = document.querySelector('.nav-dots');

previousIcon.style.color = 'rgba(255,255,255,0.1)';

let invervalId = setInterval(runSlideShow, 1000);
let slideDirection = 'right'; // Initial direction is 'right'

function runSlideShow() {
    const currentSlide = document.querySelector('.show');
    console.log(currentSlide);
    const currentID = parseInt(currentSlide.id.split('-')[1]);
    if (slideDirection === 'right') {
        if (currentID < 3) {
            slide('right');
        } else {
            slideDirection = 'left'; // Change direction to 'left' when reaching the last slide
            slide('left');
        }
    } else {
        if (currentID > 1) {
            slide('left');
        } else {
            slideDirection = 'right'; // Change direction to 'right' when reaching the first slide
            slide('right');
        }
    }
}

function slide(direction){
    const current = document.querySelector('.show')
    const currentID = parseInt(current.id.split('-')[1])
    if (direction === 'right'){
        if (currentID >= 3){
            return
        }
        current.classList.toggle('show');
        const nextElem = document.getElementById(`image-${currentID + 1}`);
        nextElem.classList.toggle('show');
        toggleButtons(nextElem.id)
        darkenArrows(currentID+1);

    }else{
        if (currentID <= 1){
            return
        }
        if (currentID <= 2){
            previousIcon.style.color = 'rgba(255,255,255,0.1)';
        }else {
            previousIcon.style.color = 'rgba(255,255,255)';
            nextIcon.style.color = 'rgba(255,255,255)';
        }
        current.classList.toggle('show');
        const pre = document.getElementById(`image-${currentID-1}`);
        pre.classList.toggle('show');
        toggleButtons(pre.id);
        darkenArrows(currentID-1);
    }

}

next.addEventListener('click', function(e) {
    e.stopPropagation();
    slide('right');
})

previous.addEventListener('click', function(e) {
    e.stopPropagation();
    slide('left');
})


dots.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleButtons(btn.id)
        open(btn.id);
    })
})

function open(id){
    const currentID = parseInt(id.split('-')[1])
    const currentSlide = document.querySelector('.show')
    currentSlide.classList.toggle('show');
    const nextElem = document.getElementById(`image-${currentID}`);
    nextElem.classList.toggle('show');
}

function toggleButtons(id){
    const currentID = parseInt(id.split('-')[1]);
    const currentButton = navDots.querySelector('.active')
    currentButton.classList.toggle('active');
    const nextBtn = navDots.querySelector(`#button-${currentID}`);
    nextBtn.classList.toggle('active');
    darkenArrows(currentID);
}

function darkenArrows(currentId){
    if (currentId == 3){
        nextIcon.style.color = 'rgba(255,255,255,0.1)';
        previousIcon.style.color = 'rgba(255,255,255)';
    }else if (currentId == 1){
        previousIcon.style.color = 'rgba(255,255,255,0.1)';
        nextIcon.style.color = 'rgba(255,255,255)';
    }else {
        previousIcon.style.color = 'rgba(255,255,255)';
        nextIcon.style.color = 'rgba(255,255,255)';
    }
}

