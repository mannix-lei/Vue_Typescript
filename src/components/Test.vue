<template>
    <div>
        {{`this is a test pagfae, it is ${user.name}, he is ${user.age}`}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";
    interface People{
        name: string;
        age: number;
        gender: string
    }

    @Component({

    })
    export default class  Test extends Vue{
        @Prop({default: true,type:Boolean})radio:boolean;
        beforeCreate(){
            console.info("this is beforeCreated")
        }
        created(){
            // this.showUserInfo(this.user)
            console.info("this is created")
        }
        beforeMount(){
            console.info("this is beforeMounted")
        }
        mounted(){
            console.info("this is mounted")
        }
        beforeUpdate(){
            console.info("this is beforeUpdate")
        }
        update(){
            console.info("this is updated")
        }
        beforeDestory(){
            console.info("this is beforeDestoryed")
        }
        destroy(){
            console.info("this is destroyed")
        }

        user:People = {
            name: "test",
            age: 23,
            gender: "male"
        }

        showUserInfo(user:People){
            console.info(user.name)
            console.info(this.radio)
        }
    }
</script>

<style scoped>

</style>
