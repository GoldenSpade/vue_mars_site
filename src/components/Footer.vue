<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrap">
        <p class="footer__row footer__row--text-center">
          {{ $t('footer.text') }}
        </p>
        <div class="footer__row">
          <div class="footer__logo">
            <BaseIcon iconName="footerLogo" />
          </div>

          <div class="footer__links">
            <ul class="footer__links-item">
              <li>
                <a href="https://hubblesite.org/about" target="__blank">
                  {{ $t('footer.links-1.about') }}</a
                >
              </li>
              <li>
                <a href="https://hubblesite.org/glossary" target="__blank"
                  > {{ $t('footer.links-1.glossary') }}</a
                >
              </li>
              <li>
                <a href="https://hubblesite.org/copyright" target="__blank"
                  >{{ $t('footer.links-1.copyright') }}</a
                >
              </li>
            </ul>

            <ul class="footer__links-item">
              <li>
                <a href="https://hubblesite.org/contact" target="__blank"
                  >{{ $t('footer.links-2.contacs') }}</a
                >
              </li>
              <li>
                <a href="https://hubblesite.org/privacy" target="__blank"
                  >{{ $t('footer.links-2.privacy') }}</a
                >
              </li>
              <li>
                <a href="https://hubblesite.org/sitemap" target="__blank"
                  >{{ $t('footer.links-2.sitemap') }}</a
                >
              </li>
            </ul>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import SocialLinks from './SocialLinks.vue'

export default {
  components: {
    BaseIcon,
    SocialLinks
  }
}
</script>
