<template>
  <div id="app">
    <div id="nav">
      <side-bar></side-bar>
    </div>
    <router-view />
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import { mapGetters } from "vuex";
export default {
  components: { "side-bar": SideBar },
  computed: {
    ...mapGetters(["getSpinner"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 99vw;
}

#nav {
  height: 103vh;
  max-width: 260px;
  width: 295px;
  z-index: 3;
  min-width: 200px;
  box-shadow: 0 0px 2px 1px rgba(182, 182, 182, 0.5);

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}
.companies {
  min-width: 100px;
  width: 84%;
}
.spinner {
  z-index: 26;
  position: relative;
  top: 50%;
}
</style>
