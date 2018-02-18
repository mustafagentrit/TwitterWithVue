<template>

    <div class="boxInput">
        <div class="imgPhoto">
            <img src="../assets/Gentrit.jpg" alt="">
        </div>
        <div class="mainInput">
            <input type="text" v-model="newTweet" placeholder="What's happening?" class="input-control">
            <i v-on:click="addTweet(newTweet)" class="fa fa-plus"></i>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default{
        data(){
            return{
                newTweet:''
            }
        },
        methods:{
            ...mapMutations([
                'addTweet'
            ]),

        }
    }
</script>
<style scoped>
    .fa.fa-plus{
        position: absolute;
        top: 26%;
        right: 6%;
    }
    input:focus{
        outline:none;
    }
    .input-control{
        width: 94%;
        padding-left:2%;
        height: 40px;
        /*transform: translate(10%,20%);*/
        border:0.5px solid  #b9bdca;
        /*float: left;*/
        margin-left: 2%;
        /*-webkit-border-radius: 5%;*/
        /*-moz-border-radius: 5%;*/
        border-radius: 10px;
    }
    .mainInput {
        flex: 12;
        position: relative;
        width: 35%;
        left: 0;

    }
    .imgPhoto{
        flex:1;
    }
    /*.boxInput img{*/
    .imgPhoto img{
        width: 30px;
        height: 30px;
        position: relative;
        float: left;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        transform:translate(32%,16%);
        border: 2px solid  #e6ecf0;
    }
</style>
<!--<style scoped>-->
    <!--.boxInput{-->
        <!--display: flex;-->
        <!--grid-column: 2/3;-->
        <!--grid-row:1/2;-->
        <!--min-width: 510px;-->
        <!--/*margin:1% 0 0 2%;*/-->
        <!--background: transparent !important;-->
    <!--}-->
    <!--.fa.fa-plus{-->
        <!--position: absolute;-->
        <!--top: 26%;-->
        <!--right: 6%;-->
    <!--}-->
    <!--.input-control{-->
        <!--width: 94%;-->
        <!--height: 40px;-->
        <!--/*transform: translate(10%,20%);*/-->
        <!--border:0.5px solid  #b9bdca;-->
        <!--/*float: left;*/-->
        <!--margin-left: 2%;-->
        <!--/*-webkit-border-radius: 5%;*/-->
        <!--/*-moz-border-radius: 5%;*/-->
        <!--border-radius: 10px;-->
    <!--}-->
    <!--.mainInput {-->
        <!--flex: 12;-->
        <!--position: relative;-->
        <!--width: 35%;-->
        <!--/*left: 0%;*/-->

    <!--}-->
    <!--.boxInput img{-->
        <!--width: 30px;-->
        <!--height: 30px;-->
        <!--position: relative;-->
        <!--float: left;-->
        <!-- -webkit-border-radius: 50%;-->
        <!-- -moz-border-radius: 50%;-->
        <!--border-radius: 50%;-->
        <!--transform:translate(32%,16%);-->
        <!--border: 2px solid  #e6ecf0;-->
    <!--}-->
    <!--.imgPhoto{-->
        <!--flex:1;-->
    <!--}-->
<!--</style>-->