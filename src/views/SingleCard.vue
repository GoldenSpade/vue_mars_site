<template>
  <div class="single-card">
    <Header />
    <main class="single-card__wrap">
      <div class="container">
        <div class="single-card__content">
          <img :src="singleCardStore.singleCard.img_src" class="single-card__image" />
          <div class="single-card__row">
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
            <div class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">ffdfdfdf</span>
              <span class="single-card__text-item">ffdfdfdf</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useMarsImages } from '../stores/marsImages'
import { useSingleCard } from '../stores/singleCard'
import { onBeforeMount, onMounted } from 'vue'

export default {
  props: ['imageId'],
  components: { Header, Footer },

  setup (props) {
    const marsImagesStore = useMarsImages()
    const singleCardStore = useSingleCard()

    onBeforeMount(() => singleCardStore.getSingleCard(props.imageId))

    onMounted(() => {
      marsImagesStore.canUseLoad = false
    })

    return {
      marsImagesStore,
      singleCardStore
    }
  }
}
</script>