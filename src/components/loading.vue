<template>
  <div class="loading">
    <img :src="loadingImg" alt="loading">
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      loadingImg:'../static/img/loading.gif'
    }
  },
  components: {
   }
}
</script>

<style scoped lang="scss">

.loading{
  background: rgba(white,.8);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;  
  img{
    width: 120px;
    opacity: .9 ;
  }
}
</style>
