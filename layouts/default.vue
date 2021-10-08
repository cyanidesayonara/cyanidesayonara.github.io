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
  font-family: "Titillium Web", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.7;
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
#app#img-modal img {
  position: fixed;
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
  margin-left: 0.75rem;
}
img {
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px;
  width: 50%;
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
  width: 120px;
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
  font-size: 1.75em;
  margin-top: 1em;
  margin-bottom: 1em;
  line-height: 1.3333333;
}
main h3 {
  font-weight: 600;
  font-size: 1.5em;
  margin-top: 1.6em;
  margin-bottom: .6em;
  line-height: 1.75;
}
.search {
  margin-top: 20px;
}
.search input {
  border: 2px solid #2cb3ac;
  padding: 5px;
}
article:not(#index) .nuxt-content img {
  cursor: pointer;
}
</style>
