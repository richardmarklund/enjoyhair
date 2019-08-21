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
          token="13609822533.0180e1c.dfbad10e159843a9a0b46e6384a4bb67"
          :count="4"
          :mediaType="image"
        >
          <template slot="feeds" slot-scope="props">
            <img
              v-on:click="openUrl('http://www.instagram.com/enjoyhair.se')"
              :src="props.feed.images.low_resolution.url"
              class="ma-4 hidden-md-and-down"
            />
            <v-img
              v-on:click="openUrl('http://www.instagram.com/enjoyhair.se')"
              :src="props.feed.images.low_resolution.url"
              class="ma-4 hidden-lg-and-up"
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




