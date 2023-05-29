<template>
  <select class="select">
    <option
      v-for="(option, idx) in items"
      :key="idx"
      :value="option"
      :selected="option === items[0]"
      class="select__option"
    >
      {{ option }}
    </option>
  </select>
</template>
<script>

export default {
  props: ['items']
}
</script>
