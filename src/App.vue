<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

import axios from 'axios';

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Nav
  },
  methods: {
    // 스프레드 문법 // index.js에 정의된 saveSettings 이 컴포넌트에 등록
    ...mapActions(['saveSettings']),
    init() {
      if(typeof this.savedSettings.starttime == 'undefined'){
        this.getSettings();
      }
    },
    getSettings() {
      let url = 
        `https://daily-report-1dbea.firebaseio.com/settings.json`;
      // eslint-disable-next-line
      axios.get(url).then((res) => {
        this.saveSettings(res.data);
      });
    }
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters(['savedSettings']),
  }
  
}
</script>

<style lang="scss" src="./assets/css/style.scss">

</style>
