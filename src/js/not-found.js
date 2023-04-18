/** @param {HTMLElement} mainEl */
export function notFound(mainEl) {
  const template = `
<p>Page not found</p>
  `;

  mainEl.innerHTML = template;
}
