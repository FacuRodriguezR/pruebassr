
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3835, hash: 'df14c2bf27e84e45f8527906965b114a6e5f164a4a0b5463e3137c3f367eb98a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'e643ef4cd0d50224aae56e754d72bc5224cdd7eb1a91dd82441a8a073593f194', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-URMI2ISM.css': {size: 38478, hash: '71PujJCnK6k', text: () => import('./assets-chunks/styles-URMI2ISM_css.mjs').then(m => m.default)}
  },
};
