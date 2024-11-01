if (window.location.pathname.includes("/week05/review.html")) {
  document.getElementById("reviewCount").textContent =
    localStorage.getItem("reviewCount") || 0;
}
