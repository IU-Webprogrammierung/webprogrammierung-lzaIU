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
        this.burgerFunction()
    }

    render() {
        this.shadowRoot.innerHTML =
            `
                <link rel="stylesheet" href="/css/style.css">
                <link rel="stylesheet" href="/css/header.css">

                <header class="navBarContainer">

                    <div class="logo">
                        <img id="logoNavBar" src="/images/landingPage/favicon.png" alt="favicon für Webseite"/>
                    </div>

                    <div class="burger" id="burger" aria-label="Navigationsmenü öffnen">
                        <svg viewBox="0 0 640 640" width="32" height="32">
                            <path
                                    d="M112 448C103.2 448 96 455.2 96 464C96 508.2 131.8 544 176 544L464 544C508.2 544 544 508.2 544 464C544 455.2 536.8 448 528 448L112 448z
               M96 266C96 278.2 105.9 288 118 288L522 288C534.2 288 544 278.1 544 266C544 248.8 541.4 231.6 533.2 216.5C511 175.7 450.9 96 320 96C189.1 96 129 175.6 106.8 216.5C98.6 231.6 96 248.8 96 266z
               M64 368C64 385.7 78.3 400 96 400L544 400C561.7 400 576 385.7 576 368C576 350.3 561.7 336 544 336L96 336C78.3 336 64 350.3 64 368z
               M320 136C333.3 136 344 146.7 344 160C344 173.3 333.3 184 320 184C306.7 184 296 173.3 296 160C296 146.7 306.7 136 320 136z
               M184 192C184 178.7 194.7 168 208 168C221.3 168 232 178.7 232 192C232 205.3 221.3 216 208 216C194.7 216 184 205.3 184 192z
               M432 168C445.3 168 456 178.7 456 192C456 205.3 445.3 216 432 216C418.7 216 408 205.3 408 192C408 178.7 418.7 168 432 168z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    
                    <div class="navbar" id="navbar" aria-label="Hauptnavigation">
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

    burgerFunction() {
        const burger = this.shadowRoot.getElementById('burger');
        const navbar = this.shadowRoot.getElementById('navbar');

        burger.addEventListener('click', () => {
            navbar.classList.toggle('responsive');
        })
    }


}
customElements.define('web-component-header', WebComponentHeader);
