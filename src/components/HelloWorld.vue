<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <p>age: {{ age + 10 }}</p>
    <p>{{ article }} 이렇게 쓰면 태그가 다 노출 됨 해결책은 v-html</p>
    <p v-html="article"></p>
    <p>{{seen ? 'yes' : 'no'}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '반갑습니다.',
      author: 'Bob',
      age: 30,
      article: `
      이렇게 쓰는 경우는 <strong>드뭄</strong>
      `,
      seen: false
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
