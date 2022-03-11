import NavTab from './src/main.vue';

NavTab.install = function (Vue) {
  Vue.component(NavTab.name, NavTab);
};

export default NavTab;
