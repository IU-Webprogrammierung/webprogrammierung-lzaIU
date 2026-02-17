class WebComponentFooter extends HTMLElement {
    static get observedAttributes() {
        return [];
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =
            `
                <link rel="stylesheet" href="/css/style.css">
                <link rel="stylesheet" href="/css/footer.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                
                <footer class="footerContainer">
                    <div class="footerAuthor">
                        <p>Autor: Laura Zaugg</p>
                    </div>
                    <div class="footerSocialMedia">
                        <a class="socialMediaInsta" href="https://www.instagram.com/laura_zaugg_/" target="_blank" 
                        aria-label="Instagram Profil (öffnet in neuem Tab)">
                            <span class="fa fa-instagram" aria-hidden="true" role="img"></span>
                        </a>
                        <a class="socialMediaLinkedIn" href="https://www.linkedin.com/in/laura-zaugg-170655234/" 
                        target="_blank" aria-label="LinkedIn Profil (öffnet in neuem Tab)">
                            <span class="fa fa-linkedin" aria-hidden="true" role="img"></span>
                        </a>
                    </div>
                </footer>
            `
    }
}
customElements.define('web-component-footer', WebComponentFooter);
