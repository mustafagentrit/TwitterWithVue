<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import UserTweets from './components/UserTweets'
import store from './Store/store'

export default {
  name: 'App',
  components: {
    UserTweets,
  },
    store:store
}
</script>

<style scoped>
    #app{
        background-color: #e6ecf0;
    }
    html{
        /*background-color: #e6ecf0;*/
        font-family: Arial;
    }

    body{
        margin:0;
    }
    /*h1{*/
        /*-webkit-margin-before: 2%;*/
        /*-webkit-margin-after: 0;*/
    /*}*/
    /*h2{*/
        /*-webkit-margin-before: 0;*/
        /*-webkit-margin-after: 10%;*/
    /*}*/
    /*h3{*/
        /*-webkit-margin-before: 2%;*/
        /*padding-left: 1%;*/
        /*-webkit-margin-after: 3%;*/
    /*}*/
    /*h4{*/
        /*-webkit-margin-before: 0;*/
        /*-webkit-margin-after: 0;*/
    /*}*/
    /*h5{*/
        /*-webkit-margin-before: 0;*/
        /*-webkit-margin-after: 0;*/
    /*}*/
    /*h6{*/
        /*-webkit-margin-before: 0;*/
        /*-webkit-margin-after: 0;*/
    /*}*/
</style>
