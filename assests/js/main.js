// Change Menu Icon to close
const menuIcon = function () {
    let firstBar = document.querySelector('.icon-bar:nth-of-type(1)');
    let secondBar = document.querySelector('.icon-bar:nth-of-type(2)');

    firstBar.classList.toggle('transform');
    secondBar.classList.toggle('transform-reverse')
}

// Show the menu and change the menu icon to close on click
const showMenu = function () {
    let icon = document.querySelector('.menu__icon');
    let menu = document.querySelector('.menu');
    let menuWidth = menu.offsetWidth;

    icon.addEventListener('click', () => {
        menuIcon();
        if (menu.style.right === '0px') {
            menu.style.right = `-${menuWidth}px`;
        } else {
            menu.style.right = `0px`
        }
    })
}

// Accordion
const accordion = function () {
    let headers = document.querySelectorAll('.accordion__header');

    headers.forEach((header) => {

        header.addEventListener('click', () => {

            $(header).parent('.accordion').siblings().children('.accordion__header').removeClass('accordion__header--active');
            $(header).parent('.accordion').siblings().children('.accordion__content').removeClass('accordion__content--active');

            header.classList.toggle('accordion__header--active');
            let icon = header.querySelector('.icon');

            icon.classList.toggle('icon-chevron-small-down');
            icon.classList.toggle('icon-chevron-small-up');


            [...header.parentElement.children].forEach((el) => {
                if (el !== header) {
                    el.classList.toggle('accordion__content--active');
                }
            })
        })

    })
}

// Add Active class to links on scroll to sections
const addActiveLinks = function () {
    const links = document.querySelectorAll('.list__item');
    const sections = document.querySelectorAll('.section');
    
    const addActive = function(entries){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        links.forEach(link => {
            let child = link.querySelector('.item__link');
            if(child.getAttribute('href') !== `#${entry.target.getAttribute('id')}`){
                link.classList.remove('list__item--active');
            }else{
                link.classList.add('list__item--active')
            }
        })
    
    }
    
    const sectionObserver = new IntersectionObserver(addActive, {
        root: null,
        threshold: 0.1
    });
    
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// About section
const aboutTransform = function() {
    let aboutSection = document.querySelector('.about-section');
    let aboutCards = document.querySelectorAll('.about-section__card');
    
    const aboutReveal = function(entries, observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        aboutCards.forEach(card => card.classList.add('from-bottom'));
        observer.unobserve(entry.target)
    }

    let aboutObserver = new IntersectionObserver(aboutReveal, {
        root: null,
        threshold: 0.2
    });

    aboutObserver.observe(aboutSection);
}

// Sevices Section
const servicesTransform = function() {
    let servicesSection = document.querySelector('.services-section');
    let servicesInfo = document.querySelector('.services-section__info');
    let servicesAccordion = document.querySelector('.services-section__accordion');

    const sectionReveal = function (entries, observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        servicesInfo.classList.add('from-left');
        servicesAccordion.classList.add('from-right');
        observer.unobserve(entry.target);
    }


    let servicesObserver = new IntersectionObserver(sectionReveal, {
        root: null,
        threshold: 0.2
    });

    servicesObserver.observe(servicesSection);
}

// Classes Section
const classesTransform = function() {
    let classesSection = document.querySelector('.classes-section');
    let classesImage = document.querySelector('.classes-section__image');
    let classesInfo = document.querySelector('.classes-section__info');

    const classesReveal = function(entries, observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        classesImage.classList.add('from-left');
        classesInfo.classList.add('from-right');
        observer.unobserve(entry.target);
    }

    let classesObserver = new IntersectionObserver(classesReveal, {
        root: null,
        threshold: 0.2
    });

    classesObserver.observe(classesSection);
}

// Start Section
const startTransform = function() {
    let startSection = document.querySelector('.start-section');
    let startInfo = document.querySelector('.start-section__info');
    let startImage = document.querySelector('.start-section__image');

    const startReveal = function(entries, observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        startInfo.classList.add('from-left');
        startImage.classList.add('from-right');
        observer.unobserve(entry.target);
    }

    let startObserver = new IntersectionObserver(startReveal, {
        root: null,
        threshold: 0.2
    });

    startObserver.observe(startSection);
}


// Schedule Section
const scheduleTransform = function() {
    let scheduleSection = document.querySelector('.schedule-section');
    let scheduleInfo = document.querySelector('.schedule-section__info');
    let scheduleTable = document.querySelector('.schedule-section__table');

    const scheduleReveal = function(entries, observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        scheduleInfo.classList.add('from-left');
        scheduleTable.classList.add('from-right');
        observer.unobserve(entry.target);
    }

    let scheduleObserver = new IntersectionObserver(scheduleReveal, {
        root: null,
         threshold: 0.2
    });

    scheduleObserver.observe(scheduleSection);
}

// Gallery Section
const galleryTransform = function() {
    let gallerySection = document.querySelector('.gallery-section');
    let fromLeftImages = document.querySelectorAll('.from-left-image');
    let fromRightImages = document.querySelectorAll('.from-right-image');

    const galleryReveal = function(entries,observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        fromLeftImages.forEach(image => image.classList.add('from-left'));
        fromRightImages.forEach(image => image.classList.add('from-right'));
        observer.unobserve(entry.target);
    }

    let galleryObserver = new IntersectionObserver(galleryReveal, {
        root:null,
        threshold: 0.2
    });

    galleryObserver.observe(gallerySection);
}

// Price Section
const priceTransform = function() {
    let priceSection = document.querySelector('.price-section');
    let priceIntro = document.querySelector('.price-section__intro');
    let priceCards = document.querySelectorAll('.price-section__card');

    const priceReveal = function(entries, observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        priceIntro.classList.add('from-bottom');
        priceCards.forEach(card => card.classList.add('from-bottom'));
        observer.unobserve(entry.target);
    }

    let priceObserver = new IntersectionObserver(priceReveal, {
        root: null,
        threshold: 0.2
    });

    priceObserver.observe(priceSection)
}

// Contact Section
const contactTransform = function () {
    let contactSection = document.querySelector('.contact-section');
    let contactForm = document.querySelector('.contact-section__form');
    let contactInfo = document.querySelector('.contact-section__info');

    const contactReveal = function(entries, observer){
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        contactForm.classList.add('from-left');
        contactInfo.classList.add('from-right');
        observer.unobserve(entry.target);
    }

    let contactObserver = new IntersectionObserver(contactReveal, {
        root: null,
        threshold: 0.2
    });

    contactObserver.observe(contactSection);
}

showMenu();
accordion();
addActiveLinks();
aboutTransform();
servicesTransform();
classesTransform();
startTransform();
scheduleTransform();
galleryTransform();
priceTransform();
contactTransform();
