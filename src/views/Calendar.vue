<template>
  <div class="calendar">
    <FullCalendar
      :config="config"
      @day-click="dayClick"
    ></FullCalendar>
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar';
import 'fullcalendar/dist/fullcalendar.css';

import { mapGetters } from 'vuex';

export default {  
  name: 'Calendar',
  components: {
    FullCalendar
  },
  methods: {
    dayClick(date) {
      let url = `/day/${date.format('YYYY-MM-DD')}`
      this.$router.push(url);
    },
    applySettings() {
      this.config['locale'] = this.savedSettings.lang;
    }
  },
  computed: {
    ...mapGetters(['savedSettings'])
  },
  data() {
    return {
      config: {
        defaultView: 'month',
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        height: 500,
        // locale: this.savedSettings.lang // data는 다이나믹할당x
      }
    }
  },
  created() {
    this.applySettings();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
