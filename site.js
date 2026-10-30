const siteRoot = document.body.dataset.root || "./";

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="${siteRoot}" aria-label="Netstock Solution home">
            <img src="${siteRoot}logo.png" alt="Netstock Solutions">
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
            <span class="menu-toggle__icon" aria-hidden="true"></span>
            <span class="visually-hidden">Open navigation menu</span>
          </button>
          <nav class="primary-navigation" id="primary-navigation" aria-label="Site Navigation: Main">
            <a class="primary-navigation__link" href="${siteRoot}">Home</a>
            <div class="navigation-group">
              <a class="primary-navigation__link" href="${siteRoot}about-us/">About Us</a>
              <details class="navigation-dropdown">
                <summary aria-label="About Us submenu"><span aria-hidden="true">⌄</span></summary>
                <div class="navigation-dropdown__menu">
                  <a href="${siteRoot}about-us/#vision">Vision</a>
                  <a href="${siteRoot}about-us/#Mission">Mission</a>
                  <a href="${siteRoot}services/#key_service">Expertise</a>
                  <a href="${siteRoot}about-us/#corevalue">Core Value</a>
                  <a href="${siteRoot}#whychoose">Why Choose Us?</a>
                </div>
              </details>
            </div>
            <div class="navigation-group">
              <a class="primary-navigation__link" href="${siteRoot}services/">Services</a>
              <details class="navigation-dropdown">
                <summary aria-label="Services submenu"><span aria-hidden="true">⌄</span></summary>
                <div class="navigation-dropdown__menu">
                  <a href="${siteRoot}services/#audit_services">Stock Audits</a>
                  <a href="${siteRoot}services/#benefit">Benefit of Stock Audits</a>
                </div>
              </details>
            </div>
            <a class="primary-navigation__link" href="${siteRoot}contact-us/">Contact Us</a>
            <a class="button button--nav" href="${siteRoot}contact-us/">GET A QUOTE</a>
          </nav>
        </div>
      </header>`;

    const toggle = this.querySelector(".menu-toggle");
    const navigation = this.querySelector(".primary-navigation");
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      toggle.querySelector(".visually-hidden").textContent = isExpanded
        ? "Open navigation menu"
        : "Close navigation menu";
      navigation.classList.toggle("primary-navigation--open", !isExpanded);
    });

    this.querySelectorAll(".navigation-dropdown summary").forEach((summary) => {
      summary.addEventListener("keydown", (event) => {
        if (event.key === "Escape") summary.parentElement.open = false;
      });
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a") && window.matchMedia("(max-width: 960px)").matches) {
        navigation.classList.remove("primary-navigation--open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".visually-hidden").textContent = "Open navigation menu";
      }
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <a href="${siteRoot}" aria-label="Netstock Solution home">
              <img src="${siteRoot}logo.png" alt="Netstock Solutions">
            </a>
            <div class="social-links" aria-label="Social media">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="YouTube">YouTube</a>
              <a href="#" aria-label="Linkedin">Linkedin</a>
            </div>
          </div>
          <div>
            <h2>Quick Link</h2>
            <nav aria-label="Quick Link">
              <a href="${siteRoot}">Home</a>
              <a href="${siteRoot}about-us/">About Us</a>
              <a href="${siteRoot}services/">Our Services</a>
              <a href="${siteRoot}contact-us/">Contact Us</a>
              <a href="${siteRoot}contact-us/">Get a Quote</a>
            </nav>
          </div>
          <div>
            <h2>Our Capability</h2>
            <nav aria-label="Our Capability">
              <a href="${siteRoot}services/">Services</a>
              <a href="${siteRoot}services/#audit_services">Audit Process</a>
              <a href="${siteRoot}#whychoose">Why Choose Us</a>
            </nav>
          </div>
          <div>
            <h2>Contact Info</h2>
            <address>No. 27, 4th Cross, 6th main road, dwaraka nagar, hosekerahalli, Banashankari 3rd Stage, Banashankari, Bengaluru – 560085</address>
            <a href="tel:+919066615041">+919066615041</a>
            <a href="mailto:info@netstocksolutions.com">info@netstocksolutions.com</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">Copyright © 2026 Netstock Solution</div>
        </div>
      </footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    status.textContent =
      "Your message has not been sent because this frontend is not connected to a submission service. Please call +919066615041 or email info@netstocksolutions.com.";
  });
}
