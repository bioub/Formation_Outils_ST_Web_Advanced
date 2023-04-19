import config from './config.json';

/** @param {HTMLElement} mainEl */
export function about(mainEl) {
  const template = `
<p>ST Web Basics Project v${config.appVersion}</p>
  `;

  mainEl.innerHTML = template;
}
