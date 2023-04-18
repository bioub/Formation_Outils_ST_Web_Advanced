// import { about } from "./about.js";
// import { home } from "./home.js";
// import { notFound } from "./not-found.js";
// import { productDetails } from "./product-details.js";
// import { products } from "./products.js";
// import { search } from "./search.js";

const routes = [
  {
    hash: '#/',
    loadPage: () => import('./home.js').then(({ home }) => home),
    // render: home,
  },
  {
    hash: '#/about',
    loadPage: () => import('./about.js').then(({ about }) => about),
    // render: about,
  },
  {
    hash: '#/search',
    loadPage: () => import('./search.js').then(({ search }) => search),
    // render: search,
  },
  {
    hash: '#/products',
    loadPage: () => import('./products.js').then(({ products }) => products),
    // render: products,
  },
  {
    hash: '#/product-details',
    loadPage: () =>
      import('./product-details.js').then(
        ({ productDetails }) => productDetails
      ),
    // render: productDetails,
  },
];

function matchRoute() {
  const mainEl = document.querySelector('body > main');

  const match = routes.find((route) => route.hash === location.hash);

  if (!match) {
    import('./not-found.js').then(({ notFound }) => {
      notFound(mainEl);
    });
    return;
  }

  match.loadPage().then((render) => {
    render(mainEl);
  });

  const links = document.querySelectorAll('header a');

  for (const link of links) {
    link.classList.remove('active');

    if (link.href.endsWith(location.hash)) {
      link.classList.add('active');
    }
  }
}

matchRoute();
window.addEventListener('hashchange', matchRoute);
