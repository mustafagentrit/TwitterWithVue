<template>
    <div>
        <div class="nav">
        <div class="navbar">
        <div class="left">
        <ul class="navigation">
        <li class="home">
        <span>
        <i class="fa fa-home" aria-hidden="true"></i>
        </span>
        <span >
        Home
        </span>
        </li>
        <li class="home">
        <span>
        <i class="fa fa-bell" aria-hidden="true"></i>
        </span>
        <span>
        Notifications
        </span>
        </li>
        <li class="home">
        <span>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        </span>
        <span>
        Messages
        </span>
        </li>
        </ul>
        </div>
        <div class="middle-icon">
        <img class="twitterIcon" src="../assets/twitterIcon.png" alt="">
        </div>
        <div class="right">
        <ul >
        <li>
        <div>
        <input class="headInput" placeholder="  Search Twitter" type="text">
        <!--<i class="fa fa-search"></i>-->
        </div>
        </li>
        <li>
        <img class="rightPhoto" src="../assets/Gentrit.jpg" alt="">
        </li>
        <li>
        <button class="btnTweet">Tweet</button>
        </li>
        </ul>
        </div>
        </div>
        </div>
        <div class="main">
        <div class="wrapper">
        <div class="box1">
        <div class="bigPicture">
        <img src="../assets/Background.jpg" alt="">
        </div>
        <div class="UserData">
        <img class="ProfileImg" src="../assets/Gentrit.jpg" alt="">
        <div class="userNameAndLastName">
        <div >
        <span class="UserName">Gentrit Mustafa</span>
        </div>
        <div>
        <span>@GentritMM</span>
        </div>
        </div>
        </div>
        <div class="followData">
        <div class="Tweets">
        <h5>Tweets</h5>
        <h2>1,110</h2>
        </div>
        <div class="Following">
        <h5>Following</h5>
        <h2>68</h2>
        </div>
        <div class="Followers">
        <h5>Followers</h5>
        <h2>80</h2>
        </div>
        </div>
        </div>
        <NewTweet></NewTweet>
        <UserTweets></UserTweets>
        <div class="box5">
        <div style="display: inline-block; padding:1em">
        <span style="font-weight: bold;">Who to follow</span>
        <span style="font-size: 11px">- Refresh</span>
        <span style="font-size: 11px">- See all</span>
        </div>
        <div class="toFollow">
        <img src="../assets/Gentrit.jpg" alt="">
        <div class="toFollowData">
        <span>Gentrit <b>@Gentritmm</b></span>
        <button class="btnToTweet">Follow</button>
        </div>
        </div>
        <div class="toFollow">
        <img src="../assets/Gentrit.jpg" alt="">
        <div class="toFollowData">
        <span>Gentrit <b>@Gentritmm</b></span>
        <button class="btnToTweet" v-on:click="goToLogin()">Follow</button>
        </div>
        </div>

        </div>
        <div class="box3">
        <div class="box3wrapper">
        <ul>
        <li>&copyTwitter 2018</li>
        <li><a href="">Gentrit</a></li>
        <li><a href="">Granit</a></li>
        <li><a href="">Petrit</a></li>
        <li><a href="">Etrit</a></li>
        <li><a href="">Shendrit</a></li>
        <li><a href="">Endrit</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        <li><a href="">Hamdi</a></li>
        </ul>
        </div>
        </div>
        <div class="box4">
        <div class="trends">
        <h3>Trends for you</h3>
        </div>
        <div class="TrendsWrapper">
        <div class="trends1">

            <Stepper></Stepper>
        <h4>#hk-BI</h4>
        <h6>Gentrit and Ardian will work on it</h6>
        </div>
        <div class="trends1">
        <h4>#hk-Admin</h4>
        <h6>Mergim and Blerton</h6>
        </div>
        <div class="trends1">
        <h4>#hk-Reservation</h4>
        <h6>Visar</h6>
        </div>
        <div class="trends1">
        <h4>#hk-Booking and Website</h4>
        <h6>Altin</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>

</template>
<script>
    import NewTweet from './NewTweet'
    import UserTweets from './UserTweets'
    import Stepper from './Stepper'
    export default{
        components:{
            "NewTweet":NewTweet,
            "UserTweets":UserTweets,
            "Stepper":Stepper,
        },
        methods:{
            goToLogin(){
                this.$router.push('/login');
            }
        }
    }
</script>
<style scoped>
    html{
        background-color: #e6ecf0;
    font-family: Arial;
    }
    body{
        margin:0;
    }
    input:focus{
        outline:none;
    }
    button:active{
        outline:none;
    }
    .wrapper{
        display:grid;
        grid-template-columns:1fr 2fr 1fr;
        /*grid-template-rows: 1fr 2fr 1fr;*/
        grid-auto-rows: minmax(50px,auto);
        grid-gap:1em;
        /*background-color:white;*/
        transition: 1s all;
        margin:0 10%;
        background-color: #e6ecf0;
        text-decoration-color: #66757f;
    }
    .wrapper > div{
        background: white;
        /*padding: 1em;*/
    }

    .navbar{
        display: flex;
        /*position:relative;*/
        /*top:-10px;*/
        /*left:10px;*/
        justify-content: space-around;
        height: 46px;
        min-width: 780px;
        background-color:white;
        align-items: center;
        /*margin: 0 10em;*/
        border-bottom: 1px solid #978b8b;
    }
    .headInput{
        /*margin-top:2%;*/
        /*margin-left: 6%;*/
        /*width: 40%;*/
        background: #e6ecf0;
        border:0.5px solid #b9bdca;
        height: 30px;
        border-radius: 20px;
    }
    ul{
        -webkit-padding-start: 0;
        -webkit-margin-after: 0;
        -webkit-margin-before: 0;
    }

    .navigation li {
        display: inline-flex;
        text-decoration: none;
        color:#66757f;
        padding: 0 3%;
    }

    .navigation  li span{
        padding:0 3%;
    }
    .navigation{
        display: flex;
        justify-content: space-around;
        /*margin-left: -7%;*/
    }
    .home{
        /*float:left;*/
        /*padding-right: 10px;*/
        font-size: 100%;
        padding: 0 2%;
    }
    .main{
        margin-top: 10px;
        height: 100vh;
        background-color: #e6ecf0;
    }
    .nav{
        /*margin:0 -18px;*/
    }

    .left{
        /*flex: 1;*/
        /*position: relative;*/
        /*left: 10%;*/
        /*height: 48px;*/
    }
    .middle-icon{
        /*flex:0.5;*/
        /*height:48px;*/
    }
    .right {
        /*position: relative;*/
        /*flex: 1;*/
        display: flex;
        justify-content: space-around;
        /*bottom: 10%;*/
        /*height:48px;*/
    }
    .right ul{
        display: flex;
        justify-content: space-between;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
    }
    .fa.fa-search{
        /*position: relative;*/
        /*top: 6%;*/
        /*right: 15%;*/
    }
    .twitterIcon {
        /*position: relative;*/
        /*top: 24%;*/
        /*left: 47%;*/
    }
    .ProfileImg{
        width: 72px;
        height: 72px;
        position: relative;
        float: left;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        transform:translate(3%,-51%);
        border: 2px solid white;

    }
    /*.buttons{*/
        /*display: flex;*/
        /*justify-content: space-around;*/
        /*margin-top:3%;*/
        /*width: 78%;*/
    /*}*/
    p{
        -webkit-margin-after: 0;
        -webkit-margin-before: 0;
    }
    .comment{
        /*flex:1;*/
    }
    .fa-times{
        /*position: relative;*/
        /*padding-left: 55%;*/
        float: right;
    }
    .fa:hover{
        transform: scale(1.4);
        /*transform-origin: center;*/
        transition: 0.5s all;
        cursor: pointer;
        /*background-color: #e6ecf0;*/
        /*border-radius:50%;*/
        /*border: 0.5px solid white;*/
    }
    /*.UserTweets{*/
        /*display: flex;*/
        /*!*height: 76px;*!*/
        /*padding: 2%;*/
        /*border-bottom: 0.5px solid #e6ecf0;*/
    /*}*/
    /*.UserTweetsData{*/
        /*padding-left: 4%;*/
        /*width: 100%;*/

    /*}*/
    /*.UserTweets img {*/
        /*width: 45px;*/
        /*height: 45px;*/
        /*position: relative;*/
        /*float: left;*/
        /*-webkit-border-radius: 50%;*/
        /*-moz-border-radius: 50%;*/
        /*border-radius: 50%;*/
        /*transform:translate(25%,0);*/
        /*border: 2px solid white;*/
    /*}*/
    .toFollow{
        display: flex;
        height: 64px;
        padding: 5%;
        border-bottom: 0.5px solid #e6ecf0;
    }
    .toFollow.toFollowData{

        /*flex: 4;*/
    }
    .toFollowData{
        padding-left: 10%;
    }

    .btnToTweet{
        position: relative;
        /*right: 71%;*/
        top: 7%;
        width: 52%;
        border-radius: 19px;
        border: 0.5px solid #5d5b5b;
        height: 28px;
        background-color: white;
        color: black;
    }
    .toFollow img{
        /*flex: 1;*/
        width: 45px;
        height: 45px;
        /*position: relative;*/
        /*float: left;*/
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        transform:translate(25%,0);
        border: 2px solid white;

    }
    /*.mainInput {*/
        /*flex: 12;*/
        /*position: relative;*/
        /*width: 35%;*/
        /*left: 0%;*/

    /*}*/
    .trends{
        padding:4% 0 0 4%;
    }
    .trends1{
        padding: 2% 0 2% 4%;
    }
    .btnTweet{
        /*position: relative;*/
        /*left: 5%;*/
        /*width: 14%;*/
        border-radius: 19px;
        border: 0.5px solid #5d5b5b;
        height: 28px;
        background-color: #5d5b5b;
        color: white;
    }
    /*.fa.fa-plus{*/
        /*position: absolute;*/
        /*top: 26%;*/
        /*right: 6%;*/
    /*}*/
    .followData{
        display: flex;
        justify-content: space-around;
    }
    .Tweets{
        /*flex: 1;*/
        /*margin-left: 7%;*/
    }
    .Following{
        /*flex:1;*/
    }
    .Followers{
        /*flex: 1;*/
    }
    h1{
        -webkit-margin-before: 2%;
        -webkit-margin-after: 0;
    }
    h2{
        -webkit-margin-before: 0;
        -webkit-margin-after: 10%;
    }
    h3{
        -webkit-margin-before: 2%;
        padding-left: 1%;
        -webkit-margin-after: 3%;
    }
    h4{
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
    }
    h5{
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
    }
    h6{
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
    }
    .userNameAndLastName{
        padding-left: 91px;
        padding-top: 10px;
        /*background-color: red;*/
    }
    .bigPicture img{
        position: relative;
        max-width: 100%;
        min-width: 100%;
        max-height: 130px;
        min-height: 130px;

    }
    .right img {
        width: 30px;
        height: 30px;
        /*top: 22%;*/
        /*left: 2%;*/
        /*position: relative;*/
        /*float: left;*/
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        /*transform:translate(0,11%);*/
        /*border: 2px solid  #e6ecf0;*/
    }
    .right ul li{
        text-decoration: none;
        display: inline-block;
        padding: 0 2%;
    }

    /*.boxInput img{*/
         /*width: 30px;*/
         /*height: 30px;*/
         /*position: relative;*/
         /*float: left;*/
         /*-webkit-border-radius: 50%;*/
         /*-moz-border-radius: 50%;*/
         /*border-radius: 50%;*/
         /*transform:translate(32%,16%);*/
         /*border: 2px solid  #e6ecf0;*/
     /*}*/
    .bigPicture{
        flex:1;
        max-height: 130px;

    }
    /*.imgPhoto{*/
        /*flex:1;*/
    /*}*/
    .UserData{
        flex:1;
    }
    .box1{
        grid-row:1/5;
        grid-column:1/2;
        display: flex;
        flex-direction: column;
        max-height: 290px;
        min-width: 260px !important;
    }
    /*.input-control{*/
        /*width: 94%;*/
        /*height: 40px;*/
        /*!*transform: translate(10%,20%);*!*/
        /*border:0.5px solid  #b9bdca;*/
        /*!*float: left;*!*/
        /*margin-left: 2%;*/
        /*!*-webkit-border-radius: 5%;*!*/
        /*!*-moz-border-radius: 5%;*!*/
        /*border-radius: 10px;*/
    /*}*/
    .boxInput{
        display: flex;
        grid-column: 2/3;
        grid-row:1/2;
        min-width: 510px;
        /*margin:1% 0 0 2%;*/
        background: transparent !important;
    }
    .tweetsWrapper{
        display: flex;
        flex-direction: column;
    }
    /*.box2{*/
        /*grid-row:2/11;*/
        /*grid-column:2/3;*/
        /*min-width: 510px;*/
        /*overflow-y: scroll;*/
        /*max-height: 700px;*/
        /*!*grid-auto-rows: minmax(auto,auto);*!*/
    /*}*/
    .box3wrapper{
        /*margin: 2% 0;*/
    }
    .box3wrapper ul {
        /*margin-left: -5%;*/
        -webkit-padding-start: 2%;
    }
    .box3wrapper ul li {
        float: left;
        padding-right: 8px;
        font-size: 13px;
        text-decoration: none;
        display: inline;
        color: #657786;
    }
    .box3wrapper ul li a{
        text-decoration: none;
        color: #657786;
    }
    .box3{
        grid-row:1/3;
        grid-column: 3/4;
        max-height: 116px;
    }
    .box4{
        grid-column: 1/2;
        grid-row:5/11;
        min-width: 260px;
        max-height: 400px;
    }
    .box5{
        min-width: 250px !important;
        grid-column: 3/4;
        grid-row:3/6 ;
        max-height: 240px;
        grid-auto-rows: minmax(100px,auto);
    }
    @media (max-width: 1100px)
    {
        .wrapper{
            margin:0;
            transition: 1s all;
        }
        .box3{
            display: none;
        }
        .box5{
            display: none;
        }
        .box1{
            /*-ms-grid-column: 1/2;*/
            grid-column: 1/2;
        }
        .box2{
            grid-column: 2/4;
        }
        .boxInput{
            grid-column: 2/4;
        }
        .box3{
            grid-column: 1/2;
        }
    }
    @media (max-width:900px)
    {
        .navigation li span:nth-child(2){
            display: none;
        }
        .navigation li span:first-child{
            font-size: 20px;
        }
        html{
            overflow-x: scroll;
        }
    }
</style>