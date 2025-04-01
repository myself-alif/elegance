import $, { post } from "jquery";
import "owl.carousel";

$(document).ready(function () {
	const galleries = $(".owl-banner").toArray();
	galleries.forEach((gallery) => {
		const postCount = parseInt($(gallery).attr("data-postCount"));
		const gap = parseInt($(gallery).attr("data-gap"));
		const loop = parseInt($(gallery).attr("data-loop"));
		const interval = parseInt($(gallery).attr("data-interval"));
		const slidesInDesktop = parseInt($(gallery).attr("data-slidesInDesktop"));
		const slidesInTab = parseInt($(gallery).attr("data-slidesInTab"));
		const slidesInMobile = parseInt($(gallery).attr("data-slidesInMobile"));
		const autoplay = $(gallery).attr("data-autoplay");
		$(gallery).owlCarousel({
			lazyLoad: true,
			loop,
			nav: true,
			dots: true,
			items: postCount,
			margin: gap,
			autoplay,
			autoplayHoverPause: true,
			smartSpeed: 700,
			autoplayTimeout: interval,
			responsive: {
				300: {
					items: slidesInMobile,
				},
				460: {
					items: slidesInMobile,
				},
				576: {
					items: slidesInTab,
				},
				992: {
					items: slidesInDesktop,
				},
			},
		});
	});

	let observerTarget = document.body;

	// Create a MutationObserver
	let observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			$(mutation.addedNodes).each(function () {
				if ($(mutation.target).hasClass("wp-block-elegant-post-gallery")) {
					const postCount = parseInt(
						$(mutation.target).find(".owl-banner").attr("data-postCount"),
					);
					const gap = parseInt(
						$(mutation.target).find(".owl-banner").attr("data-gap"),
					);
					const loop = parseInt(
						$(mutation.target).find(".owl-banner").attr("data-loop"),
					);
					const interval = parseInt(
						$(mutation.target).find(".owl-banner").attr("data-interval"),
					);
					const slidesInDesktop = parseInt(
						$(mutation.target).find(".owl-banner").attr("data-slidesInDesktop"),
					);
					const slidesInTab = parseInt(
						$(mutation.target).find(".owl-banner").attr("data-slidesInTab"),
					);
					const slidesInMobile = parseInt(
						$(mutation.target).find(".owl-banner").attr("data-slidesInMobile"),
					);
					const autoplay = $(mutation.target)
						.find(".owl-banner")
						.attr("data-autoplay");
					$(mutation.target)
						.find(".owl-banner")
						.owlCarousel({
							lazyLoad: true,
							loop,
							nav: true,
							dots: true,
							items: postCount,
							margin: gap,
							autoplay,
							autoplayHoverPause: true,
							smartSpeed: 700,
							autoplayTimeout: interval,
							responsive: {
								300: {
									items: slidesInMobile,
								},
								460: {
									items: slidesInMobile,
								},
								576: {
									items: slidesInTab,
								},
								992: {
									items: slidesInDesktop,
								},
							},
						});
				}
			});
		});
	});

	// Configure and start observing
	observer.observe(observerTarget, { childList: true, subtree: true });
});
