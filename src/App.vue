<template>
  <v-app>
    <Navbar />
    <v-content>
      <Welcome />
      <Peruker />
      <Instagram />
      <Faq />
      <Order />
      <OmEh />
      <Kontakt />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Peruker from "./components/Peruker";
import Order from "./components/Order";
import Faq from "./components/Faq";
import OmEh from "./components/OmEh";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";

export default {
  name: "App",
  components: {
    Navbar,
    Welcome,
    Peruker,
    Order,
    Faq,
    OmEh,
    Kontakt,
    Footer,
    Instagram
  }
};
</script>
<style scoped>
#app {
  font-family: "Montserrat";
}
</style>