<template>
  <div id="app">
    <Header />
    <main>
      <Nuxt />
    </main>
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
ol, ul {
  list-style: unset;
  padding-inline-start: 40px;
}
header,
main,
footer {
  padding: 20px;
}
header,
footer,
aside {
  font-size: 22px;
}
aside,
#author img,
#portfolio img {
  float: right;
}
img {
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 20px;
  width: 40%;
  margin: 20px;
}
hr {
  margin: 30px 0px;
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
.nuxt-link-active {
  color: black;
}
.pipe {
  vertical-align: .125em;
}
#author img {
  width: 20%;
}
main {
  flex: auto;
}
main p {
  margin-bottom: 1.25em;
}
main h1 {
  font-weight: 800;
  font-size: 2em;
  margin-top: 0;
  margin-bottom: .8888889em;
  line-height: 1.1111111;
}
main h2 {
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
}
main h3 {
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: .6em;
  line-height: 1.6;
}
</style>
