/* eslint-disable prettier/prettier */
const getMainDom = op =>
  op.pug ?
    `div(class="${op.name}") {{ op.name }}` :
    `  <div class="${op.name}">{{ op.name }}</div>`;

// vue组件基础模版
exports.vueTemplate = function (options) {
  return `<template${options.pug ? ' lang="pug"' : ''}>
${getMainDom(options)}
</template>

<script>
export default {
  name: '${options.name}',
};
</script>`;
};

// 组件根目录导出文件模版
exports.installTemplate = function(COMPONENT_NAME) {
  return `import ${COMPONENT_NAME} from './src/main.vue';

${COMPONENT_NAME}.install = function (Vue) {
  Vue.component(${COMPONENT_NAME}.name, ${COMPONENT_NAME});
};

export default ${COMPONENT_NAME};`;
};
