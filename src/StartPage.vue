<template>
  <v-content class="pt-0">
    <Welcome />
    <Peruker />
    <Instagram />
    <Faq />
    <Order />
    <OmEh />
    <Kontakt id="kontakt" />
    <Footer />
  </v-content>
</template>

<script>
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
  font-display: auto;
}
</style>