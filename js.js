gsap.registerPlugin(ScrollTrigger);

// HERO INTRO
const intro = gsap.timeline();

intro
    .from(".hero-image", {
        scale: 1.25,
        duration: 2.5,
        ease: "power2.out"
    })
    .from(".eyebrow", {
        opacity: 0,
        y: 20,
        duration: 1
    }, "-=1.5")
    .from(".hero h1", {
        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.8")
    .from(".hero-text, .scroll-link", {
        opacity: 0,
        y: 20,
        stagger: 0.3,
        duration: 1
    }, "-=0.8");


// INTRO SECTION
gsap.from(".intro h2", {
    opacity: 0,
    y: 70,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".intro",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});


// TIMELINE SCRUB ANIMATION
gsap.to(".line-fill", {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 60%",
        end: "bottom 70%",
        scrub: 1.5
    }
});


// MEMORY CARD ANIMATIONS
gsap.utils.toArray(".memory").forEach((card, index) => {

    const direction = card.classList.contains("left")
        ? -100
        : 100;

    gsap.fromTo(card,
        {
            opacity: 0,
            x: direction,
            y: 50
        },
        {
            opacity: 1,
            x: 0,
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 40%",
                scrub: 1
            }
        }
    );

    const photo = card.querySelector(".photo");

    gsap.fromTo(photo,
        {
            scale: 0.85,
            filter: "sepia(1) brightness(0.5)"
        },
        {
            scale: 1,
            filter: "sepia(0.35) brightness(1)",
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 35%",
                scrub: 1
            }
        }
    );
});


// QUOTE REVEAL
gsap.from(".quote-inner h2", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".quote-section",
        start: "top 65%",
        toggleActions: "play none none reverse"
    }
});


// FINAL GOODBYE
const endingTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".ending",
        start: "top 65%",
        toggleActions: "play none none reverse"
    }
});

endingTimeline
    .from(".ending .eyebrow", {
        opacity: 0,
        y: 20,
        duration: 1
    })
    .from(".ending h1", {
        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.5")
    .from(".ending > p, .ending-divider, .ending > span", {
        opacity: 0,
        y: 30,
        stagger: 0.25,
        duration: 1
    }, "-=0.5")
    .from(".ending .handwriting", {
        opacity: 0,
        y: 20,
        duration: 1.5
    }, "-=0.3");


// REFRESH SCROLL TRIGGERS
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
