import format from '../../node_modules/date-fns/esm/format/index.js';

/** @param {HTMLElement} mainEl */
export function home(mainEl) {
  setInterval(() => {
    const template = `
<a href="https://www.st.com/" class="btn-link">ST.com</a>
<a href="search.html" class="btn-link">Search Products</a>
<div>
  Il est ${format(new Date(), 'HH:mm:ss')}
</div>
`;

    mainEl.innerHTML = template;
  }, 1000);
}
