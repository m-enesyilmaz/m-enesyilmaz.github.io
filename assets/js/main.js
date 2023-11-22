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
          slidesPerView: 2,
          spaceBetween: 2,
        },
    },
    
  });


/*=============== SWIPER CERTIFICATES ===============*/
let swiperCertificate = new Swiper(".certificate__container", {
  grabCursor: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactOpinion = document.getElementById('contact-opinion'),
      contactMassage = document.getElementById('contact-massage')

const sendEmail = (e) =>{
  e.preventDefault()

  // Check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactOpinion.value === ''){
    // Add and remove color
    contactMassage.classList.remove('color-blue')
    contactMassage.classList.add('color-red')

    // Show message
    contactMassage.textContent = 'Write all the input fields 📩'

  }else{
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_g5m98v6','template_oskquqd','#contact-form','OS-khpSrbjjcu--RT')
      .then(() =>{
        // Show message and add color
        contactMassage.classList.add('color-blue')
        contactMassage.textContent = 'Message sent ✅'

        // Remove message after five seconds
        setTimeout(() =>{
          contactMassage.textContent = ''
        }, 5000)
      }, (error) =>{
        alert('OOPS! Something has failed...', error)
      })
    
    // To clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactOpinion.value = ''
    
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


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

