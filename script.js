const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        if (href === "#home"){
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }

        if (href !== "#home" && href.startsWith("#")) {
            let sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"})
        }

        if (link.classList.contains('main-nav-link')){
            headerEl.classList.toggle("nav-open");
        }
    })
})

window.addEventListener('scroll', reveal)

function reveal (){
    let sectionAbout = document.getElementById('about');
    let containerAbout = document.getElementById('about-container');

    let windowHeight = window.innerHeight;
    let revealTop = sectionAbout.getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint ) {
        containerAbout.classList.add('active');
    } else {
        containerAbout.classList.remove('active');
    }
}

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
})
