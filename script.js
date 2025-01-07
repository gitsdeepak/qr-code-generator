
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.trim().length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

// Get the toggle icon and icon element
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');

// Check if dark mode is already stored in localStorage (so user preference persists)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    modeIcon.textContent = '🌙';  // Set to moon icon for dark mode
} else {
    document.body.classList.remove('dark-mode');
    modeIcon.textContent = '🌞';  // Set to sun icon for light mode
}

// Toggle background color and icon when clicked
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon and save preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.textContent = '🌙';  // Moon icon for dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        modeIcon.textContent = '🌞';  // Sun icon for light mode
        localStorage.setItem('theme', 'light');
    }
});

 