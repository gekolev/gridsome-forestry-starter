<template>
    <div class="hero">
        <h1 class="hero-title" id="" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>


<style>
.hero {
    text-align: left;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
    font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#shake:hover{
  animation-play-state: running;
	animation-name: shake;
	animation-duration: 400ms;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite; 
}

@keyframes shake {
  10% {
    transform: translate(-1px, 0.5px) rotate(1deg); }
  20% {
    transform: translate(-0.5px, -0.5px) rotate(-0.5deg); }
  30% {
    transform: translate(2px, 0.5px) rotate(0.5deg); }
  40% {
    transform: translate(0.5px, 0px) rotate(0.25deg); }
  50% {
    transform: translate(1px, -1px) rotate(1deg); }
  60% {
    transform: translate(-1px, -0.5px) rotate(-0.5deg); }
  70% {
    transform: translate(0.5px, 1px) rotate(1deg); }
  80% {
    transform: translate(-1px, 0.5px) rotate(-2.2deg); }
  90% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg); }
  0%, 100% {
    transform: translate(0, 0) rotate(0); } 
}


.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.8;
}
</style>
