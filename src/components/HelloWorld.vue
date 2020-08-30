<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <p>age: {{ age + 10 }}</p>
    <p>{{ article }} 이렇게 쓰면 태그가 다 노출 됨 해결책은 v-html</p>
    <p v-html="article"></p>
    <p>{{seen ? 'yes' : 'no'}}</p>

    <p v-if="seen">보인다</p>
    <p v-else>보이지 않음</p>

    <p v-show="seen">보인다</p>    
    <p v-show="!seen">not show</p>

  <p>
    <a v-bind:href="url">Google</a>
  </p>
  <p>
    <a :href="url">축약형 v-bind Google</a>
  </p>

  <p :class="{active : isActive}">Active</p>
  <p :style="{color: textColor}">스타일 바인드</p>

  <ul>
    <li v-for="item in items" v-bind:key="item.name">
      {{ item.name }} - {{ item.age }}
    </li>
  </ul>
  
  <ul>
    <li v-for="(val, key, index) in person" v-bind:key="index">
      {{index}} - {{ key }} - {{val}}  
    </li>
  </ul>

  <button @click="updateScore(1)">클릭하세요</button>
  <button @click.once="updateScore(1)">한번만 실행가능</button>

  <input type="text" @keyup="keyup">
  <input type="text" @keyup.enter="keyup">

  <h1>score: {{score}}</h1>
  <h2>오늘: {{today}}</h2> -->

  <h1>{{ msg }}</h1>
  <input type="text" placeholder="입력하세요" v-model="msg">
  <input type="checkbox" v-model="seen">보이니?
  <p>{{seen}}</p> 

  <input type="radio" v-model="age" value="30">
  <input type="radio" v-model="age" value="20">
  <input type="radio" v-model="age" value="10">
  <p>{{age}}</p>

  <select v-model="age">
    <option value="30">30</option>
    <option value="20">20</option>
    <option value="10">10</option>
  </select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    updateScore(score) {
      this.score = score;
    },
    keyup() {
      console.log("key~!");
    }
  },
  computed: {
    today() {
      // let date = new Date();      
      // return date.getDate();
      return this.score + 1;
    }
  },
  data() {
    return {
      score: 0,
      msg: '반갑습니다.',
      author: 'Bob',
      age: 30,
      article: `
      이렇게 쓰는 경우는 <strong>드뭄</strong>
      `, 
      seen: false,
      isActive: true,
      url: 'http://google.com',
      textColor: 'green',

      items: [
        {name: 'red', age: 15},
        {name: 'green', age: 25},
        {name: 'blue', age: 35},
        {name: 'yellow', age: 21},
      ],

      person: {
        name: 'bob',
        age: 25,
        location: 'Seoul'
      }
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
