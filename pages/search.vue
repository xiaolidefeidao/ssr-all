<template>
  <div class="'page">
    Page is Search
    <ul>
      <li v-for="(item,idx) in $store.state.modules.city.list" :key="idx">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'search',
    data() {
      return {
        list: []
      }
    },
    mounted() {

    },
//    async mounted() {
//      let {status, data: {list}} = await axios.get('/city/list')
//      if (status === 200) {
//        this.list = list
//      }
//    }
    // 服务器端下发编译好的内容；同时把数据下发给浏览器。fetch用于处理vuex相关的数据
    async asyncData() {
      let {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
      if (status === 200) {
        return {
          list
        }
      }
    }
  }
</script>

<style lang='css'>
</style>
