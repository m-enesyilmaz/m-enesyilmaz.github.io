/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    /* cssMode: true, */
    loop: true,
    spaceBetween: 24,
    autoHeight: true,

    /* centeredSlides: true, */
    /* slidesPerView: 2, */

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      /* clickable: true, */
    },
    /* mousewheel: true, */
    keyboard: true,
    
    breakpoints: {
        1200: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
    },
    
  });


/*=============== SWIPER CERTIFICATES ===============*/
let swiperCertificate = new Swiper(".certificate__container", {
  grabCursor: true,
  keyboard: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/*=============== NOTIFICATION ===============*/
// Creates a dynamic message box
const showMessage = (message, type = 'info') => {
  // First remove the old message if there is one
  const existingMsg = document.getElementById('dynamic-message');
  if (existingMsg) existingMsg.remove();

  // Create new message box
  const msg = document.createElement('div');
  msg.id = 'dynamic-message';
  msg.textContent = message;

  // Color by style
  if (type === 'success') msg.style.color = 'green';
  else if (type === 'error') msg.style.color = 'red';
  else msg.style.color = 'black';

  msg.style.fontWeight = 'bold';
  msg.style.marginTop = '10px';

  // Add below the form
  const form = document.getElementById('contact-form');
  if (form) {
    form.appendChild(msg);
  }

  // Remove after 2.5 seconds
  setTimeout(() => {
    msg.remove();
  }, 2500);
};


/*=============== EMAIL JS ===============*/
// publicKey
emailjs.init('OS-khpSrbjjcu--RT');

const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactOpinion = document.getElementById('contact-opinion'),
      contactMassage = document.getElementById('contact-massage')

const sendEmail = (e) =>{
  e.preventDefault()

  // Check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactOpinion.value === ''){
    // Show message
    showMessage('Write all the input fields 📩', 'error');

  }else{
    // serviceID - templateID - #form
      emailjs.sendForm('service_g5m98v6','template_oskquqd','#contact-form')
      .then(() =>{
        showMessage('Message sent ✅', 'success');

        // Clear the input field);
        contactName.value = ''
        contactEmail.value = ''
        contactOpinion.value = ''
        }, (error) =>{
        showMessage('OOPS! Something has failed ❌', 'error');
        console.log('EmailJS FAILED...', error);
      });
    
  }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 400,
  // reset: true  /* Animations repeat */
})

sr.reveal('.home__data, .projects__container, .certificate__container, .footer__container')
sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills__content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills__content:nth-child(2)', {origin: 'right'})
sr.reveal('.skills__content:nth-child(3)', {origin: 'left'})
sr.reveal('.skills__content:nth-child(4)', {origin: 'right'})
sr.reveal('.qualification__content', {interval: 100})
sr.reveal('.contact__content:nth-child(1)', {origin: 'left'})
sr.reveal('.contact__content:nth-child(2)', {origin: 'right'})
