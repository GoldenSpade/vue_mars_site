<template>
  <span
    v-html="icon"
    @click="$emit('event')"
    class="ico"
    v-if="iconName"
  ></span>
</template>

<script>
import icons from './icons'

export default {
  props: {
    iconName: String
  },

  emits: ['event'],

  setup (props) {
    const icon = icons[props.iconName]

    return {
      icon
    }
  }
}
</script>
