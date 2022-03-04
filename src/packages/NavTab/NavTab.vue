<template lang="pug">
section.nav-tab(:style="{width: `${width||'100%'}`}")
  section.nav-tab_content(:style="styles")
    div(
      v-for="(item,index) in data" 
      :key="item" 
      :style="{borderRight: `1px solid ${dividerColor}`}"
      @click="change(item,index)"
    ) {{item}}
  div.nav-tab_scroll(:style="scrollStyle")
</template>

<script>
export default {
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
    scrollColor: {
      type: String,
      default: 'orange',
    },
    // tab分割线颜色
    dividerColor: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    styles() {
      const { backgroundColor, color } = this;
      return { backgroundColor, color };
    },
    scrollStyle() {
      const { data, activeIndex, scrollColor } = this;
      const width = (100 / data.length).toFixed(2);
      return {
        width: width + '%',
        left: `${width * activeIndex}%`,
        backgroundColor: scrollColor,
      };
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    change(item, index) {
      this.activeIndex = index;
      this.$emit('change', { data: item, $index: index });
    },
  },
};
</script>

<style lang="less" scoped>
.nav-tab {
  width: 100%;
  height: 40px;
  position: relative;
  overflow: hidden;

  &_content {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      flex: 1;
      height: 100%;
      line-height: 40px;
      text-align: center;
      cursor: pointer;

      &:last-child {
        border-right: none !important;
      }
    }
  }

  &_scroll {
    height: 3px;
    bottom: 0;
    position: absolute;
    transition: all 0.2s ease-in-out;
    border-radius: 3px;
    background-color: #409eff;
  }
}
</style>
