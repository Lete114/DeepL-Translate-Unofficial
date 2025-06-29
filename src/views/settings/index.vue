<script setup lang="ts">
import type { ISetting } from '@/components/config/type'
import type { TLanguageKey } from '@/types/language'
import type { ComputedRef, Ref } from 'vue'
import Config from '@/components/config/index.vue'
import { useRegister } from '@/hooks/useRegister'
import { useTray } from '@/hooks/useTray'
import { useI18n } from '@/i18n'
import { useEnv } from '@/stores/env'
import { useSettings } from '@/stores/settings'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { disable, enable } from '@tauri-apps/plugin-autostart'
import { useFocusWithin } from '@vueuse/core'
import { computed, markRaw, reactive, ref, watchEffect } from 'vue'

// #region json
import languages from '@/locales/language.json'
// #endregion json

// #region img
import avatarUri from '@/assets/icons/deepl_256.png'
// icon
import IconAlert from '@/components/icons/alert.vue'
import IconCog from '@/components/icons/cog.vue'
import IconEarth from '@/components/icons/earth.vue'
import IconKeyboard from '@/components/icons/keyboard.vue'
// #endregion img

const win = getCurrentWindow()

useTray()
const env = useEnv()
const settings = useSettings()
const { t, i18n } = useI18n()

watchEffect(() => win.setTitle(t('settings.title')))

const shortcutRef = computed(() => [settings.store.shortcuts.openSettings])
useRegister(shortcutRef, async () => {
  const isVisible = await win.isVisible()
  if (isVisible) {
    await win.hide()
  }
  else {
    await win.show()
    await win.setFocus()
  }
})

interface IStates {
  selected: ISetting
  customKey: {
    placeholder: string | ComputedRef<string>
    openTranslate: {
      keys: Set<string>
      isFocus: boolean
    }
    openSettings: {
      keys: Set<string>
      isFocus: boolean
    }
  }
}

const states = reactive<IStates>({
  selected: {
    name: '',
    icon: null,
    options: [],
  },
  customKey: {
    placeholder: computed(() => t('settings.menu.shortcuts.options.shortcuts.placeholder')),
    openTranslate: {
      keys: new Set(),
      isFocus: false,
    },
    openSettings: {
      keys: new Set(),
      isFocus: false,
    },
  },
})

const openTranslateRef = ref<HTMLDivElement>()
const openSettingsRef = ref<HTMLDivElement>()
const settings_states = reactive<ISetting[]>([
  {
    name: computed(() => t('settings.menu.general.title')) as unknown as string,
    icon: markRaw(IconCog),
    options: [
      {
        title: computed(() => t('settings.menu.general.options.application.title')) as unknown as string,
        option: [
          {
            name: computed(() => t('settings.menu.general.options.application.autoStart.name')) as unknown as string,
            get value() {
              return settings.store.general.autoStart
            },
            set value(value: boolean) {
              value ? enable() : disable()
              settings.store.general.autoStart = value
            },
          },
          // {
          //   name: computed(() => t('settings.menu.general.options.application.closeSettings.name')) as unknown as string,
          //   slotRight: 'close-settings-right',
          //   select: {
          //     get selected() {
          //       return settings.store.general.closeSettings
          //     },
          //     set selected(option: string) {
          //       settings.store.general.closeSettings = option
          //     },
          //     options: [
          //       {
          //         label: computed(() => t('settings.menu.general.options.application.closeSettings.options.minimize')) as unknown as string,
          //         value: 'minimize',
          //       },
          //       {
          //         label: computed(() => t('settings.menu.general.options.application.closeSettings.options.exit')) as unknown as string,
          //         value: 'exit',
          //       },
          //     ],
          //   },
          // },
        ],
      },
      {
        title: computed(() => t('settings.menu.general.options.appearance.title')) as unknown as string,
        option: [
          {
            name: computed(() => t('settings.menu.general.options.appearance.language.name')) as unknown as string,
            slotRight: 'language-right',
            select: {
              get selected() {
                return settings.store.general.language
              },
              set selected(option: string) {
                settings.store.general.language = option
                i18n.setLanguage(option as TLanguageKey)
              },
              options: Object.entries(languages)
                .map(([k, v]) => ({ label: v, value: k })),
            },
          },
          // {
          //   name: computed(() => t('settings.menu.general.options.appearance.theme.name')) as unknown as string,
          //   slotRight: 'theme-right',
          //   select: {
          //     get selected() {
          //       return settings.store.general.theme
          //     },
          //     set selected(option: string) {
          //       settings.store.general.theme = option
          //     },
          //     options: [
          //       {
          //         label: computed(() => t('settings.menu.general.options.appearance.theme.options.system')) as unknown as string,
          //         value: 'system',
          //       },
          //       {
          //         label: computed(() => t('settings.menu.general.options.appearance.theme.options.light')) as unknown as string,
          //         value: 'light',
          //       },
          //       {
          //         label: computed(() => t('settings.menu.general.options.appearance.theme.options.dark')) as unknown as string,
          //         value: 'dark',
          //       },
          //     ],
          //   },
          // },
        ],
      },
    ],
  },
  {
    name: computed(() => t('settings.menu.shortcuts.title')) as unknown as string,
    icon: markRaw(IconKeyboard),
    options: [
      {
        title: computed(() => t('settings.menu.shortcuts.options.shortcuts.name')) as unknown as string,
        option: [
          {
            group: [
              {
                name: computed(() => t('settings.menu.shortcuts.options.shortcuts.options.openTranslate.name')) as unknown as string,
                slotRight: 'open-translate-right',
                handleKeyDown(event: KeyboardEvent) {
                  event.stopPropagation()
                  event.preventDefault()
                  const key = event.key.replace('Meta', 'Super')
                  states.customKey.openTranslate.isFocus = false
                  states.customKey.openTranslate.keys.add(key)
                },
                handleKeyUp(event: KeyboardEvent) {
                  event.stopPropagation()
                  event.preventDefault()
                  openTranslateRef.value?.blur()
                },
              },
              {
                name: computed(() => t('settings.menu.shortcuts.options.shortcuts.options.openSettings.name')) as unknown as string,
                slotRight: 'open-settings-right',
                handleKeyDown(event: KeyboardEvent) {
                  event.stopPropagation()
                  event.preventDefault()
                  const key = event.key.replace('Meta', 'Super')
                  states.customKey.openSettings.isFocus = false
                  states.customKey.openSettings.keys.add(key)
                },
                handleKeyUp(event: KeyboardEvent) {
                  event.stopPropagation()
                  event.preventDefault()
                  openSettingsRef.value?.blur()
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: computed(() => t('settings.menu.service.title')) as unknown as string,
    icon: markRaw(IconEarth),
    options: [{
      title: computed(() => t('settings.menu.service.options.service.name')) as unknown as string,
      option: [
        {
          group: [
            {
              slot: 'service-api',
              name: 'API URL',
              get url() {
                return settings.store.service.url
              },
              set url(url: string) {
                settings.store.service.url = url
              },
            },
          ],
        },
      ],
    },
    ],
  },
  {
    name: computed(() => t('settings.menu.about.title')) as unknown as string,
    icon: markRaw(IconAlert),
    options: [
      {
        title: computed(() => t('settings.menu.about.options.about.name')) as unknown as string,
        option: [
          {
            group: [
              {
                slot: 'version',
              },
              {
                name: computed(() => t('settings.menu.about.options.about.options.openSource.name')) as unknown as string,
                tips: 'https://github.com/lete114/DeepL-Translate-Unofficial',
                slotLeft: 'open-source-left',
                slotRight: 'open-source-right',
              },
            ],
          },
        ],
      },
    ],
  },
])

if (!states.selected.name) {
  states.selected = settings_states[0]
}

function onSelected(item: ISetting) {
  states.selected = item
}

// #region handle custom shortcuts
type TShortcutCustomKey = keyof Omit<IStates['customKey'], 'placeholder'>
const shortcutOpenTranslateText = createShortcutComputedRef('openTranslate')
const shortcutOpenSettingsText = createShortcutComputedRef('openSettings')
function createShortcutComputedRef(key: TShortcutCustomKey) {
  return computed(() => {
    const shortcutText = Array.from(states.customKey[key].keys).join(' + ') || settings.store.shortcuts[key]
    const placeholder = states.customKey.placeholder
    return states.customKey[key].isFocus ? placeholder : shortcutText
  })
}

createShortcutHandle(openTranslateRef, 'openTranslate')
createShortcutHandle(openSettingsRef, 'openSettings')
function createShortcutHandle(ref: Ref<HTMLDivElement | undefined>, key: TShortcutCustomKey) {
  const { focused } = useFocusWithin(ref)
  watchEffect(() => {
    states.customKey[key].isFocus = focused.value
    if (focused.value) {
      states.customKey[key].keys.clear()
      return
    }
    // lose focus
    const keys = Array.from(states.customKey[key].keys)
    if (!keys.length) {
      return
    }
    const shortcuts = keys.join(' + ')
    settings.store.shortcuts[key] = shortcuts
  })
}
// #endregion
</script>

<template>
  <div class="w-full h-full flex">
    <aside
      :class="{ 'visible translate-[-100%,0,0]': '' }"
      class="p-20px py-32px w-160px h-inherit overflow-y-auto select-none"
    >
      <template v-for="setting in settings_states" :key="setting.name">
        <span
          class="group-animation relative flex items-center px-0.75rem py-0.5rem border-rd-0.25rem text-[#878593] mb-0.5rem hover:bg-#f5f5f5"
          :class="{ 'font-bold text-#fff bg-#211f2d!': setting.name === states.selected?.name }"
          @click="onSelected(setting)"
        >
          <component :is="setting.icon" class="text-1.4em mr-10px" />
          <span class="" v-text="setting.name" />
        </span>
      </template>
    </aside>
    <main class="bg-#eee flex-1 ">
      <el-scrollbar>
        <div class="p-20px">
          <Config :setting="states.selected">
            <!-- close settings -->
            <template #close-settings-right="{ group }">
              <el-select v-model="group.select.selected" class="w-160px" @change="group.select.change">
                <el-option v-for="item in group.select.options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </template>

            <!-- language -->
            <template #language-right="{ group }">
              <el-select v-model="group.select.selected" class="w-180px" @change="group.select.change">
                <el-option v-for="item in group.select.options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </template>

            <!-- theme -->
            <template #theme-right="{ group }">
              <el-select v-model="group.select.selected" class="w-140px" @change="group.select.change">
                <el-option v-for="item in group.select.options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </template>

            <!-- open translate window -->
            <template #open-translate-right="{ group }">
              <div
                ref="openTranslateRef"
                class="flex el-select__wrapper hover:shadow-[0_0_0_1px_var(--el-border-color-hover)_inset] focus:shadow-[0_0_0_1px_var(--el-color-primary)_inset]" tabindex="0"
                @keydown="group.handleKeyDown" @keyup="group.handleKeyUp"
                v-text="shortcutOpenTranslateText"
              />
            </template>

            <!-- open main panel -->
            <template #open-settings-right="{ group }">
              <div
                ref="openSettingsRef"
                class="flex el-select__wrapper hover:shadow-[0_0_0_1px_var(--el-border-color-hover)_inset] focus:shadow-[0_0_0_1px_var(--el-color-primary)_inset]" tabindex="0"
                @keydown="group.handleKeyDown" @keyup="group.handleKeyUp"
                v-text="shortcutOpenSettingsText"
              />
            </template>

            <!-- version-check for updates -->
            <template #version>
              <div class="flex">
                <div class="flex">
                  <el-avatar class="bg-transparent" shape="square" :size="44" :src="avatarUri" />

                  <div class="ml-10px flex flex-col justify-between">
                    <p v-text="env.appName" />
                    <p class="text-sm text-gray-500" v-text="`${t('settings.menu.about.options.about.options.application.version')}${env.version}`" />
                  </div>
                </div>
                <div class="flex">
                  <!--  -->
                </div>
              </div>
            </template>

            <!-- Service - API URL -->
            <template #service-api="{ group }">
              <div class="flex-1">
                <div class="flex">
                  <span v-text="group.name" />
                </div>
                <div class="mt-10px w-full">
                  <el-input v-model="group.url" placeholder="http(s)://" />
                </div>
              </div>
            </template>

            <!-- open source address -->
            <template #open-source-left="{ group }">
              <p class="text-gray-900" v-text="group.name" />
              <el-link
                v-if="group.tips" :underline="false" :href="group.tips"
                class="text-size-xs text-gray-500" target="_blank"
              >
                {{ group.tips }}
              </el-link>
            </template>
            <template #open-source-right="{ group }">
              <el-button
                type="danger" plain size="" tag="a"
                :href="`${group.tips}/issues`" target="_blank"
                class="decoration-none"
              >
                {{ t('settings.menu.about.options.about.options.openSource.button') }}
              </el-button>
            </template>
          </Config>
        </div>
      </el-scrollbar>
    </main>
  </div>
</template>

<style scoped>
.group-animation:hover svg {
  animation: touch-stir 0.3s;
}
</style>
