<template>
  <header class="header">
    <div class="header__content">
      <div class="header__title">{{ $t('header.title') }}</div>
      <div class="header__subtitle">{{ $t('header.subTitle') }}</div>
    </div>
    <video
      height="min-content"
      class="header__video"
      src="../assets/video/hubble-space.mp4"
      poster="../assets/img/header/hubble-space-poster.jpg"
      autoplay="autoplay"
      loop="loop"
      muted="muted"
    ></video>
  </header>
</template>
