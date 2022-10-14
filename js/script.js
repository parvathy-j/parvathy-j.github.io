
const sectionAbout=document.querySelector('#about');
///////////////////////////////////////
// Button scrolling
// btnScrollTo.addEventListener('click', function (e) {
    // const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);
  
    // console.log(e.target.getBoundingClientRect());
  
    // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
    // console.log(
    //   'height/width viewport',
    //   document.documentElement.clientHeight,
    //   document.documentElement.clientWidth
    // );
  
    // Scrolling
    // window.scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset
    // );
  
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });
  
    // sectionAbout.scrollIntoView({ behavior: 'smooth' });
//})

  ///////////////////////////////////////
  // PAGE NAVIGATION
  
  // document.querySelectorAll('.nav__link').forEach(function (el) {
  //   el.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     const id = this.getAttribute('href');
  //     console.log(id);
  //     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  //   });
  // });
  //Method 2 
  // 1. Add event listener to common parent element
  // 2. Determine what element originated the event
  
  document.querySelector('.user-nav__nav-links').addEventListener('click', function (e) {
    e.preventDefault();
  console.log(e)
    // Matching strategy
    if (e.target.classList.contains('user-nav__nav-link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: "start"});
    }
  });
  ////STICKY NAVIGATION
  const header = document.querySelector('.header');
  const container = document.querySelector('.container');
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
   console.log(entry);

  if (!entry.isIntersecting) header.classList.add('sticky');
  else header.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(container);