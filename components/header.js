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
        // language=HTML
        this.shadowRoot.innerHTML =
            `
                <link rel="stylesheet" href="/css/style.css">
                <link rel="stylesheet" href="/css/header.css">

                <header class="navBarContainer">

                    <div class="logo">
                        <img id="logoNavBar" src="/images/landingPage/favicon.png" alt="favicon für Webseite"/>
                    </div>

                    <div class="navbar" aria-label="Hauptnavigation">
                        <ul id="navSites">
                            <li><a href="/index.html" >Home</a></li>
                            <li><a href="/html/aboutMe.html" >Über mich</a></li>
                            <li><a href="/html/travel.html" >Reisen</a></li>
                            <li><a href="/html/books.html" >Bücher</a></li>
                            <li><a href="/html/work.html" >Arbeit</a></li>
                        </ul>
                    </div>
                </header>
            `
    }

    activePage() {
        const currentPage = window.location.pathname.replace('.html', '');
        const links = this.shadowRoot.querySelectorAll('.navbar a');

        links.forEach(link => {
                const linkPath = link.getAttribute('href').replace('.html', '');

                if(currentPage === linkPath ||
                    (currentPage === '/' && linkPath === '/index') ||
                        currentPage.endsWith(linkPath) && linkPath !== '/') {

                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            console.log("Current:", currentPage, "LinkPath:", linkPath);
            }
        )
    }


}
customElements.define('web-component-header', WebComponentHeader);
