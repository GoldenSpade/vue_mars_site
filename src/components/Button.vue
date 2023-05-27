<template>
  <button class="button" @click="clickButton">
    <span class="button__text">{{ text }} </span>
    <slot></slot>
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: { BaseIcon },
  props: ['text', 'iconName'],
  emits: ['event'],

  setup (_, { emit }) {
    const clickButton = () => {
      emit('event')
    }

    return {
      clickButton
    }
  }
}
</script>
