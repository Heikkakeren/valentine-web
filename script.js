function showMessage(response) {
  if (response === "No") {
      const noButton = document.getElementById("no-button");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;

      // Ubah gambar menjadi "gun.gif"
      document.getElementById("mainImage").src = "images/gun.gif";

      // Pindahkan tombol "No" ke posisi acak
      noButton.style.position = "absolute";
      noButton.style.left = Math.floor(Math.random() * maxWidth) + "px";
      noButton.style.top = Math.floor(Math.random() * maxHeight) + "px";
  }

  if (response === "Yes") {
      // Hentikan lagu di slide 1 saat masuk ke slide 2
      document.getElementById("slide1-audio").pause();

      // Tampilkan slide "Bucin"
      document.querySelector(".container").classList.add("hidden");
      document.getElementById("bucinSlide").classList.remove("hidden");

      // Putar lagu Best Part otomatis
      document.getElementById("bucin-audio").play();
  }
}

function backToMain() {
  document.querySelector(".container").classList.remove("hidden");
  document.getElementById("bucinSlide").classList.add("hidden");

  // Hentikan lagu di slide 2 saat kembali ke slide 1
  document.getElementById("bucin-audio").pause();
  document.getElementById("bucin-audio").currentTime = 0;

  // Putar kembali lagu slide 1
  document.getElementById("slide1-audio").play();
}
