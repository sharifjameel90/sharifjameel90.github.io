function removeloader() {
    var loder = document.getElementById('loder');
    loder.parentElement.removeChild(loder);
}

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 40,
  backSpeed: 10,
  loop: true,
});
