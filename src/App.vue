<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/design">Design</router-link>
  </nav>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link to="/">Home</router-link> |</li>
        <li class="nav-item"><router-link to="/about">About</router-link> |</li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/design">Design</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
