<template>
  <div class="home">
    <Header />
    <Filter />
    <ItemsAmount />
    <Pagination />
    <MainContent />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Filter from '../components/Filter.vue'
import ItemsAmount from '../components/ItemsAmount.vue'
import Pagination from '../components/Pagination.vue'
import MainContent from '../components/MainContent.vue'

export default {
  components: {
    Header,
    Filter,
    ItemsAmount,
    Pagination,
    MainContent
  }
}
</script>

<style>
main {
  font-size: 18px;
  font-family: 'PoppinsRegular', sans-serif;
}
</style>
