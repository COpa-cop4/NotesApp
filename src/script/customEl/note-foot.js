class NoteFoot extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
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
                padding: 1rem;
                background-color: #6B240C;
                border-top-left-radius: 50px;
                border-top-right-radius: 50px;
            }

            p {
                font-family: 'Lato', serif;
                color: #DF9755;
                font-size: 0.9rem;
                font-weight: 400;
                text-align: center;
                word-spacing: 2.5px;
            }

            span {
                font-style: italic;
                font-weight: 600;
            }
        `;
    }

    render() {
        this.updateStyle();

        const template = `
            ${this._style.outerHTML}

            <div>
                <p>My Note Apps - <span>Ray Immanuel D</span></p>
            </div>
        `;
        this._shadowRoot.innerHTML = template;
    }
}

customElements.define('note-foot', NoteFoot);
