const images = [
    { imgId: 'myImg', modalId: 'myModal1', modalImgId: 'img01', captionId: 'caption01' },
    { imgId: 'myImg2', modalId: 'myModal2', modalImgId: 'img02', captionId: 'caption02' },
    { imgId: 'myImg3', modalId: 'myModal3', modalImgId: 'img03', captionId: 'caption03' },
    { imgId: 'myImg4', modalId: 'myModal4', modalImgId: 'img04', captionId: 'caption04' }
  ];
  
  images.forEach(({ imgId, modalId, modalImgId, captionId }) => {
    const img = document.getElementById(imgId);
    const modal = document.getElementById(modalId);
    const modalImg = document.getElementById(modalImgId);
    const captionText = document.getElementById(captionId);
  
    img.onclick = function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  
    // Close modal on click of span
    const span = modal.querySelector('.close');
    span.onclick = function () {
      modal.style.display = 'none';
    };
  });
  


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
