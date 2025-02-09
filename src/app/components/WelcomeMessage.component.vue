<script setup lang="ts">
  const loginUrl = "https://hub.laruina.cl/login"
  const signupUrl = "https://hub.laruina.cl/signup"

</script>

<template>
  Bienvenido, acá puedes acceder a tu cuenta si ya tienes una, o crear una nueva
  <ul>
    <li>
      <a :href="loginUrl" class="btn principal-button">Iniciar sesión</a>
    </li>

    <li>
      <a :href="signupUrl" class="btn secondary-button">Registrarse</a>
    </li>
  </ul>
</template>