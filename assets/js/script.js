window.onscroll = () => {
    navOnScroll()
}

const navOnScroll = () => {
    const navbar = document.querySelector('.navbar')
    if (document.documentElement.scrollTop > 50) {
        navbar.classList.add('custom-shadow')
    } else {
        navbar.classList.remove('custom-shadow')
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        gap: '15px',
        autoplay: true,
        arrows: false,
        pagination: false,
        breakpoints: {
            640: {
                perPage: 1
            },
            992: {
                perPage: 1
            }
        }
    });
    splide.mount();
});