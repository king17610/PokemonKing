<template>
  <ul>
    <li><router-link to="/">首頁　/　</router-link></li>
    <li v-if="categories">{{categories}}　/　</li>
  </ul>
</template>

<script>
export default {
  props:['categories'],
  name: 'breadcrumb',
  data () {
    return {
      
    }
  },
}
</script>

<style scoped lang="scss">
ul{
  list-style: none;
  display: flex;
  margin: 8px 0;
  padding: 5px 20px;
  color: #999;
  li{
    font-size: 14px;
    letter-spacing: 2px;
    color: #4287d7;
  }
  a{
    text-decoration: none;
    color: #333;
  }
}
</style>
