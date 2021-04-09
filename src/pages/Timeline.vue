<template>
  <div>
    <form @submit="post">
      <textarea
        type="text"
        placeholder="No que vc está pensando?"
        v-model="post"
      ></textarea>
      <button>Postar</button>
    </form>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: "",
      posts: [],
    };
  },
  // mounted() {
  //this.post();
  // },
  methods: {
    async post(e) {
      e.preventDefault();
      await axios.post("http://localhost:3000/posts", {
        post: this.post,
        // id: Math.Floor(Math.random() * 100)
      });
      this.post = "";
      //this.post();
    },
  },
};
</script>
