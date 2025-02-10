class NoteData extends HTMLElement {
    constructor() {
        super();

        this._noteData = [];

        this._style = document.createElement('style');
    }

    setNoteData(value) {
        this._noteData = value;

        this.render();
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
          note-data {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
            padding: 42px;
          }

          @media only screen and (max-width: 772px) {
            note-data {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            }
          }

          @media only screen and (max-width: 692px) {
            note-data {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
          }
        `;
    }

    render() {
        this.updateStyle();

        const noteItemElements = this._noteData.map((item) => {
            const note = document.createElement('note-item');
            note.setNote(item);

            return note;
        });

        this.innerHTML = '';
        this.append(this._style, ...noteItemElements);
    }
}

customElements.define('note-data', NoteData);