<template>
  <footer>
    <div class="shop">
      <img src="../../static/img/shop.png" alt="">
    </div>
    <div class="container">
      <img src="../../static/img/DontStrave.png" alt="">
      <div class="info">
        <p>實體店面：真新鎮大木路一段16號</p>
        <p>營業時間：00:00-24:00</p>
      </div>
      <div>
        <p>作者：kkk <a href="/">Github</a></p>
        <p>練習作品｜<a href="/">圖片來源：https://www.pokemon.com/us/</a></p> 
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'bottom',
  data () {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .shop{
    img{
      max-width: 800px;
      width: 100%;
    }
  }
  .container{
    display: flex;
    font-size: 14px;
    color: #666;
    align-items: center;
    justify-content: space-between;
    max-width: 1080px;
    width: 100%;
    padding: 20px 0;
    margin: 0 auto;
    border-top: 1px solid #aaa;
    img{
      height: 40px;
    }
    a{
      color: #666;
    }
  }
}

</style>
