import G6Flow from './components/G6Flow';

const install = (Vue) => {
  Vue.component(G6Flow.name, G6Flow);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default G6Flow;
