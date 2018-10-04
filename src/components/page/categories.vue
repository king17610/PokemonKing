<template>
  <div id="categories">
    <loading v-if="isLoading" ></loading>
    <navbar></navbar>
    <slide></slide>
    <breadcrumb :categories="categories"></breadcrumb>
    <div class="products_box">
      <div class="categories">
        <div class="items">

          <div class="item" @click="categories='所有商品';getPorducts();">
            <img src="/static/img/Torch.png" alt="">
            <p class="item_name">所有商品</p>
          </div>

          <div class="item" @click="categories='精靈球';">
            <img src="/static/img/Campfire.png" alt="">
            <p class="item_name">精靈球</p>
          </div>

          <div class="item" @click="categories='藥品';">
            <img src="/static/img/Fire_Pit.png" alt="">
            <p class="item_name">藥品</p>
          </div>

          <div class="item" @click="categories='道具';">
            <img src="/static/img/Backpack.png" alt="">
            <p class="item_name">道具</p>
          </div>

          <div class="item" @click="categories='商城';">
            <img src="/static/img/Miner_Hat.png" alt="">
            <p class="item_name">商城</p>
          </div>
        </div>
      </div>
      <div class="products_list">
        <div class="categories_titel">{{categories}}</div>
        <div class="list">
          <div class="item" v-for="item in filterData" :key="item.id">
            <div class="bgimg" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
            <div class="card-body">
              <span class="category">{{item.category}}</span>
              <p class="title">{{item.title}}</p>
              <p class="text">{{item.description|textlength}}</p>
              <div class="origin_price" v-if="item.price==item.origin_price">原價 NT{{ item.origin_price |currency }} 元</div>
              <div class="sale_price" v-if="item.price!==item.origin_price">
                特價 NT{{ item.price|currency }} 元
              </div>
            </div>
            <div class="cardaction">
              <button type="button" v-if="item.is_enabled">
                <router-link :to="`/categories/${item.id}`">查看更多</router-link> 
              </button>
              <button v-if="!item.is_enabled">已售完</button>
              <button v-else type="button" @click="addtoCart(item.id,item.title)">加到購物車</button>
            </div>
          </div>
        </div>
        <!-- <Pagination :pages="pagination" @emitPages="getProducts" v-if="pagination"></Pagination> -->
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import slide from '@/components/slide'
import loading from "@/components/loading"
import breadcrumb from '@/components/breadcrumb'
import bottom from "@/components/bottom"
export default {
  name: 'categories',
  data () {
    return {
      isLoading:false,
      categories:'所有商品',
      filterData:[]
    }
  },
  components:{
    navbar,
    slide,
    loading,
    breadcrumb,
    bottom
  },
  methods:{
    getPorducts(){
      let self = this;
      self.isLoading = true;
      $.get('https://king17610.github.io/DontStraveAPI/products/PrdoctsData_Food.json',function(res){
        console.log(res);
        self.filterData = res.products;
        self.isLoading = false;
      })
    }

  },
  created(){
    const vm = this;
    vm.getPorducts();
  }   
}
</script>

<style scoped lang="scss">
 #categories {
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  background-position: center center;
  background-size: cover;
  background: white;
}
.categories_titel{
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #53acac;
  margin-bottom: 10px;
}

.products_box{
  padding: 0 20px;
  display: flex;
}
.categories{
  flex:1;
  margin-right: 10px;
  .items{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    .item{
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: 180px;
      padding: 5px;
      border-radius: 5px;
      border: 0.5px solid #cccccc;
      margin-bottom:10px;
      transition: .3s all;
      &:hover{
        border: .5px solid rgb(0, 119, 199);
      }
      img{
        max-width: 50px;
        max-height: 50px;
      }
      .item_name{
        color: #333;
        margin-left: 10px;
      }
    }
  }
}
.products_list{
  flex:6;
  padding: 10px;
  border: 1px solid #eee;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.list{
  display: flex;
  flex-wrap: wrap;
}
.item{
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 265px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 8px;
  margin-right: 8px;
  border: 1px solid #eee;
  &:hover{
    .cardaction{
      opacity: 1;
    }
  }
  .bgimg{
    margin: 20px 0;
    box-sizing: border-box;
    width: 100%;
    height: 120px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .category{
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 14px;
    padding: 0 5px;
    background: #68cab3;
  }
  .title{
    font-weight: 400;
    letter-spacing: 3px;
    margin: 5px 0;
    font-size: 18px;
  }
  .text{
    font-size: 14px;
    letter-spacing: 1px;
    color: #666;
  }
  .sale_price{
    font-weight: 600;
    font-size: 16px;
    color: #fb5b5b;
  }
  .origin_price{
    font-size: 14px;
  }
}
.cardaction{
  display: inline-block;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(black,.3);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s;
  a{
    color: #fff;
    transition: all .3s;
    text-decoration: none;
  }
  button{
    cursor: pointer;
    color: #fff;
    border: 1px solid #fff;
    background: none;
    transition: all .3s;
    font-size: 16px;
    outline: none;
    padding: 5px;
    margin: 5px;
    letter-spacing: 2px;
    font-family: Noto Sans TC,sans-serif;
    border-radius: 3px;
    box-sizing: border-box;

    &:hover{
      color:#000;
      background: #fff;
      a{
        color: #333;
      }
    }
  }
}

</style>
