<template>
  <div class="hello">
    <div style="font-size: 24px">
      <v-data-table
              :loading="loadingData"
              :headers="headers"
              :items="desserts"
              hide-actions
              class="elevation-1"
              rows-per-page-items=[5,10]
              rows-per-page-text="20"
      >
        <template slot="items" slot-scope="props">
          <div style="width: 80%"><img width="20%" :src="props.item.logo_url"/></div>
          <td class="text-xs-right">{{ props.item.code }}</td>
          <td class="text-xs-right">{{ props.item.name_en }}</td>
          <td class="text-xs-right">{{ props.item.name_cn }}</td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios'
interface Person {
    name: string,
    age: number
}

@Component({

})
export default class HelloWorld extends Vue {
  mounted(){
      this._initCoinInfo()
  };

  loadingData:boolean = false;

  headers:Array = [
      {
          text: 'logo_url',
          align: 'center',
          sortable: false,
      },
      { text: 'code', align: 'center'},
      { text: 'name_en', align: 'center'},
      { text: 'name_cn',align: 'center'}
  ];
  desserts:Array = [];

  _initCoinInfo():void {
      this.loadingData = true
      axios.get("http://www.mybesttoken.com/api/v3/token/all").then((res)=>{
          console.info(res.data)
          this.desserts = res.data
          this.loadingData = false
      }).catch((error)=>{
          console.info(error)
      })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
