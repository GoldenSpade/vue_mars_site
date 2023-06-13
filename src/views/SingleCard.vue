<template>
  <div class="single-card">
    <Header />
    <main class="single-card__wrap">
      <div class="container">
        <div class="single-card__content">
          <div class="single-card__content-wrap">
            <a
              :href="singleCardStore.singleCard.img_src"
            target="_blank"
              class="single-card__image-link"
            >
              <img :src="singleCardStore.singleCard.img_src" class="single-card__image" />
            </a>
            <ul class="single-card__items">
              <li class="single-card__text-line single-card__text-line--bold">
                {{ $t('imageCard.caption') }}
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold">{{
                  $t('imageCard.id')
                }}</span>
                <span class="single-card__text-item">{{ singleCardStore.singleCard.id }}</span>
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold">{{
                  $t('imageCard.camName')
                }}</span>
                <span class="single-card__text-item">{{
                  singleCardStore.singleCard.camera.name
                }}</span>
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold">{{
                  $t('imageCard.camFullName')
                }}</span>
                <span class="single-card__text-item">{{
                  singleCardStore.singleCard.camera.full_name
                }}</span>
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold">{{
                  $t('imageCard.earthDate')
                }}</span>
                <span class="single-card__text-item">{{ earthDate }}</span>
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold">{{
                  $t('imageCard.roverName')
                }}</span>
                <span class="single-card__text-item">{{
                  singleCardStore.singleCard.rover.name
                }}</span>
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold"
                  >{{ $t('imageCard.roverStatus') }}
                </span>
                <span class="single-card__text-item">{{ roverStatusUpper }}</span>
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold"
                  >{{ $t('imageCard.landDate') }}
                </span>
                <span class="single-card__text-item">{{ landingDate }}</span>
              </li>
              <li class="single-card__text-line">
                <span class="single-card__text-item single-card__text-item--bold">{{
                  $t('imageCard.launchDate')
                }}</span>
                <span class="single-card__text-item">{{ launchDate }}</span>
              </li>
            </ul>
          </div>
          <BackHome class="back-home-button--pt"/>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import BackHome from '../components/BackHome.vue'
import { useMarsImages } from '../stores/marsImages'
import { useSingleCard } from '../stores/singleCard'
import { onBeforeMount, onMounted } from 'vue'
import { firstLetterToUpperCase } from '../composables/firstLetterToUpperCase'
import { computed } from 'vue'
import { changeDateFormat } from '../composables/dateFormat'
import { scrollToTop } from '../composables/scrollToTop'

export default {
  props: ['imageId'],
  components: {
    Header,
    Footer,
    BackHome
  },

  setup (props) {
    const marsImagesStore = useMarsImages()
    const singleCardStore = useSingleCard()

    onBeforeMount(() => singleCardStore.getSingleCard(props.imageId))

    onMounted(() => {
      marsImagesStore.canUseLoad = false
      scrollToTop()
    })

    const roverStatusUpper = computed(() =>
      firstLetterToUpperCase(singleCardStore.singleCard.rover.status)
    )

    const earthDate = computed(() => changeDateFormat(singleCardStore.singleCard.earth_date))
    const landingDate = computed(() =>
      changeDateFormat(singleCardStore.singleCard.rover.landing_date)
    )
    const launchDate = computed(() =>
      changeDateFormat(singleCardStore.singleCard.rover.launch_date)
    )

    return {
      marsImagesStore,
      singleCardStore,
      roverStatusUpper,
      earthDate,
      landingDate,
      launchDate
    }
  }
}
</script>
