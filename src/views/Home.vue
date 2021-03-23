<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  methods: {
    async getzby() {
      const b = await this.$api.userApi.zby();
      console.log(b);
      const a = await this.$api.userApi.demsong();
      console.log(a);
    },
  },
  created() {
    this.getzby();
  },
};
</script>
