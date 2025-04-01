document.addEventListener('DOMContentLoaded', function () {
  const miniImages = document.querySelectorAll('.galeria .mini');
  const mainImage = document.getElementById('mainImage');

  miniImages.forEach(function (miniImage) {
      miniImage.addEventListener('click', function () {
          mainImage.src = miniImage.src;
      });
  });

  
});
