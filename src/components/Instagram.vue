<template>
  <v-container fluid id="peruker">
    <v-layout justify-center>
      <v-card max-width="100%">
        <v-layout justify-center>
          <v-icon
            v-on:click="openUrl('http://www.instagram.com/enjoyhair.se')"
            size="64"
          >mdi-instagram</v-icon>
        </v-layout>
        <vue-instagram
          token="13609822533.0180e1c.0f3427c151b241a98b0ddc87ee91292c"
          :count="4"
          :mediaType="image"
        >
          <template slot="feeds" slot-scope="props">
            <img
              v-on:click="openUrl('http://www.instagram.com/enjoyhair.se')"
              :src="props.feed.images.low_resolution.url"
              class="ma-4 hidden-md-and-down"
              alt="peruk"
            />
            <v-img
              v-on:click="openUrl('http://www.instagram.com/enjoyhair.se')"
              :src="props.feed.images.low_resolution.url"
              class="ma-4 hidden-lg-and-up"
              alt="peruk"
            />
          </template>
          <template slot="error" slot-scope="props">
            <div class="fancy-alert">{{ props.error.error_message }}</div>
          </template>
        </vue-instagram>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    openUrl: function(url) {
      window.open(url, "_blank");
    }
  }
};
</script>




