
var slideIndexMermelada = 1;
showSlidesMermelada(slideIndexMermelada);

function plusSlidesMermelada(n) {
  showSlidesMermelada(slideIndexMermelada += n);
}

function currentSlideMermelada(n) {
  showSlidesMermelada(slideIndexMermelada = n);
}

function showSlidesMermelada(n) {
  var i;
  var slides = document.querySelectorAll('.mySlidesMermelada');
  if (n > slides.length) {slideIndexMermelada = 1;}    
  if (n < 1) {slideIndexMermelada = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexMermelada-1].style.display = "block";  
}

function openImgMermelada(imgs) {

    // Get the modal
    var modal = document.getElementById('myModalMermelada');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img02");
    var captionText = document.getElementById("captionMermelada");
    imgs.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeMermelada")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    };
}