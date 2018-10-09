<template>
  <div class="hello">
    <div style="font-size: 24px">
      Hello World
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class HelloWorld extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button{
    width: 5%;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .button:hover{
    background-color: black;
    color: white;
  }

</style>
