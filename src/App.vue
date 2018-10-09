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
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    @Component({})
    export default class App extends Vue {
        drawer:boolean = true;
        @Prop()
        source:string

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
