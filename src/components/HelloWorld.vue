<template>
  <div class="hello">
    <div style="font-size: 24px">
      Hello World
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
interface Person {
    name: string,
    age: number
}

@Component({

})
export default class HelloWorld extends Vue {
  mounted(){
      // let user = {
      //     name: "mannix_lei",
      //     age: 23
      // }
      // this.foo(user)
  }

  foo(user:Person){
      console.info(`my name is ${user.name}, I'm ${user.age} years old`)
  }

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
