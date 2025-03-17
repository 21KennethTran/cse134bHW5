import { getMyComponentCSS } from './experience-card-css.js';

class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('article');
        wrapper.classList.add('experience-card');

        this.pictureEl = document.createElement('picture');
        this.sourceSmallEl = document.createElement('source');
        this.imgEl = document.createElement('img');

        this.titleEl = document.createElement('h3');
        this.descEl = document.createElement('p');
        this.linkEl = document.createElement('a');

        this.titleEl.classList.add('job-title');
        this.descEl.classList.add('job-description');
        this.linkEl.classList.add('read-more');

        this.pictureEl.appendChild(this.sourceSmallEl);
        this.pictureEl.appendChild(this.imgEl);
        wrapper.appendChild(this.pictureEl);
        wrapper.appendChild(this.titleEl);
        wrapper.appendChild(this.descEl);
        wrapper.appendChild(this.linkEl);

        const style = document.createElement('style');
        style.textContent = getMyComponentCSS();

        this.shadowRoot.append(style, wrapper);

    }

    set data({ imageUrl, imageUrlSmall, imageAlt, title, description, linkUrl, linkText }) {
        if (imageUrl && imageAlt) {
            this.imgEl.src = imageUrl;
            this.imgEl.alt = imageAlt;
            if (imageUrlSmall) {
                this.sourceSmallEl.srcset = imageUrlSmall;
                this.sourceSmallEl.media = '(max-width: 600px)';
            }
        } else {
            this.pictureEl.remove();
        }

        this.titleEl.textContent = title;
        this.descEl.textContent = description;
        this.linkEl.href = linkUrl;
        this.linkEl.textContent = linkText;

    }
}

customElements.define('experience-card', ExperienceCard);