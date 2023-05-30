<template>
  <select @change="switchLanguage" class="select">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
      class="select__option"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Tr from '@/i18n/translation'
import { useCalendarData } from '../stores/calendarData.js'
export default {
  setup () {
    const calendarDataStore = useCalendarData()

    const { t, locale } = useI18n()

    const supportedLocales = Tr.supportedLocales

    const router = useRouter()

    const switchLanguage = async event => {
      const newLocale = event.target.value
      calendarDataStore.calendarLocale = event.target.value
      await Tr.switchLanguage(newLocale)

      try {
        await router.replace({ params: { locale: newLocale } })
      } catch (e) {
        console.log(e)
        router.push('/')
      }
    }

    return {
      calendarDataStore,
      t,
      locale,
      supportedLocales,
      switchLanguage
    }
  }
}
</script>
