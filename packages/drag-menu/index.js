import DragMenu from './src/main.vue';

DragMenu.install = function (Vue) {
  Vue.component(DragMenu.name, DragMenu);
};

export default DragMenu;
