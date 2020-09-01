<template>
  <div class="calendar">
    <FullCalendar
      :config="config"
      @day-click="dayClick"
    ></FullCalendar>
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'

export default {  
  name: 'Calendar',
  components: {
    FullCalendar
  },
  methods: {
    dayClick(date) {
      let url = `/day/${date.format('YYYY-MM-DD')}`
      this.$router.push(url);
    }
  },
  computed: {
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
        height: 500
      }
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
