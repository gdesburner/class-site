function toggle() {
  var box = document.getElementById("box");
  box.classList.toggle("active");
};

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
 */
$('.marquee').marquee({
  //duration in milliseconds of the marquee
  duration: 15000,
  //gap in pixels between the tickers
  gap: 50,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 750,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true,
  pauseOnHover: true,
  // Speed will override duration. Speed allows you to set a relatively constant marquee speed regardless of the width of the containing element. Speed is measured in pixels per second.
  speed:50,
  // The marquee will be visible from the start if set to true.
  startVisible:true
});
