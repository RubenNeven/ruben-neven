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
            //headerEl.classList.toggle("nav-open");
        }
    })
})
