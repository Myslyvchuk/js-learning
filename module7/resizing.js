'use strict'
function resizing() {
  let height = window.innerHeight;
  let width = window.innerWidth;
  document.getElementById("resizingEvent").innerText = 'Width :' + width + ' Height:' + height;
}
window.addEventListener('load', resizing, true);
window.addEventListener('resize', resizing, true);
