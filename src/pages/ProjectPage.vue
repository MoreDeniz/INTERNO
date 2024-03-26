<template>
    <div class="home center">
        <ProjectBanner />
        <ProjectContent />
        <FooterComp />
    </div>
</template>

<script>
// import HomeBlog from '@/components/HomeBlog.vue';
import FooterComp from '@/components/FooterComp.vue';
import ProjectBanner from '@/components/ProjectBanner.vue';
import ProjectContent from '@/components/ProjectContent.vue';

export default {
        name: "HomeComp",
        components: {
            ProjectBanner,
            ProjectContent, 
            FooterComp,
        }
    }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home {
    display: flex;
    flex-direction: column;
    gap: 200px;
    align-items: center;
}

</style>
