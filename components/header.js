class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <section id="navigation-bar">
          <div class="container-fluid" id="container-position">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light nav-opacity">
              <a class="navbar-brand" id="website-title" href="https://www.instagram.com/proteus.iisertvm/?hl=en" target="_blank"><img class="logo" src="../../../images/proteus-logo.png" alt="logo">Proteus</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item nav-icon">
                    <a class="nav-link" href="../../../index.html">
                      <strong>Home</strong>
                    </a>
                  </li>
                  <li class="nav-item nav-icon">
                    <a class="nav-link" href="../../../blog-site/blog.html">
                      <strong>Series</strong>
                    </a>
                  </li>
                  <li class="nav-item nav-icon">
                    <a class="nav-link" href="../../../contact/contact.html">
                      <strong>Contact Us</strong>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </section>`;
    }
  }



customElements.define('header-component', Header);
