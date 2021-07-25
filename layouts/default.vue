<template>
  <div id="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

a {
  font-weight: bold;
  color: #2cb3ac;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Titillium Web", sans-serif;
  margin: 0;
  overflow-y: scroll;
}
header,
footer {
  padding: 20px;
}
section {
  padding: 0 20px;
}
header,
footer,
aside {
  font-size: 22px;
}
aside {
  float: right;
}
img {
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 20px;
  width: 40%;
  margin: 5px;
}
hr {
  margin: 20px -20px;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#bio img,
#author img {
  float: right;
}
.nuxt-link-active {
  color: black;
}
.pipe {
  vertical-align: .125em;
}
#author img {
  width: 20%;
}
</style>
