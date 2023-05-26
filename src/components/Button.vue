<template>
  <button class="button" @click="clickButton">{{ text }}</button>
</template>

<script>
export default {
  props: ['text'],
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
