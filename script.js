// ---------------------------
// 🌙 DARK MODE TOGGLE
// ---------------------------
const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Switch icon
    const icon = darkToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");

    // Save theme
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Remember last theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    const icon = darkToggle.querySelector("i");
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

// ---------------------------
// 📱 MOBILE MENU TOGGLE
// ---------------------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".primary-nav");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });
}

// ---------------------------
// ❤️ WISHLIST HEART BUTTONS
// ---------------------------
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector("i");
    const isActive = button.classList.toggle("active");

    // Change icon from regular (far) to solid (fas)
    if (isActive) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
    }
  });
});

// ---------------------------
// 🧱 MOBILE SIDEBAR TOGGLE (Optional)
// ---------------------------
// Add this only if you want a slide-in filter sidebar on mobile.
const sidebar = document.querySelector(".sidebar");
const filterToggle = document.getElementById("filterToggle");

if (filterToggle && sidebar) {
  filterToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      e.target !== filterToggle
    ) {
      sidebar.classList.remove("open");
    }
  });
}

// ---------------------------
// 🔍 SEARCH BAR ANIMATION
// ---------------------------
const searchInput = document.querySelector(".search-block input");

if (searchInput) {
  searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#007bff";
    searchInput.style.boxShadow = "0 0 5px rgba(0,123,255,0.3)";
  });
  searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "#ccc";
    searchInput.style.boxShadow = "none";
  });
}
