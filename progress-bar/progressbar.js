class ProgressBar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this._complete = 0;
  }

  static get observedAttributes() {
    return ["complete"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    var innerBar = this.shadow.querySelector(".progress-bar-inner");

    switch (name) {
      case "complete":
        this._complete = parseInt(newValue, 10) || 0;

        // Todo Search this issue with style property.
        innerBar.style.width = this.complete + "%";
        innerBar.innerHTML = this.complete + "%";
    }
  }

  connectedCallback() {
    var template = `
      <style>
        .progress-bar {
          width: 50%;
          height: 30px;
          background-color: #EDF2F4;
          border-radius: 5px;
          color: #FFF;
        }
        .progress-bar-inner {
          height: 100%;
          line-height: 30px;
          background: #2B2D42;
          text-align: center;
          border-radius: 5px;
          transition: width 0.25s;
        }
      </style>
      <div class="progress-bar">
        <div class="progress-bar-inner">${this.complete}</div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }

  get complete() {
    return this._complete;
  }

  set complete(val) {
    this.setAttribute("complete", val);
  }
}

window.customElements.define("progress-bar", ProgressBar);
