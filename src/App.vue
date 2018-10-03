<template>
  <div id="app" style="background-image:url('../static/img/background.png')">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
body{
  margin: 0;
}
#app {
  font-family: 'moon','Noto Sans TC', sans-serif;
  color: #2c3e50;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.container{
  width: 1280px;
}
@font-face {
    font-family: 'moon'; /*a name to be used later*/
    src: url('../static/font/Moon2.0-Regular.otf'); /*URL to font*/
}
</style>
