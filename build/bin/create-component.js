const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const { resolve, join } = require('path');
const { hyphenate, log } = require('./utils');
const { vueTemplate, installTemplate } = require('./template');
const componentsJson = require('../../components.json');

// process.argv[2]-组件名称   process.argv[3]===pug生成vue-pug模版
if (!process.argv[2]) {
  log('[组件名]必填 - Please enter new component name', 'error');
  process.exit(1);
}

const COMPONENT_NAME = uppercamelcase(process.argv[2]);
const componentname = hyphenate(process.argv[2]);
const hyphenateName = `tt-${hyphenate(COMPONENT_NAME)}`;
const useVuePugTemplate = process.argv[3] && process.argv[3] === 'pug';
const packagePath = resolve(__dirname, '../../packages', componentname);

const files = [
  // vue组件基础模版-pug
  {
    fileName: 'src/main.vue',
    content: vueTemplate({ name: hyphenateName, pug: useVuePugTemplate }),
  },
  // 导出组件文件
  {
    fileName: 'index.js',
    content: installTemplate(COMPONENT_NAME),
  },
];

// 检测组件是否已存在
if (componentsJson[componentname]) {
  log(`组件：${componentname} 已存在！`, 'warning');
  process.exit(1);
}

// 在全局组件列表components.json中写入新组件
componentsJson[componentname] = `packages/${componentname}/index.js`;
fileSave(resolve(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsJson, null, '  '), 'utf-8')
  .end('\n');

// 开始创建组件文件夹及内部基础文件
files.forEach(file => {
  fileSave(join(packagePath, file.fileName))
    .write(file.content, 'utf-8')
    .end('\n');
});

log(`组件：${componentname}，已创建完成！`);
