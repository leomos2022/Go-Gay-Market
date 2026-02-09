document.addEventListener("DOMContentLoaded", function () {
    const glideInstances = new Map(); // Store Glide instances

    document.querySelectorAll(".wp-block-acf-carousel").forEach((container) => {
        const glideElement = container.querySelector(".glide");
        const slides = glideElement.querySelectorAll(".glide__slide");

        // Get the data-perview attribute, default to 1 if it's null or empty
        let perView = parseInt(glideElement.getAttribute("data-perview") || "1", 10);
        const totalSlides = slides.length;

        // Calculate responsive perView values
        const perViewWide = perView;
        const perViewLarge = Math.max(Math.ceil(perView * 0.65), 1);
        const perViewMedium = Math.max(Math.ceil(perView * 0.3), 1);
        const perViewSmall = 1;
        const isFullWidth = container.classList.contains("carousel-style--full");
        const glideGap = isFullWidth ? 0 : 32;

        // Get autoplay value from data-autoplay attribute (as integer)
        const autoplayAttr = glideElement.getAttribute("data-autoplay");
        const autoplayValue = parseInt(autoplayAttr, 10);
        const shouldAutoplay = !isNaN(autoplayValue) && autoplayValue > 0;

        const glide = new Glide(glideElement, {
            type: "carousel",
            rewind: false,
            bound: true,
            gap: glideGap,
            perView: perViewWide,
            autoplay: shouldAutoplay ? autoplayValue : false,
            breakpoints: {
                1340: { perView: perViewWide },
                1200: { perView: perViewLarge },
                900: { perView: perViewMedium },
                480: { perView: perViewSmall },
            },
        });



        // Store instance in map
        glideInstances.set(glideElement, glide);

        // Remove the 'glide--inactive' class on mount
        glide.on("mount.after", () => {
            glideElement.classList.remove("glide--inactive");
            checkIfLastSlide();
        });

        // Check if last slide is reached
        function checkIfLastSlide() {
            const currentIndex = glide.index;
            const currentPerView = glide.settings.perView;
            const maxIndex = totalSlides - Math.ceil(currentPerView);

            if (currentIndex >= maxIndex) {
                container.classList.add("has-reached-end");
                disableScrollListener();
                document.body.classList.remove("mouse-over-carousel"); // ✅ Ensure removal when last slide is reached
            } else {
                container.classList.remove("has-reached-end");
                enableScrollListener();
            }
        }

        // Listen for slide change
        glide.on("move.after", checkIfLastSlide);
        glide.mount();

        // 🔁 Handle video play/pause toggle
        container.querySelectorAll(".carousel-media__play-pause").forEach((button) => {
            button.addEventListener("click", (e) => {
                const mediaContainer = button.closest(".carousel-media");
                const video = mediaContainer.querySelector("video");
                if (video) {
                    if (video.paused) {
                        video.play();
                        button.querySelector(".sr-only").textContent = "Pause video";
                    } else {
                        video.pause();
                        button.querySelector(".sr-only").textContent = "Play video";
                    }
                }
            });
        });

        // 🔁 Handle video pause/unload when slide changes
        glide.on("run.after", () => {
            slides.forEach((slide, i) => {
                const isActive = i >= glide.index && i < glide.index + glide.settings.perView;

                // Handle native <video>
                const video = slide.querySelector("video");
                if (video) {
                    if (isActive) {
                        if (video.paused) {
                            video.play().catch(() => {}); // Avoid errors if autoplay is blocked
                        }
                    } else {
                        video.pause();
                    }
                }

                // Handle YouTube and Vimeo embeds
                const iframe = slide.querySelector("iframe");
                if (iframe && (iframe.src.includes("youtube.com") || iframe.src.includes("vimeo.com"))) {
                    if (!isActive) {
                        // Unload by resetting src
                        iframe.src = iframe.src;
                    }
                }
            });

            // 🎨 Update active color from data attribute
            const activeSlide = slides[glide.index];
            const activeColor = activeSlide?.getAttribute("data-activecolor");

            if (activeColor) {
                glideElement.style.setProperty("--slide-active-color", activeColor);
            } else {
                glideElement.style.removeProperty("--slide-active-color");
            }
        });

        

        // 🔥 Scroll-based Navigation Setup
        let accumulatedScroll = 0;
        const scrollThreshold = 50;
        let isScrolling = false;
        let lastScrollY = window.scrollY;

        function handleMouseScroll(event) {
            if (!container.matches(":hover")) return; // Only scroll if the mouse is over the container
            if (!container.classList.contains("has-mouse-scroll")) return; // ✅ Only apply to `.has-mouse-scroll`
            if (container.classList.contains("has-reached-end")) return; // ✅ Prevent scrolling when last slide is reached
            if (isScrolling) return;

            event.preventDefault();
            accumulatedScroll += event.deltaY;

            if (Math.abs(accumulatedScroll) >= scrollThreshold) {
                isScrolling = true;
                if (accumulatedScroll > 0) {
                    glide.go(">"); // Move forward
                } else {
                    glide.go("<"); // Move backward
                }
                accumulatedScroll = 0;

                setTimeout(() => {
                    isScrolling = false;
                }, 400);
            }
        }

        function enableScrollListener() {
            window.addEventListener("wheel", handleMouseScroll, { passive: false });
        }

        function disableScrollListener() {
            window.removeEventListener("wheel", handleMouseScroll);
        }

        // 🛠️ Mouse Over Logic
        container.addEventListener("mouseenter", () => {
            if (container.classList.contains("has-mouse-scroll") && !container.classList.contains("has-reached-end")) {
                document.body.classList.add("mouse-over-carousel"); // ✅ Apply class only if NOT at last slide
                enableScrollListener();
            }
        });

        container.addEventListener("mouseleave", () => {
            document.body.classList.remove("mouse-over-carousel"); // ✅ Remove class when mouse leaves
            disableScrollListener();
        });

        // 🛠️ Detect Scroll UP to Reset Carousel (Only When Mouse is Over It)
        window.addEventListener("scroll", function () {
            let currentScrollY = window.scrollY;

            document.querySelectorAll(".wp-block-acf-carousel.has-mouse-scroll").forEach((activeContainer) => {
                if (!activeContainer.matches(":hover")) return; // Only reset if the mouse is over this container

                if (currentScrollY < lastScrollY) {
                    console.log("[DEBUG] Scroll up detected - Resetting carousel");

                    let activeGlide = activeContainer.querySelector(".glide");
                    let activeGlideInstance = glideInstances.get(activeGlide);
                    if (activeGlideInstance) {
                        activeGlideInstance.go("=0"); // Reset to first slide
                    }

                    activeContainer.classList.remove("has-reached-end");
                    accumulatedScroll = 0;
                }
            });

            lastScrollY = currentScrollY;
        });
    });
});
