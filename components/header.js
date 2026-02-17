class WebComponentHeader extends HTMLElement {
    static get observedAttributes() {
        return [];
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
        this.activePage();
    }

    render() {
        this.shadowRoot.innerHTML =
            `
                <link rel="stylesheet" href="/css/style.css">
                <link rel="stylesheet" href="css/header.css">
                
                <header class="navBarContainer">
                    <div class="logo">
                        <img id="logoNavBar" src="/images/landingPage/favicon.png" alt="favicon für Webseite"/>
                    </div>
                    <nav class="navBar" aria-label="Hauptnavigation">
                        <ul>
                            <li><a href="/index.html">Home</a></li>
                            <li><a href="/html/aboutMe.html">Über mich</a></li>
                            <li><a href="/html/travel.html">Reisen</a></li>
                            <li><a href="/html/books.html">Bücher</a></li>
                            <li><a href="/html/work.html">Arbeit</a></li>
                        </ul>
                    </nav>
                </header>
            `
    }

    activePage() {
        const currentPage = window.location.pathname;
        const links = this.shadowRoot.querySelectorAll('.navBar a');

        links.forEach(link => {
                const linkPath = link.getAttribute('href');

                if(currentPage === linkPath || (currentPage === '/' && linkPath === '/index.html')) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            }
        )
    }


}
customElements.define('web-component-header', WebComponentHeader);
