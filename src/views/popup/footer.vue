<script setup lang="ts">
import type { TLanguageKey } from '@/types/language'
import { useI18n } from '@/i18n'
import { useSettings } from '@/stores/settings'
import { useTranslateStates } from '@/stores/translate'
import { computed, reactive, watchEffect } from 'vue'

const translateStates = useTranslateStates()

const settings = useSettings()
const { t, i18n } = useI18n()

const otherOption = computed(() => t('popup.footer.otherOption.name'))
const original = computed(() => t('popup.footer.read.original'))
const translation = computed(() => t('popup.footer.read.translation'))
const copyTips = computed(() => t('popup.footer.copy.tips'))

watchEffect(() => {
  void settings.store.general.language
  i18n.setLanguage(settings.store.general.language as TLanguageKey)
})

const states = reactive({
  isPlay: false,
  isCopy: false,
})

function onSelectOtherOption(option: string) {
  translateStates.result = option
}

function handleCommand(command: 'original' | 'translation') {
  if (command === 'original') {
    onPlay(translateStates.text)
  }
  else if (command === 'translation') {
    onPlay(translateStates.result)
  }
}

function onPlay(text: string) {
  if (states.isPlay) {
    return
  }
  speechSynthesis.cancel()
  states.isPlay = true
  const speech = new SpeechSynthesisUtterance(text)
  speechSynthesis.speak(speech)
  setTimeout(() => {
    states.isPlay = false
  }, 1000)
}

function onCopy() {
  if (states.isCopy) {
    return
  }
  states.isCopy = true
  navigator.clipboard.writeText(translateStates.result)
  setTimeout(() => {
    states.isCopy = false
  }, 1000)
}
</script>

<template>
  <div class="focus:outline-none select-none h-full flex flex-row flex-justify-between flex-items-center">
    <div class="h-full flex-1 flex justify-between">
      <el-dropdown v-show="translateStates.alternatives.length" class="text-current h-full">
        <div class="flex-1 p-10px cursor-pointer hover:bg-#e4e5e7 border-r-1px border-r-solid border-#dae1e8 flex items-center" v-text="otherOption" />
        <template #dropdown>
          <el-dropdown-menu class="min-w-140px">
            <el-dropdown-item v-for="item in translateStates.alternatives" :key="item" @click="onSelectOtherOption(item)">
              {{ item }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="flex flex-items-center flex-justify-center">
      <div class="mr-10px">
        <el-dropdown class="w-32px h-32px " @command="handleCommand">
          <div class="flex-1 flex justify-center items-center hover:bg-#e4e5e7 border-rd-4px">
            <svg v-if="states.isPlay" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58579 15.0001H4C3.44772 15.0001 3 14.5523 3 14.0001V10.0001C3 9.44777 3.44772 9.00005 4 9.00005H5.58579L10.2929 4.29294C10.9229 3.66298 12 4.10915 12 5.00005V19.0001C12 19.891 10.9229 20.3371 10.2929 19.7072L5.58579 15.0001Z" stroke="#006494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17 14L19 12M19 12L21 10M19 12L17 10M19 12L21 14" stroke="#006494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path d="M13.5355 5.46448C15.4881 7.4171 15.4881 10.5829 13.5355 12.5355M16.364 2.63599C19.8787 6.15071 19.8787 11.8492 16.364 15.3639M3.58579 12.0001H2C1.44772 12.0001 1 11.5523 1 11.0001V7.00005C1 6.44777 1.44772 6.00005 2 6.00005H3.58579L8.29289 1.29294C8.92286 0.66298 10 1.10915 10 2.00005V16.0001C10 16.891 8.92286 17.3371 8.29289 16.7072L3.58579 12.0001Z" stroke="#0F2B46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="original">
                {{ original }}
              </el-dropdown-item>
              <el-dropdown-item command="translation">
                {{ translation }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="mr-20px">
        <el-tooltip :content="copyTips" placement="top" effect="light">
          <div :class="{ 'cursor-no-drop': states.isCopy }" class="cursor-pointer w-32px h-32px hover:bg-#e4e5e7 border-rd-4px flex justify-center items-center" @click="onCopy">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path :fill="states.isCopy ? '#006494' : '#0F2B46'" fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4.75C9.5 3.50736 10.5074 2.5 11.75 2.5H18.75C19.9926 2.5 21 3.50736 21 4.75V14.75C21 15.9926 19.9926 17 18.75 17H16.5V8.75C16.5 6.67893 14.8211 5 12.75 5H9.5V4.75ZM8 5V4.75C8 2.67893 9.67893 1 11.75 1H18.75C20.8211 1 22.5 2.67893 22.5 4.75V14.75C22.5 16.8211 20.8211 18.5 18.75 18.5H16.5V18.75C16.5 20.8211 14.8211 22.5 12.75 22.5H5.75C3.67893 22.5 2 20.8211 2 18.75V8.75C2 6.67893 3.67893 5 5.75 5H8ZM8 6.5H5.75C4.50736 6.5 3.5 7.50736 3.5 8.75V18.75C3.5 19.9926 4.50736 21 5.75 21H12.75C13.9926 21 15 19.9926 15 18.75V18.5V8.75C15 7.50736 13.9926 6.5 12.75 6.5H8Z" />
            </svg>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
