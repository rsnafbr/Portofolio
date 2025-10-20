  // Fungsi Background & Random Warna
  function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function changeBackgroundColor() {
    document.body.style.background = `linear-gradient(135deg, ${generateRandomColor()}, ${generateRandomColor()})`;
  }

  // Popup Sambutan
  function showWelcomeMessage() {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close");
    const okButton = document.getElementById("okButton");

    modal.style.display = "block"; // tampilkan popup

    // Klik tombol close (X)
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };

    // Klik tombol OK
    okButton.onclick = function() {
      modal.style.display = "none";
    };

    // Klik di luar modal untuk menutup
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  // Proyek Dummy (agar tidak error)
  function displayProjects() {
    console.log("Menampilkan proyek...");
  }

  function displayExperience() {
    console.log("Menampilkan pengalaman...");
  }

  // Saat Halaman Dimuat
  window.onload = function() {
    changeBackgroundColor();
    showWelcomeMessage();
    displayProjects();
    displayExperience();
  };
