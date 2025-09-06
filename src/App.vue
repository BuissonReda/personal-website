<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <RouterView class="mainView" />
  <Footer class="footer"></Footer>
</template>

<style lang="scss" scoped>
$font-stack: Avenir, Helvetica, sans-serif;
$primary-color: #41b1e8;

header {
  color: $primary-color;
  font: 100% $font-stack;
  line-height: 1.5;
}

@media screen and (prefers-reduced-motion) {
  h1 {
    animation: none;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.mainView {
  color: rgb(0, 0, 0.9);
  border-radius: 1px;
  background: no-repeat url('../../subtle_prism.svg');
  padding: 5px;
}
</style>
