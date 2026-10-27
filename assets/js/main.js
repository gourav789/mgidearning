/* Avsar Hub — minimal, dependency-free JS
   - Mobile nav toggle
   - Footer year
   - Smooth active handling is CSS-driven
   No tracking, no third-party scripts. */
(function () {
  "use strict";

  // ---- Mobile navigation toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu after clicking a link (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Footer year ----
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---- Meta Pixel: fire "Purchase" when a Buy Now button is clicked ----
  // NOTE: this fires on click (purchase INTENT), because a static site has no
  // backend to confirm the payment actually succeeded on Razorpay. It lets the
  // Facebook pixel register a Purchase event for ad optimisation. For verified
  // purchases you would need Razorpay webhooks + a server (not available here).
  var buyButtons = document.querySelectorAll("[data-buy]");
  buyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (typeof fbq === "function") {
        fbq("track", "Purchase", { value: 499, currency: "INR" });
      }
    });
  });
})();
