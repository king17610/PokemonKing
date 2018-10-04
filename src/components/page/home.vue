<template>
  <div id="PokemonKing" class="container">
    <loading v-if="isLoading" ></loading>
    <navbar></navbar>
    <ul id="main_menu">
      <li><router-link to="/categories">角色選擇</router-link></li>
      <li><router-link to="/">生物總覽</router-link></li>
      <li><router-link to="/">道具購買</router-link></li>
      <li><router-link to="/">食物宅配</router-link></li>
      <li><router-link to="/">購物商城</router-link></li>
    </ul>
    <slide></slide>
    <div class="welcome">
      <h1 >{{ msg }}</h1>
    </div>
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
      msg:'"'+'冒險者！歡迎來到 Dont'+"'"+'s Strave 購物中心'+'"',
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
    background: #fbeac8;
    opacity: 0.98;
    h1{
      margin: 0 auto;
      color: #765646d4;
      width: 21em;
      border-right: 0.05em solid;
      overflow: hidden;
      font-weight: 900;
      white-space: nowrap;
      animation: typing 3s steps(29),insert 1s steps(1) infinite;
    }
    .welcome{
      padding: 20px 0;
      background:#fbeac8;
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
    background: white;
    list-style: none;
    padding: 6px 100px;
    margin: 0;
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
    background: white;
    text-align: left;
    letter-spacing: 1px;
    color: #666;
    padding: 10px 20px;
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
