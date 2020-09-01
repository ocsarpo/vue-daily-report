<template>
  <div class="default">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {
  },
  methods: {
  },
  computed: {
  },
  data() {
    return {
      msg: '반갑습니다.',
    }
  },
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
