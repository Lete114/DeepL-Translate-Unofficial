<script setup lang="ts" generic="T">
import type { ISetting } from './type'

const props = defineProps<{
  setting: ISetting
}>()
</script>

<template>
  <div
    v-for="(option, index) in props.setting.options" :key="option.title"
    class="mb-6"
    :class="{ 'mb-0!': props.setting.options.length === index + 1 }"
  >
    <h2 class="text-size-base font-medium text-gray-800 mb-3">
      {{ option.title }}
    </h2>
    <div
      v-for="group in option.option" :key="group.name"
      class="flex-1 flex items-center justify-between p-4 bg-white rounded shadow-sm mb-2"
      :class="{ 'flex-col': group.group }"
    >
      <!-- 如果选项中有 group 则将这些组渲染到同一个分类里 -->
      <template v-if="group.group">
        <div
          v-for="(item, item_index) in group.group" :key="item.name"
          class="w-full py-6px flex items-center justify-between mb-6px bg-white"
          :class="{ 'mb-0!': group.group.length === item_index + 1 }"
        >
          <!-- 重复的代码 -->
          <slot v-if="item.slot" :name="item.slot" :group="item" />
          <template v-else>
            <div>
              <slot v-if="item.slotLeft" :name="item.slotLeft" :group="item" />
              <template v-else>
                <p class="text-gray-900" v-text="item.name" />
                <p v-if="item.tips" class="text-xs text-gray-500" v-text="item.tips" />
              </template>
            </div>
            <slot v-if="item.slotRight" :name="item.slotRight" :group="item" />
            <el-switch v-else v-model="item.value" class="" @change="group.change" />
          </template>
        </div>
      </template>
      <template v-else>
        <!-- 重复的代码 -->
        <slot v-if="group.slot" :name="group.slot" :group="group" />
        <template v-else>
          <div>
            <slot v-if="group.slotLeft" :name="group.slotLeft" :group="group" />
            <template v-else>
              <p class="text-gray-900" v-text="group.name" />
              <p v-if="group.tips" class="text-xs text-gray-500" v-text="group.tips" />
            </template>
          </div>
          <slot v-if="group.slotRight" :name="group.slotRight" :group="group" />
          <el-switch v-else v-model="group.value" class="" @change="group.change" />
        </template>
      </template>
    </div>
  </div>
</template>
