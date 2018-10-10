<template>
    <div id="userInfo">
        <div>
            <v-data-table
                    :loading="loadingData"
                    :headers="headers"
                    :items="desserts"
                    class="elevation-1"
            >
                <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <span slot="activator">
                          {{ props.header.text }}
                        </span>
                        <span>
                          {{ props.header.text }}
                        </span>
                    </v-tooltip>
                </template>
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.news_id }}</td>
                    <td class="text-xs-right">{{ props.item.content }}</td>
                    <td class="text-xs-right">{{ props.item.create_time }}</td>
                </template>
            </v-data-table>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import axios from 'axios';
    import formatTime from '../tools';

    @Component
    export default class UserInfo extends Vue {
        loadingData:boolean = false
        desserts:Array = []
        mounted(){
            this.initNews()
        }
        headers:Array= [
            { text: 'news_id', align: 'center', value: 'name'},
            { text: 'content', align: 'center', value: 'fat'},
            { text: 'create_time', align: 'right', value: 'carbs'}]

        initNews():void{
            this.loadingData = true
            axios.get('http://www.mybesttoken.com/api/v1/message/news/Bitcoin?lang=&time=&limit=5').then((res) =>{
                this.desserts = res.data;
                for(var i = 0;i<res.data.length;i++){
                    this.desserts[i].create_time = formatTime(res.data[i].create_time)
                }
                this.loadingData = false
            }).catch((error)=>{
                console.info(error)
            })
        }
    }
</script>

<style scoped>

</style>
