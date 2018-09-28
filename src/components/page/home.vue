<template>
  <div id="PokemonKing" class="container">
    <navbar></navbar>
    <h1>{{ msg }}</h1>
    <slide></slide>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import slide from '@/components/slide'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    navbar,
    slide
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #PokemonKing{
    margin: 0 auto;
  }
</style>
