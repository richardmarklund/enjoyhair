
  <template>
  <v-container fluid id="order">
    <v-layout row wrap align-center justify-center>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="primary" fill-dot right>
          <v-card class="mr-3">
            <v-card-title class="primary">
              <v-icon size="36" dark class="mr-4">mdi-magnify</v-icon>
              <h2 class="display-1 white--text font-weight-light">Boka möte</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">Vid en första kontakt med oss bokas ett möte in.</v-col>
                <v-col class="hidden-sm-and-down text-right" md="2">
                  <v-icon size="32">mdi-calendar-text</v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="secondary" fill-dot left small>
          <v-card class="mr-3">
            <v-card-title class="secondary justify-end">
              <h2 class="display-1 font-weight-light mr-4">Möte</h2>
              <v-icon size="42">mdi-home-outline</v-icon>
            </v-card-title>
            <v-container>
              <v-col
                cols="12"
                md="10"
              >På mötet går vi igenom dina önskemål och bokar tid för 3d-scanning</v-col>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="third" fill-dot right>
          <v-card class="mr-3">
            <v-card-title class="third">
              <v-icon class="mr-4" size="42">mdi-checkbox-marked-outline</v-icon>
              <h2 class="display-1 font-weight-light">Provhätta</h2>
            </v-card-title>
            <v-container>
              <v-col
                cols="12"
                md="10"
              >Efter 3d-scanning får du hem provhättan och hårprovet för godkännande</v-col>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="secondary" fill-dot left small>
          <v-card class="mr-3">
            <v-card-title class="secondary white justify-end">
              <h2 class="display-1 font-weight-light mr-4">Leverans</h2>
              <v-icon size="42">mdi-truck</v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col class="hidden-sm-and-down" md="2">
                  <v-icon size="32">mdi-package-variant-closed</v-icon>
                </v-col>
                <v-col
                  cols="12"
                  md="10"
                >Peruken levereas till dig personligen eller genom rekommenderat paket</v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="primary" fill-dot right>
          <v-card class="mr-3">
            <v-card-title class="primary">
              <v-icon class="mr-4" dark size="42">mdi-content-cut</v-icon>
              <h2 class="display-1 white--text font-weight-light">Frisör</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">Dags för frisörbesök och sedan kan du njuta av ditt nya hår</v-col>
                <v-icon size="32" color="red">mdi-cards-heart</v-icon>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>