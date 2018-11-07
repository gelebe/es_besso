
var slideIndexAlmendra = 1;
showSlidesAlmendra(slideIndexAlmendra);

function plusSlidesAlmendra(n) {
    showSlidesAlmendra(slideIndexAlmendra += n);
}

function currentSlideAlmendra(n) {
  showSlidesAlmendra(slideIndexAlmendra = n);
}

function showSlidesAlmendra(n) {
  var i;
  var slides = document.querySelectorAll('.mySlidesAlmendra');
  if (n > slides.length) {slideIndexAlmendra = 1;}    
  if (n < 1) {slideIndexAlmendra = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexAlmendra-1].style.display = "block";  
}

function openImgAlmendra(imgs) {

    // Get the modal
    var modal = document.getElementById('myModalAlmendra');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img03");
    var captionText = document.getElementById("captionAlmendra");
    imgs.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeAlmendra")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    };
}