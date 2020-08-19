document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

window.onscroll = function(){
    if(document.documentElement.scrollTop > 980){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


ScrollReveal().reveal('.showcase', { delay: 300 });
ScrollReveal().reveal('.cards', { delay: 600 });
ScrollReveal().reveal('.banner-one', { delay: 600 });
ScrollReveal().reveal('.banner-two', { delay: 600 });