let swiperFeatured;
let swiperTestimonials;

// Initialize Featured Work slider, when in viewport.
new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    observer.disconnect();
    swiperFeatured = new Swiper(".featured-work_component", {
      wrapperClass: "dbs_swiper-component_wrapper",
      slideClass: "dbs_swiper_slide",
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      speed: 500,

      // Navigation
      navigation: {
        nextEl: ".dbs_swiper_nav.is-next.featured-work_nav",
        prevEl: ".dbs_swiper_nav.is-prev.featured-work_nav",
      },

      // Pagination
      pagination: {
        el: ".dbs_swiper_nav-pagination.featured-work_nav-pagination",
        horizontalClass: ".dbs_swiper_nav-pagination",
        bulletClass: "dbs_swiper_nav-page",
        bulletActiveClass: "is-active",
        clickable: true,
      },
    });
  }
}).observe(document.querySelector(".featured-work_component"));

// Initialize Testimonials slider.
swiperTestimonials = new Swiper(".testimonials_component", {
  wrapperClass: "dbs_swiper-component_wrapper",
  slideClass: "dbs_swiper_slide",
  loop: true,
  slidesPerView: 1,
  speed: 500,
  autoHeight: true,

  // Navigation
  navigation: {
    nextEl: ".dbs_swiper_nav.is-next.testimonials_nav",
    prevEl: ".dbs_swiper_nav.is-prev.testimonials_nav",
  },

  // Pagination
  pagination: {
    el: ".dbs_swiper_nav-pagination.testimonials_nav-pagination",
    horizontalClass: ".dbs_swiper_nav-pagination",
    bulletClass: "dbs_swiper_nav-page",
    bulletActiveClass: "is-active",
    clickable: true,
  },
});
