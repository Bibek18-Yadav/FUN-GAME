document.addEventListener("DOMContentLoaded", function () {

  // --- Elements ---
  const noBtn = document.getElementById("noBtn");
  const winSound = document.getElementById("winSound");

  // --- Safety check ---
  if (!noBtn) {
    console.log("noBtn not found. Check id in index.html");
    return;
  }

  function unlockAudio() {
  if (winSound) { winSound.play().then(() => winSound.pause()).catch(()=>{}); }
  document.body.removeEventListener("click", unlockAudio);
    }
  document.body.addEventListener("click", unlockAudio, { once: true });

  // --- Function to move NO button ---
  function moveButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    

    // Optional: Change NO button text randomly
    const texts = ["No 😤", "Never!", "Stop!", "Think Again!", "Are you sure?"];
    noBtn.innerText = texts[Math.floor(Math.random() * texts.length)];
  }

  // --- Events for NO button ---
  noBtn.addEventListener("mouseover", moveButton);  // Laptop hover
  noBtn.addEventListener("touchstart", moveButton); // Mobile touch

  // --- YES button function ---
  window.yesClick = function () {
    if (winSound) {
      winSound.currentTime = 0;
      winSound.volume = 1;
      winSound.play().catch(() => {});

      // Redirect only after audio finishes
      winSound.onended = function () {
        window.location.href = "success.html";
      };
    } else {
      // Fallback if audio missing
      window.location.href = "success.html";
    }
  };

});
