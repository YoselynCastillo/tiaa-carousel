// *
// * Add Thumbnails to DOM
// *
const addThumbnails = () => {
  const info = [
    {
      thumbSrc: "TIAA_0-Forum2023-LOOP_DEL_01070317_RND.png",
      thumbVideoSrc: "TIAA_0-Forum2023-LOOP_DEL.mp4",
      title: "Institutional Platforms Re-Imagined",
      desc: "Reimagined Plan Sponsor and Consultant experiences to improve quality, reduce administrative time, and optimize their business",
    },
    {
      thumbSrc: "TIAA_0-Forum2023-LOOP_DEL_01043014_RND.png",
      thumbVideoSrc: "TIAA_1-PlanFocus_v09_DEL.mp4",
      title: "Participant Experiences Re-Imagined",
      desc: "Reimagined Web and Mobile experiences to provide delightful and transformation step change omni channel experiences that engage and support the participants through their life journey to achieve their retirement goals",
    },
    {
      thumbSrc: "TIAA_0-Forum2023-LOOP_DEL_01001213_RND.png",
      thumbVideoSrc: "TIAA_2-Web-Mobile_v07_DEL.mp4",
      title: "Customer Servicing Re-Imagined",
      desc: "Strategic Partnerships and AI driven platforms to provide the best in class customer servicing experience",
    },
    {
      thumbSrc: "TIAA_0-Forum2023-LOOP_PLAYALL_RND.png",
      thumbVideoSrc: "TIAA_3-Gateway_v07_DEL.mp4",
      title: "Retirement Gateway",
      desc: "The next-generation engine that enables extended integration and external interconnectivity for a fully digital retirement offering ecosystem",
    },
    {
      thumbSrc: "TIAA_0-Forum2023-LOOP_DEL_01035317_RND.png",
      thumbVideoSrc: "TIAA_4-GoogleAI_v11_DEL.mp4",
      title: "Re-Imagined TIAA Retirement Technology",
      desc: "The next generation of transformative changes coming soon to the platforms and technology that support retirement",
    },
    {
      thumbSrc: "TIAA_0-Forum2023-LOOP_DEL_01074603_RND.png",
      thumbVideoSrc: "TIAA_5-MFABB_v11_DEL.mp4",
      title: "Re-Imagined TIAA Retirement Technology",
      desc: "The next generation and transformative changes coming to our platforms and technology supporting Retirement",
    },
    {
      thumbSrc: "TIAA_0-Forum2023-LOOP_DEL_01083623_RND.png",
      thumbVideoSrc: "TIAA_6-Awards_v01_DEL.mp4",
      title: "Re-Imagined TIAA Retirement Technology",
      desc: "The next generation and transformative changes coming to our platforms and technology supporting Retirement",
    },
  ];

  const thumbsVideo = document.getElementById("thumbsVideo");

  for (let index = 1; index < info.length; index++) {
    const ul = document.createElement("ul");
    const liPng = document.createElement("li");
    const liTextThumb = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");

    liPng.setAttribute("data-thumb-src", `assets/${info[index].thumbSrc}`);
    liPng.setAttribute("data-thumb-video-src", `videos/${info[index].thumbVideoSrc}`);

    liTextThumb.setAttribute("data-thumb-caption", "");
    liTextThumb.setAttribute("data-thumb-caption-offset", "70");

    title.className = "fwdr3dcov-title";
    title.textContent = info[index].title;

    description.className = "fwdr3dcov-desc";
    description.textContent = info[index].desc;

    liTextThumb.appendChild(title);
    liTextThumb.appendChild(description);

    ul.appendChild(liPng);
    ul.appendChild(liTextThumb);

    if (thumbsVideo) thumbsVideo.appendChild(ul);
  }

  
};

// *
// * Init carousel
// *
FWDR3DCovUtils.onReady(function () {
  addThumbnails();

  new FWDR3DCov({
    // Main.
    instanceName: "fwdr3dcov0",
    coverflowHolderDivId: "myDiv",
    coverflowDataListDivId: "coverflowData",
    displayType: "responsive",
    coverflowWidth: 990,
    coverflowOffsetHeight: 120,
    thumbnailResizeOffest: 60,
    zIndex: 0,
    mainFolderPath: "coverflow/start/content",
    skinPath: "skin_dark",
    useVectorIcons: "yes",
    initializeOnlyWhenVisible: "no",
    coverflowStartPosition: "center",
    coverflowXRotation: 0,
    rightClickContextMenu: "default",
    enableMouseWheelScroll: "no",
    addKeyboardSupport: "yes",
    useDragAndSwipe: "yes",
    backgroundColor: "transparent",
    backgroundImage: "",
    backgroundImageRepeat: "no-repeat",
    backgroundImageSize: "auto",
    preloaderBackgroundColor: "#333333",
    preloaderFillColor: "#FFFFFF",
    // Thumbnails.
    thumbnailWidth: 400,
    thumbnailHeight: 262.64,
    thumbnailXOffset3D: 100,
    thumbnailXSpace3D: 97,
    thumbnailZOffset3D: 200,
    thumbnailZSpace3D: 180,
    thumbnailYAngle3D: 55,
    thumbnailHoverOffset: 100,
    thumbnailOffsetY: 0,
    thumbnailBorderSize: 0,
    thumbnailBackgroundColor: "#003865",
    thumbnailBorderColor1: "#FFFFFF",
    thumbnailBorderColor2: "#FFFFFF",
    numberOfThumbnailsToDisplayLeftAndRight: "3",
    infiniteLoop: "yes",
    transparentImages: "no",
    showReflection: "no",
    reflectionHeight: 50,
    reflectionDistance: 0,
    reflectionOpacity: 0.4,
    showThumbnailsGradient: "yes",
    thumbnailGradientColor1: "rgba(0, 56, 101, 0)",
    thumbnailGradientColor2: "rgba(0, 56, 101, 1)",
    useVideo: "yes",
    videoAutoPlay: "no",
    nextVideoAutoPlay: "no",
    videoAutoPlayText: "Click to unmute",
    volume: 1,
    showLogo: "no",
    logoPath: "",
    logoLink: "",
    fillEntireVideoScreen: "yes",
    showDefaultControllerForVimeo: "yes",
    showScrubberWhenControllerIsHidden: "yes",
    showVolumeButton: "yes",
    showTime: "yes",
    showRewindButton: "no",
    showQualityButton: "no",
    showPlaybackRateButton: "yes",
    showChromecastButton: "no",
    showFullScreenButton: "yes",
    showScrubberToolTipLabel: "yes",
    timeColor: "#B9B9B9",
    youtubeQualityButtonNormalColor: "#B9B9B9",
    youtubeQualityButtonSelectedColor: "#FFFFFF",
    scrubbersToolTipLabelBackgroundColor: "#FFFFFF",
    scrubbersToolTipLabelFontColor: "#5a5a5a",
    audioVisualizerLinesColor: "#D60E63",
    audioVisualizerCircleColor: "#FFFFFF",
    thumbnailsPreviewWidth: 196,
    thumbnailsPreviewBackgroundColor: "#2e2e2e",
    thumbnailsPreviewBorderColor: "#414141",
    thumbnailsPreviewLabelBackgroundColor: "#414141",
    thumbnailsPreviewLabelFontColor: "#CCCCCC",
    skipToVideoText: "",
    skipToVideoButtonText: "",
    // Controls.
    controlsMaxWidth: 600,
    controlsOffset: 0,
    showNextAndPrevButtons: "no",
    showNextAndPrevButtonsOnMobile: "no",
    nextAndPrevButtonsOffsetX: 20,
    showLargeNextAndPrevButtons: "no",
    largeNextAndPrevButtonsMaxWidthPos: 1610,
    showSlideshowButton: "no",
    slideshowAutoplay: "no",
    slideshowDelay: 5,
    slideshowPreloaderBackgroundColor: "#333333",
    slideshowPreloaderFillColor: "#FFFFFF",
    showScrollbar: "no",
    showScrollbarOnMobile: "no",
    scrollbarHandlerWidth: 200,
    scrollbarTextColorNormal: "#FFFFFF",
    scrollbarTextColorSelected: "#111111",
    showBulletsNavigation: "no",
    bulletsNormalColor: "#333333",
    bulletsSelectedColor: "#FFFFFF",
    bulletsNormalRadius: 6,
    bulletsSelectedRadius: 9,
    spaceBetweenBullets: 18,
    // Caption.
    showCaption: "yes",
    captionPosition: "out",
    captionAnimationType: "motion",
    showCaptionOnTap: "yes",
    showFullCaption: "no",
    // Menu.
    showMenu: "yes",
    startAtCategory: 1,
    menuPosition: "topright",
    selectorLineColor: "#333333",
    selectorBackgroundColor: "#1F1F1F",
    selectorTextNormalColor: "#FFFFFF",
    selectorTextSelectedColor: "#FFFFFF",
    buttonBackgroundColor: "#1F1F1F",
    buttonTextNormalColor: "#8F8F8F",
    buttonTextSelectedColor: "#FFFFFF",
    menuHorizontalMargins: 12,
    menuVerticalMargins: 12,
    // Lightbox.
    useLightbox: "yes",
    rlUseDeepLinking: "yes",
    rlItemBackgroundColor: "#212121",
    rlDefaultItemWidth: 1527,
    rlDefaultItemHeight: 859,
    rlItemOffsetHeight: 37,
    rlItemOffsetHeightButtonsTop: 47,
    rlItemBorderSize: 0,
    rlItemBorderColor: "#FFFFFF",
    rlMaxZoom: 1.2,
    rlPreloaderBkColor: "#2e2e2e",
    rlPreloaderFillColor: "#FFFFFF",
    rlButtonsAlignment: "in",
    rlButtonsHideDelay: 5,
    rlMediaLazyLoading: "yes",
    rlUseDrag: "yes",
    rlUseAsModal: "no",
    rlShowSlideShowButton: "yes",
    rlShowSlideShowAnimation: "yes",
    rlSlideShowAutoPlay: "no",
    rlSlideShowAutoStop: "no",
    rlSlideShowDelay: 6,
    rlSlideShowBkColor: "#2e2e2e",
    rlSlideShowFillColor: "#FFFFFF",
    rlUseKeyboard: "yes",
    rlUseDoubleClick: "yes",
    rlShowCloseButton: "yes",
    rlShowFullscreenButton: "yes",
    rlShowZoomButton: "yes",
    rlShowCounter: "yes",
    rlShowNextAndPrevBtns: "yes",
    rlSpaceBetweenBtns: 8,
    rlButtonsOffsetIn: 10,
    rlButtonsOffsetOut: 10,
    rlBackgroundColor: "rgba(0,0,0,.99)",
    rlShareButtons: [],
    rlShareText: "",
    rlSharedURL: "deeplink",
    rlShareMainBackgroundColor: "rgba(0,0,0,.4)",
    rlShareBackgroundColor: "#FFFFFF",
    rlShowThumbnails: "yes",
    rlShowThumbnailsIcon: "yes",
    rlThumbnailsHeight: 80,
    rlThumbnailsOverlayColor: "rgba(0,0,0,.4)",
    rlThumbnailsBorderSize: 2,
    rlThumbnailsBorderColor: "#FFFFFF",
    rlSpaceBetweenThumbnailsAndItem: 10,
    rlThumbnailsOffsetBottom: 10,
    rlSpaceBetweenThumbnails: 5,
    rlShowCaption: "yes",
    rlCaptionPosition: "bottomout",
    rlShowCaptionOnSmallScreens: "no",
    rlCaptionAnimationType: "motion",
    rlUseVideo: "yes",
    rlFillEntireScreenWithPoster: "yes",
    rlVolume: 1,
    rlVideoAutoPlay: "no",
    rlNextVideoAutoPlay: "no",
    rlVideoAutoPlayText: "Click to unmute",
    rlShowLogo: "no",
    rlLogoPath: "",
    rlLogoLink: "",
    rlShowDefaultControllerForVimeo: "yes",
    rlShowScrubberWhenControllerIsHidden: "yes",
    rlShowRewindButton: "yes",
    rlShowVolumeButton: "yes",
    rlShowChromecastButton: "no",
    rlShowPlaybackRateButton: "no",
    rlShowQualityButton: "yes",
    rlShowFullScreenButton: "yes",
    rlShowScrubberToolTipLabel: "yes",
    rlShowTime: "yes",
    rlTimeColor: "#B9B9B9",
    rlYoutubeQualityButtonNormalColor: "#B9B9B9",
    rlYoutubeQualityButtonSelectedColor: "#FFFFFF",
    rlScrubbersToolTipLabelBackgroundColor: "#FFFFFF",
    rlScrubbersToolTipLabelFontColor: "#5a5a5a",
    rlAudioVisualizerLinesColor: "#D60E63",
    rlAudioVisualizerCircleColor: "#FFFFFF",
    rlThumbnailsPreviewWidth: 198,
    rlThumbnailsPreviewBackgroundColor: "#2e2e2e",
    rlThumbnailsPreviewBorderColor: "#414141",
    rlThumbnailsPreviewLabelBackgroundColor: "#414141",
    rlThumbnailsPreviewLabelFontColor: "#CCCCCC",
    rlSkipToVideoText: "",
    rlSkipToVideoButtonText: "",
  });
});

// *
// * Auto Fullscreen videos on play
// *
addEventListener("click", (event) => {
  if (event.target.className.includes("fwdr3dcov-icon-play")) {
    const video = document.querySelectorAll("video")[1];
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullScreen) {
      video.msRequestFullScreen();
    }
  }
});
