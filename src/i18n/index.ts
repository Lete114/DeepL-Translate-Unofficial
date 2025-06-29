import { I18n } from 'mini-i18n'
import { nextTick, ref } from 'vue'
import { languages } from './languages'

const i18n = new I18n({
  defaultLanguage: 'EN',
  languages,
})

const lastI18nChange = ref(Date.now())

const usingI18n: () => void = () => lastI18nChange.value
function invalidate() {
  return nextTick(() => {
    // defer, so namespace loading is actually complete before re-rendering
    lastI18nChange.value = Date.now()
  })
}

i18n.on('language:changed', invalidate)

const t = new Proxy(i18n.t.bind(i18n), {
  apply(target, thisArgument, argumentsList) {
    usingI18n() // called during render, so we will get re-rendered when translations change
    return Reflect.apply(target, thisArgument, argumentsList)
  },
})

export function useI18n() {
  return {
    t,
    i18n,
  }
}
