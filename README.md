## install
```shell
npm i tt-vui -S
```

## 使用 全局引入：
```javascript
import Tvui from 'tt-vui';
import 'tt-vui/dist/tt-vui.css';
Vue.use(Tvui);
```

## 组件介绍
```shell
1、<tt-drag-menu /> - 可拖动可缩小式悬浮Menu组件

事件：<tt-drag-menu @change="event" />
name: 'tt-drag-menu',
props: {
  // 主题 现在只有 light｜dark
  theme: {
    type: String,
    default: 'dark',
  },
  // 标题
  title: {
    type: String,
    default: 'MENU',
  },
  // 主体数据
  data: {
    type: Array,
    default: () => [
      { title: 'LIST11' },
      { title: 'LIST22' },
      { title: 'LIST33' },
    ],
  },
  // 圆环色彩
  circleColor: {
    type: String,
    default: 'lightgreen',
  },
  // menu宽度
  width: {
    type: String,
    default: '200px',
  },
  // menu高度
  height: {
    type: String,
    default: '',
  },
  // 初始距上边框值
  top: {
    type: String,
    default: '20px',
  },
  // 初始距左边框值
  left: {
    type: String,
    default: '20px',
  },
  // 内部padding值
  padding: {
    type: String,
    default: '12px',
  },
  // 边框圆角
  borderRadius: {
    type: String,
    default: '10px',
  }
}


2、<tt-nav-tab /> - 动态tab选择栏

事件：<tt-nav-tab @change="event" />
name: 'tt-nav-tab',
props: {
  // 主体数据
  data: {
    type: Array,
    default: () => ['Tab1', 'Tab2', 'Tab3', 'Tab4'],
  },
  width: {
    type: [String, Boolean],
    default: '',
  },
  // 整体背景颜色
  backgroundColor: {
    type: String,
    default: 'lightseagreen',
  },
  // 字体颜色
  color: {
    type: String,
    default: 'white',
  },
  // 底部滑块颜色
  scrollcolor: {
    type: String,
    default: 'orange',
  },
  // tab分割线颜色
  dividerColor: {
    type: String,
    default: 'white',
  },
},
```
