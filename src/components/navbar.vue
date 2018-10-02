<template>
  <div class="navbar">
    <div class="logo"><router-link to="/"><img :src="logo"></router-link></div>
    <div class="nav_right">
      <ul>
        <li><a href="#">說明</a></li>
        <li><a href="#">會員登入</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      logo:'../static/img/pokemon_store.png'
    }
  }
}
</script>

<style scoped lang="scss">
.navbar{
  padding: 20px 0 15px;
  position: relative;
  height: 50px;
  width: 100%;
}
.logo{
    float: left;
    height: 100%;
    img{
      height: 100%;
    }
  }
.nav_right{
    display: flex;
    align-items: center;
    margin-right:20px; 
    float: right;
    height: 100%;
    ul{
      margin: 0;
      padding: 0;
      display: inline-block;
      list-style: none;
    }
    li{
      margin: 0 10px;
      float: left;
    }
    a{
      color: #473f3f;
      text-decoration: none;
      padding: 3px 5px; 
      display: inline-block;
      height: 100%;
      &:hover{
        border-bottom: #eb2b2b 3px solid;
      }
    }
  }

</style>
