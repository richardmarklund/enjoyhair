<template>
  <nav>
    <v-app-bar dense hide-on-scroll height="75" app scroll-threshold="200">
      <v-container>
        <v-layout justify-space-between align-center>
          <router-link to="/">
            <v-toolbar-title>
              <div class="display-1">Enjoy Hair</div>
            </v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <v-btn text small class="hidden-sm-and-down" min-width="120" to="/#peruker">Peruker</v-btn>
          <v-btn text small class="hidden-sm-and-down" min-width="120" to="/#faq">FAQ</v-btn>
          <v-btn text small class="hidden-sm-and-down" min-width="120" to="/#order">Beställning</v-btn>
          <v-btn text small class="hidden-sm-and-down" min-width="120" to="/#omeh">Om Enjoy hair</v-btn>
          <v-btn text small class="hidden-sm-and-down" min-width="120" to="/#kontakt">Kontakt</v-btn>
          <v-icon
            v-on:click="openUrl('http://www.instagram.com/enjoyhair.se')"
            size="36"
            class="hidden-sm-and-down"
          >mdi-instagram</v-icon>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark right class="hidden-md-and-up" width>
      <v-card width="200">
        <v-list nav>
          <v-list-item>
            <v-list-item-content>
              <v-list-item class="justify-center">
                <v-btn v-on:click="drawer=false;" to="/#peruker" text small>Peruker</v-btn>
              </v-list-item>
              <v-list-item class="justify-center">
                <v-btn v-on:click="drawer=false;" to="/#faq" text small>FAQ</v-btn>
              </v-list-item>
              <v-list-item class="justify-center">
                <v-btn v-on:click="drawer=false;" to="/#order" text small>Beställning</v-btn>
              </v-list-item>
              <v-list-item class="justify-center">
                <v-btn v-on:click="drawer=false;" to="/#omeh" text small>Om enjoy hair</v-btn>
              </v-list-item>
              <v-list-item class="justify-center">
                <v-btn v-on:click="drawer=false;" to="/home" text small>Kontakt</v-btn>
              </v-list-item>
              <v-list-item class="justify-center">
                <v-icon
                  v-on:click="openUrl('http://www.instagram.com/enjoyhair.se')"
                  size="36"
                >mdi-instagram</v-icon>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    openUrl: function(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: inherit;
}
</style>