document.addEventListener("DOMContentLoaded", function () {
  // Get the elements from the HTML
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopup = document.getElementById("closePopup");
  const emailInput = document.getElementById("emailInput");

  // 1. Show the popup automatically after 2.5 seconds
  setTimeout(function () {
    popupOverlay.style.display = "flex"; // Use flex to center it
  }, 2500);

  // 2. Close the popup when clicking the "X"
  closePopup.onclick = function () {
    popupOverlay.style.display = "none";
  };

  // 3. Close the popup if user clicks outside the box (on the dark background)
  window.onclick = function (event) {
    if (event.target == popupOverlay) {
      popupOverlay.style.display = "none";
    }
  };
});

// 4. Function to handle the button click
function submitForm() {
  // Get the value the user typed
  const email = document.getElementById("emailInput").value;
  const popupOverlay = document.getElementById("popupOverlay");

  // Simple validation
  if (email === "") {
    alert("Du måste skriva in en email, kamrat!");
  } else if (!email.includes("@")) {
    alert("Ogiltig email! Försök igen.");
  } else {
    // Success message
    alert("Välkommen till partiet! Vi har registrerat: " + email);

    // Clear the input and close the popup
    document.getElementById("emailInput").value = "";
    popupOverlay.style.display = "none";
  }
}
