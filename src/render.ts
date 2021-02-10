import { render as _render } from 'lit-html';

export function render(content: string, root: HTMLElement) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/xml');

    if (doc.firstElementChild) {
        root.appendChild(doc.firstElementChild);
    }

}
