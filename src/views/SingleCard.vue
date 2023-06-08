<template>
  <div class="single-card">
    <Header />
    <main class="single-card__wrap">
      <div class="container">
        <div class="single-card__content">
          <a :href="singleCardStore.singleCard.img_src" target="_blank" class="single-card__image-link">
            <img :src="singleCardStore.singleCard.img_src" class="single-card__image" />
          </a>
          <ul class="single-card__items">
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">Image ID: </span>
              <span class="single-card__text-item">{{ singleCardStore.singleCard.id }}</span>
            </li>
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">Camera Name: </span>
              <span class="single-card__text-item">{{
                singleCardStore.singleCard.camera.name
              }}</span>
            </li>
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold"
                >Camera Full Name:</span
              >
              <span class="single-card__text-item">{{
                singleCardStore.singleCard.camera.full_name
              }}</span>
            </li>
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">Earth Date: </span>
              <span class="single-card__text-item">{{
                singleCardStore.singleCard.earth_date
              }}</span>
            </li>
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">Rover Name: </span>
              <span class="single-card__text-item">{{
                singleCardStore.singleCard.rover.name
              }}</span>
            </li>
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold"
                >Rover Status:
              </span>
              <span class="single-card__text-item">{{ roverStatusUpper }}</span>
            </li>
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold"
                >Landing Date:
              </span>
              <span class="single-card__text-item">{{
                singleCardStore.singleCard.rover.landing_date
              }}</span>
            </li>
            <li class="single-card__text-line">
              <span class="single-card__text-item single-card__text-item--bold">Launch Date: </span>
              <span class="single-card__text-item">{{
                singleCardStore.singleCard.rover.launch_date
              }}</span>
            </li>
          </ul>
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
import { firstLetterToUpperCase } from '../composables/firstLetterToUpperCase.js'
import { computed } from 'vue'

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

    const roverStatusUpper = computed(() =>
      firstLetterToUpperCase(singleCardStore.singleCard.rover.status)
    )

    return {
      marsImagesStore,
      singleCardStore,
      roverStatusUpper
    }
  }
}
</script>
