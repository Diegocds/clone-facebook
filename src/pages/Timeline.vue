<template>
  <div class="container">
    <Header />
    <div class="container__content">
      <div class="container__content__functions">
        <Functions />
      </div>
      <div class="container__content__posts">
        <Posts />
      </div>
      <div class="container__content__pearsons">
        <Pearsons />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Functions from "@/components/Functions";
import Pearsons from "@/components/Pearsons";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Posts,
    Pearsons,
    Functions,
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background: #F0F2F5;
  &__content {
    display: flex;
    justify-content: space-between;
    &__functions{
            width: 302px;

      background: blue;
    }
     &__posts{
      width: 742px;
      max-width: 742px;
      background: rosybrown;
    }
     &__pearsons{
      width: 302px;
      background: red;
    }
  }
}
</style>
