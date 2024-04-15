export class GyButton extends HTMLElement {
  private shadow: ShadowRoot;
  private template!: HTMLTemplateElement;
 
  constructor() {
     super();
     this.shadow = this.attachShadow({ mode: 'open' });
     this.template = document.createElement('template');
  }

  static get observedAttributes(): string[] {
    return ['label', 'type'];
  }

  get type(): string {
    return this.getAttribute('type') ?? 'default';
  }

  get label(): string {
    return this.getAttribute('label') ?? 'Click me'
  }
 
  connectedCallback(): void {     
     this.render();
  }
 
  render(): void {
     this.template.innerHTML = this.getTemplate();
     this.shadow.appendChild(this.template.content.cloneNode(true));
  }
 
  getTemplate(): string {
     return `
      <style>
        .btn {
          position: relative;
          margin: 30px auto;
          overflow: hidden;
          border-width: 0;
          outline: none;
          border-radius: 5px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
          background-color: ${this.getType(this.type).color};
          color: #ecf0f1;
          transition: background-color .3s;
        }

        .btn:hover, .btn:focus {
          background-color: ${this.getType(this.type).hover};
        }

        .btn > * {
          position: relative;
        }

        .btn span {
          display: block;
          padding: 12px 20px;
          font-size: 1.1rem;          
        }

        .btn:before {
          content: "";
          
          position: absolute;
          top: 50%;
          left: 50%;
          
          display: block;
          width: 0;
          padding-top: 0;
            
          border-radius: 100%;
          
          background-color: rgba(236, 240, 241, .3);
          
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }

        .btn:active:before {
          width: 120%;
          padding-top: 120%;          
          transition: width .2s ease-out, padding-top .2s ease-out;
        }

        /* Styles, not important */
        *, *:before, *:after {
          box-sizing: border-box;
        } 
      </style>
      <button id="gy-button" class="btn">
        <span>${ this.label }</span>
      </button>
    `;
  }

  getType(type: string): { color: string, hover: string } {
    switch (type) {      
      case 'success':
        return { color: '#2ecc71', hover: '#27ae60'};
      default:
        return { color: '#2980b9', hover: '#a0d6e8'}
    }
  }
}
 customElements.define('gy-button', GyButton);