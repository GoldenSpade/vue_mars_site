<template>
  <div class="home">
    <Header />
    <Filter />
    <ItemsAmount v-show="marsImagesStore.imagesLength" />
    <Pagination v-show="marsImagesStore.imagesLength" />
    <MainContent />
    <Pagination v-show="marsImagesStore.imagesLength" />
    <ScrollToTop />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Filter from '../components/Filter.vue'
import ItemsAmount from '../components/ItemsAmount.vue'
import Pagination from '../components/Pagination.vue'
import MainContent from '../components/MainContent.vue'
import Footer from '../components/Footer.vue'
import ScrollToTop from '../components/ScrollToTop.vue'

import { useMarsImages } from '../stores/marsImages'

export default {
  components: {
    Header,
    Filter,
    ItemsAmount,
    Pagination,
    MainContent,
    Footer,
    ScrollToTop
  },

  setup () {
    const marsImagesStore = useMarsImages()

    return {
      marsImagesStore
    }
  }
}
</script>

<style>
main {
  font-size: 18px;
  font-family: 'PoppinsRegular', sans-serif;
}
</style>
