class webComponentHeader extends HTMLElement {
    static get observedAttributes() {
        return [];
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    render() {
        this.shadowRoot.innerHTML =
            `
                <link rel="stylesheet" href="css/header.css">
                
                <header class="navBarContainer">
                    <div class="logo">
                        <img id="logoNavBar" src="/images/landingPage/favicon.png" alt="favicon für Webseite"/>
                    </div>
                    <div class="navBar" aria-label="Hauptnavigation">
                        <ul>
                            <li><a href="/index.html">Home</a></li>
                            <li><a href="/html/aboutMe.html">Über mich</a></li>
                            <li><a href="/html/travel.html">Reisen</a></li>
                            <li><a href="/html/books.html">Bücher</a></li>
                            <li><a href="/html/work.html">Arbeit</a></li>
                        </ul>
                    </div>
                </header>
            `
    }
}
customElements.define('web-component-header', webComponentHeader);
