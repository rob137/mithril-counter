const m = require('mithril');
const root = document.body;

const Model = {
  count: 0,
}

const Main = {
  view: () => {
    return m('main', [
      m('button', {onclick: () => Model.count++}, 'Count more'),
      m('p', Model.count),
    ]);
  },
}

m.mount(root, Main);
