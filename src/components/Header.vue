<template>
  <header>
    <span class="header-container">
      <img alt="logo" src="@/assets/Réda.png" class="logo" @click="goToPage('home')" />
      <h1 class="neonText">Bienvenue</h1>

      <div class="container">
        <div class="clock">
          <div style="--clr: #ff3d58; --h: 74px" id="hour" class="hand">
            <i></i>
          </div>
          <div style="--clr: #00a6ff; --h: 84px" id="min" class="hand">
            <i></i>
          </div>
          <div style="--clr: #ffffff; --h: 94px" id="sec" class="hand">
            <i></i>
          </div>
        </div>
      </div>

      <h1 class="header-menu-item" @click="goToPage('about')">À propos</h1>
      <h1 class="header-menu-item" @click="goToPage('portfolio')">Portfolio</h1>
      <h1 class="header-menu-item" @click="goToPage('articles')">Articles</h1>
      <h1 class="header-menu-item" @click="goToPage('docs')">Docs</h1>
      <h1 class="header-menu-item" @click="goToPage('gallery')">Galerie</h1>
      <h1 class="header-menu-item" @click="goToPage('templates')">Templates</h1>
      <h1 class="header-menu-item" @click="goToPage('games')">Jeux</h1>
    </span>
  </header>
</template>

<script setup>
import router from "@/router"

function goToPage(page) {
  router.push({ path: page })
}
</script>

<style scoped>
h1 {
  font-size: 2.6rem;
  font-weight: 500;
}

header {
  box-shadow: 1px 1px 1px 1px;
  line-height: 1.5;
  max-height: 50vh;

  display: flex;
}

.header-container {
  display: flex;
}

.neonText {
  font-size: 3vh;
  display: inline-block;
  animation: flicker 1.5s infinite alternate;
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 25px #0fa,
    0 0 30px #0fa,
    0 0 35px #0fa,
    0 0 40px #0fa,
    0 0 45px #0fa;
  margin-top: 3.5vh;
  margin-right: 5vh;
}

.neonText:hover {
  cursor: default;
}

@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
  }
}

.logo {
  width: 80px;
}

.logo:hover {
  cursor: pointer;
}

.header-menu-item {
  border: 1px solid rgb(0, 0, 0.9);
  background-color: rgb(0, 0, 0.9);
  border-radius: 3px;
  color: rgb(255, 255, 240);
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 3vh;
  height: 40px;
  margin-top: 3.5vh;
  transition: all 0.3s ease-out;
  margin-right: 10px;
}

.header-menu-item:hover {
  color: rgb(0, 0, 0.9);
  background-color: rgb(240, 240, 240);
  transition: all 0.3s ease-out;
}

.header-menu-item:hover {
  cursor: pointer;
}
</style>
