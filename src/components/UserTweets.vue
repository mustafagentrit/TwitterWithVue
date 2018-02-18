<template>
    <div class="box2">
        <div class="tweetsWrapper">
            <div class="UserTweets" v-for="(tweet,index) in get_tweets">
                <img  src="../assets/Gentrit.jpg" alt="">
                <div class="UserTweetsData" >
                    <span>Gentrit <b>@Gentritmm</b></span>
                    <i v-on:click="delete_tweet(index)" class="fa fa-times"></i>
                    <p>{{tweet.text}}</p>
                    <div class="buttons">
                        <div v-on:click="comment(index)" class="comment"><i class="fa fa-comment" aria-hidden="true"></i><span v-if="tweet.comments>0">  {{tweet.comments}}  </span></div>
                        <div v-on:click="retweet(index)" class="comment"><i class="fa fa-retweet" aria-hidden="true"></i><span v-if="tweet.retweets>0">  {{tweet.retweets}}  </span></div>
                        <div v-on:click="like(index)"  class="comment"><i class="fa fa-heart" aria-hidden="true"></i><span v-if="tweet.likes>0">  {{tweet.likes}}</span></div>
                        <div class="comment"><i class="fa fa-bar-chart" aria-hidden="true"></i></div>
                    </div>
                    <!--<button class="btnToTweet"></button>-->
                </div>


            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {mapMutations} from 'vuex'

    export default{

        data(){
            return { }
        },
        // created(){
        //     this.get_tweets;
        // },
        computed:{
        ...mapGetters([
            'get_tweets'
        ])

        },
        methods:{
            ...mapMutations([
                'delete_tweet',
                'like',
                'comment',
                'retweet'
            ]),
            // ...mapActions([
            //     'get_tweets'
            // ])
        }


    }
</script>
<style scoped>
    html{
        background-color: #e6ecf0;
        font-family: Arial;
    }
    p{
        -webkit-margin-after: 0;
        -webkit-margin-before: 0;
    }
    .buttons{
        display: flex;
        justify-content: space-around;
        margin-top:3%;
        width: 78%;
    }
    .fa-times{
        /*position: relative;*/
        /*padding-left: 55%;*/
        float: right;
    }
    .UserTweets{
        display: flex;
        /*height: 76px;*/
        padding: 2%;
        border-bottom: 0.5px solid #e6ecf0;
    }
    .UserTweetsData{
        padding-left: 4%;
        width: 100%;

    }
    .UserTweets img {
        width: 45px;
        height: 45px;
        position: relative;
        float: left;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        transform:translate(25%,0);
        border: 2px solid white;
    }
    .tweetsWrapper{
        display: flex;
        flex-direction: column;
    }
    .box2{
        grid-row:2/11;
        grid-column:2/3;
        min-width: 510px;
        overflow-y: scroll;
        max-height: 700px;
        /*grid-auto-rows: minmax(auto,auto);*/
    }
</style>