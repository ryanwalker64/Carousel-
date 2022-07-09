const sliderButtons = document.querySelectorAll('[data-slider-button]'); 
const slideContainer = document.querySelector('[data-slide-container]'); 


sliderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
       
        handleSlideSwitch(e.currentTarget.dataset.sliderButton)
       
       
    
        
    })
})

function handleSlideSwitch(direction = 'next') {
    const activeSlide = document.querySelector('[data-slide="active"]')
    const slidesArr = activeSlide.closest('[data-slide-container]').children;
    let activeSlideIndex;

    for (let i = 0; i < slidesArr.length; i++){
        if (slidesArr[i].dataset.slide === 'active') {
            activeSlideIndex = i;
        }
    }

    activeSlide.dataset.slide = ''

    if(direction === 'next') {
        if (activeSlideIndex == slidesArr.length - 1) {
            slidesArr[0].dataset.slide = 'active';
        } else {
            slidesArr[activeSlideIndex + 1].dataset.slide = 'active';
        }
    } else if (direction === 'prev') {
        if (activeSlideIndex == 0) {
            slidesArr[slidesArr.length - 1].dataset.slide = 'active';
     
        } else {
            slidesArr[activeSlideIndex - 1].dataset.slide = 'active';
        }
    }

}





//next and prev buttons w/ forumlas to move container
//nav dots to jump between slides
//auto move after 5s


