
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/pruebassr/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3865, hash: 'b6bf2b6dfed550713456d1c180590cc7eaf84f6ea0769089460fc6decb2fb687', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '5e7f2314bfca7fd4d0b6b71544a86f063c3c1b99bbbbf2b758cf0ff047b1e562', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-URMI2ISM.css': {size: 38478, hash: '71PujJCnK6k', text: () => import('./assets-chunks/styles-URMI2ISM_css.mjs').then(m => m.default)}
  },
};
