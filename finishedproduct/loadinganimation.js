// Initial Page Load Status Bar
let initialPageLoadStatus = document.getElementById("initial-page-load-status");
let skipAnimationButton = document.getElementById("skip-animation-button");
let initialWelcomeScreen = document.getElementById("initial-welcome-screen");

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
let navBar = document.getElementById("nav-bar");
let statusBar = document.getElementById("status-bar");


let screenWidth = window.innerWidth;


// Set all opacity to 0 first to prevent animation from running
initialPageLoadStatus.opacity = 0;
initialWelcomeScreen.opacity = 0;

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


//toggling it to hidden first 
initialPageLoadStatus.classList.toggle("hidden");
initialWelcomeScreen.classList.toggle("hidden");

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
    initialPageLoadStatus.classList.add("supports-hidden");
    initialWelcomeScreen.classList.add("supports-hidden");

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

    initialPageLoadStatus.classList.add("supports-hidden");
    navBar.classList.add("supports-hidden");
}, 300);


let shortAnimation = 700;
let midAnimation = 1200;
let longAnimation = 1500; 
let wait = 0;

// (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0)

// Code
if (screenWidth >= 1200) {
    // Slide the 4 main panels into screen frist
    homePanelTimeoutIDOne = setTimeout(() => { homePanel.classList.toggle("fade-from-left")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    aboutPanelTimeoutIDOne = setTimeout(() => { aboutPanel.classList.toggle("fade-from-top")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    experiencePanelTimeoutIDOne = setTimeout(() => { experiencePanel.classList.toggle("fade-from-right")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0)); 
    blogPanelTimeoutIDOne = setTimeout(() => { blogPanel.classList.toggle("fade-from-bottom")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0)); 
    
    homePanelTimeoutIDTwo = setTimeout(() => { homePanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    aboutPanelTimeoutIDTwo = setTimeout(() => { aboutPanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    experiencePanelTimeoutIDTwo = setTimeout(() => { experiencePanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    blogPanelTimeoutIDTwo = setTimeout(() => {blogPanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));

    // Fade In Loading Screen
    initialPageLoadStatusTimeoutIDOne = setTimeout(() => { initialPageLoadStatus.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

    // Home Panel Items
    homeImageCarouselTimeoutID = setTimeout(() => { homeImageCarousel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
    homeHelloTextTimeoutID = setTimeout(() => { homeHelloText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

    homeImageProfileTimeoutIDOne = setTimeout(() => { homeImageProfile.classList.toggle("slide-up")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
    homeImageProfileTimeoutIDTwo = setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-up")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeImageLogoTimeoutIDOne = setTimeout(() => { homeImageLogo.classList.toggle("slide-down")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
    homeImageLogoTimeoutIDTwo = setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-down")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeNameTextTimeoutID = setTimeout(() => { homeNameText.classList.toggle("hidden")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeDescriptionTextTimeoutID = setTimeout(() => { homeDescriptionText.classList.toggle("hidden")}, (shortAnimation * 2) + (midAnimation * 0) + (longAnimation * 1) + (wait * 3));
    homeContactLinksTimeoutID = setTimeout(() => { homeContactLinks.classList.toggle("hidden")}, (shortAnimation * 2) + (midAnimation * 0) + (longAnimation * 1) + (wait * 3));

    // About Panel Items
    aboutTopPortionTimeoutID = setTimeout(() => { aboutTopPortion.classList.toggle("hidden")}, (shortAnimation * 3) + (midAnimation * 0) + (longAnimation * 1) + (wait * 4));
    aboutTrainLineTimeoutID = setTimeout(() => { aboutTrainLine.classList.toggle("hidden")}, (shortAnimation * 4) + (midAnimation * 0) + (longAnimation * 1) + (wait * 5));
    aboutBottomPortionTimeoutID = setTimeout(() => { aboutBottomPortion.classList.toggle("hidden")}, (shortAnimation * 5) + (midAnimation * 0) + (longAnimation * 1) + (wait * 6));

    // Experience Panel Items
    experienceHeadingLogoTimeoutID = setTimeout(() => { experienceHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 6) + (midAnimation * 0) + (longAnimation * 1) + (wait * 7));
    experienceHeadingTextTimeoutID = setTimeout(() => { experienceHeadingText.classList.toggle("hidden")}, (shortAnimation * 6) + (midAnimation * 0) + (longAnimation * 1) + (wait * 7));

    experienceTopTextTimeoutID = setTimeout(() => { experienceTopText.classList.toggle("hidden")}, (shortAnimation * 7) + (midAnimation * 0) + (longAnimation * 1) + (wait * 8));

    experienceSliderTimeoutID = setTimeout(() => { experienceSlider.classList.toggle("hidden")}, (shortAnimation * 8) + (midAnimation * 0) + (longAnimation * 1) + (wait * 9));
    experienceBottomPortionTimeoutID = setTimeout(() => { experienceBottomPortion.classList.toggle("hidden")}, (shortAnimation * 8) + (midAnimation * 0) + (longAnimation * 1) + (wait * 9));

    // Blog Panel
    blogHeadingLogoTimeoutID = setTimeout(() => { blogHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 9) + (midAnimation * 0) + (longAnimation * 1) + (wait * 10));
    blogHeadingTextTimeoutID = setTimeout(() => { blogHeadingText.classList.toggle("hidden")}, (shortAnimation * 9) + (midAnimation * 0) + (longAnimation * 1) + (wait * 10));

    blogTopTextTimeoutID = setTimeout(() => { blogTopText.classList.toggle("hidden")}, (shortAnimation * 10) + (midAnimation * 0) + (longAnimation * 1) + (wait * 11));

    blogBottomTextLightTimeoutID = setTimeout(() => { blogBottomTextLight.classList.toggle("hidden")}, (shortAnimation * 11) + (midAnimation * 0) + (longAnimation * 1) + (wait * 12));

    blogExcerptTimeoutIDOne = setTimeout(() => { blogExcerpt.classList.toggle("pop-up-slide")}, (shortAnimation * 12) + (midAnimation * 0) + (longAnimation * 1) + (wait * 13));
    blogExcerptTImeoutIDTwo = setTimeout(() => { blogExcerpt.classList.toggle("pre-pop-up-slide")}, (shortAnimation * 12) + (midAnimation * 0) + (longAnimation * 1) + (wait * 13));
    blogBottomTextBoldTimeoutID = setTimeout(() => { blogBottomTextBold.classList.toggle("hidden")}, (shortAnimation * 12) + (midAnimation * 0) + (longAnimation * 1) + (wait * 13));
    
    blogLearnMoreButtonTimeoutID = setTimeout(() => { blogLearnMoreButton.classList.toggle("hidden")}, (shortAnimation * 13) + (midAnimation * 0) + (longAnimation * 1) + (wait * 14));

    // Fade out Initial Status Bar
    initialPageLoadStatusTimeoutIDTwo =  setTimeout(() => { initialPageLoadStatus.classList.toggle("hidden")}, (shortAnimation * 14) + (midAnimation * 0) + (longAnimation * 1) + (wait * 15));
    initialPageLoadStatusTimeoutIDThree = setTimeout(() => { initialPageLoadStatus.classList.toggle("display-none")}, (shortAnimation * 15) + (midAnimation * 0) + (longAnimation * 1) + (wait * 16));

    // Fade In Initial Welcome Screen
    initialWelcomeScreenTimeoutIDOne = setTimeout(() => { initialWelcomeScreen.classList.toggle("hidden")}, (shortAnimation * 16) + (midAnimation * 0) + (longAnimation * 1) + (wait * 17));

    // Fade Out Intiial Welcome Screen 
    initialWelcomeScreenTimeoutIDTwo = setTimeout(() => { initialWelcomeScreen.classList.toggle("hidden")}, (shortAnimation * 17) + (midAnimation * 0) + (longAnimation * 1) + (wait * 18));
    initialWelcomeScreenTimeoutIDThree = setTimeout(() => { initialWelcomeScreen.classList.toggle("display-none")}, (shortAnimation * 18) + (midAnimation * 0) + (longAnimation * 1) + (wait * 19));

    // Fade in Nav Bar
    navBarTimeoutID = setTimeout(() => { navBar.classList.toggle("hidden")}, (shortAnimation * 19) + (midAnimation * 0) + (longAnimation * 1) + (wait * 20));
    statusBarTimeoutID = setTimeout(() => { statusBar.classList.toggle("hidden")}, (shortAnimation * 19) + (midAnimation * 0) + (longAnimation * 1) + (wait * 20));

} else if (screenWidth >= 576 && screenWidth < 1200) {
    // set the other panels to none first
    additionalPanelsDisplayNoneTimeoutIDOne = setTimeout(() => { additionalPanels.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    aboutPanelDisplayNoneTimeoutIDOne = setTimeout(() => { aboutPanel.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    experiencePanelDisplayNoneTimeoutIDOne = setTimeout(() => { experiencePanel.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    blogPanelDisplayNoneTimeoutIDOne = setTimeout(() => { blogPanel.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));

    // Slide the 4 main panels into screen frist
    homePanelTimeoutIDOne = setTimeout(() => { homePanel.classList.toggle("fade-from-left")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    homePanelTimeoutIDTwo = setTimeout(() => { homePanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    
    // Fade In Loading Screen
    initialPageLoadStatusTimeoutIDOne = setTimeout(() => { initialPageLoadStatus.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

    // Home Panel Items
    homeImageCarouselTimeoutID = setTimeout(() => { homeImageCarousel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
    homeHelloTextTimeoutID = setTimeout(() => { homeHelloText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

    homeImageProfileTimeoutIDOne = setTimeout(() => { homeImageProfile.classList.toggle("slide-up")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
    homeImageProfileTimeoutIDTwo = setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-up")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeImageLogoTimeoutIDOne = setTimeout(() => { homeImageLogo.classList.toggle("slide-down")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
    homeImageLogoTimeoutIDTwo = setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-down")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeNameTextTimeoutID = setTimeout(() => { homeNameText.classList.toggle("hidden")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeDescriptionTextTimeoutID = setTimeout(() => { homeDescriptionText.classList.toggle("hidden")}, (shortAnimation * 2) + (midAnimation * 0) + (longAnimation * 1) + (wait * 3));
    homeContactLinksTimeoutID = setTimeout(() => { homeContactLinks.classList.toggle("hidden")}, (shortAnimation * 2) + (midAnimation * 0) + (longAnimation * 1) + (wait * 3));

    // Fade Out About Panel, Fade In the Rest
    homePanelTimeoutIDThree = setTimeout(() => { homePanel.classList.toggle("unfade-from-left")}, (shortAnimation * 3) + (midAnimation * 0) + (longAnimation * 1) + (wait * 4));
    homePanelTimeoutIDFour = setTimeout(() => { homePanel.classList.toggle("hidden")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    homePanelDisplayNoneTimeoutIDOne = setTimeout(() => { homePanel.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));

    additionalPanelsDisplayNoneTimeoutIDTwo = setTimeout(() => { additionalPanels.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    aboutPanelDisplayNoneTimeoutIDTwo = setTimeout(() => { aboutPanel.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    experiencePanelDisplayNoneTimeoutIDTwo = setTimeout(() => { experiencePanel.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    blogPanelDisplayNoneTimeoutIDTwo = setTimeout(() => { blogPanel.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    

    aboutPanelTimeoutIDOne = setTimeout(() => { aboutPanel.classList.toggle("fade-from-left")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    experiencePanelTimeoutIDOne = setTimeout(() => { experiencePanel.classList.toggle("fade-from-right")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5)); 
    blogPanelTimeoutIDOne = setTimeout(() => { blogPanel.classList.toggle("fade-from-bottom")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5)); 
    
    aboutPanelTimeoutIDTwo = setTimeout(() => { aboutPanel.classList.toggle("hidden")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 2) + (wait * 6));
    experiencePanelTimeoutIDTwo = setTimeout(() => { experiencePanel.classList.toggle("hidden")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 2) + (wait * 6));
    blogPanelTimeoutIDTwo = setTimeout(() => {blogPanel.classList.toggle("hidden")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 2) + (wait * 6));
    

    // About Panel Items
    aboutTopPortionTimeoutID = setTimeout(() => { aboutTopPortion.classList.toggle("hidden")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 2) + (wait * 6));
    aboutTrainLineTimeoutID = setTimeout(() => { aboutTrainLine.classList.toggle("hidden")}, (shortAnimation * 4) + (midAnimation * 1) + (longAnimation * 2) + (wait * 7));
    aboutBottomPortionTimeoutID = setTimeout(() => { aboutBottomPortion.classList.toggle("hidden")}, (shortAnimation * 5) + (midAnimation * 1) + (longAnimation * 2) + (wait * 8));

    // Experience Panel Items
    experienceHeadingLogoTimeoutID = setTimeout(() => { experienceHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 6) + (midAnimation * 1) + (longAnimation * 2) + (wait * 9));
    experienceHeadingTextTimeoutID = setTimeout(() => { experienceHeadingText.classList.toggle("hidden")}, (shortAnimation * 6) + (midAnimation * 1) + (longAnimation * 2) + (wait * 9));

    experienceTopTextTimeoutID = setTimeout(() => { experienceTopText.classList.toggle("hidden")}, (shortAnimation * 7) + (midAnimation * 1) + (longAnimation * 2) + (wait * 10));

    experienceSliderTimeoutID = setTimeout(() => { experienceSlider.classList.toggle("hidden")}, (shortAnimation * 8) + (midAnimation * 1) + (longAnimation * 2) + (wait * 11));
    experienceBottomPortionTimeoutID = setTimeout(() => { experienceBottomPortion.classList.toggle("hidden")}, (shortAnimation * 8) + (midAnimation * 1) + (longAnimation * 2) + (wait * 11));

    // Blog Panel
    blogHeadingLogoTimeoutID = setTimeout(() => { blogHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 9) + (midAnimation * 1) + (longAnimation * 2) + (wait * 12));
    blogHeadingTextTimeoutID = setTimeout(() => { blogHeadingText.classList.toggle("hidden")}, (shortAnimation * 9) + (midAnimation * 1) + (longAnimation * 2) + (wait * 12));

    blogTopTextTimeoutID = setTimeout(() => { blogTopText.classList.toggle("hidden")}, (shortAnimation * 10) + (midAnimation * 1) + (longAnimation * 2) + (wait * 13));

    blogBottomTextLightTimeoutID = setTimeout(() => { blogBottomTextLight.classList.toggle("hidden")}, (shortAnimation * 11) + (midAnimation * 1) + (longAnimation * 2) + (wait * 14));

    blogExcerptTimeoutIDOne = setTimeout(() => { blogExcerpt.classList.toggle("pop-up-slide")}, (shortAnimation * 12) + (midAnimation * 1) + (longAnimation * 2) + (wait * 15));
    blogExcerptTImeoutIDTwo = setTimeout(() => { blogExcerpt.classList.toggle("pre-pop-up-slide")}, (shortAnimation * 12) + (midAnimation * 1) + (longAnimation * 2) + (wait * 15));
    blogBottomTextBoldTimeoutID = setTimeout(() => { blogBottomTextBold.classList.toggle("hidden")}, (shortAnimation * 12) + (midAnimation * 1) + (longAnimation * 2) + (wait * 15));
    
    blogLearnMoreButtonTimeoutID = setTimeout(() => { blogLearnMoreButton.classList.toggle("hidden")}, (shortAnimation * 13) + (midAnimation * 1) + (longAnimation * 2) + (wait * 16));

    // Unfade About, Experience and Blog Panels 
    aboutPanelTimeoutIDThree = setTimeout(() => { aboutPanel.classList.toggle("unfade-from-left")}, (shortAnimation * 14) + (midAnimation * 1) + (longAnimation * 2) + (wait * 17));
    experiencePanelTimeoutIDThree = setTimeout(() => { experiencePanel.classList.toggle("unfade-from-right")}, (shortAnimation * 14) + (midAnimation * 1) + (longAnimation * 2) + (wait * 17)); 
    blogPanelTimeoutIDThree = setTimeout(() => { blogPanel.classList.toggle("unfade-from-bottom")}, (shortAnimation * 14) + (midAnimation * 1) + (longAnimation * 2) + (wait * 17)); 

    additionalPanelsDisplayNoneTimeoutIDThree = setTimeout(() => { additionalPanels.classList.toggle("display-none")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    aboutPanelDisplayNoneTimeoutIDThree = setTimeout(() => { aboutPanel.classList.toggle("display-none")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    experiencePanelDisplayNoneTimeoutIDThree = setTimeout(() => { experiencePanel.classList.toggle("display-none")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    blogPanelDisplayNoneTimeoutIDThree = setTimeout(() => { blogPanel.classList.toggle("display-none")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    
    
    aboutPanelTimeoutIDFour = setTimeout(() => { aboutPanel.classList.toggle("hidden")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    experiencePanelTimeoutIDFour = setTimeout(() => { experiencePanel.classList.toggle("hidden")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    blogPanelTimeoutIDFour = setTimeout(() => {blogPanel.classList.toggle("hidden")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));

    makeEverythingAppearTimeout = setTimeout(() => {makeEverythingAppear()}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));

} else if (screenWidth < 576) {

    // set the other panels to none first
    additionalPanelsDisplayNoneTimeoutIDOne = setTimeout(() => { additionalPanels.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    aboutPanelDisplayNoneTimeoutIDOne = setTimeout(() => { aboutPanel.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    experiencePanelDisplayNoneTimeoutIDOne = setTimeout(() => { experiencePanel.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    blogPanelDisplayNoneTimeoutIDOne = setTimeout(() => { blogPanel.classList.toggle("display-none")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));

    // Slide the 4 main panels into screen frist
    homePanelTimeoutIDOne = setTimeout(() => { homePanel.classList.toggle("fade-from-left")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    homePanelTimeoutIDTwo = setTimeout(() => { homePanel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 0) + (wait * 0));
    
    // Fade In Loading Screen
    initialPageLoadStatusTimeoutIDOne = setTimeout(() => { initialPageLoadStatus.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

    // Home Panel Items
    homeImageCarouselTimeoutID = setTimeout(() => { homeImageCarousel.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));
    homeHelloTextTimeoutID = setTimeout(() => { homeHelloText.classList.toggle("hidden")}, (shortAnimation * 0) + (midAnimation * 0) + (longAnimation * 1) + (wait * 1));

    homeImageProfileTimeoutIDOne = setTimeout(() => { homeImageProfile.classList.toggle("slide-left")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
    homeImageProfileTimeoutIDTwo = setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-left")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeImageLogoTimeoutIDOne = setTimeout(() => { homeImageLogo.classList.toggle("slide-right")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));
    homeImageLogoTimeoutIDTwo = setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-right")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeNameTextTimeoutID = setTimeout(() => { homeNameText.classList.toggle("hidden")}, (shortAnimation * 1) + (midAnimation * 0) + (longAnimation * 1) + (wait * 2));

    homeDescriptionTextTimeoutID = setTimeout(() => { homeDescriptionText.classList.toggle("hidden")}, (shortAnimation * 2) + (midAnimation * 0) + (longAnimation * 1) + (wait * 3));
    homeContactLinksTimeoutID = setTimeout(() => { homeContactLinks.classList.toggle("hidden")}, (shortAnimation * 2) + (midAnimation * 0) + (longAnimation * 1) + (wait * 3));

    // Fade Out About Panel, Fade In the Blog and Experience Panels ONLY
    homePanelTimeoutIDThree = setTimeout(() => { homePanel.classList.toggle("unfade-from-left")}, (shortAnimation * 3) + (midAnimation * 0) + (longAnimation * 1) + (wait * 4));
    homePanelTimeoutIDFour = setTimeout(() => { homePanel.classList.toggle("hidden")}, (shortAnimation * 3) + (midAnimation * 0) + (longAnimation * 1) + (wait * 4));
    homePanelDisplayNoneTimeoutIDOne = setTimeout(() => { homePanel.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));

    additionalPanelsDisplayNoneTimeoutIDTwo = setTimeout(() => { additionalPanels.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    aboutPanelDisplayNoneTimeoutIDTwo = setTimeout(() => { aboutPanel.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    experiencePanelDisplayNoneTimeoutIDTwo = setTimeout(() => { experiencePanel.classList.toggle("display-none")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    

    aboutPanelTimeoutIDOne = setTimeout(() => { aboutPanel.classList.toggle("fade-from-left")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5));
    experiencePanelTimeoutIDOne = setTimeout(() => { experiencePanel.classList.toggle("fade-from-right")}, (shortAnimation * 3) + (midAnimation * 1) + (longAnimation * 1) + (wait * 5)); 
    
    
    aboutPanelTimeoutIDTwo = setTimeout(() => { aboutPanel.classList.toggle("hidden")}, (shortAnimation * 4) + (midAnimation * 1) + (longAnimation * 1) + (wait * 6));
    experiencePanelTimeoutIDTwo = setTimeout(() => { experiencePanel.classList.toggle("hidden")}, (shortAnimation * 4) + (midAnimation * 1) + (longAnimation * 1) + (wait * 6));
    

    // About Panel Items
    aboutTopPortionTimeoutID = setTimeout(() => { aboutTopPortion.classList.toggle("hidden")}, (shortAnimation * 5) + (midAnimation * 1) + (longAnimation * 1) + (wait * 7));
    aboutTrainLineTimeoutID = setTimeout(() => { aboutTrainLine.classList.toggle("hidden")}, (shortAnimation * 6) + (midAnimation * 1) + (longAnimation * 1) + (wait * 8));
    aboutBottomPortionTimeoutID = setTimeout(() => { aboutBottomPortion.classList.toggle("hidden")}, (shortAnimation * 7) + (midAnimation * 1) + (longAnimation * 1) + (wait * 9));

    // Experience Panel Items
    experienceHeadingLogoTimeoutID = setTimeout(() => { experienceHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 8) + (midAnimation * 1) + (longAnimation * 1) + (wait * 10));
    experienceHeadingTextTimeoutID = setTimeout(() => { experienceHeadingText.classList.toggle("hidden")}, (shortAnimation * 8) + (midAnimation * 1) + (longAnimation * 1) + (wait * 10));

    experienceTopTextTimeoutID = setTimeout(() => { experienceTopText.classList.toggle("hidden")}, (shortAnimation * 9) + (midAnimation * 1) + (longAnimation * 1) + (wait * 11));

    experienceSliderTimeoutID = setTimeout(() => { experienceSlider.classList.toggle("hidden")}, (shortAnimation * 10) + (midAnimation * 1) + (longAnimation * 1) + (wait * 12));
    experienceBottomPortionTimeoutID = setTimeout(() => { experienceBottomPortion.classList.toggle("hidden")}, (shortAnimation * 10) + (midAnimation * 1) + (longAnimation * 1) + (wait * 12));

    // Unfade About, Experience Panels, Show Blog Panel
    aboutPanelTimeoutIDThree = setTimeout(() => { aboutPanel.classList.toggle("unfade-from-left")}, (shortAnimation * 11) + (midAnimation * 1) + (longAnimation * 1) + (wait * 13));
    experiencePanelTimeoutIDThree = setTimeout(() => { experiencePanel.classList.toggle("unfade-from-right")}, (shortAnimation * 11) + (midAnimation * 1) + (longAnimation * 1) + (wait * 13)); 

    aboutPanelTimeoutIDFour = setTimeout(() => { aboutPanel.classList.toggle("hidden")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 1) + (wait * 14));
    experiencePanelTimeoutIDFour = setTimeout(() => { experiencePanel.classList.toggle("hidden")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 1) + (wait * 14));

    aboutPanelDisplayNoneTimeoutIDThree = setTimeout(() => { aboutPanel.classList.toggle("display-none")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 1) + (wait * 14));
    experiencePanelDisplayNoneTimeoutIDThree = setTimeout(() => { experiencePanel.classList.toggle("display-none")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 1) + (wait * 14));

    topAdditionalsDisplayNoneTimeoutIDOne = setTimeout(() => { topAdditionals.classList.toggle("display-none")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 1) + (wait * 14));

    blogPanelDisplayNoneTimeoutIDTwo = setTimeout(() => { blogPanel.classList.toggle("display-none")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 1) + (wait * 14));
    
    blogPanelTimeoutIDOne = setTimeout(() => { blogPanel.classList.toggle("fade-from-bottom")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 1) + (wait * 14)); 
    blogPanelTimeoutIDTwo = setTimeout(() => {blogPanel.classList.toggle("hidden")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 2) + (wait * 15));

    // Blog Panel
    blogHeadingLogoTimeoutID = setTimeout(() => { blogHeadingLogo.classList.toggle("hidden")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 2) + (wait * 15));
    blogHeadingTextTimeoutID = setTimeout(() => { blogHeadingText.classList.toggle("hidden")}, (shortAnimation * 11) + (midAnimation * 2) + (longAnimation * 2) + (wait * 15));

    blogTopTextTimeoutID = setTimeout(() => { blogTopText.classList.toggle("hidden")}, (shortAnimation * 12) + (midAnimation * 2) + (longAnimation * 2) + (wait * 16));

    blogBottomTextLightTimeoutID = setTimeout(() => { blogBottomTextLight.classList.toggle("hidden")}, (shortAnimation * 13) + (midAnimation * 2) + (longAnimation * 2) + (wait * 17));

    blogExcerptTimeoutIDOne = setTimeout(() => { blogExcerpt.classList.toggle("pop-up-slide")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    blogExcerptTImeoutIDTwo = setTimeout(() => { blogExcerpt.classList.toggle("pre-pop-up-slide")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    blogBottomTextBoldTimeoutID = setTimeout(() => { blogBottomTextBold.classList.toggle("hidden")}, (shortAnimation * 14) + (midAnimation * 2) + (longAnimation * 2) + (wait * 18));
    
    blogLearnMoreButtonTimeoutID = setTimeout(() => { blogLearnMoreButton.classList.toggle("hidden")}, (shortAnimation * 15) + (midAnimation * 2) + (longAnimation * 2) + (wait * 19));

    // Unfade Blog Panels 
    blogPanelTimeoutIDThree = setTimeout(() => { blogPanel.classList.toggle("unfade-from-bottom")}, (shortAnimation * 16) + (midAnimation * 2) + (longAnimation * 2) + (wait * 20)); 

    additionalPanelsDisplayNoneTimeoutIDThree = setTimeout(() => { additionalPanels.classList.toggle("display-none")}, (shortAnimation * 16) + (midAnimation * 3) + (longAnimation * 2) + (wait * 21));
    blogPanelDisplayNoneTimeoutIDThree = setTimeout(() => { blogPanel.classList.toggle("display-none")}, (shortAnimation * 16) + (midAnimation * 3) + (longAnimation * 2) + (wait * 21));
    
    blogPanelTimeoutIDFour = setTimeout(() => {blogPanel.classList.toggle("hidden")}, (shortAnimation * 16) + (midAnimation * 3) + (longAnimation * 2) + (wait * 21));

    makeEverythingAppearTimeout = setTimeout(() => {makeEverythingAppear()}, (shortAnimation * 16) + (midAnimation * 3) + (longAnimation * 2) + (wait * 21));

}


function makeEverythingAppear() {

    // Cancel sliding the 4 main panels into screen first
    clearTimeout(homePanelTimeoutIDOne);
    clearTimeout(aboutPanelTimeoutIDOne);
    clearTimeout(experiencePanelTimeoutIDOne);
    clearTimeout(blogPanelTimeoutIDOne);

    clearTimeout(homePanelTimeoutIDTwo);
    clearTimeout(aboutPanelTimeoutIDTwo);
    clearTimeout(experiencePanelTimeoutIDTwo);
    clearTimeout(blogPanelTimeoutIDTwo);

    if (screenWidth < 1200) {
        clearTimeout(homePanelTimeoutIDThree);
        clearTimeout(aboutPanelTimeoutIDThree);
        clearTimeout(experiencePanelTimeoutIDThree);
        clearTimeout(blogPanelTimeoutIDThree);
        
        clearTimeout(homePanelTimeoutIDFour);
        clearTimeout(aboutPanelTimeoutIDFour);
        clearTimeout(experiencePanelTimeoutIDFour);
        clearTimeout(blogPanelTimeoutIDFour);

        clearTimeout(homePanelDisplayNoneTimeoutIDOne);
        clearTimeout(aboutPanelDisplayNoneTimeoutIDOne);
        clearTimeout(experiencePanelDisplayNoneTimeoutIDOne);
        clearTimeout(blogPanelDisplayNoneTimeoutIDOne);
        clearTimeout(additionalPanelsDisplayNoneTimeoutIDOne);

        clearTimeout(aboutPanelDisplayNoneTimeoutIDTwo);
        clearTimeout(experiencePanelDisplayNoneTimeoutIDTwo);
        clearTimeout(blogPanelDisplayNoneTimeoutIDTwo);
        clearTimeout(additionalPanelsDisplayNoneTimeoutIDTwo);

        clearTimeout(aboutPanelDisplayNoneTimeoutIDThree);
        clearTimeout(experiencePanelDisplayNoneTimeoutIDThree);
        clearTimeout(blogPanelDisplayNoneTimeoutIDThree);
        clearTimeout(additionalPanelsDisplayNoneTimeoutIDThree);
    }

    if (screenWidth < 576) {
        clearTimeout(topAdditionalsDisplayNoneTimeoutIDOne);
    }


    // Intial Page Load Status
    clearTimeout(initialPageLoadStatusTimeoutIDOne);

    if (screenWidth >= 1200) {
        clearTimeout(initialPageLoadStatusTimeoutIDTwo); 
        clearTimeout(initialPageLoadStatusTimeoutIDThree); 
    }

    // Home Panel Items
    clearTimeout(homeImageCarouselTimeoutID);
    clearTimeout(homeHelloTextTimeoutID);
    
    clearTimeout(homeImageProfileTimeoutIDOne);
    clearTimeout(homeImageProfileTimeoutIDTwo);
    
    clearTimeout(homeImageLogoTimeoutIDOne);
    clearTimeout(homeImageLogoTimeoutIDTwo);

    clearTimeout(homeNameTextTimeoutID);

    clearTimeout(homeDescriptionTextTimeoutID);
    clearTimeout(homeContactLinksTimeoutID);

    // About Panel Items
    clearTimeout(aboutTopPortionTimeoutID);
    clearTimeout(aboutTrainLineTimeoutID);
    clearTimeout(aboutBottomPortionTimeoutID);

    // Experience Panel Items
    clearTimeout(experienceHeadingLogoTimeoutID);
    clearTimeout(experienceHeadingTextTimeoutID);

    clearTimeout(experienceTopTextTimeoutID);

    clearTimeout(experienceSliderTimeoutID);
    clearTimeout(experienceBottomPortionTimeoutID);

    // Blog Panel Items 
    clearTimeout(blogHeadingLogoTimeoutID);
    clearTimeout(blogHeadingTextTimeoutID);

    clearTimeout(blogTopTextTimeoutID);
    
    clearTimeout(blogBottomTextLightTimeoutID);

    clearTimeout(blogExcerptTimeoutIDOne);
    clearTimeout(blogExcerptTImeoutIDTwo);
    clearTimeout(blogBottomTextBoldTimeoutID);

    clearTimeout(blogLearnMoreButtonTimeoutID);

    if (screenWidth >= 1200) {
        // Cancel Welcome Animation
        clearTimeout(initialWelcomeScreenTimeoutIDOne);
        clearTimeout(initialWelcomeScreenTimeoutIDTwo);
        clearTimeout(initialWelcomeScreenTimeoutIDThree);

        // cancel fade in nav bar
        clearTimeout(navBarTimeoutID);
        clearTimeout(statusBarTimeoutID);
    }

    if (screenWidth < 1200) {
        clearTimeout(makeEverythingAppearTimeout);
    }
    
    // Ensure that Everything is not display none
    if (homePanel.classList.contains("display-none")) {
        homePanel.classList.toggle("display-none");
    }

    if (additionalPanels.classList.contains("display-none")) {
        additionalPanels.classList.toggle("display-none");
    }

    if (topAdditionals.classList.contains("display-none")) {
        topAdditionals.classList.toggle("display-none");
    }

    if (aboutPanel.classList.contains("display-none")) {
        aboutPanel.classList.toggle("display-none");
    }

    if (experiencePanel.classList.contains("display-none")) {
        experiencePanel.classList.toggle("display-none");
    }

    if (blogPanel.classList.contains("display-none")) {
        blogPanel.classList.toggle("display-none");
    }


    // Fade All Animations That Appeared On Screen Already 
    if (!homePanel.classList.contains("hidden")) {
        homePanel.classList.toggle("hidden");
    }

    if (!aboutPanel.classList.contains("hidden")) {
        aboutPanel.classList.toggle("hidden");
    }

    if (!experiencePanel.classList.contains("hidden")) {
        experiencePanel.classList.toggle("hidden");
    }

    if (!blogPanel.classList.contains("hidden")) {
        blogPanel.classList.toggle("hidden");
    }


    // Make sure that they do not have the fading animation
    if (homePanel.classList.contains("fade-from-left")) {
        homePanel.classList.toggle("fade-from-left");
    }

    if (aboutPanel.classList.contains("fade-from-left")) {
        aboutPanel.classList.toggle("fade-from-left");
    }

    if (aboutPanel.classList.contains("fade-from-top")) {
        aboutPanel.classList.toggle("fade-from-top");
    }

    if (experiencePanel.classList.contains("fade-from-right")) {
        experiencePanel.classList.toggle("fade-from-right");
    }

    if (blogPanel.classList.contains("fade-from-bottom")) {
        blogPanel.classList.toggle("fade-from-bottom");
    }


    // Make sure that they do not have the unfading animation
    if (homePanel.classList.contains("unfade-from-left")) {
        homePanel.classList.toggle("unfade-from-left");
    }

    if (aboutPanel.classList.contains("unfade-from-left")) {
        aboutPanel.classList.toggle("unfade-from-left");
    }

    if (aboutPanel.classList.contains("unfade-from-top")) {
        aboutPanel.classList.toggle("unfade-from-top");
    }

    if (experiencePanel.classList.contains("unfade-from-right")) {
        experiencePanel.classList.toggle("unfade-from-right");
    }

    if (blogPanel.classList.contains("unfade-from-bottom")) {
        blogPanel.classList.toggle("unfade-from-bottom");
    }


    // Home Panel
    if (!homeImageCarousel.classList.contains("hidden")) {
        homeImageCarousel.classList.toggle("hidden");
    }

    if (screenWidth < 576) {
        if (!homeImageProfile.classList.contains("home-pre-slide-left")) {
            homeImageProfile.classList.toggle("home-pre-slide-left");
        }
    
        if (homeImageProfile.classList.contains("slide-left")) {
            homeImageProfile.classList.toggle("slide-left");
        }

        if (!homeImageLogo.classList.contains("home-pre-slide-right")) {
            homeImageLogo.classList.toggle("home-pre-slide-right");
        }
    
        if (homeImageLogo.classList.contains("slide-right")) {
            homeImageLogo.classList.toggle("slide-right");
        }
    } else {
        if (!homeImageProfile.classList.contains("home-pre-slide-up")) {
            homeImageProfile.classList.toggle("home-pre-slide-up");
        }
    
        if (homeImageProfile.classList.contains("slide-up")) {
            homeImageProfile.classList.toggle("slide-up");
        }

        if (!homeImageLogo.classList.contains("home-pre-slide-down")) {
            homeImageLogo.classList.toggle("home-pre-slide-down");
        }
    
        if (homeImageLogo.classList.contains("slide-down")) {
            homeImageLogo.classList.toggle("slide-down");
        }
    }

    if (!homeHelloText.classList.contains("hidden")) {
        homeHelloText.classList.toggle("hidden");
    }

    if (!homeNameText.classList.contains("hidden")) {
        homeNameText.classList.toggle("hidden");
    }

    if (!homeDescriptionText.classList.contains("hidden")) {
        homeDescriptionText.classList.toggle("hidden");
    }

    if (!homeContactLinks.classList.contains("hidden")) {
        homeContactLinks.classList.toggle("hidden");
    }


    // About Panel
    if (!aboutTopPortion.classList.contains("hidden")) {
        aboutTopPortion.classList.toggle("hidden");
    }

    if (!aboutTrainLine.classList.contains("hidden")) {
        aboutTrainLine.classList.toggle("hidden");
    }

    if (!aboutBottomPortion.classList.contains("hidden")) {
        aboutBottomPortion.classList.toggle("hidden");
    }


    // Experience Panel
    if (!experienceHeadingText.classList.contains("hidden")) {
        experienceHeadingText.classList.toggle("hidden");
    }

    if (!experienceHeadingLogo.classList.contains("hidden")) {
        experienceHeadingLogo.classList.toggle("hidden");
    }

    if (!experienceSlider.classList.contains("hidden")) {
        experienceSlider.classList.toggle("hidden");
    }

    if (!experienceTopText.classList.contains("hidden")) {
        experienceTopText.classList.toggle("hidden");
    }

    if (!experienceBottomPortion.classList.contains("hidden")) {
        experienceBottomPortion.classList.toggle("hidden");
    }
    

    // Blog Panel
    if (!blogHeadingText.classList.contains("hidden")) {
        blogHeadingText.classList.toggle("hidden");
    }

    if (!blogHeadingLogo.classList.contains("hidden")) {
        blogHeadingLogo.classList.toggle("hidden");
    }

    if (!blogTopText.classList.contains("hidden")) {
        blogTopText.classList.toggle("hidden");
    }

    if (!blogBottomTextLight.classList.contains("hidden")) {
        blogBottomTextLight.classList.toggle("hidden");
    }

    if (!blogBottomTextBold.classList.contains("hidden")) {
        blogBottomTextBold.classList.toggle("hidden");
    }

    if (!blogExcerpt.classList.contains("pre-pop-up-slide")) {
        blogExcerpt.classList.toggle("pre-pop-up-slide");
    }

    if (blogExcerpt.classList.contains("pop-up-slide")) {
        blogExcerpt.classList.toggle("pop-up-slide");
    }

    if (!blogLearnMoreButton.classList.contains("hidden")) {
        blogLearnMoreButton.classList.toggle("hidden");
    }


    // Initial Welcome Screen
    if (!initialWelcomeScreen.classList.contains("hidden")) {
        initialWelcomeScreen.classList.toggle("hidden");
    }

    if (initialWelcomeScreen.classList.contains("display-none")) {
        initialWelcomeScreen.classList.toggle("display-none");
    }


    // Nav Bar and Status Bar
    if (!navBar.classList.contains("hidden")) {
        navBar.classList.toggle("hidden");
    }

    if (!statusBar.classList.contains("hidden")) {
        statusBar.classList.toggle("hidden");
    }

    // FOR SMALLER SCREEN WIDTH: INTRODUCE WELCOME SCREEN FIRST

    let initialTime = 0;

    if (screenWidth < 1200) {
        setTimeout(() => { initialWelcomeScreen.classList.toggle("hidden")}, 0);
        setTimeout(() => { initialWelcomeScreen.classList.toggle("hidden")}, longAnimation + wait);
        setTimeout(() => { initialWelcomeScreen.classList.toggle("display-none")}, (longAnimation + shortAnimation + (2*wait)));
        initialTime = (longAnimation + shortAnimation + (2*wait));
    }

    // Making Everything Appear Again
    initialPageLoadStatus.classList.toggle("hidden");
    setTimeout(() => { initialPageLoadStatus.classList.toggle("display-none")}, initialTime);

    // Fading everything back in at once
    homePanelTimeoutIDTwo = setTimeout(() => { homePanel.classList.toggle("hidden")}, initialTime);
    aboutPanelTimeoutIDTwo = setTimeout(() => { aboutPanel.classList.toggle("hidden")}, initialTime);
    experiencePanelTimeoutIDTwo = setTimeout(() => { experiencePanel.classList.toggle("hidden")}, initialTime);
    blogPanelTimeoutIDTwo = setTimeout(() => {blogPanel.classList.toggle("hidden")}, initialTime);

    // Home Panel Items
    homeImageCarouselTimeoutID = setTimeout(() => { homeImageCarousel.classList.toggle("hidden")}, initialTime);
    homeHelloTextTimeoutID = setTimeout(() => { homeHelloText.classList.toggle("hidden")}, initialTime);

    if (screenWidth < 576) {
        homeImageProfileTimeoutIDOne = setTimeout(() => { homeImageProfile.classList.toggle("slide-left")}, initialTime + shortAnimation);
        homeImageProfileTimeoutIDTwo = setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-left")}, initialTime + shortAnimation * 2 + wait * 2);

        homeImageLogoTimeoutIDOne = setTimeout(() => { homeImageLogo.classList.toggle("slide-right")}, initialTime + shortAnimation);
        homeImageLogoTimeoutIDTwo = setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-right")}, initialTime + shortAnimation * 2 + wait * 2);
    } else {
        homeImageProfileTimeoutIDOne = setTimeout(() => { homeImageProfile.classList.toggle("slide-up")}, initialTime + shortAnimation);
        homeImageProfileTimeoutIDTwo = setTimeout(() => { homeImageProfile.classList.toggle("home-pre-slide-up")}, initialTime + shortAnimation * 2 + wait * 2);

        homeImageLogoTimeoutIDOne = setTimeout(() => { homeImageLogo.classList.toggle("slide-down")}, initialTime + shortAnimation);
        homeImageLogoTimeoutIDTwo = setTimeout(() => { homeImageLogo.classList.toggle("home-pre-slide-down")}, initialTime + shortAnimation * 2 + wait * 2);
    }
    

    homeNameTextTimeoutID = setTimeout(() => { homeNameText.classList.toggle("hidden")}, initialTime);

    homeDescriptionTextTimeoutID = setTimeout(() => { homeDescriptionText.classList.toggle("hidden")}, initialTime);
    homeContactLinksTimeoutID = setTimeout(() => { homeContactLinks.classList.toggle("hidden")}, initialTime);

    // About Panel Items
    aboutTopPortionTimeoutID = setTimeout(() => { aboutTopPortion.classList.toggle("hidden")}, initialTime);
    aboutTrainLineTimeoutID = setTimeout(() => { aboutTrainLine.classList.toggle("hidden")}, initialTime);
    aboutBottomPortionTimeoutID = setTimeout(() => { aboutBottomPortion.classList.toggle("hidden")}, initialTime);

    // Experience Panel Items
    experienceHeadingLogoTimeoutID = setTimeout(() => { experienceHeadingLogo.classList.toggle("hidden")}, initialTime);
    experienceHeadingTextTimeoutID = setTimeout(() => { experienceHeadingText.classList.toggle("hidden")}, initialTime);

    experienceTopTextTimeoutID = setTimeout(() => { experienceTopText.classList.toggle("hidden")}, initialTime);

    experienceSliderTimeoutID = setTimeout(() => { experienceSlider.classList.toggle("hidden")}, initialTime);
    experienceBottomPortionTimeoutID = setTimeout(() => { experienceBottomPortion.classList.toggle("hidden")}, initialTime);

    // Blog Panel
    blogHeadingLogoTimeoutID = setTimeout(() => { blogHeadingLogo.classList.toggle("hidden")}, initialTime);
    blogHeadingTextTimeoutID = setTimeout(() => { blogHeadingText.classList.toggle("hidden")}, initialTime);

    blogTopTextTimeoutID = setTimeout(() => { blogTopText.classList.toggle("hidden")}, initialTime);

    blogBottomTextLightTimeoutID = setTimeout(() => { blogBottomTextLight.classList.toggle("hidden")}, initialTime);

    blogExcerptTimeoutIDOne = setTimeout(() => { blogExcerpt.classList.toggle("pop-up-slide")}, initialTime + shortAnimation + wait);
    blogExcerptTImeoutIDTwo = setTimeout(() => { blogExcerpt.classList.toggle("pre-pop-up-slide")}, initialTime + shortAnimation + longAnimation + wait * 2);
    blogBottomTextBoldTimeoutID = setTimeout(() => { blogBottomTextBold.classList.toggle("hidden")}, initialTime);
    
    blogLearnMoreButtonTimeoutID = setTimeout(() => { blogLearnMoreButton.classList.toggle("hidden")}, initialTime);

    if (screenWidth > 1200) {
        // Fade In Initial Welcome Screen
        initialWelcomeScreenTimeoutIDOne = setTimeout(() => { initialWelcomeScreen.classList.toggle("hidden")}, initialTime);
        // Fade Out Intiial Welcome Screen 
        initialWelcomeScreenTimeoutIDTwo = setTimeout(() => { initialWelcomeScreen.classList.toggle("hidden")}, initialTime + wait);
        initialWelcomeScreenTimeoutIDThree = setTimeout(() => { initialWelcomeScreen.classList.toggle("display-none")}, initialTime + wait + shortAnimation);

        // Fade in Nav Bar
        navBarTimeoutID = setTimeout(() => { navBar.classList.toggle("hidden")}, initialTime + initialTime + wait + shortAnimation);
        statusBarTimeoutID = setTimeout(() => { statusBar.classList.toggle("hidden")}, initialTime + initialTime + wait + shortAnimation);
    } else {
         // Fade in Nav Bar
         navBarTimeoutID = setTimeout(() => { navBar.classList.toggle("hidden")}, initialTime);
         statusBarTimeoutID = setTimeout(() => { statusBar.classList.toggle("hidden")}, initialTime);
    }
    
}


skipAnimationButton.addEventListener('click', () => {
    makeEverythingAppear();
});





