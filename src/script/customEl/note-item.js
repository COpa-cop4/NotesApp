class NoteItem extends HTMLElement {
    constructor() {
        super();
        
        this._note = {
            id: 0,
            title: "NEED_TITLE",
            body: "NEED_DESCRIPTION",
        };

        this._style = document.createElement('style');
    }
  
    setNote(value) {
        this._note["id"] = value.id;
        this._note["title"] = value.title;
        this._note["body"] = value.body;
    
        this.render();
    }
  
    connectedCallback() {
        this.render();
    }
  
    updateStyle() {
        this._style.textContent = `
            note-item {
                display: block;
                padding: 0.8rem;
                border-radius: 4px;
                background-color:rgba(250, 172, 141, 0.15);
                border: 2px solid #000;
                box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px #000;
                transition: 0.2s all ease-in-out;
            }

            note-item:hover {
                box-shadow: none;
            }

            .note__title {
                margin-block-start: 0;
                margin-block-end: 1rem;
                font-size: 1.3rem;
                font-weight: bold;
                font-family: "Poppins", serif;
            }

            p {
                margin-block-start: 0;
            }

            @media only screen and (max-width: 772px) {
                .note__title {
                    font-size: 1.2rem;
                }

                p {
                    font-size: 14px;
                }
            }
        `;
    }
  
    render() {
        this.updateStyle();

        this.setAttribute("data-id", this._note.id);

        this.innerHTML = `
            ${this._style.outerHTML}

            <h5 class="note__title">${this._note.title}</h5>
            <div class="note__body">
            <p>${this._note.body}</p>
            </div>
            <div class="item__button">
        `;
    }
}
  
customElements.define("note-item", NoteItem);