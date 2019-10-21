<template>
  <v-app>
    <Navbar />
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
<style scoped>
#app {
  font-family: "Montserrat";
  font-display: auto;

}
</style>