// Panels 
let homePanel = document.getElementById("home-panel");
let aboutPanel = document.getElementById("about-panel");
let experiencePanel = document.getElementById("experience-panel");
let blogPanel = document.getElementById("blog-panel");

// Home Panel
let homeImageCarousel = document.getElementById("home-image-carousel");
let homeImageProfile = document.getElementById("home-image-profile");
let homeImageLogo = document.getElementById("home-image-logo");

let homeHelloText = document.getElementById("home-hello-text");
let homeNameText = document.getElementById("home-name-text");
let homeDescriptionText = document.getElementById("home-description-text");
let homeContactLinks = document.getElementById("home-contact-links");

// About Panel
let aboutTopPortion = document.getElementById("about-top-portion");
let aboutTrainLine = document.getElementById("about-train-line");
let aboutBottomPortion = document.getElementById("about-bottom-portion");

// Experience Panel
let experienceHeadingText = document.getElementById("experience-heading-text");
let experienceHeadingLogo = document.getElementById("experience-heading-logo");
let experienceSlider = document.getElementById("experience-slider");
let experienceTopText = document.getElementById("experience-top-text");
let experienceBottomPortion = document.getElementById("experience-bottom-portion");

// Blog Panel
let blogHeadingText = document.getElementById("blog-heading-text");
let blogHeadingLogo = document.getElementById("blog-heading-logo");
let blogTopText = document.getElementById("blog-top-text");
let blogBottomTextLight = document.getElementById("blog-bottom-text-light");
let blogBottomTextBold = document.getElementById("blog-bottom-text-bold");
let blogLearnMoreButton = document.getElementById("blog-learn-more-button");
let blogExcerpt = document.getElementById("blog-excerpt");

//Nav Bar
let navBar = document.getElementById("nav-bar");
let statusBar = document.getElementById("status-bar");

// Movements 

let popInFromBottom = 
[
    {
        transform: "translateY(400px)",
    }, 
    {
        transform: "translateY(-10px)",
    },
    {
        transform: "translateY(0px)",
    }
]

let screenWidth = screen.width;

// Set all opacity to 0 first to prevent animation from running
homePanel.opacity = 0; 
aboutPanel.opacity = 0;
experiencePanel.opacity = 0;
blogPanel.opacity = 0;

homeImageCarousel.opacity = 0;

homeHelloText.opacity = 0;
homeNameText.opacity = 0;
homeDescriptionText.opacity = 0;
homeContactLinks.opacity = 0;

aboutTopPortion.opacity = 0;
aboutTrainLine.opacity = 0;
aboutBottomPortion.opacity = 0;

experienceHeadingText.opacity = 0;
experienceHeadingLogo.opacity = 0;
experienceSlider.opacity = 0;
experienceTopText.opacity = 0;
experienceBottomPortion.opacity = 0;


blogHeadingText.opacity = 0;
blogHeadingLogo.opacity = 0;
blogTopText.opacity = 0;
blogBottomTextLight.opacity = 0;
blogBottomTextBold.opacity = 0;
blogLearnMoreButton.opacity = 0;
blogExcerpt.opacity = 0;

navBar.opacity = 0;
statusBar.opacity = 0;

// Adding support for fade-in-out transition 
homePanel.classList.add("supports-hidden"); 
aboutPanel.classList.add("supports-hidden");
experiencePanel.classList.add("supports-hidden");
blogPanel.classList.add("supports-hidden");

homeImageCarousel.classList.add("supports-hidden");

homeHelloText.classList.add("supports-hidden");
homeNameText.classList.add("supports-hidden");
homeDescriptionText.classList.add("supports-hidden");
homeContactLinks.classList.add("supports-hidden");

aboutTopPortion.classList.add("supports-hidden");
aboutTrainLine.classList.add("supports-hidden");
aboutBottomPortion.classList.add("supports-hidden");

experienceHeadingText.classList.add("supports-hidden");
experienceHeadingLogo.classList.add("supports-hidden");
experienceSlider.classList.add("supports-hidden");
experienceTopText.classList.add("supports-hidden");
experienceBottomPortion.classList.add("supports-hidden");


blogHeadingText.classList.add("supports-hidden");
blogHeadingLogo.classList.add("supports-hidden");
blogTopText.classList.add("supports-hidden");
blogBottomTextLight.classList.add("supports-hidden");
blogBottomTextBold.classList.add("supports-hidden");
blogLearnMoreButton.classList.add("supports-hidden");
blogExcerpt.classList.add("supports-hidden");

navBar.classList.add("supports-hidden");
statusBar.classList.add("supports-hidden");

//toggling it to hidden first 
homePanel.classList.toggle("hidden"); 
aboutPanel.classList.toggle("hidden");
experiencePanel.classList.toggle("hidden");
blogPanel.classList.toggle("hidden");

homeImageCarousel.classList.toggle("hidden");

homeHelloText.classList.toggle("hidden");
homeNameText.classList.toggle("hidden");
homeDescriptionText.classList.toggle("hidden");
homeContactLinks.classList.toggle("hidden");

aboutTopPortion.classList.toggle("hidden");
aboutTrainLine.classList.toggle("hidden");
aboutBottomPortion.classList.toggle("hidden");

experienceHeadingText.classList.toggle("hidden");
experienceHeadingLogo.classList.toggle("hidden");
experienceSlider.classList.toggle("hidden");
experienceTopText.classList.toggle("hidden");
experienceBottomPortion.classList.toggle("hidden");

blogHeadingText.classList.toggle("hidden");
blogHeadingLogo.classList.toggle("hidden");
blogTopText.classList.toggle("hidden");
blogBottomTextLight.classList.toggle("hidden");
blogBottomTextBold.classList.toggle("hidden");
blogLearnMoreButton.classList.toggle("hidden");

navBar.classList.toggle("hidden");
statusBar.classList.toggle("hidden");

homeImageProfile.classList.toggle("home-pre-slide-up");
homeImageLogo.classList.toggle("home-pre-slide-down");
blogExcerpt.classList.toggle("pre-pop-up-slide");

if (screenWidth >= 992) {
    
    // Slide the 4 main panels into screen frist
    homePanel.classList.toggle("fade-from-left");
    aboutPanel.classList.toggle("fade-from-top");
    experiencePanel.classList.toggle("fade-from-right");
    blogPanel.classList.toggle("fade-from-bottom");
    homePanel.classList.toggle("hidden");
    aboutPanel.classList.toggle("hidden");
    experiencePanel.classList.toggle("hidden");
    blogPanel.classList.toggle("hidden");

    // Home Panel Items
    setTimeout(() => { homeImageCarousel.classList.toggle("hidden")}, 1500);
    setTimeout(() => { homeHelloText.classList.toggle("hidden")}, 1500);

    setTimeout(() => { homeImageProfile.classList.toggle("slide-up")}, 2000);
    setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-up")}, 2000);

    setTimeout(() => { homeImageLogo.classList.toggle("slide-down")}, 2000);
    setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-down")}, 2000);

    setTimeout(() => { homeNameText.classList.toggle("hidden")}, 2000);

    setTimeout(() => { homeDescriptionText.classList.toggle("hidden")}, 2500);
    setTimeout(() => { homeContactLinks.classList.toggle("hidden")}, 2500);

    // About Panel Items
    setTimeout(() => { aboutTopPortion.classList.toggle("hidden")}, 3000);
    setTimeout(() => { aboutTrainLine.classList.toggle("hidden")}, 3500);
    setTimeout(() => { aboutBottomPortion.classList.toggle("hidden")}, 4000);

    // Experience Panel Items
    setTimeout(() => { experienceHeadingLogo.classList.toggle("hidden")}, 4500);
    setTimeout(() => { experienceHeadingText.classList.toggle("hidden")}, 4500);

    setTimeout(() => { experienceTopText.classList.toggle("hidden")}, 5000);

    setTimeout(() => { experienceSlider.classList.toggle("hidden")}, 5500);
    setTimeout(() => { experienceBottomPortion.classList.toggle("hidden")}, 5500);

    // Blog Panel
    setTimeout(() => { blogHeadingLogo.classList.toggle("hidden")}, 6000);
    setTimeout(() => { blogHeadingText.classList.toggle("hidden")}, 6000);

    setTimeout(() => { blogTopText.classList.toggle("hidden")}, 6500);

    setTimeout(() => { blogBottomTextLight.classList.toggle("hidden")}, 7000);

    setTimeout(() => { blogExcerpt.classList.toggle("pop-up-slide")}, 7500);
    setTimeout(() => { blogExcerpt.classList.toggle("pre-pop-up-slide")}, 7500);
    setTimeout(() => { blogBottomTextBold.classList.toggle("hidden")}, 7500);
    
    setTimeout(() => { blogLearnMoreButton.classList.toggle("hidden")}, 8000);

    setTimeout(() => { navBar.classList.toggle("hidden")}, 8500);
    setTimeout(() => { statusBar.classList.toggle("hidden")}, 8500);

}





