<template>
  <div id="PokemonKing" class="container">
    <loading v-if="isLoading" ></loading>
    <navbar></navbar>
    <ul id="main_menu">
      <li><router-link to="/">最新商品</router-link></li>
      <li><router-link to="/">精靈球</router-link></li>
      <li><router-link to="/">藥品補給</router-link></li>
      <li><router-link to="/">生活道具</router-link></li>
      <li><router-link to="/">購物商城</router-link></li>
    </ul>
    <slide></slide>
    <h1>{{ msg }}</h1>
    <div id="news">
      <div class="news"><p>2018.09.21<span class="news_class emergency">緊急</span>因真新鎮受超夢大軍侵襲，暫時停止營業，不便之處，敬請見諒。</p></div>
      <div class="news"><p>2018.09.21<span class="news_class notice">活動</span>因真新鎮受超夢大軍侵襲，暫時停止營業，不便之處，敬請見諒。</p></div>
    </div>
    <products></products>
    <bottom></bottom>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import slide from '@/components/slide'
import loading from "@/components/loading"
import products from "@/components/products"
import bottom from "@/components/bottom";
export default {
  name: 'Home',
  data () {
    return {
      msg: '"冒險者！歡迎來到神奇寶貝購物中心"',
      isLoading:false
    }
  },
  components:{
    navbar,
    slide,
    loading,
    products,
    bottom
  },
  created(){
    const vm = this;
    // vm.isLoading = true;
    // setTimeout(function(){
    //   vm.isLoading = false;
    // },2000)
  } 
}
</script>

<style scoped lang="scss">
  #PokemonKing{
    margin: 0 auto;
    text-align: center;
    h1{
      color: #2b447d;
      margin: 20px auto;
      width: 18em;
      border-right: 0.05em solid;
      overflow: hidden;
      font-weight: 900;
      white-space: nowrap;
      animation: typing 3s steps(18),insert 1s steps(1) infinite;
    }
  }
   @keyframes typing {
    0% {
        width: 0;
    }
   }
  @keyframes insert {
    50% {
        border-color: transparent;
    }
  }
  #main_menu{
    list-style: none;
    padding: 0;
    margin: 0 0 12px;
    display: flex;
     justify-content:space-between;
    li{
      flex: 0 0 100px;
      float: left;
      padding: 10px 2px;
      &:hover{
        border-bottom:solid 2px red;
      }
    }
    a{
      text-decoration: none;
      display: inline-block;
      color: #2b447d;
    }
    
  }
    
  #news{
    text-align: left;
    letter-spacing: 1px;
    color: #666;
    margin-bottom: 30px;
    padding: 10px;
    box-shadow: 1px 3px 5px #eee;
    .news_class{
      border-radius: 5px;
      padding: 0px 4px;
      font-style: 14px;
      margin: 0px 10px;
      color: #fff;
    }
    .emergency{
      background: red;
    }
    .notice{
      background: blue;
    }
    p{
      margin: 0;
    }
    .news{
      margin: 4px 0;
    }
  }

</style>
