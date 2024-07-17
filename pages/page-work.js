let swiperFeatured;

$(document).ready(function () {
  // Set Featured Item lLinks.
  $(".featured-work_item").each(function () {
    var currentHref = $(this).attr("href");
    $(this).attr(
      "href",
      "https://www.designbrained.studio/case-study/" + currentHref
    );
  });

  // Set Portfolio Item links.
  $(".portfolio_item-link-overlay").each(function () {
    var currentHref = $(this).attr("href");
    $(this).attr(
      "href",
      "https://www.designbrained.studio/case-study/" + currentHref
    );
  });

  // Category filter - Show/hide active states for toggle buttons.
  $(".portfolio_filter-radio").click(function () {
    if ($("#all-items-radio").is(":checked")) {
      $("#all-items-wrapper").addClass("is-active");
    } else {
      $("#all-items-wrapper").removeClass("is-active");
    }
  });

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
});
