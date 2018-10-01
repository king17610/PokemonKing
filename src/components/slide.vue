<template>
  <div class="slide">
    <vue-flux
      :options="fluxOptions"
      :images="fluxImages"
      :transitions="fluxTransitions"
      ref="slider">
          <flux-pagination slot="pagination"></flux-pagination>
    </vue-flux>
  </div>
</template>

<script>
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';

export default {
  name: 'slide',
  data () {
    return {
      fluxOptions:{
        width:'300px',
        autoplay:true,
        delay:1000,
      },
      fluxImages:[
        '../static/img/1.jpg',
        '../static/img/2.jpg',
        '../static/img/3.jpg',
        '../static/img/4.jpg'
      ],
      fluxTransitions:{
        transitionBlocks2: Transitions.transitionBlocks2,
        transitionFade: Transitions.transitionFade,
        transitionSwipe: Transitions.transitionSwipe,
        transitionSlide: Transitions.transitionSlide,
        transitionWaterfall: Transitions.transitionWaterfall,
        transitionZip: Transitions.transitionZip,
        transitionBlinds2D: Transitions.transitionBlinds2D,
        transitionBlocks1: Transitions.transitionBlocks1
      }
    }
  },
  components: {
      VueFlux,
      FluxPagination
   },

}
</script>

<style scoped lang="scss">
.slide{
 margin: 0 auto;
}

</style>
