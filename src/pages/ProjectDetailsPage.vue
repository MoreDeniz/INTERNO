<template>
    <div class="container">
        <ProjectDetailsBanner />
        <div class="center">
            <div class="content">
                <h2>{{ getTitle }}</h2>
                <p>{{ getText1 }}</p>
                <p>{{ getText2 }}</p>
            </div>
        </div>
        <FooterComp />
    </div>
  </template>

  <script>
// Подключение геттеров из хранилища
import { mapGetters } from 'vuex';

import ProjectDetailsBanner from '@/components/ProjectDetailsBanner.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: "ProjectDetailsPage",
  components: {
    FooterComp,
    ProjectDetailsBanner,
  },
  computed: {
       // Подключение действия из хранилища 
       ...mapGetters(['getTitle', 'getText1', 'getText2'])
    },

  data() {
    return {
   
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    display: flex;
    justify-content: center;
}
.content {
    width: 658px;
}
.content h2 {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 62.5px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
}
.content p {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
}
a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
}

</style>