if (window.location.pathname.includes("review.html")) {
  document.getElementById("reviewCount").textContent =
    localStorage.getItem("reviewCount") || 0;
}
