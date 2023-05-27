<template>
  <div class="pagination">
    <vue-awesome-paginate
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :max-pages-shown="maxPagesShown"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import getPosts from '../composables/getPosts'

export default {
  setup () {
    const { posts, load } = getPosts()
    const totalItems = computed(() => posts.value.length)
    const itemsPerPage = ref(10)
    const maxPagesShown = ref(5) // amount of max pagination links
    const currentPage = ref(1)
    // starter index for paginatedPosts
    const fromIdx = computed(() => (currentPage.value - 1) * itemsPerPage.value)

    load()
    // Paginate event page. Is equal to pagination item number (it's >= 1)
    const onClickHandler = page => {
      currentPage.value = page
    }

    const paginatedPosts = computed(() =>
      [...posts.value].splice(fromIdx.value, itemsPerPage.value)
    )

    return {
      posts,
      totalItems,
      itemsPerPage,
      maxPagesShown,
      currentPage,
      fromIdx,
      onClickHandler,
      paginatedPosts
    }
  }
}
</script>
