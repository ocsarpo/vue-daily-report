<template>
  <div class="hello">
    <h1>New component!</h1>
    <h1>{{msg}} from parent.</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
  },
  computed: {
  },
  data() {
    return {
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
