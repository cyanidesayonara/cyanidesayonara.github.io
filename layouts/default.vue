<template>
  <div id="app">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

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
a, .see-more, .add-new, .search-button {
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
  margin: 16px 0;
}
header,
main,
footer {
  padding: 20px;
}
header,
aside,
footer {
  font-size: 22px;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
aside {
  float: right;
}
img {
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px;
  width: 40%;
  margin: 3%;
}
hr {
  margin: 30px 0;
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
  margin: 0;
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
  margin-top: 1em;
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
.search {
  margin-top: 20px;
}
.search input {
  border: 2px solid #2cb3ac;
  padding: 5px;
}
.nuxt-content img {
  cursor: pointer;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
