<style scoped lang="scss" src="./ConnectedApps.component.scss" />
<script setup lang="ts">
import laruinatvLogo from "../../assets/png/ruina-tv-logo.png";
import musicIcon from "../../assets/svg/music-icon.svg";
import cartIcon from "../../assets/png/cart-icon.png";

const urlTv: string = "https://tv.laruina.cl";
const urlPlay: string = "https://play.laruina.cl";
const urlMerch: string = "https://merch.laruina.cl";

</script>

<template>
    <div class="inner-container">
      <h2>Visita nuestras aplicaciones</h2>
      <div class="app-container">
        <a class="app-card" :href="urlTv">
          <img :src="laruinatvLogo" alt="">
        </a>
        <a class="app-card" :href="urlPlay">
          <img :src="musicIcon" alt="">
          <h2>La Ruina Play</h2>
        </a>
        <a class="app-card" :href="urlMerch">
          <img :src="cartIcon" alt="">
          <h2>La Ruina Merch</h2>
        </a>
      </div>
    </div>
</template>