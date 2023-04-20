import config from './config.json5';

/** @param {HTMLElement} mainEl */
export function about(mainEl) {
  const template = `
<table>
<tr>
<td>
<p>ST Web Basics Project v${config.appVersion}</p>
</td>
</tr>
</table>
  `;

  mainEl.innerHTML = template;
}
