<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <ContactVue msg="Welcome to Your Contact Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-row>
      <b-col><img alt="Vue logo" src="../assets/logo.png" /></b-col>
      <b-col><img alt="Vue logo" src="../assets/logo.png" /></b-col>
      <b-col><img alt="Vue logo" src="../assets/logo.png" /></b-col>
    </b-row>
  </div>
</template>
<script>
// @ is an alias to /src
import ContactVue from "@/components/ContactVue.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ContactView",
  components: {
    ContactVue,
    HelloWorld,
  },
};
</script>
