const sliderButtons = document.querySelectorAll('.btn') 
const slideContainer = document.querySelector('.slides--container') 

const slidesArr = [
    {
        src: 'https://picsum.photos/900/500',
        activeSlide: true,
        id: 0,
    },
    {
        src: 'https://i.picsum.photos/id/542/900/500.jpg?hmac=ClTCPmG0E-atBu7PRvFZnStFDagJqLxGI2JF0pggf4c',
        activeSlide: false,
        id: 1,
    },
    {
        src: 'https://i.picsum.photos/id/558/900/500.jpg?hmac=FL1RWLusb311g_wSeDEpnGvHCwD9AdjM7T2KPzjI7is',
        activeSlide: false,
        id: 2,
    },
    {
        src: 'https://i.picsum.photos/id/498/900/500.jpg?hmac=EQdY2FbfZtUxYG6Gy1qS-owoy7IvuE3HmtahmTvJPUQ',
        activeSlide: false,
        id: 3,
    },
]

let XAXIS = 0;

function intApp() {
    const slidesHtml = slidesArr.map(slide => {
        return `<div class="slide${slide.activeSlide ? ' current--slide': ''}" data-slide='${slide.id}'><img src="${slide.src}"></div>`
    }).join('');

    slideContainer.innerHTML = slidesHtml;
    const activeSlide = document.querySelector('.current--slide');
    XAXIS = activeSlide.dataset.slide === 0 ? 0 : Number(activeSlide.dataset.slide) * 900;
    slideContainer.style.left = `-${XAXIS}px`
    // console.log(XAXIS);
}

intApp()

sliderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonId = e.currentTarget.id;
        const activeSlideId = document.querySelector('.current--slide').dataset.slide; 
        if (buttonId === 'next') {
            nextSlide(Number(activeSlideId))
        } else if (buttonId === 'prev') {
            prevSlide(Number(activeSlideId))
        }
    })
})


function nextSlide(slideId) {
    XAXIS += 900;
    slideContainer.style.left = `-${XAXIS}px`
    console.log(XAXIS)
}

function prevSlide(slideId) {
    XAXIS -= 900;
    slideContainer.style.left = `-${XAXIS}px`
    console.log(XAXIS)
}

//create picture frame✅
//picture array pull from api✅
//create container for all slides, appear horizontally no wrap✅

//next and prev buttons w/ forumlas to move container
//nav dots to jump between slides
//auto move after 5s


