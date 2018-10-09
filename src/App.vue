<template>
  <div id="app">
  <v-app id="inspire" dark>
    <v-navigation-drawer
            v-model="drawer"
            clipped
            fixed
            app
    >
      <v-list dense>
        <v-list-tile @click="toUserInfo">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>UserInfo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="toSetting">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-icon @click.stop="drawer = !drawer">home</v-icon>
      <v-toolbar-title>58企服</v-toolbar-title>

      <div style="width: 20%;">
          <v-autocomplete
                  :loading="loading"
                  :items="items"
                  :search-input.sync="search"
                  v-model="select"
                  cache-items
                  class="mx-5"
                  flat
                  hide-no-data
                  hide-details
                  label="Search everywhere"
          ></v-autocomplete>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center align-center>
          <v-flex>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <v-flex text-xs-center>
        <span>&copy; 2017 Copyright</span>
      </v-flex>
    </v-footer>
  </v-app>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        watch: {
            search (val) {
                val && val !== this.select && this.querySelections(val)
            }
        }
    })

    export default class App extends Vue {
        drawer:boolean = true;
        @Prop()
        source:string;

        loading:boolean = false;
        items: Array = [];
        search:string = null;
        select:string = null;
        states:Array = [
            'Alabama',
            'Alaska',
            'American Samoa',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Federated States of Micronesia',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Marshall Islands',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Northern Mariana Islands',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Palau',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virgin Island',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
            ]

        querySelections (v) {
            this.loading = true
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.states.filter(e => {
                    return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.loading = false
            }, 500)
        }

        toUserInfo():void{
            this.$router.push('/userInfo')
        }

        toSetting():void{
            this.$router.push('/')
        }

    }
</script>

<style>
#app {

}
</style>
