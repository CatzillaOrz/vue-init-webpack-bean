<template>
  <div class="app-channel">

    <el-row type="flex" justify="center">
      <el-col :span="12">
        <div>
          <el-tag v-for="(item, index) in book" :key=index>{{ item }}{{ index }}</el-tag>
        </div>
      </el-col>
      <el-col :span="12">
        <channel-room />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EventBus from '@/api/service/EventBus'
import ChannelRoom from './room/index'
export default {
  name: 'channel',
  components: {
    ChannelRoom
  },
  data() {
    return {
      book: ['HarryPotter1']
    }
  },
  mounted() {
    EventBus.on('book.added', this.addBook);
  },
  computed: {
    bookShell() {
      return this.book
    }
  },
  methods: {
    addBook(book) {
      this.book.push(book);
    }
  },
  beforeDestroy() {
    console.log('destroyed book')
    EventBus.off('book.added', this.addBook);

  },

}


</script>
