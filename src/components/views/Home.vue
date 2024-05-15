<template>
   <h1>메인 페이지</h1>
  <button type="button" @click="click">클릭</button>
  {{msg}}
  <button type="button" @click="click2">클릭</button>
  {{i}}
</template>

<script>
import axios from "axios";

export default {
  name : 'Home',
  methods: {
    click() {
      axios
          .get(`http://localhost:8080/hello`)
          .then((result) => {
            this.msg = this.msg + result.data.msg
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("finally");
          });
    },
    click2(){
      this.i += 10
    }
  },
  data(){
    return {
      msg : "1234",
      i : 0
    }
  }
}
</script>