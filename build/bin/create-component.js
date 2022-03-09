const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const { resolve, join } = require('path');
const { hyphenate, log } = require('./utils');
const componentsJson = require('../../components.json');

if (!process.argv[2]) {
  log('[组件名]必填 - Please enter new component name', 'error');
  process.exit(1);
}
const COMPONENT_NAME = uppercamelcase(process.argv[2]);
const hyphenateName = `tt-${hyphenate(COMPONENT_NAME)}`;
const packagePath = resolve(__dirname, '../../src/packages', COMPONENT_NAME);

const files = [
  // vue组件基础模版-pug
  {
    fileName: `${COMPONENT_NAME}.vue`,
    content: `<template lang="pug">
div(class="${hyphenateName}")
</template>

<script>
export default {
  name: '${hyphenateName}',
};
</script>`,
  },
  // 导出组件文件
  {
    fileName: 'index.js',
    content: `import ${COMPONENT_NAME} from './${COMPONENT_NAME}.vue';

${COMPONENT_NAME}.install = function (Vue) {
  Vue.component(${COMPONENT_NAME}.name, ${COMPONENT_NAME});
};

export default ${COMPONENT_NAME};`,
  },
];

// 检测组件是否已存在
if (componentsJson[COMPONENT_NAME]) {
  log(`组件：${COMPONENT_NAME} 已存在！`, 'warning');
  process.exit(1);
}

// 在全局组件列表components.json中写入新组件
componentsJson[COMPONENT_NAME] = `src/packages/${COMPONENT_NAME}/index.js`;
fileSave(resolve(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsJson, null, '  '), 'utf-8')
  .end('\n');

// 开始创建组件文件夹及内部基础文件
files.forEach(file => {
  fileSave(join(packagePath, file.fileName))
    .write(file.content, 'utf-8')
    .end('\n');
});

log(`组件：${COMPONENT_NAME}，已创建完成！`);
