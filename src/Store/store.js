import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tweets: []
    },
    getters: {
        get_tweets:(state)=>{
            return state.tweets;
        }
    },
    mutations: {
        delete_tweet(state,id){
            state.tweets.forEach(function(value,index){
                if(index===id){
                    state.tweets.splice(id,1);
                }
            })
        },
        addTweet(state,tweet){
          let tweeta={
              text:'',
              likes:0,
              comments:0,
              retweets:0,
          };
          tweeta.text=tweet;
          state.tweets.push(tweeta);
        },
        like(state,id){
            state.tweets.forEach(function(value,index){
                if(id===index){
                    value.likes+=1;
                }
            })
        },
        comment(state,id){
            state.tweets.forEach(function(value,index){
                if(id===index){
                    value.comments+=1;
                }
            })
        },
        retweet(state,id){
            state.tweets.forEach(function(value,index){
                if(id===index){
                    value.retweets+=1;
                }
            })
        }
    }
});