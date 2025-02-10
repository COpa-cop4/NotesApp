class NoteNav extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
        this._imgUrl = this.getAttribute('img');
        this._altImg = this.getAttribute('imgAlt');
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
            :host {
                display: grid;
                }
                
            div {
                display: grid;
                background-color: #DF9755;
                align-items: center;
                padding: 0.5rem 1rem;
                border-bottom-left-radius: 40px;
                border-bottom-right-radius: 40px;
            }

            img {
                height: 5rem;
                margin: 0;
                padding-left: 2rem;
            }
  
            .logo-text {
                margin: 0;
                padding-left: 1rem;
                font-size: 1.5rem;
                font-family: "Dekko", cursive;
                color: #6B240C;
                font-weight: 900;
            }

            @media only screen and (max-width: 678px) {
                div {
                    padding-top: 0;
                } 
            
                img {
                    padding-left: 1.5rem;
                }

                .logo-text {
                    font-size: 1.2rem;
                }
            }
        `
    }

    render() {
        this.updateStyle();

        const template = `
            ${this._style.outerHTML}

            <div>
                <img src='${this._imgUrl}' alt='${this._imgAlt}'/>
                <h1 class='logo-text'>My Notes</h1>
            </div>
        `;
        this._shadowRoot.innerHTML = template;
    }
}

customElements.define('note-nav', NoteNav);