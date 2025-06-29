<script setup lang="ts">
import type { TLanguageKey, TSourceLanguage, TTargetLanguage } from '@/types/language'
import type { ITranslateResult, ITranslateResultError } from '@/types/translate'
import { useRegister } from '@/hooks/useRegister'
import { useSettings } from '@/stores/settings'
import { useTranslate, useTranslateStates } from '@/stores/translate'
import { SOURCE_LANGUAGES, TARGET_LANGUAGES } from '@/utils/constant'
import { translates } from '@/utils/translate'
import { Switch } from '@element-plus/icons-vue'
import { invoke } from '@tauri-apps/api/core'
import { getCurrentWindow } from '@tauri-apps/api/window'
import * as LOG from '@tauri-apps/plugin-log'
import { ElIcon, ElOption, ElSelect } from 'element-plus'
import { computed, reactive, watchEffect } from 'vue'
import Footer from './footer.vue'

const settings = useSettings()
const translateStore = useTranslate()
const translateStates = useTranslateStates()

// Creating Language Mappings
function createLanguageMap(languages: typeof SOURCE_LANGUAGES | typeof TARGET_LANGUAGES) {
  return Object.fromEntries(languages.map(i => [i, i])) as Record<TSourceLanguage | TTargetLanguage, string>
}

// language mapping
const source_languages = reactive<Record<TSourceLanguage, string>>(createLanguageMap(SOURCE_LANGUAGES))
const target_languages = reactive<Record<TTargetLanguage, string>>(createLanguageMap(TARGET_LANGUAGES))

// Listen for language changes
watchEffect(async () => {
  const current = translates[settings.store.general.language as TLanguageKey]

  // Filter out languages with '-'
  const filterLanguage = Object.entries(current).filter(([key]) => !key.includes('-'))
  const currentLanguage = Object.fromEntries(filterLanguage)

  const language = { AUTO: 'AUTO', ...currentLanguage } as Record<TSourceLanguage, string>
  Object.assign(source_languages, language)
  Object.assign(target_languages, current)
})

function onReset() {
  translateStates.loading = true
  translateStates.errorMsg = ''
  translateStates.result = ''
  translateStates.alternatives.length = 0
}

const shortcutRef = computed(() => [settings.store.shortcuts.openTranslate])
useRegister(shortcutRef, async () => {
  const win = getCurrentWindow()
  const isVisible = await win.isVisible()
  if (isVisible) {
    await win.hide()
    return
  }
  translateStates.text = await invoke<string>('get_selection_text')
  if (translateStates.text) {
    onReset()
    await win.show()
    await win.setFocus()
    onTranslate()
  }
})

const isSwap = computed(() => {
  const source = Object.keys(source_languages)
  const target = Object.keys(target_languages)
  return source.includes(translateStore.store.to) && target.includes(translateStore.store.from)
})

function onSwap() {
  if (!isSwap.value) {
    return
  }
  const temp = translateStore.store.to
  translateStore.store.to = translateStore.store.from
  translateStore.store.from = temp
  onTranslate()
}

function onClose() {
  getCurrentWindow().hide()
}

function onSelected() {
  if (translateStore.store.from === translateStore.store.to) {
    translateStore.store.to = 'EN'
  }
  onTranslate()
}

async function onTranslate() {
  if (!translateStates.text) {
    return
  }
  onReset()

  const options = { ...translateStore.store, text: translateStates.text }

  invoke<ITranslateResult>('translate_text', { ...options })
    .then((result) => {
      translateStates.alternatives = result.alternatives
      translateStates.result = result.text
    })
    .catch((error: ITranslateResultError) => {
      const defaultError = 'translate error, please try again later'
      LOG.error(`Translation error: ${error.data?.error.message || defaultError}`)
      console.error('Translation error', error)
      translateStates.errorMsg = error.data?.error.message || defaultError
    })
    .finally(() => {
      translateStates.loading = false
    })
}
</script>

<template>
  <div class="w-full h-full flex">
    <!-- drag -->
    <div class="[-webkit-app-region:drag] min-w-18px flex items-center justify-center bg-#f1f1f1 border-0 border-rd-l-4px border-r-1px border-style-solid border-#dae1e8">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
        <path fill="#9BA3AC" d="M3.33268 9.99935C3.33268 10.7327 2.73268 11.3327 1.99935 11.3327C1.26602 11.3327 0.666016 10.7327 0.666016 9.99935C0.666016 9.26602 1.26602 8.66602 1.99935 8.66602C2.73268 8.66602 3.33268 9.26602 3.33268 9.99935ZM1.99935 4.66602C1.26602 4.66602 0.666016 5.26602 0.666016 5.99935C0.666016 6.73268 1.26602 7.33268 1.99935 7.33268C2.73268 7.33268 3.33268 6.73268 3.33268 5.99935C3.33268 5.26602 2.73268 4.66602 1.99935 4.66602ZM1.99935 0.666016C1.26602 0.666016 0.666016 1.26602 0.666016 1.99935C0.666016 2.73268 1.26602 3.33268 1.99935 3.33268C2.73268 3.33268 3.33268 2.73268 3.33268 1.99935C3.33268 1.26602 2.73268 0.666016 1.99935 0.666016ZM5.99935 3.33268C6.73268 3.33268 7.33268 2.73268 7.33268 1.99935C7.33268 1.26602 6.73268 0.666016 5.99935 0.666016C5.26602 0.666016 4.66602 1.26602 4.66602 1.99935C4.66602 2.73268 5.26602 3.33268 5.99935 3.33268ZM5.99935 4.66602C5.26602 4.66602 4.66602 5.26602 4.66602 5.99935C4.66602 6.73268 5.26602 7.33268 5.99935 7.33268C6.73268 7.33268 7.33268 6.73268 7.33268 5.99935C7.33268 5.26602 6.73268 4.66602 5.99935 4.66602ZM5.99935 8.66602C5.26602 8.66602 4.66602 9.26602 4.66602 9.99935C4.66602 10.7327 5.26602 11.3327 5.99935 11.3327C6.73268 11.3327 7.33268 10.7327 7.33268 9.99935C7.33268 9.26602 6.73268 8.66602 5.99935 8.66602Z" />
      </svg>
    </div>

    <!-- main -->
    <div class="w-full overflow-hidden [word-wrap:break-word] flex flex-col ">
      <!-- header -->
      <div class="select-none h-48px flex flex-items-center p-[5px_13px_5px_22px] border-b-1px border-b-solid border-#dae1e8">
        <!-- logo -->
        <svg class="w-24px h-24px mr-10px" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <g clip-path="url(#clip0)">
            <path d="M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z" fill="#0F2B46" />
            <path d="M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z" fill="white" />
            <path d="M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="18.5294" height="19" fill="white" transform="matrix(-1 0 0 1 18.5294 0)" />
            </clipPath>
          </defs>
        </svg>
        <div class="flex items-center flex-1 flex-justify-between">
          <div class="flex-1 mx-10px flex flex-items-center">
            <ElSelect v-model="translateStore.store.from" size="small" placeholder="Select" @change="onSelected">
              <ElOption v-for="[key, value] in Object.entries(source_languages)" :key="key" class="text-12px" size="small" :label="value" :value="key" />
            </ElSelect>

            <ElIcon size="small" class="mx-10px " :class="{ 'cursor-pointer': isSwap }" @click="onSwap">
              <Switch />
            </ElIcon>

            <ElSelect v-model="translateStore.store.to" size="small" placeholder="Select" class="" @change="onSelected">
              <ElOption v-for="[key, value] in Object.entries(target_languages)" :key="key" class="text-12px" size="small" :label="value" :value="key" :disabled="translateStore.store.from === key" />
            </ElSelect>
          </div>
          <div class="flex flex-items-center">
            <!-- <button class="flex flex-items-center flex-justify-center w-24px h-24px cursor-pointer bg-transparent border-1px border-solid border-transparent border-rd-12px duration-.3s ease-in-out hover-bg-#f2f4f7">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 18 18" fill="none">
                <path d="M7.60386 2.59776C7.95919 1.13408 10.0408 1.13408 10.3961 2.59776C10.6257 3.54327 11.709 3.99198 12.5398 3.48571C13.8261 2.70199 15.298 4.17392 14.5143 5.46015C14.008 6.29105 14.4567 7.37431 15.4022 7.60386C16.8659 7.95919 16.8659 10.0408 15.4022 10.3961C14.4567 10.6257 14.008 11.709 14.5143 12.5398C15.298 13.8261 13.8261 15.298 12.5398 14.5143C11.709 14.008 10.6257 14.4567 10.3961 15.4022C10.0408 16.8659 7.95919 16.8659 7.60386 15.4022C7.37431 14.4567 6.29105 14.008 5.46016 14.5143C4.17392 15.298 2.70199 13.8261 3.48571 12.5398C3.99198 11.709 3.54327 10.6257 2.59776 10.3961C1.13408 10.0408 1.13408 7.95919 2.59776 7.60386C3.54327 7.37431 3.99198 6.29105 3.48571 5.46015C2.70199 4.17392 4.17392 2.70199 5.46015 3.48571C6.29105 3.99198 7.37431 3.54327 7.60386 2.59776Z" stroke="#0F2B46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9Z" stroke="#0F2B46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button> -->
            <button class="flex flex-items-center flex-justify-center ml-8px border-0 border-none bg-transparent cursor-pointer h-24px w-24px border-rd-12px duration-.3s ease-in-out hover-bg-#f2f4f7" @click="onClose">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M9.72504 0.2825C9.43254 -0.00999986 8.96004 -0.00999986 8.66754 0.2825L5.00004 3.9425L1.33254 0.275C1.04004 -0.0175 0.567539 -0.0175 0.275039 0.275C-0.0174609 0.5675 -0.0174609 1.04 0.275039 1.3325L3.94254 5L0.275039 8.6675C-0.0174609 8.96 -0.0174609 9.4325 0.275039 9.725C0.567539 10.0175 1.04004 10.0175 1.33254 9.725L5.00004 6.0575L8.66754 9.725C8.96004 10.0175 9.43254 10.0175 9.72504 9.725C10.0175 9.4325 10.0175 8.96 9.72504 8.6675L6.05754 5L9.72504 1.3325C10.01 1.0475 10.01 0.5675 9.72504 0.2825Z" fill="#4B535A" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- loading -->
      <div v-show="translateStates.loading" class="flex flex-1 flex-items-center flex-justify-center">
        <div class="loading border-4px border-solid border-#f1f1f1 border-t-4px border-t-solid border-t-#0f2b46 border-rd-50% w-30px h-30px" />
      </div>
      <div v-show="!translateStates.loading" class="flex flex-col flex-1 p-10px text-14px overflow-y-auto whitespace-break-spaces">
        <!-- center -->
        <div :class="{ 'text-#601b1a text-14px bg-#fff1f1': translateStates.errorMsg }" class=" flex-1 p-10px text-14px overflow-y-auto whitespace-break-spaces">
          <span v-text="translateStates.errorMsg || translateStates.result" />
        </div>
      </div>

      <!-- footer -->
      <div class="h-50px bg-#f1f1f1">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.loading {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
