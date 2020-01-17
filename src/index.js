const m = require('mithril');
const root = document.body;

const Main = {
  view: () => {
    return m("main", [
      m('p', Main.count),
      m('button', {onclick: () => Main.count++}, 'test'),
    ]);
  },
  count: 1,
}

m.mount(root, Main);
