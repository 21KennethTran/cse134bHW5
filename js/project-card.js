import { getMyComponentCSS } from './project-card-css.js';

class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('article');
        wrapper.classList.add('project-card');

        this.titleEl = document.createElement('h3');
        this.descEl = document.createElement('p');
        this.linkEl = document.createElement('a');

        this.titleEl.classList.add('project-title');
        this.descEl.classList.add('project-description');
        this.linkEl.classList.add('read-more');

        wrapper.appendChild(this.titleEl);
        wrapper.appendChild(this.descEl);
        wrapper.appendChild(this.linkEl);

        const style = document.createElement('style');
        style.textContent = getMyComponentCSS();

        this.shadowRoot.append(style, wrapper);

    }

    set data({ title, description, linkUrl, linkText }) {
        this.titleEl.textContent = title;
        this.descEl.textContent = description;
        this.linkEl.href = linkUrl;
        this.linkEl.textContent = linkText;

    }
}

customElements.define('project-card', ProjectCard);