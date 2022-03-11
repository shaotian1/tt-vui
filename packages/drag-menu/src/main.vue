<template lang="pug">
div(
  :class="['drag-custom-menu', { minimize: minimize }]"
  :style="styles" :data-theme="theme"
)
  div(
    v-show="minimize"
    class="drag-menu-header_circle"
    :style="{ backgroundColor: circleColor }"
    @dblclick="toogleMenuMinimize"
  )
  div(v-show="!minimize" class="drag-menu-header")
    div(
      class="drag-menu-header_circle"
      :style="{ backgroundColor: circleColor }"
      @dblclick="toogleMenuMinimize"
    )
    div.drag-menu-header_title {{ title }}
  div(v-show="!minimize" class="drag-menu-body")
    li(
      v-for="(item, index) in data"
      :key="item.title"
      class="drag-menu-body_itemMenu"
      @click="$emit('change', item)"
    )
      div.itemMenu-title {{ item.title }}
      div.itemMenu-index
        i #
        span {{ index + 1 }}
</template>

<script>
import MenuDrag from '../drag';

export default {
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
    },
  },
  data() {
    return {
      minimize: false,
      dragMenu: null,
    };
  },
  computed: {
    styles() {
      const { width, height, top, left, padding, borderRadius } = this;
      return {
        width,
        height,
        top,
        left,
        padding,
        borderRadius,
      };
    },
  },
  updated() {
    this.init();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.dragMenu = new MenuDrag('.drag-custom-menu');
    },
    toogleMenuMinimize() {
      this.minimize = !this.minimize;
      this.dragMenu.toogleMenuMinimize();
    },
  },
};
</script>

<style lang="less" scoped>
.drag-custom-menu[data-theme='dark'] {
  --back-base: rgba(0, 0, 0, 0.6);
  --back-blur: blur(2px);

  --back-list: rgba(255, 255, 255, 0.2);
  --back-list-hover: #fff;
  --list-title-color: #fff;
  --list-title-color-hover: #030303;
}

.drag-custom-menu[data-theme='light'] {
  --back-base: rgba(255, 255, 255, 0.1);
  --back-blur: blur(3px);

  --back-list: rgba(0, 0, 0, 0.1);
  --back-list-hover: #fff;
  --list-title-color: #fff;
  --list-title-color-hover: #303133;
}

.drag-custom-menu {
  display: flex;
  flex-direction: column;
  z-index: 3000;
  position: absolute;
  user-select: none;
  backdrop-filter: var(--back-blur);
  background-color: var(--back-base);
  transition: all 0.2s ease-in-out;
  box-shadow: 25px 25px 30px rgba(0, 0, 0, 0.5);

  & > * {
    width: 100%;
  }

  &.minimize {
    width: 40px !important;
    height: 40px !important;
    padding: 0 !important;
    border-radius: 40px !important;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  .drag-menu-header_circle {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    cursor: pointer;
  }

  .drag-menu-header {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 700;
    font-size: 24px;

    &_title {
      margin-left: 20px;
    }
  }

  .drag-menu-body {
    flex: 1;
    list-style: none;
    margin-top: 10px;

    &_itemMenu {
      height: 43px;
      padding: 5px;
      cursor: pointer;
      margin-bottom: 10px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--back-list);
      transition: all 0.3s ease-in-out;

      .itemMenu-title {
        width: 70%;
        font-size: 18px;
        color: var(--list-title-color);

        .text-overflow {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .itemMenu-index {
        width: 22%;
        color: #03a9f4;
        text-align: right;
        font-weight: 700;

        i {
          font-size: 20px;
          opacity: 0.25;
        }

        span {
          font-size: 24px;
          margin-left: 5px;
        }
      }

      &:hover {
        transform: scale(1.15) translateX(25px) translateY(-2px);
        box-shadow: -8px 8px 15px rgba(0, 0, 0, 0.5);
        background-color: var(--back-list-hover);
        z-index: 1000;

        .itemMenu-title {
          color: var(--list-title-color-hover);
        }
      }
    }
  }
}
</style>
