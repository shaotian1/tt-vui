/* Automatically generated by 'build/bin/build-entry.js' */
import DragMenu from 'src/packages/DragMenu/index.js';
import NavTab from 'src/packages/NavTab/index.js';

const components = [DragMenu, NavTab];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  DragMenu,
  NavTab,
};