<template>
    <div class="stepper">
        <div class="left"><input :value="value" type="number"></div>
        <div class="right">
            <div v-on:click="up" style="text-align:center; background-color:#e6ecf0;"><i class="fa fa-angle-up"></i></div>
            <div v-on:click="down" style="text-align:center; background-color:#e6ecf0;"><i class="fa fa-angle-down"></i></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                value:0
            }
        },
        methods:{
            up(){
                this.value+=1;
            },
            down(){
                if(this.value>0)
                {
                    this.value-=1;
                }
            }
        }
    }
</script>
<style scoped>
    textarea{
        resize:none;
    }
    input  {
        height: 100%;
        width:46%;
        padding:0 0 0 25%;
        border-width: 0;
    }
    p{
        padding-top:13%;
        text-align: center;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
    }
    .stepper{
        border:0.5px solid #e6ecf0;
        display:flex;
        width:150px;
    }
    .left{
        text-align:center;
        width:75px;
        /*border:1px solid black;*/
    }
    .right{
        display:flex;
        width:75px;
        flex-direction:column;
        /*border:1px solid green;*/
    }

</style>