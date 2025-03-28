
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5379, hash: '55082e7159b5f110aec937e87f88636bca5b0cea850d5b7b518e6ab90c79b8d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2550, hash: '8078ad04bdb3cc3d0b1e1498b2c8caf17d6fdfb5cee125ddf1f185b9f6b877f9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VL646YLF.css': {size: 38887, hash: 'gQdZI2vL8CI', text: () => import('./assets-chunks/styles-VL646YLF_css.mjs').then(m => m.default)}
  },
};
