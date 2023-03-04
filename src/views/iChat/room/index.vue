<template>
  <div class="channel-room">
    <el-button @click="addBook">Plus+</el-button>
  </div>
</template>

<script>
import EventBus from '@/api/service/EventBus'
export default {
  name: 'channelRoom',
  data() {
    return {
      books: ['harry', 'potter', 'math', 'typescript', 'lua', 'rust', 'cs']
    }
  },
  methods: {
    addBook() {
      EventBus.emit('book.added', this.books[this.getRandomIntInclusive(0, 6)]);
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
    }
  },
}
</script>

<style lang="scss"></style>

