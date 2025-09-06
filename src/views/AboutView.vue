<template>
  <div class="about">
    <h1 class="title">Hello !</h1>

    <p class="card">
      <img
      class="picture"
      src="../../public/IMG_2607.JPG"
      alt="Picture of me" />

      Bonjour, je m'appelle Buisson Réda, j'ai 32 ans et je suis un développeur fullstack. 😄 <br />
      Je développe des sites webs responsives ainsi que des applications mobiles performantes. <br />
      Je suis né et habite à Toulouse, en France. <br />
      J'aime la photographie, la musique, les jeux-vidéos, entres autres. <br />
    </p>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    border: 1px solid rgb(0, 0, 0.9);
    background-color: rgb(0, 0, 0.9);
  }

  .title {
    display: block;
    color: rgb(0, 0, 0.9);
  }

  .card {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 5px;
    float: right;
    font-family: 'Avenir';
    font-size: 3vh;
    color: rgb(0, 0, 0.9);
  }

  .picture {
    float: left;
    width: 250px;
    clip-path: circle();
  }

  .group:after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>
