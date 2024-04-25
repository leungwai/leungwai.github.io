// Panels 
let homePanel = document.getElementById("home-panel");
let aboutPanel = document.getElementById("about-panel");
let experiencePanel = document.getElementById("experience-panel");
let blogPanel = document.getElementById("blog-panel");

// Additional Panels 
let additionalPanels = document.getElementById("additional-panels");
let topAdditionals = document.getElementById("top-additionals");

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
// let navBar = document.getElementById("nav-bar");
let statusBar = document.getElementById("status-bar");

let screenWidth = window.innerWidth;


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

statusBar.opacity = 0;


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

// navBar.classList.toggle("hidden");
statusBar.classList.toggle("hidden");

if (screenWidth < 576) {
    homeImageProfile.classList.toggle("home-pre-slide-left");
    homeImageLogo.classList.toggle("home-pre-slide-right");
} else {
    homeImageProfile.classList.toggle("home-pre-slide-up");
    homeImageLogo.classList.toggle("home-pre-slide-down");
}

blogExcerpt.classList.toggle("pre-pop-up-slide");

setTimeout(() => { 
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

    // navBar.classList.add("supports-hidden");
}, 300);


let shortAnimation = 700;
let midAnimation = 1200;
let longAnimation = 1500; 
let wait = 0;

// (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0)

// Code
// Slide the 4 main panels into screen frist
homePanelTimeoutIDOne = setTimeout(() => { homePanel.classList.toggle("fade-from-left")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
aboutPanelTimeoutIDOne = setTimeout(() => { aboutPanel.classList.toggle("fade-from-top")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
experiencePanelTimeoutIDOne = setTimeout(() => { experiencePanel.classList.toggle("fade-from-right")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0)); 
blogPanelTimeoutIDOne = setTimeout(() => { blogPanel.classList.toggle("fade-from-bottom")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0)); 

homePanelTimeoutIDTwo = setTimeout(() => { homePanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
aboutPanelTimeoutIDTwo = setTimeout(() => { aboutPanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
experiencePanelTimeoutIDTwo = setTimeout(() => { experiencePanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
blogPanelTimeoutIDTwo = setTimeout(() => {blogPanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));

// Home Panel Items
homeImageCarouselTimeoutID = setTimeout(() => { homeImageCarousel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
homeHelloTextTimeoutID = setTimeout(() => { homeHelloText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

if (screenWidth < 576) {
    homeImageProfileTimeoutIDOne = setTimeout(() => { homeImageProfile.classList.toggle("slide-left")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
    homeImageProfileTimeoutIDTwo = setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-left")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeImageLogoTimeoutIDOne = setTimeout(() => { homeImageLogo.classList.toggle("slide-right")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
    homeImageLogoTimeoutIDTwo = setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-right")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
} else {
    homeImageProfileTimeoutIDOne = setTimeout(() => { homeImageProfile.classList.toggle("slide-up")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
    homeImageProfileTimeoutIDTwo = setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-up")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeImageLogoTimeoutIDOne = setTimeout(() => { homeImageLogo.classList.toggle("slide-down")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
    homeImageLogoTimeoutIDTwo = setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-down")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
}

homeNameTextTimeoutID = setTimeout(() => { homeNameText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

homeDescriptionTextTimeoutID = setTimeout(() => { homeDescriptionText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
homeContactLinksTimeoutID = setTimeout(() => { homeContactLinks.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

// About Panel Items
aboutTopPortionTimeoutID = setTimeout(() => { aboutTopPortion.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
aboutTrainLineTimeoutID = setTimeout(() => { aboutTrainLine.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
aboutBottomPortionTimeoutID = setTimeout(() => { aboutBottomPortion.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

// Experience Panel Items
experienceHeadingLogoTimeoutID = setTimeout(() => { experienceHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
experienceHeadingTextTimeoutID = setTimeout(() => { experienceHeadingText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

experienceTopTextTimeoutID = setTimeout(() => { experienceTopText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

experienceSliderTimeoutID = setTimeout(() => { experienceSlider.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
experienceBottomPortionTimeoutID = setTimeout(() => { experienceBottomPortion.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

// Blog Panel
blogHeadingLogoTimeoutID = setTimeout(() => { blogHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
blogHeadingTextTimeoutID = setTimeout(() => { blogHeadingText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

blogTopTextTimeoutID = setTimeout(() => { blogTopText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

blogBottomTextLightTimeoutID = setTimeout(() => { blogBottomTextLight.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

blogExcerptTimeoutIDOne = setTimeout(() => { blogExcerpt.classList.toggle("pop-up-slide")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
blogExcerptTImeoutIDTwo = setTimeout(() => { blogExcerpt.classList.toggle("pre-pop-up-slide")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
blogBottomTextBoldTimeoutID = setTimeout(() => { blogBottomTextBold.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

blogLearnMoreButtonTimeoutID = setTimeout(() => { blogLearnMoreButton.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

// Fade in Status Bar
statusBarTimeoutID = setTimeout(() => { statusBar.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));





