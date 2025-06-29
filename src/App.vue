<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style scoped></style>

<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  /* color: #0f0f0f; */
  background-color: #f6f6f6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

html,
body,
#app {
    font-size: 14px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#app {
    background-color: #fff;
}

.el-select-dropdown__list {
    height: 140px;
}

@keyframes touch-stir {
    0% {
        transform: rotate(10deg);
    }

    25% {
        transform: rotate(20deg);
    }

    50% {
        transform: rotate(30deg);
    }

    75% {
        transform: rotate(20deg);
    }

    100% {
        transform: rotate(10deg);
    }
}
</style>
