<template>
  <div class="home-root">
    home
    <DragMenu left="400px" />
    <section class="nav-wrap">
      <NavTab />
    </section>
  </div>
</template>

<script>
import DragMenu from '@/packages/DragMenu/DragMenu';
import NavTab from '@/packages/NavTab/NavTab';

export default {
  components: { DragMenu, NavTab },
};
</script>

<style lang="less" scoped>
.home-root {
  width: 100%;
  height: 100%;

  .nav-wrap {
    width: 350px;
    height: 450px;
    border: 1px solid #409eff;
  }
}
</style>
