<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}}
    </h1>

    <ul class="day-list">
      <li
        v-for="item in items"
        :key="item.id"
        class="day-list-item"
        :class="{'open': item.open}"
      >
        <div class="time">
          <h2>
            {{item.id}}
          </h2>
        </div>

        <div class="action">
          <p
            v-if="!item.open"
            @click="toggleOpen(item)"
          >
            {{item.action}}
            <span v-if="item.action.length === 0">내용을 작성해주세요.</span>
          </p>

          <input v-if="item.open" type="text" v-model="item.action"
          @keyup.enter="updateItem(item)"
          placeholder="한 일을 작성해주세요">
        </div>

        <day-score
          @onUpdateScore="onUpdateScore"
          :item="item"
        >
        </day-score>

        <div class="note" v-if="item.open">
          <textarea v-model="item.note"
          placeholder="노트를 작성해 주세요"></textarea>
        </div>

        <div class="buttons" v-if="item.open">
          <button class="save" @click="updateItem(item)">저장</button>
          <button class="cancel" @click="toggleOpen(item)">취소</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DayScore from '../components/DayScore'
import axios from 'axios'
import moment from 'moment'

import { mapGetters } from 'vuex'

export default {
  name: 'Day',
  methods: {
    onUpdateScore(item, score) {
      item.score = score;
      this.updateItem(item);
    },

    getItems() {
      // ajax를 사용하여 fb DB에서 데이터를 받아옴
      let url = `
        https://daily-report-1dbea.firebaseio.com/items.json?orderBy="$key"
        &startAt="${this.$route.params.date}"
        &endAt="${this.$route.params.date}-22-24"`;
        
      axios.get(url).then((res) => {
        this.items = this.displayItems(res.data);        
      });
    },
    displayItems(data) {
      // 12 개의 빈슬롯을 만들고 그 중 존재하는 데이터만 채워 넣자.
      let items = [];
      let startTime = this.savedSettings.starttime;
      for(let i = 0 ; i < 12; i++) {
        let datetime = moment(this.$route.params.date + ' ' + startTime);
        let itemKey = `${this.$route.params.date}-${datetime.add(i*2, 'hours').format('HH')}-${datetime.add(2, 'hours').format('HH')}`;        

        let item = {
          id: itemKey,
          action: '',
          note: '',
          open: false,
          score: undefined
        }
        Object.keys(data).map((key) => {
          if(key === itemKey) {
            item = data[key]
          }
        });
        items.push(item);
      }
      return items;
    },
    updateItem(item) {
        let url = `https://daily-report-1dbea.firebaseio.com/items/${item.id}.json`;
        // 다음 줄은 eslint적용 x 하는 주석
        // eslint-disable-next-line
        axios.put(url, item).then((res) => {
          // console.log(res);
          this.getItems();
        })
    },
    toggleOpen(item) {
      item.open = !item.open;
    }
  },
  computed: {
    ...mapGetters(['savedSettings']),
  },
  components: {
    DayScore
  },
  data() {
    return {
      items: [
      ]
    }
  },
  props: {
  },
  created() {
    this.getItems();
  },
  watch: {
    // 감시..
    // eslint-disable-next-line
    '$route' (to, from) {
      this.getItems();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
