
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(TextPlugin);
// Initialize Lenis
function smoothScroll() {

    const lenis = new Lenis({
        duration: 2,
        smooth: true,
        autoRaf: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    window.scrollTo(0, 0);
    lenis.scrollTo(0);

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}
smoothScroll()


const clientData = [
    {
        "name": "THR",
        "logo": "/zs-logos/thr-logo.png",
        "image": "https://images.prismic.io/malvah-v2/04b80e45-4541-43c3-8e09-531279af5047_Iso.jpg?auto=compress,format"
    },
    {
        "name": "Esquire",
        "logo": "/zs-logos/esquire.png",
        "image": "https://images.prismic.io/malvah-v2/4eb25f32-4cf1-4c40-ae23-c1fc3e72d222_S%26P.jpg?auto=compress,format"
    },
    {
        "name": "Manifest",
        "logo": "/zs-logos/manifest.png",
        "image": "https://images.prismic.io/malvah-v2/dff6595a-7adc-4278-b833-71d66b99c346_Work+Thumbnail_M%26C.jpg?auto=format,compress"
    },
    {
        "name": "RPSG Media",
        "logo": "/zs-logos/rpsg.png",
        "image": "https://images.prismic.io/malvah-v2/13c30cae-4517-49a8-a047-8fc8e1bece85_Pointblank.jpg?auto=compress,format"
    },
    {
        "name": "RPSG Group (IMI)",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/8e6d2447-0195-4f80-9357-afb725558da2_Onion.jpg?auto=compress,format"
    },
    {
        "name": "ResideInBeing",
        "logo": "/zs-logos/rib.avif",
        "image": "https://images.prismic.io/malvah-v2/91ad2da3-7088-407b-b96f-cd99c4b6605f_CS_Hailr-16.jpg?auto=format,compress"
    },
    {
        "name": "JustNosh",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/65c628649be9a5b998b598f3_Spot.jpg?auto=format,compress"
    },
    {
        "name": "Hefty Art",
        "logo": "/zs-logos/hart.png",
        "image": "https://images.prismic.io/malvah-v2/647a9895-ec45-49ed-80c2-70fde7ddd6fd_Fold7.jpg?auto=compress,format"
    },
    {
        "name": "Khelo Esports",
        "logo": "/zs-logos/ks.png",
        "image": "https://images.prismic.io/malvah-v2/64f0261f-3153-4ee0-bd4f-86be7f6189e0_sync.labs.jpg?auto=compress,format"
    },
    {
        "name": "WineeMedia",
        "logo": "/zs-logos/logo.png",
        "image": "https://images.prismic.io/malvah-v2/23cd5c52-1a5e-4b7f-acbd-bea70898fe5a_Natro.jpg?auto=compress,format"
    },
    {
        "name": "The Senseis Store",
        "logo": "/zs-logos/senseis.png",
        "image": "https://images.prismic.io/malvah-v2/324e85f5-a768-425e-abf8-c110cece74b0_WB.jpg?auto=compress,format"
    },
    // {
    //     "name": "Aadesh Masala",
    //     "logo": "/zs-logos/Aadesh.png",
    //     "image": "https://images.prismic.io/malvah-v2/0d82b512-ff6e-4ad0-a2f0-543fc15c2bc6_ESD.jpg?auto=compress,format"
    // },
    {
        "name": "Point Of",
        "logo": "/zs-logos/point.png",
        "image": "https://images.prismic.io/malvah-v2/65c626c09be9a5b998b598a9_Locomotive_2.jpg?auto=format,compress"
    },
    {
        "name": "Wealth Fusion",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/65c628769be9a5b998b598f5_MacMedia.jpg?auto=format,compress"
    },
    {
        "name": "Casa Carigar",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/9e16d128-ee3b-4191-b784-15bc1bee9682_Amaren.jpg?auto=compress,format"
    },
    {
        "name": "IGL",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/fd9f6a77-0b3e-4eb0-9f75-a03f135cb556_Kode+Media.jpg?auto=compress,format"
    },
    {
        "name": "The Greek Life",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/3899261c-2583-4e1c-af07-32565e29e63f_Milck.jpg?auto=compress,format"
    },
    {
        "name": "I White Korea",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/4eeab1b9-c0fa-401b-8ee2-8203a9485fcb_R%26R.jpg?auto=compress,format"
    },
    {
        "name": "WhenInMykonos",
        "logo": "/zs-logos/hart.png",
        "image": "https://images.prismic.io/malvah-v2/65c628649be9a5b998b598f3_Spot.jpg?auto=format,compress"
    },
    {
        "name": "Mr. & Mrs.",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/f9b97806-7864-4013-b7f8-23a54b1eae03_Heights.jpg?auto=compress,format"
    },
    {
        "name": "Rage Media",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/3899261c-2583-4e1c-af07-32565e29e63f_Milck.jpg?auto=compress,format"
    },
    {
        "name": "Rage Entertainment",
        "logo": "/zs-logos/hart.png",
        "image": "https://images.prismic.io/malvah-v2/23cd5c52-1a5e-4b7f-acbd-bea70898fe5a_Natro.jpg?auto=compress,format"
    },
    {
        "name": "Dhamaka Records",
        "logo": "/zs-logos/nosh.png",
        "image": "https://images.prismic.io/malvah-v2/41bd22e1-22ff-4ba2-863f-a5a7e7be73e0_Work+Thumbnail_Sunya.jpg?auto=format,compress"
    },
    {
        "name": "Dhamaka Talent",
        "logo": "/zs-logos/hart.png",
        "image": "https://images.prismic.io/malvah-v2/91ad2da3-7088-407b-b96f-cd99c4b6605f_CS_Hailr-16.jpg?auto=format,compress"
    }
]

function homeLoader() {
    var loader = gsap.timeline()
    loader
        .from(".upper", {
            opacity: 0,
            duration: .8,
            timingFunction: "ease-in-out",
            delay: 1.5,
            stagger: {
                from: "center",
                amount: .2
            }
        }, "a")

        .from(".lower", {
            opacity: 0,
            duration: .8,
            timingFunction: "ease-in-out",
            stagger: {
                amount: .2
            },
            delay: 1.6,
        }, "a")

        .from("#toph", {
            top: "50%",
            duration: .8,
            ease: "power3.out",
        }, "b")
        .from(".banner-studio", {
            opacity: 0,
            duration: 1,
            delay: -.5,
            ease: "power3.out",
        }, "c")
        .from("nav", {
            opacity: 0,
            duration: 1,
            delay: -.5,
            ease: "power3.out",
        }, "c")
        .to(".btmwrap", {
            opacity: 1,
            duration: 1,
            delay: -.5,
            ease: "power3.out",
        }, "c")
}
homeLoader()


function textEffectAnimation() {
    document.querySelectorAll(".text-effect .effect").forEach(function (element) {
        var clutter2 = ""
        element.textContent.split("").forEach(function (letter) {
            if (letter === " ") {
                clutter2 += "<span>&nbsp;</span>"
            } else {
                clutter2 += `<span>${letter}</span>`
            }
        })
        element.innerHTML = clutter2
    })

    document.querySelectorAll(".text-effect").forEach(function (elem) {
        elem.addEventListener("mouseenter", function (e) {
            gsap.fromTo(e.currentTarget.children[0].querySelectorAll("span"), {
                y: "0%",
            }, {
                y: "-100%",
                // duration: .8,
                stagger: {
                    amount: .2
                },
            })
            gsap.fromTo(e.currentTarget.children[1].querySelectorAll("span"), {
                y: "0%",
            }, {
                y: "-100%",
                // duration: .8,
                stagger: {
                    amount: .2
                },
            })
        })
    })
}
textEffectAnimation()

function serviceListingAnimation(){
    const serviceDets = [
        "Conducting workshops to define your target audience, services, and brand differentiators",
        "Defining your brand’s mission, vision, and market positioning.",
        "Creating brand voice, style guides, and communication strategies",
        "Designing logos, color schemes, typography, icons, and grids to represent your brand.",
        "Developing impactful designs for both print and digital media.",
        "Defining your messaging to effectively connect with users.",
        "Crafting user-centric designs for seamless navigation and interaction.",
        "Designing visually appealing and functional websites.",
        "Writing compelling content that aligns with your brand voice.",
        "Integrating visuals that tell your brand’s story and enhance user experience.",
        "Building responsive, fast, and beautiful websites.",
        "Adding dynamic and smooth animations for a modern web experience.",
        "Customizing content management systems for easy updates and control.",
        "Ensuring robust, scalable functionality to support your website’s performance.",
        "Designing intuitive user experiences based on market research and analytics.",
        "Building visually engaging, user-friendly interfaces for seamless shopping.",
        "Ensuring a smooth, fast, and responsive shopping experience.",
        "Customizing Shopify to meet your unique eCommerce needs.",
        "Scalable and reliable hosting to support your growing business.",
        "Implementing best-in-class security protocols to protect your data and customers.",
        "Providing ongoing maintenance and technical support to ensure your store remains efficient.",
        "Developing content management systems tailored to your specific requirements.",
        "Tailored solutions for digital content creation and publishing.",
        "Building engaging platforms to share your brand’s message with the world.",
        "Creating unique digital marketplaces for diverse industries."
    ]
    
    document.querySelectorAll(".service-wrap .text-effect").forEach(function(textEffect) {
        textEffect.addEventListener("mouseenter",function(e){
            const text = serviceDets[e.target.dataset.index]
    
            gsap.to(document.querySelector("#about-service-text"),{
                text:text,
                duration: 1,
                ease: "power3.out",
                overwrite: "auto"
            })
        })
        textEffect.addEventListener("mouseleave",function(){
            gsap.to(document.querySelector("#about-service-text"),{
                text:"",
                duration: 1,
                ease: "power3.out",
                overwrite: "auto"
            })
        })
    })
}
serviceListingAnimation()
function serviceAnimation() {
    var isService = false;
    var previousLink = ""

    document.querySelector("#nav-service").addEventListener("click", function (e) {
        this.classList.add("active");
        // document.querySelector("#studio-btn").classList.remove("active");
        isService = !isService;
        openService()
    })
    document.querySelector("#closeService").addEventListener("click", function () {
        isService = !isService;
        openService()
        this.classList.remove("active");
        // document.querySelector("#studio-btn").classList.add("active");
    })

    function openService() {
        if (isService) {
            gsap.set("nav", { backgroundColor: "#fff" })
            gsap.to("#main", {
                top: "calc(100% - 40px)",
                ease: "power3.out",
                duration: 1.2
            })
            gsap.to("#service-page", {
                top: "-40px",
                ease: "power3.out",
                duration: 1.2,
                onComplete:()=>{
                    gsap.set("body",{overflow: "hidden"})
                }
            })
        } else {
            document.querySelector("#nav-service").classList.remove("active")
            gsap.set("nav", { backgroundColor: "transparent" })
            gsap.to("#main", {
                top: "0%",
                ease: "power3.out",
                duration: 1.2
            })
            gsap.to("#service-page", {
                top: "-100%",
                ease: "power3.out",
                duration: 1.2,
                onComplete:()=>{
                    gsap.set("body",{overflow: "auto"})
                }
            })
        }
    }
}
serviceAnimation()

function studioSection1Animation() {//
    var tlh = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1-studio",
            scroller: "body",
            start: "top top",
            end: "top -100%",
            pin: true,
            scrub: 1
        }
    })
    tlh
        .to(".banner-studio", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }, "a")
        .to(".banner-studio img", {
            objectPosition: "50% 10%"
        }, "a")
        .to("#toph", {
            y: -70,
            opacity: 0,
            duration: .3
        }, "a")
        .to("#btmh", {
            y: 70,
            opacity: 0,
            duration: .3
        }, "a")
}
studioSection1Animation()

function snakeTextAnimation() {
    const textElement = document.querySelector("#animated-text");
    const fullText = "At Zerror Studios, we turn “what ifs” into “hell yes.” Whether it’s animated websites that wow, eCommerce solutions that scale, or custom CMS platforms so slick they power some of the world’s biggest media giants(Yes, not exaggerating.We’re low - key changing the game)—we’re all about creating digital moments that punch through the noise, harder than your morning cutting - chai. Born in Mumbai but built for the world, we’re a crew of dreamers, doers, and rule-breakers who believe the internet doesn’t need another meh moment—it needs unforgettable experiences. We don’t just build stuff; we craft digital adventures that make people stop, scroll, and say,“Whoa, who made this?"
    const initialText = "At Zerror Studios, we turn “what ifs” into “hell yes.” Whether it’s animated websites that wow, eCommerce solutions that scale, or custom CMS platforms so slick they power some of the world’s biggest media giants(Yes, not exaggerating.We’re low - key changing the game)—we’re all about creating digital moments that punch through the noise, harder than your morning cutting - chai."
    const remainingText = fullText.slice(initialText.length);  // Remaining text to append

    // Set the initial text
    textElement.innerHTML = initialText;

    // Set up ScrollTrigger to animate letters
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#studio-1",
            scroller: "body",  // Ensure the scroll happens inside the container
            start: "top 0%",   // Start at 50% of the scroll container height
            end: "top -200%",   // End at the bottom of the container
            scrub: 1,           // Scrub for smooth animation
            pin: true
        }
    });

    timeline.to({}, {  // Empty tween to control the scroll behavior
        onUpdate: () => {
            // Calculate how many letters to remove and append based on scroll progress
            const progress = timeline.scrollTrigger.progress;  // Corrected way to get progress
            const letterCount = Math.floor(progress * remainingText.length);

            // Remove letters from the start of initialText and append letters from remainingText
            const newText = initialText.slice(letterCount) + remainingText.slice(0, letterCount);
            textElement.textContent = newText;
        }
    });
}

// snakeTextAnimation();

function brandListingAnimtion() {
    var clutter = ""
    clientData.forEach(function (data, i) {
        clutter += `<div class="client" data-index=${i}>
                        <p class="brand-count">${i + 1 > 9 ? i + 1 : `0${i + 1}`}.</p>
                        <p>${data.name}</p>
                    </div>`
    })
    document.querySelector("#brand-list").innerHTML = clutter

    var showcaseImg = document.querySelector("#brand-showcase-img")
    var brandLogo = document.querySelector("#brand-logo img")
    document.querySelectorAll("#brand-listing .client").forEach(function (client) {
        client.addEventListener("mouseenter", function (e) {
            if (e.target.dataset.index) {
                var client = clientData[e.target.dataset.index];
                showcaseImg.src = client.image;
                brandLogo.src = client.logo;

                gsap.set(showcaseImg, { scale: 1 });

                gsap.fromTo(
                    showcaseImg,
                    { scale: 1.08, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    }
                );
            }
        });

        client.addEventListener("mouseleave", function (e) {
            gsap.to(showcaseImg, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
            });
            showcaseImg.src = "/images/blank.png";
        });
    });
    document.querySelector("#brand-listing").addEventListener("mousemove", function (e) {
        const scrollPosition = e.clientY - document.querySelector("#brand-listing").getBoundingClientRect().top
        gsap.to(document.querySelector("#brand-logo"), {
            top: scrollPosition,
        })
    })
    document.querySelector("#brand-list").addEventListener("mouseenter", function () {
        gsap.to(document.querySelector("#brand-logo"), {
            opacity: 1,
        })
    })
    document.querySelector("#brand-list").addEventListener("mouseleave", function () {
        gsap.to(document.querySelector("#brand-logo"), {
            opacity: 0,
        })
    })


    gsap.to("#brand-showcase", {
        scrollTrigger: {
            trigger: "#studio-brand",
            scroller: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: "#brand-showcase"
        }
    });

}
brandListingAnimtion()

function memberAnimation() {
    gsap.from(".m1", {
        opacity: 1,
        y: 400,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top 45%",
            end: "top 35%",
            scrub: 1,
        }
    });

    gsap.from(".m2", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top 22%",
            end: "top 8%",
            scrub: 1,
        }
    });

    gsap.from(".m3", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top 30%",
            end: "top 20%",
            scrub: 1,
        }
    });

    gsap.from(".m4", {
        opacity: 1,
        y: 1000,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -45%",
            end: "top -55%",
            scrub: 1,
        }
    });

    gsap.from(".m5", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -15%",
            end: "top -35%",
            scrub: 1,
        }
    });

    gsap.from(".m6", {
        opacity: 1,
        y: 800,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -30%",
            end: "top -40%",
            scrub: 1,
        }
    });

    gsap.from(".m7", {
        opacity: 1,
        y: 800,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -70%",
            end: "top -85%",
            scrub: 1,
        }
    });

    gsap.from(".m8", {
        opacity: 1,
        y: 800,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -105%",
            end: "top -120%",
            scrub: 1,
        }
    });

    gsap.from(".m9", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -85%",
            end: "top -100%",
            scrub: 1,
        }
    });

    gsap.from(".m10", {
        opacity: 1,
        y: 1000,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -160%",
            end: "top -175%",
            scrub: 1,
        }
    });

    gsap.from(".m11", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -125%",
            end: "top -140%",
            scrub: 1,
        }
    });

    gsap.from(".m12", {
        opacity: 1,
        y: 800,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -170%",
            end: "top -185%",
            scrub: 1,
        }
    });

    gsap.from(".m13", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -210%",
            end: "top -230%",
            scrub: 1,
        }
    });

    gsap.to("#studio-contact", {
        opacity:1,
        duration:1,
        scrollTrigger: {
            trigger: "#studio-contact",
            scroller: "body",
            start: "top 30%",
            end: "top 5%",
            scrub: true,
        }
    });

    gsap.to("#studio-contact", {
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top top",
            end: "100% 40%",
            scrub: true,
            pin: "#studio-contact",
        }
    });
   
   


}

if(window.innerWidth > 575){
    memberAnimation()
}


function footerAnimation() {

    const updateTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
        minutes = minutes.toString().padStart(2, '0'); // Ensure two-digit minutes

        const timeString = `${hours}:${minutes} ${ampm}`;

        document.querySelector("#time").textContent = timeString; // Update the DOM

        return timeString; // Return the formatted time string
    };
    updateTime();
    setInterval(updateTime, 60000);
    
    var ft = gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            scroller: "body",
            start: "top 0%",
            end: "top -80%",
            scrub: 1,
            pin:true
        }
    })

    ft
    .to(".footer-layer",{
        opacity:.6
    },"a")
    .to("#footer-content",{
        transform:"translateY(0%)",
        delay:.5
    },"a")

}
footerAnimation()





