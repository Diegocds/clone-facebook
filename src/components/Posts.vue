<template>
  <div class="container">
    <form @submit.prevent="postagem">
      <textarea
        type="text"
        placeholder="No que vc está pensando?"
        v-model="post"
      ></textarea>
      <button type="submit">Postar</button>
    </form>
    <img src="" alt="">
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
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
  mounted() {
    this.loadPost();
  },
  methods: {
    async postagem(e) {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:3000/posts", {
        post: this.post,
        // id: Math.Floor(Math.random() * 100)
      });
      this.post = "";
      this.loadPost();
    },
    async loadPost() {
      const { data } = await axios.get("http://localhost:3000/posts");
      this.posts = data;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
