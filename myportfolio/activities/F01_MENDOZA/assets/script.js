
    function openAlbum(albumId) {
      const albumPopup = document.getElementById(albumId);
      albumPopup.style.display = "block";
    }

    function closeAlbum(albumId) {
      const albumPopup = document.getElementById(albumId);
      albumPopup.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target.classList.contains('album-popup')) {
        event.target.style.display = "none";
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
 