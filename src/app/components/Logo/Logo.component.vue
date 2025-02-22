<style scoped lang="scss" src="./Logo.component.scss" />
<script setup lang="ts">
import { closeMenu } from '../../../helpers/menu';

defineProps({
  width: String
});

</script>

<template>
  <router-link class="d-flex align-cent logotype" to='/'>
    <img src="../../../assets/svg/laruinarecords-logo.svg" @click="closeMenu()" :width="width || '50'" alt="">
    <span class="type-container">
      <p>LA RUINA</p>
      <p class="subtitle">
        <small>RECORDS</small>
      </p>
    </span>  </router-link>
</template>